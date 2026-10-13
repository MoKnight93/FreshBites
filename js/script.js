// FreshBites demo interactions: cart counter and contact form message
(function () {
    var KEY = 'freshbites_cart_count';

    function readCount() {
        try {
            var n = parseInt(localStorage.getItem(KEY), 10);
            return isNaN(n) ? 0 : n;
        } catch (e) {
            return 0;
        }
    }

    function writeCount(n) {
        try {
            localStorage.setItem(KEY, String(n));
        } catch (e) { /* storage unavailable, keep going */ }
    }

    var count = readCount();
    var badge = document.getElementById('cart-count');

    function renderBadge() {
        if (!badge) return;
        badge.textContent = count;
        badge.classList.toggle('visible', count > 0);
    }

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
    var toastTimer;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove('show');
        }, 2000);
    }

    renderBadge();

    document.querySelectorAll('.add-to-cart').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var card = btn.closest('.product-card');
            var title = card ? card.querySelector('h3').textContent : 'Item';
            count += 1;
            writeCount(count);
            renderBadge();
            showToast(title + ' added to cart');
        });
    });

    var cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.addEventListener('click', function (e) {
            e.preventDefault();
            showToast(count === 0 ? 'Your cart is empty' : 'Cart has ' + count + ' item(s). Checkout is not part of this demo.');
        });
    }

    var form = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    if (form && success) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            success.classList.add('show');
            form.reset();
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
})();
