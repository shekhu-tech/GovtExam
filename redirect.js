(function () {
  try {
    var ua = navigator.userAgent.toLowerCase();

    // 1. Android App allow
    if (ua.indexOf("stiskilli_app") > -1) {
      return;
    }

    // 2. Google / SEO bots allow
    if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
      return;
    }

    // 3. Microsoft / Windows / PWA allow
    if (
      ua.indexOf("windows") > -1 ||
      ua.indexOf("edg") > -1 ||      // Microsoft Edge
      ua.indexOf("chrome") > -1 ||   // Browser testing
      ua.indexOf("pwa") > -1
    ) {
      return;
    }

    // 4. Baaki sab ko Play Store bhejo
    window.location.replace(
      "https://play.google.com/store/apps/details?id=com.ai.skillaura"
    );

  } catch (e) {
    console.log("Redirect safely handled");
  }
})();
