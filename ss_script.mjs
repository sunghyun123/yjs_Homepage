import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

const pages = [
  ['http://localhost:8743/', 'ss_index.png'],
  ['http://localhost:8743/pages/works-electric.html', 'ss_works.png'],
  ['http://localhost:8743/pages/about-location.html', 'ss_location.png'],
  ['http://localhost:8743/pages/community-inquiry.html', 'ss_inquiry.png'],
];

for (const [url, file] of pages) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: file, fullPage: true });
  console.log('done:', file);
}
await browser.close();
