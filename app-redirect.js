(function () {
    var ua = navigator.userAgent || "";

    // ✅ Allow Android WebView (wv)
    if (ua.indexOf("wv") !== -1) return;

    // ✅ Allow Stiskilli App
    if (ua.indexOf("STISKILLI_APP") !== -1) return;

    // ✅ Allow Google bot
    if (ua.indexOf("Googlebot") !== -1) return;

    // ❌ Sabko Play Store bhejo
    location.replace(
        "https://play.google.com/store/apps/details?id=com.ai.skillaura"
    );
})();
