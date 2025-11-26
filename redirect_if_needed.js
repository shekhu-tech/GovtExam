  (function () {
    // Check karo ki current page index.html hai ya nahi
    var isIndex = location.pathname.endsWith("index.html") 
                  || location.pathname === "/" 
                  || location.pathname === "";

    // Referrer check (agar apni hi site se aaya hai to allow karo)
    var sameOriginReferrer = document.referrer && document.referrer.startsWith(location.origin);

    // Agar index nahi hai aur direct/external open hua hai → index.html pe bhejo
    if (!isIndex && !sameOriginReferrer) {
      location.replace("main.html");
    }
  })();
