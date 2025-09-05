// यह स्क्रिप्ट जांचती है कि उपयोगकर्ता ने भुगतान किया है या नहीं
// और डिवाइस के अनुसार रीडायरेक्ट करती है

(function() {
    // अपनी Android ऐप का Google Play Store URL यहां डालें।
    const androidAppUrl = 'https://play.google.com/store/apps/details?id=YOUR_APP_ID';
    
    // यह फ़ंक्शन जांचता है कि डिवाइस Android है या नहीं
    function isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }

    // जांचें कि उपयोगकर्ता ने भुगतान किया है या नहीं
    const hasPaid = localStorage.getItem('hasPaid');
    
    // अगर भुगतान नहीं हुआ है, तो डिवाइस के प्रकार के अनुसार रीडायरेक्ट करें
    if (hasPaid !== 'true') {
        if (isAndroid()) {
            // Android डिवाइस को सीधे Play Store पर रीडायरेक्ट करें
            window.location.href = androidAppUrl;
        } else {
            // Apple और PC डिवाइस को index.html पर रीडायरेक्ट करें
            const currentPageUrl = window.location.href;
            const paymentPageUrl = window.location.origin + '/index.html';
            
            // अगर उपयोगकर्ता पहले से ही index.html पर नहीं है, तो रीडायरेक्ट करें
            if (currentPageUrl !== paymentPageUrl) {
                window.location.href = paymentPageUrl + '?redirect=' + encodeURIComponent(currentPageUrl);
            }
        }
    }
})();
