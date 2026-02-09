(function () {
    try {
        var ua = navigator.userAgent || "";

        // ✅ Allow Android WebView
        if (ua.indexOf("wv") !== -1) return;

        // ✅ Allow Stiskilli App
        if (ua.indexOf("STISKILLI_APP") !== -1) return;

        // ✅ Allow Googlebot
        if (ua.indexOf("Googlebot") !== -1) return;

        // ✅ GitHub Pages + external JS fix
        window.addEventListener("load", function () {
            setTimeout(function () {
                window.location.href =
                    "https://play.google.com/store/apps/details?id=com.ai.skillaura";
            }, 300);
        });

    } catch (e) {
        console.log("Redirect skipped:", e);
    }
})();
