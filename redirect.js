(function () {
  try {
    const params = new URLSearchParams(window.location.search);
    const allow = params.get("allow");

    // allow only app / pwa
    if (allow === "stiskilli") {
      return;
    }

    // seo bots allow
    const ua = navigator.userAgent.toLowerCase();
    if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
      return;
    }

    // baaki sab redirect
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.ai.skillaura"
    );
  } catch (e) {
    console.log("redirect handled");
  }
})();
