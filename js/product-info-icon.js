(function () {
    'use strict';

    var VARIANT_SELECTOR = '[data-product-info-variant]';
    var ICON_SELECTOR = '.product-info-icon:not([data-inline-ready])';
    var CARD_SELECTOR = '.product-item, .product-card-v2';
    var TITLE_SELECTOR = '.product-item__name, .product-card-v2__title';

    function prepareInlineVariant(root) {
        if (!root || !root.querySelectorAll) return;

        var icons = root.querySelectorAll(VARIANT_SELECTOR + ' ' + ICON_SELECTOR);
        Array.prototype.forEach.call(icons, function (icon) {
            var popup = icon.querySelector('.product-info-icon__popup');
            var card = icon.closest(CARD_SELECTOR);
            var title = card ? card.querySelector(TITLE_SELECTOR) : null;
            if (!popup || !title) return;

            popup.classList.add('product-info-icon__popup--inline');
            title.insertAdjacentElement('afterend', popup);
            icon.hidden = true;
            icon.setAttribute('data-inline-ready', 'true');
        });
    }

    function init() {
        prepareInlineVariant(document);

        if (!window.MutationObserver || !document.body) return;

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                Array.prototype.forEach.call(mutation.addedNodes, prepareInlineVariant);
            });
        });

        observer.observe(document.body, {childList: true, subtree: true});
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();