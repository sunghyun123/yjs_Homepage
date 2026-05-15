/**
 * 서버 없이 문의 폼을 기본 메일 클라이언트로 전달합니다.
 * id="mailto-inquiry-form" 인 폼에 연결하세요.
 */
(function () {
  "use strict";

  function wire(formId, toEmail) {
    var form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var subject = (fd.get("subject") || "홈페이지 문의").toString().trim();
      var lines = [];
      fd.forEach(function (val, key) {
        if (key === "agree") return;
        lines.push(key + ": " + val);
      });
      var body = lines.join("\n");
      var href =
        "mailto:" +
        toEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }

  wire("mailto-inquiry-form", "admin@yjselect.com");
  wire("mailto-careers-form", "admin@yjselect.com");
})();
