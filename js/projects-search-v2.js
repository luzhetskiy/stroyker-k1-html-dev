(function (root, factory) {
    var api = factory();
    root.ProjectSearchCore = api;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    function normalizeSearchText(value) {
        var normalized = String(value || '')
            .normalize('NFKC')
            .toLocaleLowerCase('ru')
            .replace(/ё/g, 'е')
            .replace(/кв\.?\s*м(?:\s*2)?/g, ' м2 ')
            .replace(/м\s*2/g, ' м2 ')
            .replace(/([0-9])(?=м2)/g, '$1 ')
            .replace(/[^a-zа-я0-9]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        return normalized.split(' ').map(function (token) {
            return ['дома', 'домов', 'дому', 'домом', 'доме'].indexOf(token) !== -1
                ? 'дом'
                : token;
        }).join(' ');
    }

    function tokenizeSearchQuery(value) {
        var normalized = normalizeSearchText(value);
        return normalized ? normalized.split(' ') : [];
    }

    function matchesProject(title, category, query) {
        var haystack = normalizeSearchText(title + ' ' + category);
        var haystackTokens = haystack.split(' ');
        return tokenizeSearchQuery(query).every(function (token) {
            if (token === 'до' || token === 'от' || token === 'м2' || /^\d+$/.test(token)) {
                return haystackTokens.indexOf(token) !== -1;
            }
            return haystack.indexOf(token) !== -1;
        });
    }

    function init() {
        var input = document.getElementById('projects-search-input');
        var container = document.querySelector('[data-projects-search-root]');
        var empty = document.querySelector('[data-projects-empty]');
        if (!input || !container) return;

        var cards = Array.prototype.slice.call(container.querySelectorAll('.project-card'));
        function filter() {
            var visible = 0;
            cards.forEach(function (card) {
                var matched = matchesProject(
                    card.getAttribute('data-project-title'),
                    card.getAttribute('data-project-category'),
                    input.value
                );
                card.hidden = !matched;
                if (matched) visible += 1;
            });
            if (empty) empty.hidden = visible !== 0;
        }

        input.addEventListener('input', filter);
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                filter();
            }
        });
        var button = document.querySelector('.projects-search__button');
        if (button) button.addEventListener('click', filter);
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

    return {
        normalizeSearchText: normalizeSearchText,
        tokenizeSearchQuery: tokenizeSearchQuery,
        matchesProject: matchesProject
    };
});
