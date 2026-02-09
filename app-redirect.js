<script>
(function () {
    var ua = navigator.userAgent || "";

    // ✅ Allow Android WebView
    if (ua.includes("wv")) return;

    // ✅ Allow Stiskilli App
    if (ua.includes("STISKILLI_APP")) return;

    // ✅ Allow Googlebot
    if (ua.includes("Googlebot")) return;

    // ⏳ Small delay for GitHub Pages
    setTimeout(function () {
        window.location.href =
            "https://play.google.com/store/apps/details?id=com.ai.skillaura";
    }, 200);
})();
</script>
