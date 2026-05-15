# 오픈 전 검수 체크리스트 (QA)

배포 직전에 아래를 순서대로 확인하세요. 체크한 항목은 `[x]`로 바꿔도 됩니다.

## 기능

- [ ] 상단 메뉴: 모든 드롭다운 링크가 열림 (PC·모바일)
- [ ] 모바일 햄버거 메뉴: 열기/닫기, 하위 링크 터치 후 닫힘
- [ ] `index.html` 앵커 링크(`#about`, `#portfolio` 등) 스크롤 이동
- [ ] `pages/community-inquiry.html` 제출 시 메일 앱이 열리고 제목·본문에 입력값이 반영되는지
- [ ] `pages/careers-inquiry.html`, `careers-apply.html` 동일 확인
- [ ] 갤러리 페이지: 이미지 확대(GLightbox) 동작
- [ ] 메인 공사실적 필터(전체/공장/빌딩/공공) 클릭 시 레이아웃 유지

## 콘텐츠·법무

- [ ] 회사명·대표자·사업자번호·주소·전화·이메일 최신 여부
- [ ] `pages/privacy.html` 법무 검토 반영 및 시행일
- [ ] 문의/채용 폼 동의 문구가 개인정보처리방침과 일치하는지

## 반응형·브라우저

- [ ] iPhone/Android 세로 화면에서 본문·메뉴 깨짐 없음
- [ ] Chrome, Safari(또는 Edge)에서 동일 동작

## 성능·이미지

- [ ] `assets/img` 대용량 원본은 WebP 변환 또는 압축
- [ ] 갤러리·메인 히어로 배경(있다면) 로딩 지연 없는지

## SEO·분석

- [ ] `sitemap.xml`, `robots.txt`의 `YOUR-DOMAIN.example` 을 실제 도메인으로 교체
- [ ] 각 페이지 `<title>`, `meta description` 회사에 맞게 수정
- [ ] (선택) Google Analytics / Naver 애널리틱스 스크립트 삽입 위치 결정

## 보안·운영

- [ ] GitHub 등 공개 저장소에 **개인 연락처·계정 비밀번호**가 올라가지 않았는지
- [ ] PHP 메일 폼 사용 시: `forms/contact.php` 수신 주소·SMTP 설정·`php-email-form` 라이브러리 파일 존재 여부

## 배포 후 스모크 테스트

- [ ] 실제 URL로 첫 화면 로드
- [ ] `favicon.png` 표시
- [ ] HTTPS 인증서(호스팅사 제공) 적용 여부
