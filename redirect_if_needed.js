(function () {

  const url = new URL(window.location.href);

  // Detect if opened from App (URL contains ?app=1)
  const openedFromApp = url.searchParams.has("app");

  // If opened from app → allow all pages
  if (openedFromApp) return;

  // Check allowed entry page (main.html only)
  const path = location.pathname;
  const isMainPage =
      path.endsWith("main.html") ||
      path === "/" ||
      path === "";

  // Block all inner pages for browser direct access
  if (!isMainPage) {
    location.replace("/main.html");
  }

})();
