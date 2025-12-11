(function () {
  'use strict';

  // ---------- Helpers ----------
  function isMainPage() {
    return location.pathname.endsWith('main.html') ||
           location.pathname === '/' ||
           location.pathname === '';
  }

  function isSameOriginReferrer() {
    try {
      return document.referrer && document.referrer.startsWith(location.origin);
    } catch (e) {
      return false;
    }
  }

  function isAndroidWebView() {
    var ua = navigator.userAgent || '';
    // common patterns: "wv" token for WebView, or "Android" + "Version/" in some webviews
    return /\bwv\b/i.test(ua) ||
           /\bAndroid.*WebView\b/i.test(ua) ||
           (ua.indexOf('Android') !== -1 && ua.indexOf('Version/') !== -1);
  }

  function isDirectEntry() {
    // If there's an opener, this page was opened from somewhere (don't treat as direct external)
    if (window.opener) return false;

    // If history length > 1, user likely navigated here from within the app/site
    if (window.history && window.history.length > 1) return false;

    // Use Navigation Timing API where available to detect "navigate" (fresh load)
    try {
      var nav = performance.getEntriesByType && performance.getEntriesByType('navigation');
      var n = (nav && nav[0]) || performance.navigation;
      // For modern browsers nav[0].type === 'navigate' means user typed URL / bookmark / external link
      if (n && (n.type === 'navigate' || n.type === 0)) {
        // still could be direct or internal; fall through to referrer check below
      }
    } catch (e) {
      // ignore
    }

    // Treat as direct entry if no referrer (commonly when user typed URL / opened externally)
    return !document.referrer || document.referrer === '';
  }

  // ---------- Main logic ----------
  try {
    if (isMainPage()) return; // already main page — nothing to do

    // If same-origin referrer (user came from your site) -> allow
    if (isSameOriginReferrer()) return;

    // If running inside Android WebView / in-app browser -> DO NOT redirect
    if (isAndroidWebView()) return;

    // Only redirect when this looks like a direct external entry (no referrer / fresh nav)
    if (isDirectEntry()) {
      // Use replace so history doesn't keep the original URL (prevents back-button weirdness)
      location.replace('/main.html');
    }
  } catch (err) {
    // fail-safe: never break page if something unexpected happens
    console.error('redirect_if_needed error:', err);
  }
})();
