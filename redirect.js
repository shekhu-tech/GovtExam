(function () {
  try {
    const params = new URLSearchParams(window.location.search);
    const allow = params.get("allow");

    // App / PWA allow
    if (allow === "stiskilli") {
      return;
    }

    // SEO bots allow
    const ua = navigator.userAgent.toLowerCase();
    if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
      return;
    }

    // Redirect baaki sab
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.ai.skillaura"
    );
  } catch (e) {
    console.log("redirect error", e);
  }
})();
