(function() {
    // ==========================================
    // SETTINGS (YAHAN CHANGES KAREIN)
    // ==========================================
    
    // 1. AAPKI APP KA PACKAGE NAME (Abhi ye active hai)
    var androidPackageName = "";

    // 2. FUTURE OPTION: Agar App nahi kholn, kisi aur website par bhejna hai
    // To upar wala variable khali chod dein ("") aur yahan link dalein.
    var alternateWebsite = "https://play.google.com/store/apps/details?id=com.ai.skillaura"; // Example: "https://www.google.com"

    // ==========================================
    // LOGIC (ISKO MAT CHEDNA)
    // ==========================================

    // Check: Agar User pehle se App (WebView) mein hai to kuch mat karo
    if (navigator.userAgent.indexOf("STISKILLI_APP") > -1) {
        return;
    }

    // Check: Agar 'alternateWebsite' mein kuch likha hai, to wahan bhej do
    if (alternateWebsite !== "") {
        window.location.href = alternateWebsite;
        return;
    }

    // Check: Agar 'androidPackageName' set hai, to App kholo
    if (androidPackageName !== "") {
        
        // Current Page ka URL nikalo
        var currentUrl = window.location.href;
        var cleanUrl = currentUrl.replace(/^https?:\/\//, '');

        // Intent Link Banao (Ye browser ko bolta hai App kholne ko)
        var intentUrl = "intent://" + cleanUrl + 
                        "#Intent;scheme=https;package=" + androidPackageName + 
                        ";S.browser_fallback_url=" + currentUrl + 
                        ";end";

        // Redirect Trigger
        window.location.href = intentUrl;
    }

})();
