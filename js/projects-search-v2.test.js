const test = require('node:test');
const assert = require('node:assert/strict');

const search = require('./projects-search-v2.js');

test('normalizes Russian house forms and area units', () => {
    assert.equal(search.normalizeSearchText('Дома 50 кв.м'), 'дом 50 м2');
    assert.equal(search.normalizeSearchText('ДОМ 50м²'), 'дом 50 м2');
    assert.equal(search.normalizeSearchText('дом 50 квм'), 'дом 50 м2');
});

test('matches unordered normalized query tokens', () => {
    assert.equal(
        search.matchesProject('Проект дома до 50м²', 'Каркасные', '50 квм дом'),
        true
    );
    assert.equal(
        search.matchesProject('Проект дома до 80м²', 'Каркасные', '50 квм дом'),
        false
    );
});

test('keeps do and ot qualifiers meaningful when entered', () => {
    assert.equal(search.matchesProject('Дом до 50м²', '', 'до 50 квм'), true);
    assert.equal(search.matchesProject('Дом от 50м²', '', 'до 50 квм'), false);
});

test('matches category and treats an empty query as all projects', () => {
    assert.equal(search.matchesProject('Дом 120м²', 'Газобетон', 'газобетон'), true);
    assert.equal(search.matchesProject('Дом 120м²', 'Газобетон', ''), true);
});

test('matches numeric area tokens exactly', () => {
    assert.equal(search.matchesProject('Дом 150м²', '', '50 квм'), false);
    assert.equal(search.matchesProject('Дом 150м²', '', '15 квм'), false);
    assert.equal(search.matchesProject('Дом 150м²', '', '150 квм'), true);
});
