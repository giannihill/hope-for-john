/* Hope for John — small interactions: copy buttons, share links, toast. */
(function () {
  "use strict";

  var url = location.origin + location.pathname.replace(/index\.html$/, "");

  // Point every [data-site-url] element at the live URL (static fallback stays for no-JS).
  document.querySelectorAll("[data-site-url]").forEach(function (el) {
    el.textContent = url;
  });

  // Keep share links correct if the site moves to another domain later.
  function enc(s) { return encodeURIComponent(s); }
  var msg = "Help John find a kidney. One living donor can change his life — and you don't have to be a match.";
  var shareText = "I'm helping spread the word for John, who needs a living kidney donor. John lives in Erie and is on dialysis three times a week while he waits. You don't have to be a match to help — the first step is just a confidential screening. Learn more: " + url;

  var set = function (id, href) { var el = document.getElementById(id); if (el) el.setAttribute("href", href); };
  set("share-fb", "https://www.facebook.com/sharer/sharer.php?u=" + enc(url));
  set("share-x", "https://twitter.com/intent/tweet?url=" + enc(url) + "&text=" + enc(msg));
  set("share-email", "mailto:?subject=" + enc("Help John find a living kidney donor") + "&body=" + enc(shareText));
  set("share-sms", "sms:?&body=" + enc(shareText));

  // Toast
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1800);
  }

  function copy(text, okText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(okText); }, function () { legacyCopy(text, okText); });
    } else {
      legacyCopy(text, okText);
    }
  }
  function legacyCopy(text, okText) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); showToast(okText); } catch (e) { showToast("Couldn't copy — please select the text manually."); }
    document.body.removeChild(ta);
  }

  document.querySelectorAll("[data-copy-link]").forEach(function (btn) {
    btn.addEventListener("click", function () { copy(url, "Link copied!"); });
  });
  document.querySelectorAll("[data-copy-msg]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById("sample-message");
      copy(el ? el.textContent.trim() : shareText, "Message copied!");
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
