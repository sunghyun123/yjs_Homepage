# 사이트 정보 구조(IA) — 확정본

기존 [영전사 홈페이지](http://www.yjselect.com/) 메뉴를 기준으로, 방문자 혼선을 줄이면서 운영하기 쉬운 구조로 정리했습니다.

## 최상위 메뉴

| 메뉴 | 설명 | 구현 경로 |
|------|------|-----------|
| Home | 메인 홈, 핵심 CTA·실적 요약 | `/index.html` |
| 기업소개 | 정적 콘텐츠(자주 바뀌지 않음) | `/pages/about-*.html` |
| 공사실적 | 분야별 실적 소개 | `/pages/works-*.html` |
| 커뮤니티 | 소식·자료·문의 | `/pages/community-*.html` |
| 갤러리 | 현장/완공 사진 | `/pages/gallery-*.html` |
| 인재채용 | 공고·문의·지원 | `/pages/careers-*.html` |
| 개인정보처리방침 | 법적 고지 | `/pages/privacy.html` |

## 기업소개 하위

| 하위 메뉴 | 파일 | 담당/갱신 주기(권장) |
|-----------|------|----------------------|
| 경영이념 및 목표 | `pages/about-philosophy.html` | 대표/경영, 연 1회 |
| 비전 | `pages/about-vision.html` | 경영, 연 1회 |
| 연혁 | `pages/about-history.html` | 총무/대외, 분기 |
| 조직도 | `pages/about-org.html` | 인사, 연 1회 또는 조직 개편 시 |
| 자격 및 인증 | `pages/about-certifications.html` | 품질/안전, 인증 갱신 시 |
| 오시는 길 | `pages/about-location.html` | 총무, 주소 변경 시 |

## 공사실적 하위

| 하위 메뉴 | 파일 |
|-----------|------|
| 전기공사 | `pages/works-electric.html` |
| 소방설비공사 | `pages/works-fire.html` |
| 정보통신공사 | `pages/works-ict.html` |

## 커뮤니티 하위

| 하위 메뉴 | 파일 | 비고 |
|-----------|------|------|
| 영전사 소식 | `pages/community-notice.html` | 현재는 정적 목록. 운영 시 CMS/빌더 게시판으로 교체 권장 |
| 자료실 | `pages/community-library.html` | 브로셔·인증서 PDF 등 |
| 온라인 문의 | `pages/community-inquiry.html` | 폼(메일 클라이언트 연동 또는 서버 연동) |

## 갤러리 하위

| 하위 메뉴 | 파일 |
|-----------|------|
| 전기공사 | `pages/gallery-electric.html` |
| 소방설비공사 | `pages/gallery-fire.html` |
| 정보통신공사 | `pages/gallery-ict.html` |

## 인재채용 하위

| 하위 메뉴 | 파일 |
|-----------|------|
| 채용공고 | `pages/careers-announce.html` |
| 채용문의 | `pages/careers-inquiry.html` |
| 입사지원 | `pages/careers-apply.html` |

## 푸터 고정 링크

- `pages/privacy.html` — 개인정보처리방침

## 향후 확장(선택)

- 실적/갤러리를 **데이터 파일(JSON)** 또는 **외부 CMS**로 분리하면 비개발자 수정이 더 쉬워집니다.
- 문의 폼은 PHP 호스팅 시 `forms/contact.php` 또는 Formspree 등 외부 폼 서비스 연동을 검토하세요.
