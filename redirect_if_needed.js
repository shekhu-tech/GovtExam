// This script checks if the user has paid.
// If not, it redirects them to the index page for payment.

(function() {
    // Check if the user has a 'hasPaid' flag in local storage.
    const hasPaid = localStorage.getItem('hasPaid');

    // Get the current page's URL.
    const currentPageUrl = window.location.href;

    // The payment page URL. Make sure this is correct.
    const paymentPageUrl = window.location.origin + '/index.html';

    // If the user has not paid and they are not already on the payment page,
    // redirect them to the payment page.
    if (hasPaid !== 'true' && currentPageUrl !== paymentPageUrl) {
        // Redirect to the payment page, passing the current URL as a parameter.
        window.location.href = paymentPageUrl + '?redirect=' + encodeURIComponent(currentPageUrl);
    }
})();
