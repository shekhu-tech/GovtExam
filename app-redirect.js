(function () {
    var ua = navigator.userAgent || "";
    console.log("Current User Agent:", ua); // Console mein UA print karega

    // 1. Check for App
    if (ua.indexOf("STISKILLI_APP") !== -1) {
        console.log("Blocked: Detected App");
        return;
    }

    // 2. Check for Bot
    if (ua.indexOf("Googlebot") !== -1) {
        console.log("Blocked: Detected Googlebot");
        return;
    }

    // 3. Redirect logic
    console.log("Redirecting in 300ms...");
    setTimeout(function () {
        console.log("Redirect triggered!");
        window.location.href = "https://play.google.com/store/apps/details?id=com.ai.skillaura";
    }, 300);
})();
