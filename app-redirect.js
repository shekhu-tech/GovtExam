(function () {
    var ua = navigator.userAgent || "";

    // ❌ Agar Android App (WebView) hai → redirect nahi
    if (ua.indexOf("STISKILLI_APP") !== -1) {
        return;
    }

    // ❌ Google bot ko skip
    if (ua.indexOf("Googlebot") !== -1) {
        return;
    }

    // ✅ Baaki sab (browser, desktop, GitHub Pages)
    setTimeout(function () {
        window.location.href =
            "https://play.google.com/store/apps/details?id=com.ai.skillaura";
    }, 300);
})();
