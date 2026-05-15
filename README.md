# 영전사 홈페이지 (yjs_Homepage)

전기·소방·정보통신 공사 홍보용 정적 웹사이트입니다. 기존 사이트 구조를 반영해 `pages/` 아래에 메뉴별 HTML을 두었습니다.

## 바로 보기

- 메인: [index.html](index.html) 을 브라우저로 엽니다.
- 로컬에서 `file://` 로 열어도 동작합니다. (일부 브라우저에서 폰트만 CDN 의존)

## 폴더 안내

| 경로 | 설명 |
|------|------|
| [pages/](pages/) | 기업소개·실적·커뮤니티·갤러리·채용·개인정보처리방침 |
| [assets/js/site-shell.js](assets/js/site-shell.js) | 하위 페이지 공통 헤더/푸터 |
| [assets/js/inquiry-mailto.js](assets/js/inquiry-mailto.js) | 문의·채용 폼 → 메일 클라이언트 연동 |
| [docs/SITE-STRUCTURE.md](docs/SITE-STRUCTURE.md) | 사이트맵(IA) 확정본 |
| [docs/CONTENT-ASSETS.md](docs/CONTENT-ASSETS.md) | 콘텐츠 수집 체크리스트 |
| [docs/PRELAUNCH-QA.md](docs/PRELAUNCH-QA.md) | 오픈 전 검수 |
| [docs/OPERATIONS-HANDOVER.md](docs/OPERATIONS-HANDOVER.md) | 운영·인수인계 |

## 배포 전에 할 일

1. [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) 안의 `YOUR-DOMAIN.example` 을 실제 도메인으로 변경
2. [forms/contact.php](forms/contact.php) — PHP 메일 사용 시 수신 주소·라이브러리 경로 확인
3. 예시 문구·연혁·개인정보처리방침을 실제 내용으로 교체

## 템플릿 라이선스

BizLand 템플릿 출처: [BootstrapMade](https://bootstrapmade.com/bizland-bootstrap-business-template/)
