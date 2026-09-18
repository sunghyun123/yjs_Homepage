/**
 * 홈페이지 성능 베이스라인 측정 — 라이브 사이트를 그대로 잰다.
 *
 *   node tools/perf-baseline.mjs tools/perf-baseline.json
 *
 * 로컬(file:// 나 localhost)이 아니라 배포본을 재는 이유: Netlify 의 압축·CDN 이
 * 빠지면 실제 사용자가 받는 것과 달라진다.
 *
 * 비교에 쓸 숫자는 mobile 쪽만 쓴다. mobile 은 Lighthouse 표준 프리셋으로
 * 회선과 CPU 를 고정해서 언제 재도 같은 조건이지만, desktop 은 측정하는 PC 의
 * 회선에 따라 흔들려서 전후 비교의 기준이 될 수 없다.
 */
import fs from 'fs';
import { chromium, devices } from 'playwright';

const BASE = 'https://yjselect.com';
const PAGES = [
  ['/', 'index'],
  ['/pages/works-electric.html', 'works-electric'],
  ['/pages/about-certifications.html', 'about-certifications'],
  ['/pages/community-library.html', 'community-library'],
];

// Lighthouse mobile preset: 1.6Mbps down, 750kbps up, 150ms RTT, CPU 4x slowdown
const NET = {
  offline: false,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
  latency: 150,
};

const OBSERVER = `
  window.__lcp = 0; window.__lcpUrl = '';
  new PerformanceObserver((list) => {
    for (const e of list.getEntries()) { window.__lcp = e.startTime; window.__lcpUrl = e.url || '(text)'; }
  }).observe({ type: 'largest-contentful-paint', buffered: true });
`;

async function measure(browser, path, profile) {
  const ctx = await browser.newContext(
    profile === 'mobile'
      ? { ...devices['Pixel 5'] }
      : { viewport: { width: 1400, height: 900 } }
  );
  const page = await ctx.newPage();
  await page.addInitScript(OBSERVER);

  if (profile === 'mobile') {
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Network.enable');
    await cdp.send('Network.emulateNetworkConditions', NET);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }

  const t0 = Date.now();
  await page.goto(BASE + path, { waitUntil: 'load', timeout: 120000 });
  try { await page.waitForLoadState('networkidle', { timeout: 30000 }); } catch {}
  const wall = Date.now() - t0;

  const data = await page.evaluate(() => {
    const res = performance.getEntriesByType('resource');
    const nav = performance.getEntriesByType('navigation')[0] || {};
    const byType = {};
    let enc = 0, dec = 0;
    const list = [];
    for (const r of res) {
      const t = r.initiatorType === 'img' ? 'image' : r.initiatorType;
      byType[t] = byType[t] || { n: 0, enc: 0 };
      byType[t].n++; byType[t].enc += r.encodedBodySize;
      enc += r.encodedBodySize; dec += r.decodedBodySize;
      list.push({ url: r.name, enc: r.encodedBodySize });
    }
    enc += nav.encodedBodySize || 0; dec += nav.decodedBodySize || 0;
    return {
      requests: res.length + 1,
      transferredKB: +(enc / 1024).toFixed(1),
      decodedKB: +(dec / 1024).toFixed(1),
      fcp: +(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0).toFixed(0),
      lcp: +(window.__lcp || 0).toFixed(0),
      lcpUrl: window.__lcpUrl,
      domContentLoaded: +(nav.domContentLoadedEventEnd || 0).toFixed(0),
      loadEvent: +(nav.loadEventEnd || 0).toFixed(0),
      byType,
      list,
    };
  });

  await ctx.close();
  return { ...data, wallMs: wall };
}

const browser = await chromium.launch();
const out = { measuredAt: new Date().toISOString(), base: BASE, results: {} };
const allRes = [];

for (const [path, name] of PAGES) {
  out.results[name] = {};
  for (const profile of ['desktop', 'mobile']) {
    process.stdout.write(`measuring ${name} [${profile}] ... `);
    try {
      const r = await measure(browser, path, profile);
      const { list, ...rest } = r;
      out.results[name][profile] = rest;
      if (profile === 'desktop') list.forEach((x) => allRes.push(x));
      console.log(`OK  ${rest.transferredKB}KB / LCP ${rest.lcp}ms / ${rest.requests} req`);
    } catch (e) {
      out.results[name][profile] = { error: String(e).slice(0, 200) };
      console.log('FAIL', String(e).slice(0, 120));
    }
  }
}

const seen = new Map();
for (const r of allRes) if (!seen.has(r.url) || seen.get(r.url) < r.enc) seen.set(r.url, r.enc);
out.heaviest = [...seen.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .map(([url, enc]) => ({ kb: +(enc / 1024).toFixed(1), url: url.replace(BASE, '') }));

await browser.close();
fs.writeFileSync(process.argv[2] || 'perf-baseline.json', JSON.stringify(out, null, 2));
console.log('\nwritten:', process.argv[2]);
