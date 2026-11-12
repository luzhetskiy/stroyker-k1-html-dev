(function () {
    "use strict";

    var clientID = "";
    var firstTouch;
    var SOURCE = {
        vkAds: "Реклама: VK Ads",
        yandexSearch: "Реклама: Яндекс Директ — Поиск",
        yandexNetwork: "Реклама: Яндекс Директ — РСЯ",
        otherPaid: "Реклама: прочая платная",
        yandexOrganic: "SEO: поиск Яндекс",
        googleOrganic: "SEO: поиск Google",
        bingOrganic: "SEO: поиск Bing",
        otherSearch: "SEO: другие поисковые системы",
        ai: "SEO: GEO / AI-системы",
        vk: "ВКонтакте: входящее обращение",
        telegram: "Telegram: входящее обращение",
        max: "MAX: входящее обращение",
        whatsapp: "WhatsApp: входящее обращение",
        avito: "Avito: входящее обращение",
        otherSocial: "Другие соцсети: входящее обращение",
        call: "Входящий звонок",
        salesEmail: "sales@binavigator.ru",
        orderEmail: "zakaz@binavigator.ru",
        securityEmail: "zakaz@securitybn.ru",
        web: "Сайт: прямое обращение",
        quiz: "Квиз",
        emailCampaign: "Исходящая email-рассылка",
        telegramCampaign: "Исходящая рассылка: Telegram",
        maxCampaign: "Исходящая рассылка: MAX",
        vkCampaign: "Исходящая рассылка: ВКонтакте",
        ownCall: "Исходящий обзвон: своими силами",
        callCenter: "Исходящий обзвон: колл-центр",
        robotCall: "Исходящий обзвон: робот",
        oneCEvent: "Мероприятие: 1С",
        ownEvent: "Мероприятие: собственное",
        partnerEvent: "Мероприятие: с партнером",
        otherEvent: "Мероприятие: стороннее / выставка",
        oneC: "1С",
        partner: "Партнер",
        recommendation: "Рекомендация",
        tender: "Торги",
        vendor: "Вендор",
        other: "Другое / источник не определен",
    };
    var EXPLICIT_SOURCE_ALIASES = {
        "25": SOURCE.vkAds,
        vk_ads: SOURCE.vkAds,
        "ca_переходы по рекламе yandex direct": SOURCE.yandexSearch,
        "26": SOURCE.yandexNetwork,
        rsya: SOURCE.yandexNetwork,
        "ca_переходы по рекламе": SOURCE.otherPaid,
        "ca_переходы из поисковых систем yandex": SOURCE.yandexOrganic,
        "ca_переходы из поисковых систем google": SOURCE.googleOrganic,
        "ca_переходы из поисковых систем bing.com": SOURCE.bingOrganic,
        "27": SOURCE.otherSearch,
        "ca_переходы по ссылкам на сайтах perplexity.ai": SOURCE.ai,
        "1|vk": SOURCE.vk,
        "3|telegram": SOURCE.telegram,
        "1|max": SOURCE.max,
        "1|notifications": SOURCE.whatsapp,
        "1|avito": SOURCE.avito,
        "28": SOURCE.otherSocial,
        call: SOURCE.call,
        "22": SOURCE.salesEmail,
        "sales@binavigator.ru": SOURCE.salesEmail,
        "20": SOURCE.orderEmail,
        "zakaz@binavigator.ru": SOURCE.orderEmail,
        "21": SOURCE.securityEmail,
        "zakaz@securitybn.ru": SOURCE.securityEmail,
        web: SOURCE.web,
        quiz: SOURCE.quiz,
        uc_ihflwe: SOURCE.quiz,
        "ca_переходы по ссылкам на сайтах e.mail.ru": SOURCE.emailCampaign,
        "29": SOURCE.telegramCampaign,
        telegram_mailing: SOURCE.telegramCampaign,
        "30": SOURCE.maxCampaign,
        max_mailing: SOURCE.maxCampaign,
        "31": SOURCE.vkCampaign,
        vk_mailing: SOURCE.vkCampaign,
        uc_f14lpe: SOURCE.ownCall,
        outbound_call: SOURCE.ownCall,
        "4": SOURCE.callCenter,
        call_center: SOURCE.callCenter,
        "32": SOURCE.robotCall,
        robot_call: SOURCE.robotCall,
        "33": SOURCE.oneCEvent,
        "1c_event": SOURCE.oneCEvent,
        "34": SOURCE.ownEvent,
        own_event: SOURCE.ownEvent,
        "35": SOURCE.partnerEvent,
        partner_event: SOURCE.partnerEvent,
        trade_show: SOURCE.otherEvent,
        "18": SOURCE.oneC,
        "1c": SOURCE.oneC,
        "16": SOURCE.partner,
        partner: SOURCE.partner,
        recommendation: SOURCE.recommendation,
        "2": SOURCE.tender,
        tender: SOURCE.tender,
        "36": SOURCE.vendor,
        vendor: SOURCE.vendor,
        other: SOURCE.other,
    };
    Object.keys(SOURCE).forEach(function (key) {
        EXPLICIT_SOURCE_ALIASES[SOURCE[key].toLowerCase()] = SOURCE[key];
    });
    var PAID_MEDIUMS = ["cpc", "cpm", "display", "paid", "paid_social", "ppc", "target"];
    var MAILING_MEDIUMS = ["email", "e-mail", "mailing", "newsletter"];

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

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function hasUtmMarker(params, markers) {
        return ["utm_campaign", "utm_content", "utm_medium", "utm_term"].some(function (name) {
            var tokens = normalize(params[name]).split(/[^a-zа-яё0-9]+/i);
            return markers.some(function (marker) { return tokens.includes(marker); });
        });
    }

    function isSearchHost(hostname, domain) {
        if (hostname.indexOf("www.") === 0) hostname = hostname.slice(4);
        return hostname.indexOf(domain + ".") === 0 && searchDomainMatches(hostname, domain);
    }

    function detectSource(params) {
        var keys = Object.keys(params);
        var utmSource = normalize(params.utm_source);
        var utmMedium = normalize(params.utm_medium);

        if (EXPLICIT_SOURCE_ALIASES[utmSource]) return EXPLICIT_SOURCE_ALIASES[utmSource];
        if (params.gclid) return SOURCE.otherPaid;
        if (params.srsltid) return SOURCE.googleOrganic;
        if (params.yclid || keys.some(function (key) { return key.indexOf("yclid_") === 0; })) {
            return hasUtmMarker(params, ["network", "rsya", "rsy", "рся"])
                ? SOURCE.yandexNetwork : SOURCE.yandexSearch;
        }
        if (params.fbclid) {
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.otherSocial;
        }
        if (["vk", "vkontakte", "вконтакте"].includes(utmSource)) {
            if (MAILING_MEDIUMS.includes(utmMedium)) return SOURCE.vkCampaign;
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.vkAds : SOURCE.vk;
        }
        if (["yandex", "ya", "яндекс"].includes(utmSource)) {
            if (PAID_MEDIUMS.includes(utmMedium)) {
                return hasUtmMarker(params, ["network", "rsya", "rsy", "рся"])
                    ? SOURCE.yandexNetwork : SOURCE.yandexSearch;
            }
            return SOURCE.yandexOrganic;
        }
        if (["google", "google_ads", "adwords"].includes(utmSource)) {
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.googleOrganic;
        }
        if (utmSource === "bing") {
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.bingOrganic;
        }
        if (["perplexity", "ai", "geo"].includes(utmSource)) return SOURCE.ai;
        if (["telegram", "tg"].includes(utmSource)) {
            if (MAILING_MEDIUMS.includes(utmMedium)) return SOURCE.telegramCampaign;
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.telegram;
        }
        if (utmSource === "max") {
            if (MAILING_MEDIUMS.includes(utmMedium)) return SOURCE.maxCampaign;
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.max;
        }
        if (["whatsapp", "wa"].includes(utmSource)) {
            return PAID_MEDIUMS.includes(utmMedium) ? SOURCE.otherPaid : SOURCE.whatsapp;
        }
        if (utmSource === "avito") return SOURCE.avito;
        if (["email", "e-mail", "mail"].includes(utmSource) || MAILING_MEDIUMS.includes(utmMedium)) return SOURCE.emailCampaign;
        if (PAID_MEDIUMS.includes(utmMedium)) return SOURCE.otherPaid;
        if (!document.referrer) return SOURCE.web;

        var hostname;
        try {
            hostname = new URL(document.referrer).hostname.toLowerCase();
        } catch (error) {
            return SOURCE.web;
        }

        if (hostname === window.location.hostname.toLowerCase()) return SOURCE.web;
        if (domainMatches(hostname, "perplexity.ai")) return SOURCE.ai;
        if (domainMatches(hostname, "avito.ru")) return SOURCE.avito;
        if (domainMatches(hostname, "max.ru")) return SOURCE.max;
        if (domainMatches(hostname, "e.mail.ru")) return SOURCE.emailCampaign;
        if (isSearchHost(hostname, "google")) return SOURCE.googleOrganic;
        if (isSearchHost(hostname, "yandex") || ["ya.ru", "www.ya.ru"].includes(hostname)) return SOURCE.yandexOrganic;
        if (["bing.com", "www.bing.com"].includes(hostname)) return SOURCE.bingOrganic;
        if (domainMatches(hostname, "go.mail.ru") || domainMatches(hostname, "mail.ru")) return SOURCE.otherSearch;
        if (domainMatches(hostname, "duckduckgo.com")) return SOURCE.otherSearch;
        if (domainMatches(hostname, "rambler.ru") || domainMatches(hostname, "search.marsu.ru")) return SOURCE.otherSearch;
        if (domainMatches(hostname, "vk.com")) return SOURCE.vk;
        if (domainMatches(hostname, "t.me")) return SOURCE.telegram;
        if (domainMatches(hostname, "web.whatsapp.com") || domainMatches(hostname, "wa.me")) return SOURCE.whatsapp;
        if (["ok.ru", "facebook.com", "instagram.com", "youtube.com", "twitter.com", "x.com"].some(function (domain) {
            return domainMatches(hostname, domain);
        })) return SOURCE.otherSocial;
        return SOURCE.other;
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
