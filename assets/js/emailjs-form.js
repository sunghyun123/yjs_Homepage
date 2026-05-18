/**
 * 영전사 홈페이지 — EmailJS 문의 폼 공통 처리
 * 아래 세 값을 emailjs.com 대시보드에서 복사해 입력하세요.
 */
(function () {
  "use strict";

  // ── EmailJS 설정값 ───────────────────────────────────────────
  var PUBLIC_KEY  = "ySoFqq9LQz6mvN22M";   // Account → API Keys
  var SERVICE_ID  = "service_u2pzuqk";   // Email Services 탭
  var TEMPLATE_ID = "template_a2hkyhj";  // Email Templates 탭
  // ────────────────────────────────────────────────────────────

  emailjs.init({ publicKey: PUBLIC_KEY });

  function wireForm(formId) {
    var form = document.getElementById(formId);
    if (!form) return;

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn ? btn.textContent : "";

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (btn) {
        btn.disabled = true;
        btn.textContent = "전송 중...";
      }

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form)
        .then(function () {
          alert(
            "문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다."
          );
          form.reset();
        })
        .catch(function (err) {
          console.error("EmailJS error:", err);
          alert(
            "전송에 실패했습니다. 잠시 후 다시 시도하시거나\nmarin5641@yjselect.com으로 직접 연락해 주세요."
          );
        })
        .finally(function () {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        });
    });
  }

  wireForm("emailjs-inquiry-form");
  wireForm("emailjs-careers-form");
})();
