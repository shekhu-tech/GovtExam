(function () {

  /*-------------------------------------------------------
   🔹 PART-1: Detect if request came from your Android App
  --------------------------------------------------------*/

  const urlParams = new URLSearchParams(window.location.search);
  const openedFromApp = urlParams.has("app");   // ← If WebView has ?app=1


  // ⭐ If opened from Android App → allow everything (NO REDIRECT)
  if (openedFromApp) {
    console.log("Opened from APP → No Redirect");
    return;
  }


  /*-------------------------------------------------------
   🔹 PART-2: Identify main.html (only allowed entry point)
  --------------------------------------------------------*/

  const path = location.pathname;

  const isMainPage =
    path.endsWith("main.html") ||
    path === "/" ||
    path === "";


  /*-------------------------------------------------------
   🔹 PART-3: Redirect all external / direct visitors
  --------------------------------------------------------*/

  if (!isMainPage) {
    console.log("External/User tried to open inner page → Redirecting...");
    location.replace("https://crapd.in/main.html");
  }

})();
