# 운영·인수인계 1장 매뉴얼 (영전사 홈페이지)

## 이 사이트가 어떻게 만들어졌나요?

- **정적 HTML** + Bootstrap 템플릿(BizLand) 기반입니다.
- 하위 페이지는 `assets/js/site-shell.js`가 **헤더·푸터를 자동으로 붙입니다.** 메뉴를 바꿀 때는 `site-shell.js`와 `index.html` **둘 다** 수정해야 합니다.

## 자주 하는 작업

| 하고 싶은 일 | 어디를 고치나요 |
|--------------|------------------|
| 공지 한 줄 추가 | `pages/community-notice.html` 표(`tbody` 안에 `<tr>` 추가) |
| 자료실 PDF 올리기 | `assets/files/`에 파일 저장 → `pages/community-library.html`에서 링크 연결 |
| 연락처·주소 변경 | `index.html` 상단바·연락처 섹션·푸터, `assets/js/site-shell.js` 안 이메일/전화 문자열, `pages/about-location.html` |
| 시공실적 사진 추가 | `pages/works-*.html` 하단 갤러리 섹션의 `portfolio-item` 블록 복사 후 이미지 경로·캡션 수정 |
| 개인정보처리방침 개정 | `pages/privacy.html` |

## 문의 폼은 어떻게 동작하나요?

- 지금은 **mailto 방식**(`assets/js/inquiry-mailto.js`): 제출 시 사용자 PC의 메일 프로그램이 열립니다.
- **서버에서 바로 접수**하려면: PHP 호스팅 + `forms/contact.php` + BootstrapMade의 PHP Email Form 라이브러리(또는 Formspree 등 외부 서비스)로 교체하세요.

## 계정·인수인계 규칙 (권장)

1. **도메인·호스팅·GitHub(있다면)** 관리 권한은 회사 공용 계정(법인 메일)으로 통일합니다.
2. 담당자 개인 계정만 쓰지 않습니다. (퇴사 시 접근 불가 방지)
3. 비밀번호는 **1Password 등 비밀번호 관리자**에만 보관하고, 퇴사/이동 시 권한만 회수합니다.
4. 월 1회: 공지·실적·갤러리 백업(HTML 파일 또는 PDF 스냅샷).

## 비개발자에게 넘길 때 최소 설명

- “페이지 내용은 **HTML 파일을 메모장이 아닌 VS Code·Cursor**로 열어 `<p>` 안 글만 수정하면 됩니다.”
- “메뉴 이름을 바꾸면 **반드시 `site-shell.js`와 `index.html`을 같이** 고칩니다.”

## 나중에 웹빌더로 옮길 때

- 이 저장소는 **구조·문구 초안**으로 쓰고, 최종 운영은 아임웹/워드프레스 등에서 게시판·폼을 쓰는 편이 비개발자에게 유리합니다.
