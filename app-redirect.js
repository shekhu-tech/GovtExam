(function () {
    try {
        var ua = navigator.userAgent || "";
        var isWebView = false;

        // ✅ Android WebView detection
        if (
            ua.includes("wv") ||
            ua.includes("Android") && ua.includes("Version/") ||
            window.AndroidInterface ||
            window.ReactNativeWebView
        ) {
            isWebView = true;
        }

        // ✅ Allow Googlebot
        if (ua.includes("Googlebot")) return;

        // ❌ App ke andar redirect nahi
        if (isWebView) {
            console.log("WebView detected – redirect skipped");
            return;
        }

        // ✅ Sab browsers ko redirect
        window.addEventListener("load", function () {
            setTimeout(function () {
                window.location.href =
                    "https://play.google.com/store/apps/details?id=com.ai.skillaura";
            }, 300);
        });

    } catch (e) {
        console.log("Redirect error:", e);
    }
})();
