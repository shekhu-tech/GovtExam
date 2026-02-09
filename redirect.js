(function() {
    try {
        var ua = navigator.userAgent;

        // 1. Check: Agar ye apki App hai (STISKILLI_APP), to turant ruk jao
        // Ye sabse important line hai white screen hatane ke liye
        if (ua.indexOf("STISKILLI_APP") > -1) {
            return; 
        }

        // 2. Check: Agar Google ka Crawler/Bot hai, to ruk jao (SEO ke liye)
        if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
            return;
        }

        // 3. Redirect: Agar upar ke dono nahi hain, tabhi Play Store par bhejo
        window.location.replace("https://play.google.com/store/apps/details?id=com.ai.skillaura");
        
    } catch (e) {
        // Agar koi error aaye to shant raho, crash mat karo
        console.log("Redirect error handled");
    }
})();
