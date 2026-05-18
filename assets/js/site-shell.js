/**
 * 영전사 홈페이지 — pages/ 이하 HTML에 공통 헤더·푸터 삽입
 * 사용법: <div id="site-header"></div> ... <div id="site-footer"></div>
 *         <script src="../assets/js/site-shell.js" data-active="키"></script>
 * data-active: 하위 메뉴 a[data-shell-active] 값과 일치 시 .active 부여
 */
(function () {
  "use strict";

  var script = document.currentScript;
  if (!script) return;

  var activeKey = script.getAttribute("data-active") || "";
  var headerEl = document.getElementById("site-header");
  var footerEl = document.getElementById("site-footer");
  if (!headerEl || !footerEl) return;

  var headerHtml =
    '<header id="header" class="header sticky-top">' +
    '<div class="topbar d-flex align-items-center">' +
    '<div class="container d-flex justify-content-center justify-content-md-between">' +
    '<div class="contact-info d-flex align-items-center">' +
    '<i class="bi bi-envelope d-flex align-items-center"><a href="mailto:marin5641@yjselect.com">marin5641@yjselect.com</a></i>' +
    '<i class="bi bi-phone d-flex align-items-center ms-4"><span>대표전화: 031-457-9286</span></i>' +
    "</div></div></div>" +
    '<div class="branding d-flex align-items-center">' +
    '<div class="container position-relative d-flex align-items-center justify-content-between">' +
    '<a href="../index.html" class="logo d-flex align-items-center">' +
    '<img src="../영전사_로고-removebg-preview.png" alt="영전사 로고" class="company-logo" style="height:116px;width:auto;">' +
    "</a>" +
    '<nav id="navmenu" class="navmenu">' +
    "<ul>" +
    '<li><a href="../index.html">Home</a></li>' +
    '<li class="dropdown"><a href="#"><span>기업소개</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>' +
    "<ul>" +
    '<li><a href="../index.html#about">회사소개</a></li>' +
    '<li><a href="about-philosophy.html" data-shell-active="about-philosophy">경영이념 및 목표</a></li>' +
    '<li><a href="about-vision.html" data-shell-active="about-vision">비전</a></li>' +
    '<li><a href="about-history.html" data-shell-active="about-history">연혁</a></li>' +
    '<li><a href="about-org.html" data-shell-active="about-org">조직도</a></li>' +
    '<li><a href="about-certifications.html" data-shell-active="about-certifications">자격 및 인증</a></li>' +
    '<li><a href="about-location.html" data-shell-active="about-location">오시는 길</a></li>' +
    "</ul></li>" +
    '<li><a href="works-electric.html" data-shell-active="works-electric">시공실적</a></li>' +
    '<li class="dropdown"><a href="#"><span>커뮤니티</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>' +
    "<ul>" +
    '<li><a href="community-notice.html" data-shell-active="community-notice">영전사 소식</a></li>' +
    '<li><a href="community-library.html" data-shell-active="community-library">자료실</a></li>' +
    '<li><a href="community-inquiry.html" data-shell-active="community-inquiry">온라인 문의</a></li>' +
    "</ul></li>" +
    '<li class="dropdown"><a href="#"><span>인재채용</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>' +
    "<ul>" +
    '<li><a href="careers-announce.html" data-shell-active="careers-announce">채용공고</a></li>' +
    '<li><a href="careers-inquiry.html" data-shell-active="careers-inquiry">채용문의</a></li>' +
    "</ul></li>" +
    '<li><a href="privacy.html" data-shell-active="privacy">개인정보처리방침</a></li>' +
    "</ul>" +
    '<i class="mobile-nav-toggle d-xl-none bi bi-list"></i>' +
    "</nav></div></div></header>";

  var footerHtml =
    '<footer id="footer" class="footer">' +
    '<div class="container footer-top">' +
    '<div class="row gy-4 text-center text-md-start">' +
    '<div class="col-lg-12 footer-about">' +
    '<a href="../index.html" class="d-flex align-items-center justify-content-center justify-content-md-start mb-3">' +
    '<span class="sitename">영전사</span></a>' +
    '<div class="footer-contact pt-1">' +
    "<p>상호명 : (주)영전사 | 대표자 : 김명호 | 사업자등록번호 : 123-86-17491</p>" +
    "<p>주소 : 경기도 군포시 건건로 243-2</p>" +
    "<p><strong>대표번호 :</strong> 031-457-9286 &nbsp;|&nbsp; <strong>Email :</strong> marin5641@yjselect.com</p>" +
    '<p class="small mb-0"><a href="privacy.html">개인정보처리방침</a></p>' +
    "</div></div></div></div>" +
    '<div class="container copyright text-center mt-4">' +
    "<p>© <span>Copyright</span> <strong class=\"px-1 sitename\">Youngjeonsa</strong> <span>All Rights Reserved</span></p>" +
    '<div class="credits">Template: BootstrapMade BizLand</div></div></footer>' +
    '<a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>' +
    '<div id="preloader"><div></div><div></div><div></div><div></div></div>';

  headerEl.innerHTML = headerHtml;
  footerEl.innerHTML = footerHtml;

  if (activeKey) {
    var mark = document.querySelector('a[data-shell-active="' + activeKey + '"]');
    if (mark) mark.classList.add("active");
  }

  /* 로고 높이 — index.html 인라인 스타일과 동일 계열 */
  var style = document.createElement("style");
  style.textContent =
    ".company-logo{height:116px;width:auto;display:block;}@media(max-width:768px){.company-logo{height:88px;}}";
  document.head.appendChild(style);
})();
