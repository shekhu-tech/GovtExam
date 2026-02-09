(function() {
    // ==========================================
    // 🛑 SAFETY CHECKS (App & SEO Bachane ke liye)
    // ==========================================
    
    var ua = navigator.userAgent;

    // 1. APP PROTECTION: Agar ye apki App (WebView) hai, to kuch mat karo.
    // Ye check karega ki UserAgent me "STISKILLI_APP" likha hai ya nahi.
    if (ua.indexOf("STISKILLI_APP") > -1) {
        return; // Script yahi ruk jayegi, App normal chalegi.
    }

    // 2. SEO PROTECTION: Google/Bing ke bots ko redirect mat karo.
    // Taki aapki ranking down na ho.
    if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
        return;
    }

    // ==========================================
    // 🚀 REDIRECT LOGIC
    // ==========================================

    // Agar upar wale checks pass ho gaye (matlab ye normal user hai browser par),
    // to use Play Store par bhej do.
    
    window.location.href = "https://play.google.com/store/apps/details?id=com.ai.skillaura&pcampaignid=web_share";

})();
