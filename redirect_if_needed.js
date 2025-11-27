(function () {
    // Check karo ki current page main.html hai ya nahi
    var isMain = location.pathname.endsWith("main.html") 
                  || location.pathname === "/" 
                  || location.pathname === "";

    // Referrer check (agar apni hi site se aaya hai to allow karo)
    var sameOriginReferrer = document.referrer && document.referrer.startsWith(location.origin);

    // Agar main.html nahi hai aur direct/external open hua hai → main.html pe redirect karo
    if (!isMain && !sameOriginReferrer) {
      location.replace("main.html");  // ← niche wala section YAHI hai
    }
})();
