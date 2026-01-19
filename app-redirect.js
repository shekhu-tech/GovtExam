(function () {
    var ua = navigator.userAgent || "";

    // Allow app WebView
    if (ua.includes("STIPRO_APP")) {
        return;
    }

    // Allow Google for indexing
    if (ua.includes("Googlebot")) {
        return;
    }

    // Redirect all external users
    window.location.replace(
        "https://play.google.com/store/apps/details?id=com.ai.skillaura&pcampaignid=web_share"
    );
})();
