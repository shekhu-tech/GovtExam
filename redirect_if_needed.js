(function () {

  // Check if opened from app (WebView)
  const urlParams = new URLSearchParams(window.location.search);
  const openedFromApp = urlParams.has("app");

  // Agar app se khula hai to redirect bilkul mat karo
  if (openedFromApp) return;

  // Check karo ki current page main.html hai ya nahi
  var isMain = location.pathname.endsWith("main.html") 
                || location.pathname === "/" 
                || location.pathname === "";

  // Agar main.html nahi hai → redirect
  if (!isMain) {
    location.replace("main.html");
  }

})();
