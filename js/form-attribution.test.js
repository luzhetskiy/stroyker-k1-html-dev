const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");

const script = fs.readFileSync(path.join(__dirname, "form-attribution.js"), "utf8");

function detectSource(search, referrer = "") {
    const values = {};
    const form = {
        querySelector(selector) {
            const match = selector.match(/name="([^"]+)"/);
            if (!match) return null;
            values[match[1]] = values[match[1]] || {value: ""};
            return values[match[1]];
        },
    };
    const clientIDInput = {form};
    const context = {
        URL,
        URLSearchParams,
        window: {
            location: {search, hostname: "example.com"},
            setInterval() { return 1; },
            clearInterval() {},
        },
        document: {
            referrer,
            getElementById() { return null; },
            querySelectorAll() { return [clientIDInput]; },
            addEventListener() {},
        },
    };

    vm.runInNewContext(script, context);
    return values.source.value;
}

test("explicit Bitrix source IDs match backend catalog", () => {
    const cases = {
        "25": "Реклама: VK Ads",
        "CA_Переходы по рекламе Yandex Direct": "Реклама: Яндекс Директ — Поиск",
        "26": "Реклама: Яндекс Директ — РСЯ",
        "CA_Переходы по рекламе": "Реклама: прочая платная",
        "CA_Переходы из поисковых систем Yandex": "SEO: поиск Яндекс",
        "CA_Переходы из поисковых систем Google": "SEO: поиск Google",
        "CA_Переходы из поисковых систем bing.com": "SEO: поиск Bing",
        "27": "SEO: другие поисковые системы",
        "CA_Переходы по ссылкам на сайтах perplexity.ai": "SEO: GEO / AI-системы",
        "1|VK": "ВКонтакте: входящее обращение",
        "3|TELEGRAM": "Telegram: входящее обращение",
        "1|MAX": "MAX: входящее обращение",
        "1|NOTIFICATIONS": "WhatsApp: входящее обращение",
        "1|AVITO": "Avito: входящее обращение",
        "28": "Другие соцсети: входящее обращение",
        CALL: "Входящий звонок",
        "22": "sales@binavigator.ru",
        "20": "zakaz@binavigator.ru",
        "21": "zakaz@securitybn.ru",
        WEB: "Сайт: прямое обращение",
        UC_IHFLWE: "Квиз",
        "CA_Переходы по ссылкам на сайтах e.mail.ru": "Исходящая email-рассылка",
        "29": "Исходящая рассылка: Telegram",
        "30": "Исходящая рассылка: MAX",
        "31": "Исходящая рассылка: ВКонтакте",
        UC_F14LPE: "Исходящий обзвон: своими силами",
        "4": "Исходящий обзвон: колл-центр",
        "32": "Исходящий обзвон: робот",
        "33": "Мероприятие: 1С",
        "34": "Мероприятие: собственное",
        "35": "Мероприятие: с партнером",
        TRADE_SHOW: "Мероприятие: стороннее / выставка",
        "18": "1С",
        "16": "Партнер",
        RECOMMENDATION: "Рекомендация",
        "2": "Торги",
        "36": "Вендор",
        OTHER: "Другое / источник не определен",
    };

    Object.entries(cases).forEach(([sourceID, expected]) => {
        assert.equal(detectSource(`?utm_source=${encodeURIComponent(sourceID)}`), expected);
    });
});

test("click IDs override generic UTM heuristics", () => {
    assert.equal(
        detectSource("?utm_source=google&gclid=click"),
        "Реклама: прочая платная",
    );
    assert.equal(
        detectSource("?utm_source=yandex&yclid=click"),
        "Реклама: Яндекс Директ — Поиск",
    );
    assert.equal(
        detectSource("?utm_source=bing&utm_medium=cpc"),
        "Реклама: прочая платная",
    );
});

test("RSYA requires a complete UTM token", () => {
    assert.equal(
        detectSource("?yclid=click&utm_campaign=networking-tools"),
        "Реклама: Яндекс Директ — Поиск",
    );
    assert.equal(
        detectSource("?yclid=click&utm_campaign=brand_rsya_msk"),
        "Реклама: Яндекс Директ — РСЯ",
    );
});

test("non-search Google and Yandex properties are not organic search", () => {
    assert.equal(
        detectSource("", "https://mail.google.com/mail/"),
        "Другое / источник не определен",
    );
    assert.equal(
        detectSource("", "https://market.yandex.ru/"),
        "Другое / источник не определен",
    );
    assert.equal(
        detectSource("", "https://www.google.com/search?q=test"),
        "SEO: поиск Google",
    );
});
