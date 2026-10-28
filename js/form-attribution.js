(function () {
    "use strict";

    var clientID = "";
    var firstTouch;

    function getParams() {
        var params = {};
        new URLSearchParams(window.location.search).forEach(function (value, key) {
            params[key.toLowerCase()] = value;
        });
        return params;
    }

    function domainMatches(hostname, domain) {
        return hostname === domain || hostname.endsWith("." + domain);
    }

    function searchDomainMatches(hostname, domain) {
        return new RegExp("(^|\\.)" + domain + "\\.[a-z]{2,}(\\.[a-z]{2})?$", "i").test(hostname);
    }

    function detectSource(params) {
        var keys = Object.keys(params);

        if (params.utm_source || params.utm_medium) return "";
        if (params.gclid) return "Google Ads";
        if (params.srsltid) return "Google";
        if (params.yclid || keys.some(function (key) { return key.indexOf("yclid_") === 0; })) return "Яндекс Директ";
        if (params.fbclid) return "Meta";
        if (!document.referrer) return "WEB";

        var hostname;
        try {
            hostname = new URL(document.referrer).hostname.toLowerCase();
        } catch (error) {
            return "WEB";
        }

        if (hostname === window.location.hostname.toLowerCase()) return "WEB";
        if (searchDomainMatches(hostname, "google")) return "Google";
        if (searchDomainMatches(hostname, "yandex") || domainMatches(hostname, "ya.ru")) return "Яндекс";
        if (domainMatches(hostname, "bing.com")) return "Bing";
        if (domainMatches(hostname, "go.mail.ru") || domainMatches(hostname, "mail.ru")) return "Mail.ru";
        if (domainMatches(hostname, "duckduckgo.com")) return "DuckDuckGo";
        if (domainMatches(hostname, "rambler.ru") || domainMatches(hostname, "search.marsu.ru")) return "Другие поисковые системы";
        if (domainMatches(hostname, "vk.com")) return "ВКонтакте";
        if (domainMatches(hostname, "t.me")) return "Telegram";
        if (domainMatches(hostname, "web.whatsapp.com") || domainMatches(hostname, "wa.me")) return "WhatsApp";
        if (["ok.ru", "facebook.com", "instagram.com", "youtube.com", "twitter.com", "x.com"].some(function (domain) {
            return domainMatches(hostname, domain);
        })) return "Другие соцсети";
        return "Переход с сайта";
    }

    function getAttribution() {
        if (firstTouch === undefined) {
            var dataElement = document.getElementById("form-attribution-data");
            try {
                firstTouch = dataElement ? JSON.parse(dataElement.textContent) : null;
            } catch (error) {
                firstTouch = null;
            }
        }

        if (firstTouch && typeof firstTouch === "object") return firstTouch;

        var params = getParams();
        return {
            utm_campaign: params.utm_campaign || "",
            utm_content: params.utm_content || "",
            utm_medium: params.utm_medium || "",
            utm_source: params.utm_source || "",
            utm_term: params.utm_term || "",
            source: detectSource(params),
        };
    }

    function fillForm(form) {
        var sourceInput = form.querySelector('input[name="source"]');
        var clientIDInput = form.querySelector('input[name="ym_client_id"]');
        if (!sourceInput || !clientIDInput) return;

        var attribution = getAttribution();
        ["utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term"].forEach(function (name) {
            var input = form.querySelector('input[name="' + name + '"]');
            if (input) input.value = String(attribution[name] || "").slice(0, 128);
        });
        sourceInput.value = String(attribution.source || "").slice(0, 128);
        clientIDInput.value = clientID;
    }

    function fillForms() {
        document.querySelectorAll('form input[name="ym_client_id"]').forEach(function (input) {
            fillForm(input.form);
        });
    }

    function requestClientID() {
        var counterID = typeof URLS !== "undefined" ? Number(URLS.yandexMetrikaCounterId) : 0;
        if (!counterID || typeof window.ym !== "function") return;

        window.ym(counterID, "getClientID", function (value) {
            if (!value) return;
            clientID = String(value).slice(0, 128);
            fillForms();
        });
    }

    fillForms();
    requestClientID();

    var attempts = 0;
    var retryTimer = window.setInterval(function () {
        attempts += 1;
        if (clientID || attempts >= 20) {
            window.clearInterval(retryTimer);
            return;
        }
        if (typeof window.ym === "function") {
            requestClientID();
            window.clearInterval(retryTimer);
        }
    }, 500);

    document.addEventListener("submit", function (event) {
        fillForm(event.target);
        if (!clientID) requestClientID();
    }, true);
})();
