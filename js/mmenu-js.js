"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[9871],{

/***/ 705:
/***/ (function() {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/options.js
const options = {
    hooks: {},
    navbar: {
        add: true,
        title: 'Menu',
        titleLink: 'parent'
    },
    slidingSubmenus: true
};
/* harmony default export */ var oncanvas_options = (options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/configs.js
const configs = {
    classNames: {
        divider: 'Divider',
        nolistview: 'NoListview',
        nopanel: 'NoPanel',
        panel: 'Panel',
        selected: 'Selected',
        vertical: 'Vertical'
    },
    language: null,
    panelNodetype: ['ul', 'ol', 'div'],
    screenReader: {
        closeSubmenu: 'Close submenu',
        openSubmenu: 'Open submenu',
        toggleSubmenu: 'Toggle submenu'
    }
};
/* harmony default export */ var oncanvas_configs = (configs);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/_modules/helpers.js
/**
 * Deep extend an object with the given defaults.
 * Note that the extended object is not a clone, meaning the original object will also be updated.
 *
 * @param 	{object}	orignl	The object to extend to.
 * @param 	{object}	dfault	The object to extend from.
 * @return	{object}			The extended "orignl" object.
 */
const extend = (orignl, dfault) => {
    if (type(orignl) != 'object') {
        orignl = {};
    }
    if (type(dfault) != 'object') {
        dfault = {};
    }
    for (let k in dfault) {
        if (!dfault.hasOwnProperty(k)) {
            continue;
        }
        if (typeof orignl[k] == 'undefined') {
            orignl[k] = dfault[k];
        }
        else if (type(orignl[k]) == 'object') {
            extend(orignl[k], dfault[k]);
        }
    }
    return orignl;
};
/**
 * Detect the touch / dragging direction on a touch device.
 *
 * @param   {HTMLElement} surface   The element to monitor for touch events.
 * @return  {object}                Object with "get" function.
 */
const touchDirection = (surface) => {
    let direction = '';
    let prevPosition = null;
    surface.addEventListener('touchstart', (evnt) => {
        if (evnt.touches.length === 1) {
            direction = '';
            prevPosition = evnt.touches[0].pageY;
        }
    });
    surface.addEventListener('touchend', (evnt) => {
        if (evnt.touches.length === 0) {
            direction = '';
            prevPosition = null;
        }
    });
    surface.addEventListener('touchmove', (evnt) => {
        direction = '';
        if (prevPosition &&
            evnt.touches.length === 1) {
            const currentPosition = evnt.changedTouches[0].pageY;
            if (currentPosition > prevPosition) {
                direction = 'down';
            }
            else if (currentPosition < prevPosition) {
                direction = 'up';
            }
            prevPosition = currentPosition;
        }
    });
    return {
        get: () => direction,
    };
};
/**
 * Get the type of any given variable. Improvement of "typeof".
 *
 * @param 	{any}		variable	The variable.
 * @return	{string}				The type of the variable in lowercase.
 */
const type = (variable) => {
    return {}.toString
        .call(variable)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
};
/**
 * Get a (page wide) unique ID.
 */
const uniqueId = () => {
    return `mm-${__id++}`;
};
let __id = 0;
/**
 * Get a prefixed ID from a possibly orifinal ID.
 * @param id The possibly original ID.
 */
const cloneId = (id) => {
    if (id.slice(0, 9) == 'mm-clone-') {
        return id;
    }
    return `mm-clone-${id}`;
};
/**
 * Get the original ID from a possibly prefixed ID.
 * @param id The possibly prefixed ID.
 */
const originalId = (id) => {
    if (id.slice(0, 9) == 'mm-clone-') {
        return id.slice(9);
    }
    return id;
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/_modules/i18n.js

const translations = {};
/**
 * Show all translations.
 * @return {object}	The translations.
 */
const show = () => {
    return translations;
};
/**
 * Add translations to a language.
 * @param {object}  text        Object of key/value translations.
 * @param {string}  language    The translated language.
 */
const add = (text, language) => {
    if (typeof translations[language] === 'undefined') {
        translations[language] = {};
    }
    extend(translations[language], text);
};
/**
 * Find a translated text in a language.
 * @param   {string} text       The text to find the translation for.
 * @param   {string} language   The language to search in.
 * @return  {string}            The translated text.
 */
const get = (text, language) => {
    if (typeof language === 'string' &&
        typeof translations[language] !== 'undefined') {
        return translations[language][text] || text;
    }
    return text;
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/de.js
/* harmony default export */ var de = ({
    'Close submenu': 'Untermenü schließen',
    'Menu': 'Menü',
    'Open submenu': 'Untermenü öffnen',
    'Toggle submenu': 'Untermenü wechseln'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/fa.js
/* harmony default export */ var fa = ({
    'Close submenu': 'بستن زیرمنو',
    'Menu': 'منو',
    'Open submenu': 'بازکردن زیرمنو',
    'Toggle submenu': 'سوییچ زیرمنو'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/nl.js
/* harmony default export */ var nl = ({
    'Close submenu': 'Submenu sluiten',
    'Menu': 'Menu',
    'Open submenu': 'Submenu openen',
    'Toggle submenu': 'Submenu wisselen'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/pt_br.js
/* harmony default export */ var pt_br = ({
    'Close submenu': 'Fechar submenu',
    'Menu': 'Menu',
    'Open submenu': 'Abrir submenu',
    'Toggle submenu': 'Alternar submenu'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/ru.js
/* harmony default export */ var ru = ({
    'Close submenu': 'Закрыть подменю',
    'Menu': 'Меню',
    'Open submenu': 'Открыть подменю',
    'Toggle submenu': 'Переключить подменю'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/sk.js
/* harmony default export */ var sk = ({
    'Close submenu': 'Zatvoriť submenu',
    'Menu': 'Menu',
    'Open submenu': 'Otvoriť submenu',
    'Toggle submenu': 'Prepnúť submenu'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/uk.js
/* harmony default export */ var uk = ({
    'Close submenu': 'Закрити підменю',
    'Menu': 'Меню',
    'Open submenu': 'Відкрити підменю',
    'Toggle submenu': 'Перемкнути підменю'
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/translations/index.js








/* harmony default export */ function oncanvas_translations() {
    add(de, 'de');
    add(fa, 'fa');
    add(nl, 'nl');
    add(pt_br, 'pt_br');
    add(ru, 'ru');
    add(sk, 'sk');
    add(uk, 'uk');
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/_modules/dom.js
/**
 * Create an element with classname.
 *
 * @param 	{string}		selector	The nodeName and classnames for the element to create.
 * @return	{HTMLElement}				The created element.
 */
const create = (selector) => {
    const args = selector.split('.'), elem = document.createElement(args.shift());
    elem.classList.add(...args);
    return elem;
};
/**
 * Find all elements matching the selector.
 * Basically the same as element.querySelectorAll() but it returns an actuall array.
 *
 * @param 	{HTMLElement} 	element Element to search in.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of elements that match the filter.
 */
const find = (element, filter) => {
    return filter.length ? [].slice.call(element.querySelectorAll(filter)) : [];
};
/**
 * Find all child elements matching the (optional) selector.
 *
 * @param 	{HTMLElement} 	element Element to search in.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of child elements that match the filter.
 */
const dom_children = (element, filter) => {
    const children = Array.prototype.slice.call(element.children);
    return filter
        ? children.filter((child) => child.matches(filter))
        : children;
};
/**
 * Find all text from direct child element.
 *
 * @param 	{HTMLElement} 	element Element to search in.
 * @return	{string}				The text.
 */
const childText = (element) => {
    return element
        ? [].slice.call(element.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.nodeValue.trim())
            .join(' ')
        : '';
};
/**
 * Find text excluding text from within child elements.
 * @param   {HTMLElement}   element Element to search in.
 * @return  {string}                The text.
 */
const dom_text = (element) => {
    return [].slice.call(element.childNodes)
        .filter((child) => !child.ariaHidden)
        .map((child) => child.textContent)
        .join(' ');
};
/**
 * Find all preceding elements matching the selector.
 *
 * @param 	{HTMLElement} 	element Element to start searching from.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of preceding elements that match the selector.
 */
const parents = (element, filter) => {
    /** Array of preceding elements that match the selector. */
    let parents = [];
    /** Array of preceding elements that match the selector. */
    let parent = element.parentElement;
    while (parent) {
        parents.push(parent);
        parent = parent.parentElement;
    }
    return filter
        ? parents.filter((parent) => parent.matches(filter))
        : parents;
};
/**
 * Find all previous siblings matching the selecotr.
 *
 * @param 	{HTMLElement} 	element Element to start searching from.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of previous siblings that match the selector.
 */
const prevAll = (element, filter) => {
    /** Array of previous siblings that match the selector. */
    let previous = [];
    /** Current element in the loop */
    let current = element.previousElementSibling;
    while (current) {
        if (!filter || current.matches(filter)) {
            previous.push(current);
        }
        current = current.previousElementSibling;
    }
    return previous;
};
/**
 * Get an element offset relative to the document.
 *
 * @param 	{HTMLElement}	 element 			Element to start measuring from.
 * @param 	{string}		 [direction=top] 	Offset top or left.
 * @return	{number}							The element offset relative to the document.
 */
const offset = (element, direction) => {
    return (element.getBoundingClientRect()[direction] +
        document.body[direction === 'left' ? 'scrollLeft' : 'scrollTop']);
};
/**
 * Filter out non-listitem listitems.
 * @param  {array} listitems 	Elements to filter.
 * @return {array}				The filtered set of listitems.
 */
const filterLI = (listitems) => {
    return listitems.filter((listitem) => !listitem.matches('.mm-hidden'));
};
/**
 * Find anchors in listitems (excluding anchor that open a sub-panel).
 * @param  {array} 	listitems 	Elements to filter.
 * @return {array}				The found set of anchors.
 */
const filterLIA = (listitems) => {
    let anchors = [];
    filterLI(listitems).forEach((listitem) => {
        anchors.push(...dom_children(listitem, 'a.mm-listitem__text'));
    });
    return anchors.filter((anchor) => !anchor.matches('.mm-btn--next'));
};
/**
 * Refactor a classname on multiple elements.
 * @param {HTMLElement} element 	Element to refactor.
 * @param {string}		oldClass 	Classname to remove.
 * @param {string}		newClass 	Classname to add.
 */
const reClass = (element, oldClass, newClass) => {
    if (element.matches('.' + oldClass)) {
        element.classList.add(newClass);
    }
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/_modules/matchmedia.js
/** Collection of callback functions for media querys. */
let listeners = {};
/**
 * Bind functions to a matchMedia listener (subscriber).
 *
 * @param {string|number} 	query 	Media query to match or number for min-width.
 * @param {function} 		yes 	Function to invoke when the media query matches.
 * @param {function} 		no 		Function to invoke when the media query doesn't match.
 */
const matchmedia_add = (query, yes, no) => {
    if (typeof query == 'number') {
        query = '(min-width: ' + query + 'px)';
    }
    listeners[query] = listeners[query] || [];
    listeners[query].push({ yes, no });
};
/**
 * Initialize the matchMedia listener.
 */
const watch = () => {
    for (let query in listeners) {
        let mqlist = window.matchMedia(query);
        fire(query, mqlist);
        mqlist.onchange = (evnt) => {
            fire(query, mqlist);
        };
    }
};
/**
 * Invoke the "yes" or "no" function for a matchMedia listener (publisher).
 *
 * @param {string} 			query 	Media query to check for.
 * @param {MediaQueryList} 	mqlist 	Media query list to check with.
 */
const fire = (query, mqlist) => {
    var fn = mqlist.matches ? 'yes' : 'no';
    for (let m = 0; m < listeners[query].length; m++) {
        listeners[query][m][fn]();
    }
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _panelObserver, _listviewObserver, _listitemObserver;







//  Add the translations.
oncanvas_translations();
/**
 * Class for a mobile menu.
 */
class mmenu_oncanvas_Mmenu {
    /**
     * Create a mobile menu.
     * @param {HTMLElement|string} 	menu		The menu node.
     * @param {object} 				[option]	Options for the menu.
     * @param {object} 				[configs]	Configuration options for the menu.
     */
    constructor(menu, options, configs) {
        /** MutationObserver for adding a listview to a panel. */
        _panelObserver.set(this, void 0);
        /** MutationObserver for adding a listitem to a listview. */
        _listviewObserver.set(this, void 0);
        /** MutationObserver for adding a listview to a listitem. */
        _listitemObserver.set(this, void 0);
        //	Extend options and configuration from defaults.
        this.opts = extend(options, oncanvas_options);
        this.conf = extend(configs, oncanvas_configs);
        //	Methods to expose in the API.
        this._api = [
            'i18n',
            'bind',
            'openPanel',
            'closePanel',
            'setSelected',
        ];
        //	Storage objects for nodes and hooks.
        this.node = {};
        this.hook = {};
        //	Get menu node from string or element.
        this.node.menu =
            typeof menu == 'string' ? document.querySelector(menu) : menu;
        if (typeof this._deprecatedWarnings == 'function') {
            this._deprecatedWarnings();
        }
        this.trigger('init:before');
        this._initObservers();
        this._initAddons();
        this._initHooks();
        this._initAPI();
        this._initMenu();
        this._initPanels();
        this._initOpened();
        watch();
        this.trigger('init:after');
        return this;
    }
    /**
     * Open a panel.
     * @param {HTMLElement} panel               Panel to open.
     * @param {boolean}     [animation=true]    Whether or not to use an animation.
     * @param {boolean}     [setfocus=true]     Whether or not to set focus to the panel.
     */
    openPanel(panel, animation = true, setfocus = true) {
        //	Find panel.
        if (!panel) {
            return;
        }
        panel = panel.closest('.mm-panel');
        //	Invoke "before" hook.
        this.trigger('openPanel:before', [panel, {
                animation,
                setfocus
            }]);
        /** Wrapping listitem (for a vertical panel) */
        const listitem = panel.closest('.mm-listitem--vertical');
        //	Open a "vertical" panel.
        if (listitem) {
            listitem.classList.add('mm-listitem--opened');
            /** The parent panel */
            const parent = listitem.closest('.mm-panel');
            this.openPanel(parent);
            //	Open a "horizontal" panel.
        }
        else {
            /** Currently opened panel. */
            const current = dom_children(this.node.pnls, '.mm-panel--opened')[0];
            //  Ensure current panel stays on top while closing it.
            if (panel.matches('.mm-panel--parent') && current) {
                current.classList.add('mm-panel--highest');
            }
            //  Remove opened, parent, animation and highest classes from all panels.
            const remove = ['mm-panel--opened', 'mm-panel--parent'];
            const add = [];
            if (animation) {
                remove.push('mm-panel--noanimation');
            }
            else {
                add.push('mm-panel--noanimation');
            }
            dom_children(this.node.pnls, '.mm-panel').forEach(pnl => {
                pnl.classList.add(...add);
                pnl.classList.remove(...remove);
                if (pnl !== current) {
                    pnl.classList.remove('mm-panel--highest');
                }
                // Set inert attribute.
                if (pnl === panel) {
                    pnl.removeAttribute('inert');
                }
                else {
                    pnl.setAttribute('inert', 'true');
                }
            });
            //  Open new panel.
            panel.classList.add('mm-panel--opened');
            /** The parent panel */
            let parent = find(this.node.pnls, `#${panel.dataset.mmParent}`)[0];
            //	Set parent panels as "parent".
            while (parent) {
                parent = parent.closest('.mm-panel');
                parent.classList.add('mm-panel--parent');
                parent = find(this.node.pnls, `#${parent.dataset.mmParent}`)[0];
            }
        }
        //	Invoke "after" hook.
        this.trigger('openPanel:after', [panel, {
                animation,
                setfocus
            }]);
    }
    /**
     * Close a panel.
     * @param {HTMLElement} panel               Panel to close.
     * @param {boolean}     [animation=true]    Whether or not to use an animation.
     * @param {boolean}     [setfocus=true]     Whether or not to set focus to the panel.
     */
    closePanel(panel, animation = true, setfocus = true) {
        if (!panel) {
            return;
        }
        if (!panel.matches('.mm-panel--opened') &&
            !panel.parentElement.matches('.mm-listitem--opened')) {
            return;
        }
        //	Invoke "before" hook.
        this.trigger('closePanel:before', [panel]);
        //	Close a "vertical" panel.
        if (panel.parentElement.matches('.mm-listitem--vertical')) {
            panel.parentElement.classList.remove('mm-listitem--opened');
            //  Close a "horizontal" panel...
        }
        else {
            //  ... open its parent...
            if (panel.dataset.mmParent) {
                const parent = find(this.node.pnls, `#${panel.dataset.mmParent}`)[0];
                this.openPanel(parent, animation, setfocus);
                // ... or the last opened
            }
            else {
                const lastPanel = dom_children(this.node.pnls, '.mm-panel--parent').pop();
                if (lastPanel && lastPanel !== panel) {
                    this.openPanel(lastPanel, animation, setfocus);
                    // ... or the first panel.
                }
                else {
                    const firstPanel = dom_children(this.node.pnls, '.mm-panel')[0];
                    if (firstPanel && firstPanel !== panel) {
                        this.openPanel(firstPanel, animation, setfocus);
                    }
                }
            }
        }
        //	Invoke "after" hook.
        this.trigger('closePanel:after', [panel]);
    }
    /**
     * Toggle a panel opened/closed.
     * @param {HTMLElement} panel Panel to open or close.
     */
    togglePanel(panel) {
        const listitem = panel.parentElement;
        /** The function to invoke (open or close). */
        let fn = 'openPanel';
        //	Toggle only works for "vertical" panels.
        if (listitem.matches('.mm-listitem--opened') ||
            panel.matches('.mm-panel--opened')) {
            fn = 'closePanel';
        }
        this[fn](panel);
    }
    /**
     * Display a listitem as being "selected".
     * @param {HTMLElement} listitem Listitem to mark.
     */
    setSelected(listitem) {
        //	Invoke "before" hook.
        this.trigger('setSelected:before', [listitem]);
        //	Remove the selected class from all listitems.
        find(this.node.menu, '.mm-listitem--selected').forEach((li) => {
            li.classList.remove('mm-listitem--selected');
        });
        //	Add the selected class to the provided listitem.
        listitem.classList.add('mm-listitem--selected');
        //	Invoke "after" hook.
        this.trigger('setSelected:after', [listitem]);
    }
    /**
     * Bind functions to a hook (subscriber).
     * @param {string} 		hook The hook.
     * @param {function} 	func The function.
     */
    bind(hook, func) {
        //	Create an array for the hook if it does not yet excist.
        this.hook[hook] = this.hook[hook] || [];
        //	Push the function to the array.
        this.hook[hook].push(func);
    }
    /**
     * Invoke the functions bound to a hook (publisher).
     * @param {string} 	hook  	The hook.
     * @param {array}	[args] 	Arguments for the function.
     */
    trigger(hook, args) {
        if (this.hook[hook]) {
            for (var h = 0, l = this.hook[hook].length; h < l; h++) {
                this.hook[hook][h].apply(this, args);
            }
        }
    }
    /**
     * Create the observers.
     */
    _initObservers() {
        __classPrivateFieldSet(this, _panelObserver, new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                mutation.addedNodes.forEach((listview) => {
                    if (listview.matches(this.conf.panelNodetype.join(', '))) {
                        this._initListview(listview);
                    }
                });
            });
        }));
        __classPrivateFieldSet(this, _listviewObserver, new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                mutation.addedNodes.forEach((listitem) => {
                    this._initListitem(listitem);
                });
            });
        }));
        __classPrivateFieldSet(this, _listitemObserver, new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                mutation.addedNodes.forEach((subpanel) => {
                    if (subpanel === null || subpanel === void 0 ? void 0 : subpanel.matches(this.conf.panelNodetype.join(', '))) {
                        this._initSubPanel(subpanel);
                    }
                });
            });
        }));
    }
    /**
     * Create the API.
     */
    _initAPI() {
        //	We need this=that because:
        //	1) the "arguments" object can not be referenced in an arrow function in ES3 and ES5.
        const that = this;
        this.API = {};
        this._api.forEach((fn) => {
            this.API[fn] = function () {
                return that[fn].apply(that, arguments); // 1)
            };
        });
        //	Store the API in the HTML node for external usage.
        this.node.menu['mmApi'] = this.API;
    }
    /**
     * Bind the hooks specified in the options (publisher).
     */
    _initHooks() {
        for (let hook in this.opts.hooks) {
            this.bind(hook, this.opts.hooks[hook]);
        }
    }
    /**
     * Initialize all available add-ons.
     */
    _initAddons() {
        //	Invoke "before" hook.
        this.trigger('initAddons:before');
        for (let addon in mmenu_oncanvas_Mmenu.addons) {
            mmenu_oncanvas_Mmenu.addons[addon].call(this);
        }
        //	Invoke "after" hook.
        this.trigger('initAddons:after');
    }
    /**
     * Initialize the menu.
     */
    _initMenu() {
        //	Invoke "before" hook.
        this.trigger('initMenu:before');
        //	Add class to the wrapper.
        this.node.wrpr = this.node.wrpr || this.node.menu.parentElement;
        this.node.wrpr.classList.add('mm-wrapper');
        //	Add class to the menu.
        this.node.menu.classList.add('mm-menu');
        //	Add an ID to the menu if it does not yet have one.
        this.node.menu.id = this.node.menu.id || uniqueId();
        this.node.menu.setAttribute('aria-label', this.i18n(this.opts.navbar.title || 'Menu'));
        this.node.menu.setAttribute('aria-modal', 'true');
        this.node.menu.setAttribute('role', 'dialog');
        /** All panel nodes in the menu. */
        const panels = dom_children(this.node.menu).filter((panel) => panel.matches(this.conf.panelNodetype.join(', ')));
        //	Wrap the panels in a node.
        this.node.pnls = create('div.mm-panels');
        this.node.menu.append(this.node.pnls);
        //  Initiate all panel like nodes
        panels.forEach((panel) => {
            this._initPanel(panel);
        });
        //	Invoke "after" hook.
        this.trigger('initMenu:after');
    }
    /**
     * Initialize panels.
     */
    _initPanels() {
        //	Invoke "before" hook.
        this.trigger('initPanels:before');
        //	Open / close panels.
        this.node.menu.addEventListener('click', event => {
            var _a, _b;
            /** The href attribute for the clicked anchor. */
            const href = ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('a[href]')) === null || _b === void 0 ? void 0 : _b.getAttribute('href')) || '';
            if (href.slice(0, 1) === '#') {
                try {
                    /** The targeted panel */
                    const panel = find(this.node.menu, href)[0];
                    if (panel) {
                        event.preventDefault();
                        this.togglePanel(panel);
                    }
                }
                catch (err) { }
            }
        }, {
            // useCapture to ensure the logical order.
            capture: true
        });
        //	Invoke "after" hook.
        this.trigger('initPanels:after');
    }
    /**
     * Initialize a single panel.
     * @param  {HTMLElement} 		panel 	Panel to initialize.
     * @return {HTMLElement|null} 			Initialized panel.
     */
    _initPanel(panel) {
        var _a;
        if (panel.matches('.mm-panel')) {
            return;
        }
        //	Refactor panel classnames
        reClass(panel, this.conf.classNames.panel, 'mm-panel');
        reClass(panel, this.conf.classNames.nopanel, 'mm-nopanel');
        //	Stop if not supposed to be a panel.
        if (panel.matches('.mm-nopanel')) {
            return;
        }
        //	Invoke "before" hook.
        this.trigger('initPanel:before', [panel]);
        //  Must have an ID
        panel.id = panel.id || uniqueId();
        //	Wrap UL/OL in DIV
        if (panel.matches('ul, ol')) {
            /** The panel. */
            const wrapper = create('div');
            //  Transport the ID
            wrapper.id = panel.id;
            panel.removeAttribute('id');
            //  Transport "mm-" prefixed classnames.
            [].slice
                .call(panel.classList)
                .filter((classname) => classname.slice(0, 3) === 'mm-')
                .forEach((classname) => {
                wrapper.classList.add(classname);
                panel.classList.remove(classname);
            });
            //  Transport "mm" prefixed data attributes.
            Object.keys(panel.dataset)
                .filter((attr) => attr.slice(0, 2) === 'mm')
                .forEach(attr => {
                wrapper.dataset[attr] = panel.dataset[attr];
                delete panel.dataset[attr];
            });
            //	Wrap the listview in the panel.
            panel.before(wrapper);
            wrapper.append(panel);
            panel = wrapper;
        }
        panel.classList.add('mm-panel');
        //  Append to the panels node if not vertically expanding
        if (!((_a = panel.parentElement) === null || _a === void 0 ? void 0 : _a.matches('.mm-listitem--vertical'))) {
            this.node.pnls.append(panel);
        }
        //  Initialize tha navbar.
        this._initNavbar(panel);
        //  Initialize the listview(s).
        dom_children(panel, 'ul, ol').forEach((listview) => {
            this._initListview(listview);
        });
        // Observe the panel for added listviews.
        __classPrivateFieldGet(this, _panelObserver).observe(panel, {
            childList: true,
        });
        //	Invoke "after" hook.
        this.trigger('initPanel:after', [panel]);
        return panel;
    }
    /**
     * Initialize a navbar.
     * @param {HTMLElement} panel Panel for the navbar.
     */
    _initNavbar(panel) {
        //	Only one navbar per panel.
        if (dom_children(panel, '.mm-navbar').length) {
            return;
        }
        /** The parent listitem. */
        let parentListitem = null;
        /** The parent panel. */
        let parentPanel = null;
        //  The parent listitem and parent panel
        if (panel.dataset.mmParent) {
            parentListitem = find(this.node.pnls, `#${panel.dataset.mmParent}`)[0];
            parentPanel = parentListitem.closest('.mm-panel');
            while (parentPanel.closest('.mm-listitem--vertical')) {
                parentPanel = parentPanel.parentElement.closest('.mm-panel');
            }
        }
        //  No navbar needed for vertical submenus.
        if (parentListitem === null || parentListitem === void 0 ? void 0 : parentListitem.matches('.mm-listitem--vertical')) {
            return;
        }
        //	Invoke "before" hook.
        this.trigger('initNavbar:before', [panel]);
        /** The navbar element. */
        const navbar = create('div.mm-navbar');
        //  Hide navbar if specified in options.
        if (!this.opts.navbar.add) {
            navbar.classList.add('mm-hidden');
        }
        //  Add the back button.
        if (parentPanel) {
            /** The back button. */
            const prev = create('a.mm-btn.mm-btn--prev.mm-navbar__btn');
            prev.href = `#${parentPanel.id}`;
            prev.setAttribute('aria-label', this.i18n(this.conf.screenReader.closeSubmenu));
            navbar.append(prev);
        }
        /** The anchor that opens the panel. */
        let opener = null;
        //  The anchor is in a listitem.
        if (parentListitem) {
            opener = dom_children(parentListitem, '.mm-listitem__text')[0];
        }
        //  The anchor is in a panel.
        else if (parentPanel) {
            opener = find(parentPanel, 'a[href="#' + panel.id + '"]')[0];
        }
        //  Add the title.
        /** The title */
        const title = create('a.mm-navbar__title');
        title.tabIndex = -1;
        title.setAttribute('aria-hidden', 'true');
        switch (this.opts.navbar.titleLink) {
            case 'anchor':
                if (opener) {
                    title.href = opener.getAttribute('href');
                }
                break;
            case 'parent':
                if (parentPanel) {
                    title.href = `#${parentPanel.id}`;
                }
                break;
        }
        /** Text in the title */
        const titleText = create('span');
        titleText.innerHTML =
            panel.dataset.mmTitle ||
                childText(opener) ||
                this.i18n(this.opts.navbar.title || 'Menu');
        //  Add to DOM
        panel.prepend(navbar);
        navbar.append(title);
        title.append(titleText);
        //	Invoke "after" hook.
        this.trigger('initNavbar:after', [panel]);
    }
    /**
     * Initialize a listview.
     * @param {HTMLElement} listview Listview to initialize.
     */
    _initListview(listview) {
        //  Assert UL
        if (!['htmlulistelement', 'htmlolistelement'].includes(type(listview))) {
            return;
        }
        if (listview.matches('.mm-listview')) {
            return;
        }
        reClass(listview, this.conf.classNames.nolistview, 'mm-nolistview');
        if (listview.matches('.mm-nolistview')) {
            return;
        }
        //	Invoke "before" hook.
        this.trigger('initListview:before', [listview]);
        listview.classList.add('mm-listview');
        //  Initiate the listitem(s).
        dom_children(listview).forEach((listitem) => {
            this._initListitem(listitem);
        });
        // Observe the listview for added listitems.
        __classPrivateFieldGet(this, _listviewObserver).observe(listview, {
            childList: true,
        });
        //	Invoke "after" hook.
        this.trigger('initListview:after', [listview]);
    }
    /**
     * Initialte a listitem.
     * @param {HTMLElement} listitem Listitem to initiate.
     */
    _initListitem(listitem) {
        //  Assert LI
        if (!['htmllielement'].includes(type(listitem))) {
            return;
        }
        if (listitem.matches('.mm-listitem')) {
            return;
        }
        reClass(listitem, this.conf.classNames.divider, 'mm-divider');
        if (listitem.matches('.mm-divider')) {
            return;
        }
        //	Invoke "before" hook.
        this.trigger('initListitem:before', [listitem]);
        listitem.classList.add('mm-listitem');
        reClass(listitem, this.conf.classNames.selected, 'mm-listitem--selected');
        dom_children(listitem, 'a, span').forEach((text) => {
            text.classList.add('mm-listitem__text');
        });
        //  Initiate the subpanel.
        dom_children(listitem, this.conf.panelNodetype.join(', ')).forEach((subpanel) => {
            this._initSubPanel(subpanel);
        });
        // Observe the listitem for added listviews.
        __classPrivateFieldGet(this, _listitemObserver).observe(listitem, {
            childList: true,
        });
        //	Invoke "after" hook.
        this.trigger('initListitem:after', [listitem]);
    }
    /**
     * Initiate a subpanel.
     * @param {HTMLElement} subpanel Subpanel to initiate.
     */
    _initSubPanel(subpanel) {
        if (subpanel.matches('.mm-panel')) {
            return;
        }
        /** The parent element for the panel. */
        const listitem = subpanel.parentElement;
        /** Whether or not the listitem expands vertically */
        const vertical = subpanel.matches('.' + this.conf.classNames.vertical) ||
            !this.opts.slidingSubmenus;
        // Make it expand vertically
        if (vertical) {
            listitem.classList.add('mm-listitem--vertical');
        }
        //  Force an ID
        listitem.id = listitem.id || uniqueId();
        subpanel.id = subpanel.id || uniqueId();
        //  Store parent/child relation
        listitem.dataset.mmChild = subpanel.id;
        subpanel.dataset.mmParent = listitem.id;
        /** The open link. */
        let button = dom_children(listitem, '.mm-btn')[0];
        //  Init item text
        if (!button) {
            button = create('a.mm-btn.mm-btn--next.mm-listitem__btn');
            dom_children(listitem, 'a, span').forEach((text) => {
                //  If the item has no link,
                //      Replace the item with the open link.
                if (text.matches('span')) {
                    button.classList.add('mm-listitem__text');
                    button.innerHTML = text.innerHTML;
                    listitem.insertBefore(button, text.nextElementSibling);
                    text.remove();
                }
                //  Otherwise, insert the button after the text.
                else {
                    listitem.insertBefore(button, text.nextElementSibling);
                }
            });
            button.setAttribute('aria-label', this.i18n(this.conf.screenReader[listitem.matches('.mm-listitem--vertical')
                ? 'toggleSubmenu'
                : 'openSubmenu']));
        }
        button.href = `#${subpanel.id}`;
        this._initPanel(subpanel);
    }
    /**
     * Find and open the correct panel after creating the menu.
     */
    _initOpened() {
        //	Invoke "before" hook.
        this.trigger('initOpened:before');
        /** The selected listitem(s). */
        const listitem = find(this.node.pnls, '.mm-listitem--selected').pop();
        /**	The current opened panel. */
        let panel = dom_children(this.node.pnls, '.mm-panel')[0];
        if (listitem) {
            this.setSelected(listitem);
            panel = listitem.closest('.mm-panel');
        }
        //	Open the current opened panel.
        this.openPanel(panel, false, false);
        //	Invoke "after" hook.
        this.trigger('initOpened:after');
    }
    /**
     * Get the translation for a text.
     * @param  {string}     text 	Text to translate.
     * @return {string}		        The translated text.
     */
    i18n(text) {
        return get(text, this.conf.language);
    }
    /**
     * Get all translations for the given language.
     * @return {object}	The translations.
     */
    static i18n(text = {}, language = '') {
        if (text && language) {
            add(text, language);
        }
        else {
            return show();
        }
    }
}
_panelObserver = new WeakMap(), _listviewObserver = new WeakMap(), _listitemObserver = new WeakMap();
/**	Available add-ons for the plugin. */
mmenu_oncanvas_Mmenu.addons = {};
/**	Globally used HTML elements. */
mmenu_oncanvas_Mmenu.node = {};
/** Globally used v. */
mmenu_oncanvas_Mmenu.vars = {};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/offcanvas/options.js
const options_options = {
    use: true,
    position: 'left'
};
/* harmony default export */ var offcanvas_options = (options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/offcanvas/configs.js
const configs_configs = {
    clone: false,
    menu: {
        insertMethod: 'append',
        insertSelector: 'body'
    },
    page: {
        nodetype: 'div',
        selector: null,
        noSelector: []
    },
    screenReader: {
        closeMenu: 'Close menu',
        openMenu: 'Open menu',
    }
};
/* harmony default export */ var offcanvas_configs = (configs_configs);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/offcanvas/mmenu.offcanvas.js





const possiblePositions = [
    'left',
    'left-front',
    'right',
    'right-front',
    'top',
    'bottom'
];
/* harmony default export */ function mmenu_offcanvas() {
    this.opts.offCanvas = this.opts.offCanvas || {};
    this.conf.offCanvas = this.conf.offCanvas || {};
    //	Extend options.
    const options = extend(this.opts.offCanvas, offcanvas_options);
    const configs = extend(this.conf.offCanvas, offcanvas_configs);
    if (!options.use) {
        return;
    }
    if (!possiblePositions.includes(options.position)) {
        options.position = possiblePositions[0];
    }
    //	Add methods to the API.
    this._api.push('open', 'close', 'setPage', 'position');
    //  Clone menu if needed.
    if (configs.clone) {
        //	Clone the original menu and store it.
        this.node.menu = this.node.menu.cloneNode(true);
        //	Prefix all ID's in the cloned menu.
        if (this.node.menu.id) {
            this.node.menu.id = cloneId(this.node.menu.id);
        }
        find(this.node.menu, '[id]').forEach((elem) => {
            elem.id = cloneId(elem.id);
        });
    }
    //  Prepend the menu to the <body>.
    this.bind('initMenu:before', () => {
        this.node.wrpr = document.querySelector(configs.menu.insertSelector);
        this.node.wrpr[configs.menu.insertMethod](this.node.menu);
    });
    //	Setup the UI blocker.
    if (!mmenu_oncanvas_Mmenu.node.blck) {
        this.bind('initMenu:before', () => {
            /** The UI blocker node. */
            const blocker = create('a.mm-wrapper__blocker.mm-blocker.mm-slideout');
            blocker.id = uniqueId();
            blocker.setAttribute('aria-label', this.i18n(configs.screenReader.closeMenu));
            blocker.setAttribute('inert', 'true');
            //	Append the blocker node to the body.
            document.querySelector(configs.menu.insertSelector).append(blocker);
            //	Store the blocker node.
            mmenu_oncanvas_Mmenu.node.blck = blocker;
        });
    }
    this.bind('initMenu:after', () => {
        //	Setup the page.
        this.setPage(mmenu_oncanvas_Mmenu.node.page);
        //	Setup the menu.
        this.node.menu.classList.add('mm-menu--offcanvas');
        this.node.menu.setAttribute('inert', 'true');
        if (possiblePositions.includes(options.position)) {
            this.node.wrpr.classList.add(`mm-wrapper--position-${options.position}`);
            this.node.menu.classList.add(`mm-menu--position-${options.position}`);
        }
        //	Open if url hash equals menu id (usefull when user clicks the hamburger icon before the menu is created)
        let hash = window.location.hash;
        if (hash) {
            let id = originalId(this.node.menu.id);
            if (id && id == hash.slice(1)) {
                setTimeout(() => {
                    this.open();
                }, 1000);
            }
        }
    });
    //	Open / close the menu.
    document.addEventListener('click', event => {
        var _a;
        /** THe href attribute for the clicked anchor. */
        const href = (_a = event.target.closest('a')) === null || _a === void 0 ? void 0 : _a.getAttribute('href');
        switch (href) {
            //	Open menu if the clicked anchor links to the menu.
            case `#${originalId(this.node.menu.id)}`:
                event.preventDefault();
                this.open();
                break;
            //	Close menu if the clicked anchor links to the page.
            case `#${originalId(mmenu_oncanvas_Mmenu.node.page.id)}`:
                event.preventDefault();
                this.close();
                break;
        }
    });
    //	Close the menu with ESC key.
    document.addEventListener('keyup', (event) => {
        if (event.key == 'Escape') {
            this.close();
        }
    });
}
/**
 * Open the menu.
 */
mmenu_oncanvas_Mmenu.prototype.open = function () {
    if (this.node.menu.matches('.mm-menu--opened')) {
        return;
    }
    //	Invoke "before" hook.
    this.trigger('open:before');
    //	Open
    this.node.wrpr.classList.add('mm-wrapper--opened', `mm-wrapper--position-${this.opts.offCanvas.position}`);
    this.node.menu.classList.add('mm-menu--opened');
    this.node.menu.removeAttribute('inert');
    mmenu_oncanvas_Mmenu.node.blck.removeAttribute('inert');
    mmenu_oncanvas_Mmenu.node.page.setAttribute('inert', 'true');
    //  Store the last focesed element.
    this.node.open = document.activeElement;
    //	Invoke "after" hook.
    this.trigger('open:after');
};
/**
 * Close the menu.
 */
mmenu_oncanvas_Mmenu.prototype.close = function () {
    var _a;
    if (!this.node.menu.matches('.mm-menu--opened')) {
        return;
    }
    //	Invoke "before" hook.
    this.trigger('close:before');
    this.node.wrpr.classList.remove('mm-wrapper--opened', `mm-wrapper--position-${this.opts.offCanvas.position}`);
    this.node.menu.classList.remove('mm-menu--opened');
    this.node.menu.setAttribute('inert', 'true');
    mmenu_oncanvas_Mmenu.node.blck.setAttribute('inert', 'true');
    mmenu_oncanvas_Mmenu.node.page.removeAttribute('inert');
    /** Element to focus. */
    const focus = this.node.open || document.querySelector(`[href="#${this.node.menu.id}"]`) || null;
    (_a = focus) === null || _a === void 0 ? void 0 : _a.focus();
    // Prevent html/body from scrolling due to focus.
    document.body.scrollLeft = 0;
    document.documentElement.scrollLeft = 0;
    //	Invoke "after" hook.
    this.trigger('close:after');
};
/**
 * Set the "page" node.
 *
 * @param {HTMLElement} page Element to set as the page.
 */
mmenu_oncanvas_Mmenu.prototype.setPage = function (page) {
    /** Offcanvas config */
    const configs = this.conf.offCanvas;
    //	If no page was specified, find it.
    if (!page) {
        /** Array of elements that are / could be "the page". */
        let pages = typeof configs.page.selector == 'string'
            ? find(document.body, configs.page.selector)
            : dom_children(document.body, configs.page.nodetype);
        //	Filter out elements that are absolutely not "the page".
        pages = pages.filter((page) => !page.matches('.mm-menu, .mm-wrapper__blocker'));
        //	Filter out elements that are configured to not be "the page".
        if (configs.page.noSelector.length) {
            pages = pages.filter((page) => !page.matches(configs.page.noSelector.join(', ')));
        }
        //	Wrap multiple pages in a single element.
        if (pages.length > 1) {
            let wrapper = create('div');
            pages[0].before(wrapper);
            pages.forEach((page) => {
                wrapper.append(page);
            });
            pages = [wrapper];
        }
        page = pages[0];
    }
    //	Invoke "before" hook.
    this.trigger('setPage:before', [page]);
    //  Set the classes
    page.classList.add('mm-page', 'mm-slideout');
    //  Set the ID.
    page.id = page.id || uniqueId();
    //	Sync the blocker to target the page.
    mmenu_oncanvas_Mmenu.node.blck.setAttribute('href', `#${page.id}`);
    //	Store the page node.
    mmenu_oncanvas_Mmenu.node.page = page;
    //	Invoke "after" hook.
    this.trigger('setPage:after', [page]);
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/scrollbugfix/options.js
const scrollbugfix_options_options = {
    fix: true
};
/* harmony default export */ var scrollbugfix_options = (scrollbugfix_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/_modules/support.js
/** Whether or not touch gestures are supported by the browser. */
const touch = 'ontouchstart' in window ||
    (navigator.msMaxTouchPoints ? true : false) ||
    false;

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix.js




/* harmony default export */ function mmenu_scrollbugfix() {
    //	The scrollBugFix add-on fixes a scrolling bug
    //		1) on touch devices
    //		2) in an off-canvas menu
    if (!touch || // 1
        !this.opts.offCanvas.use // 2
    ) {
        return;
    }
    this.opts.scrollBugFix = this.opts.scrollBugFix || {};
    //	Extend options.
    const options = extend(this.opts.scrollBugFix, scrollbugfix_options);
    if (!options.fix) {
        return;
    }
    /** The touch-direction instance. */
    const touchDir = touchDirection(this.node.menu);
    //  Prevent the page from scrolling when scrolling in the menu.
    this.node.menu.addEventListener('scroll', evnt => {
        evnt.preventDefault();
        evnt.stopPropagation();
    }, {
        //  Make sure to tell the browser the event will be prevented.
        passive: false,
    });
    //  Prevent the page from scrolling when dragging in the menu.
    this.node.menu.addEventListener('touchmove', evnt => {
        let wrapper = evnt.target.closest('.mm-panel, .mm-iconbar__top, .mm-iconbar__bottom');
        if (wrapper && wrapper.closest('.mm-listitem--vertical')) {
            wrapper = parents(wrapper, '.mm-panel').pop();
        }
        if (wrapper) {
            //  When dragging a non-scrollable panel/iconbar,
            //      we can simply stopPropagation.
            if (wrapper.scrollHeight === wrapper.offsetHeight) {
                evnt.stopPropagation();
            }
            //  When dragging a scrollable panel/iconbar,
            //      that is fully scrolled up (or down).
            //      It will not trigger the scroll event when dragging down (or up) (because you can't scroll up (or down)),
            //      so we need to match the dragging direction with the scroll position before preventDefault and stopPropagation,
            //      otherwise the panel would not scroll at all in any direction.
            else if (
            //  When scrolled up and dragging down
            (wrapper.scrollTop == 0 && touchDir.get() == 'down') ||
                //  When scrolled down and dragging up
                (wrapper.scrollHeight ==
                    wrapper.scrollTop + wrapper.offsetHeight &&
                    touchDir.get() == 'up')) {
                evnt.stopPropagation();
            }
            //  When dragging anything other than a panel/iconbar.
        }
        else {
            evnt.stopPropagation();
        }
    }, {
        //  Make sure to tell the browser the event can be prevented.
        passive: false,
    });
    //  Some small additional improvements
    //	Scroll the current opened panel to the top when opening the menu.
    this.bind('open:after', () => {
        var panel = dom_children(this.node.pnls, '.mm-panel--opened')[0];
        if (panel) {
            panel.scrollTop = 0;
        }
    });
    //	Fix issue after device rotation change.
    window.addEventListener('orientationchange', (evnt) => {
        var panel = dom_children(this.node.pnls, '.mm-panel--opened')[0];
        if (panel) {
            panel.scrollTop = 0;
            //	Apparently, changing the overflow-scrolling property triggers some event :)
            panel.style['-webkit-overflow-scrolling'] = 'auto';
            panel.style['-webkit-overflow-scrolling'] = 'touch';
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/theme/options.js
const theme_options_options = 'light';
/* harmony default export */ var theme_options = (theme_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/core/theme/mmenu.theme.js


/** A list of available themes. */
const possibleThemes = [
    'light',
    'dark',
    'white',
    'black',
    'light-contrast',
    'dark-contrast',
    'white-contrast',
    'black-contrast'
];
/* harmony default export */ function mmenu_theme() {
    this.opts.theme = this.opts.theme || theme_options;
    const theme = this.opts.theme;
    if (!possibleThemes.includes(theme)) {
        this.opts.theme = possibleThemes[0];
    }
    this._api.push('theme');
    this.bind('initMenu:after', () => {
        this.theme(this.opts.theme);
    });
}
/**
 * Get or set the theme for the menu.
 *
 * @param {string} [position] The theme for the menu.
 */
mmenu_oncanvas_Mmenu.prototype.theme = function (theme = null) {
    /** The previously used theme */
    const oldTheme = this.opts.theme;
    if (theme) {
        if (possibleThemes.includes(theme)) {
            this.node.menu.classList.remove(`mm-menu--theme-${oldTheme}`);
            this.node.menu.classList.add(`mm-menu--theme-${theme}`);
            this.opts.theme = theme;
        }
    }
    else {
        return oldTheme;
    }
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/backbutton/options.js
const backbutton_options_options = {
    close: false,
    open: false
};
/* harmony default export */ var backbutton_options = (backbutton_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/backbutton/mmenu.backbutton.js



/* harmony default export */ function mmenu_backbutton() {
    this.opts.backButton = this.opts.backButton || {};
    if (!this.opts.offCanvas.use) {
        return;
    }
    //	Extend options.
    const options = extend(this.opts.backButton, backbutton_options);
    const _menu = `#${this.node.menu.id}`;
    //	Close menu
    if (options.close) {
        let states = [];
        const setStates = () => {
            states = [_menu];
            dom_children(this.node.pnls, '.mm-panel--opened, .mm-panel--parent').forEach((panel) => {
                states.push('#' + panel.id);
            });
        };
        this.bind('open:after', () => {
            history.pushState(null, '', location.pathname + location.search + _menu);
        });
        this.bind('open:after', setStates);
        this.bind('openPanel:after', setStates);
        this.bind('close:after', () => {
            states = [];
            history.back();
            history.pushState(null, '', location.pathname + location.search);
        });
        window.addEventListener('popstate', () => {
            if (this.node.menu.matches('.mm-menu--opened')) {
                if (states.length) {
                    states = states.slice(0, -1);
                    const hash = states[states.length - 1];
                    if (hash == _menu) {
                        this.close();
                    }
                    else {
                        this.openPanel(this.node.menu.querySelector(hash));
                        history.pushState(null, '', location.pathname + location.search + _menu);
                    }
                }
            }
        });
    }
    if (options.open) {
        window.addEventListener('popstate', (evnt) => {
            if (!this.node.menu.matches('.mm-menu--opened') && location.hash == _menu) {
                this.open();
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/counters/options.js
const counters_options_options = {
    add: false
};
/* harmony default export */ var counters_options = (counters_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/counters/mmenu.counters.js



/* harmony default export */ function mmenu_counters() {
    this.opts.counters = this.opts.counters || {};
    //	Extend options.
    const options = extend(this.opts.counters, counters_options);
    if (!options.add) {
        return;
    }
    /**
     * Counting the visible listitems and setting it to the counter element.
     * @param {HTMLElement} panel Panel to count LIs in.
     */
    const count = (panel) => {
        /** Parent panel for the mutated listitem. */
        const parent = this.node.pnls.querySelector(`#${panel.dataset.mmParent}`);
        if (!parent) {
            return;
        }
        /** The counter for the listitem. */
        const counter = parent.querySelector('.mm-counter');
        if (!counter) {
            return;
        }
        /** The listitems */
        const listitems = [];
        dom_children(panel, '.mm-listview').forEach((listview) => {
            listitems.push(...dom_children(listview, '.mm-listitem'));
        });
        counter.innerHTML = filterLI(listitems).length.toString();
    };
    /** Mutation observer the the listitems. */
    const listitemObserver = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.attributeName == 'class') {
                count(mutation.target.closest('.mm-panel'));
            }
        });
    });
    //	Add the counters after a listview is initiated.
    this.bind('initListview:after', (listview) => {
        /** The panel where the listview is in. */
        const panel = listview.closest('.mm-panel');
        /** The parent LI for the panel */
        const parent = this.node.pnls.querySelector(`#${panel.dataset.mmParent}`);
        if (!parent) {
            return;
        }
        /** The button inside the parent LI */
        const button = dom_children(parent, '.mm-btn')[0];
        if (!button) {
            return;
        }
        //	Check if no counter already excists.
        if (!dom_children(button, '.mm-counter').length) {
            /** The counter for the listitem. */
            const counter = create('span.mm-counter');
            counter.setAttribute('aria-hidden', 'true');
            button.prepend(counter);
        }
        //  Count immediately.
        count(panel);
    });
    //  Count when LI classname changes.
    this.bind('initListitem:after', (listitem) => {
        /** The panel where the listitem is in. */
        const panel = listitem.closest('.mm-panel');
        if (!panel) {
            return;
        }
        /** The parent LI for the panel. */
        const parent = this.node.pnls.querySelector(`#${panel.dataset.mmParent}`);
        if (!parent) {
            return;
        }
        listitemObserver.observe(listitem, {
            attributes: true
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/iconbar/options.js
const iconbar_options_options = {
    use: false,
    top: [],
    bottom: [],
    position: 'left',
    type: 'default'
};
/* harmony default export */ var iconbar_options = (iconbar_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/iconbar/mmenu.iconbar.js




/* harmony default export */ function mmenu_iconbar() {
    this.opts.iconbar = this.opts.iconbar || {};
    //	Extend options.
    const options = extend(this.opts.iconbar, iconbar_options);
    if (!options.use) {
        return;
    }
    let iconbar;
    ['top', 'bottom'].forEach((position, n) => {
        let ctnt = options[position];
        //	Extend shorthand options
        if (type(ctnt) != 'array') {
            ctnt = [ctnt];
        }
        //	Create node
        const part = create('div.mm-iconbar__' + position);
        //	Add content
        for (let c = 0, l = ctnt.length; c < l; c++) {
            if (typeof ctnt[c] == 'string') {
                part.innerHTML += ctnt[c];
            }
            else {
                part.append(ctnt[c]);
            }
        }
        if (part.children.length) {
            if (!iconbar) {
                iconbar = create('div.mm-iconbar');
            }
            iconbar.append(part);
        }
    });
    //	Add to menu
    if (iconbar) {
        //	Add the iconbar.
        this.bind('initMenu:after', () => {
            this.node.menu.prepend(iconbar);
        });
        //	En-/disable the iconbar.
        let classname = 'mm-menu--iconbar-' + options.position;
        let enable = () => {
            this.node.menu.classList.add(classname);
        };
        let disable = () => {
            this.node.menu.classList.remove(classname);
        };
        if (typeof options.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            matchmedia_add(options.use, enable, disable);
        }
        //	Tabs
        if (options.type == 'tabs') {
            iconbar.classList.add('mm-iconbar--tabs');
            iconbar.addEventListener('click', (evnt) => {
                const anchor = evnt.target.closest('.mm-iconbar__tab');
                if (!anchor) {
                    return;
                }
                if (anchor.matches('.mm-iconbar__tab--selected')) {
                    evnt.stopImmediatePropagation();
                    return;
                }
                try {
                    const panel = find(this.node.menu, `${anchor.getAttribute('href')}.mm-panel`)[0];
                    if (panel) {
                        evnt.preventDefault();
                        evnt.stopImmediatePropagation();
                        this.openPanel(panel, false);
                    }
                }
                catch (err) { }
            });
            const selectTab = (panel) => {
                find(iconbar, 'a').forEach((anchor) => {
                    anchor.classList.remove('mm-iconbar__tab--selected');
                });
                const anchor = find(iconbar, '[href="#' + panel.id + '"]')[0];
                if (anchor) {
                    anchor.classList.add('mm-iconbar__tab--selected');
                }
                else {
                    const parent = find(this.node.pnls, `#${panel.dataset.mmParent}`)[0];
                    if (parent) {
                        selectTab(parent.closest('.mm-panel'));
                    }
                }
            };
            this.bind('openPanel:before', selectTab);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/iconpanels/_options.js
const _options_options = {
    add: false,
    blockPanel: true,
    visible: 3
};
/* harmony default export */ var _options = (_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/iconpanels/mmenu.iconpanels.js



/* harmony default export */ function mmenu_iconpanels() {
    this.opts.iconPanels = this.opts.iconPanels || {};
    //	Extend options.
    const options = extend(this.opts.iconPanels, _options);
    let keepFirst = false;
    if (options.visible == 'first') {
        keepFirst = true;
        options.visible = 1;
    }
    options.visible = Math.min(3, Math.max(1, options.visible));
    options.visible++;
    //	Add the iconpanels
    if (options.add) {
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--iconpanel');
        });
        /** The classnames that can be set to a panel */
        const classnames = [
            'mm-panel--iconpanel-0',
            'mm-panel--iconpanel-1',
            'mm-panel--iconpanel-2',
            'mm-panel--iconpanel-3'
        ];
        //  Show only the main panel.
        if (keepFirst) {
            this.bind('initMenu:after', () => {
                var _a;
                (_a = dom_children(this.node.pnls, '.mm-panel')[0]) === null || _a === void 0 ? void 0 : _a.classList.add('mm-panel--iconpanel-first');
            });
            //  Show parent panel(s).
        }
        else {
            this.bind('openPanel:after', (panel) => {
                //  Do nothing when opening a vertical submenu
                if (panel.closest('.mm-listitem--vertical')) {
                    return;
                }
                let panels = dom_children(this.node.pnls, '.mm-panel');
                //	Filter out panels that are not opened.
                panels = panels.filter((panel) => panel.matches('.mm-panel--parent'));
                //	Add the current panel to the list.
                panels.push(panel);
                //	Slice the opened panels to the max visible amount.
                panels = panels.slice(-options.visible);
                //	Add the "iconpanel" classnames.
                panels.forEach((panel, p) => {
                    panel.classList.remove('mm-panel--iconpanel-first', ...classnames);
                    panel.classList.add(`mm-panel--iconpanel-${p}`);
                });
            });
        }
        // this.bind('initPanel:after', (panel: HTMLElement) => {
        //     if (!panel.closest('.mm-listitem--vertical') &&
        //         !DOM.children(panel, '.mm-panel__blocker')[0]
        //     ) {
        //         const blocker = DOM.create('div.mm-blocker.mm-panel__blocker') as HTMLElement;
        //         panel.prepend(blocker);
        //     }
        // });
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/configs.js
const navbars_configs_configs = {
    breadcrumbs: {
        separator: '/',
        removeFirst: false
    }
};
/* harmony default export */ var navbars_configs = (navbars_configs_configs);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/options.js
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean' && options) {
        options = {};
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (typeof options.content == 'undefined') {
        options.content = ['prev', 'title'];
    }
    if (!(options.content instanceof Array)) {
        options.content = [options.content];
    }
    if (typeof options.use == 'undefined') {
        options.use = true;
    }
    return options;
}
;

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.breadcrumbs.js

/* harmony default export */ function navbar_breadcrumbs(navbar) {
    //	Add content
    var breadcrumbs = create('div.mm-navbar__breadcrumbs');
    navbar.append(breadcrumbs);
    this.bind('initNavbar:after', (panel) => {
        if (panel.querySelector('.mm-navbar__breadcrumbs')) {
            return;
        }
        dom_children(panel, '.mm-navbar')[0].classList.add('mm-hidden');
        var crumbs = [], breadcrumbs = create('span.mm-navbar__breadcrumbs'), current = panel, first = true;
        while (current) {
            current = current.closest('.mm-panel');
            if (!current.parentElement.matches('.mm-listitem--vertical')) {
                let title = find(current, '.mm-navbar__title span')[0];
                if (title) {
                    let text = title.textContent;
                    if (text.length) {
                        crumbs.unshift(first
                            ? `<span>${text}</span>`
                            : `<a 
                                    href="#${current.id}" 
                                    title="${this.i18n(this.conf.screenReader.openSubmenu)}"
                                    >${text}</a>`);
                    }
                }
                first = false;
            }
            current = find(this.node.pnls, `#${current.dataset.mmParent}`)[0];
        }
        if (this.conf.navbars.breadcrumbs.removeFirst) {
            crumbs.shift();
        }
        breadcrumbs.innerHTML = crumbs.join('<span class="mm-separator">' +
            this.conf.navbars.breadcrumbs.separator +
            '</span>');
        dom_children(panel, '.mm-navbar')[0].append(breadcrumbs);
    });
    //	Update for to opened panel
    this.bind('openPanel:before', (panel) => {
        var crumbs = panel.querySelector('.mm-navbar__breadcrumbs');
        breadcrumbs.innerHTML = crumbs ? crumbs.innerHTML : '';
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.close.js

/* harmony default export */ function navbar_close(navbar) {
    /** The close button. */
    const close = create('a.mm-btn.mm-btn--close.mm-navbar__btn');
    close.setAttribute('aria-label', this.i18n(this.conf.offCanvas.screenReader.closeMenu));
    //	Add the button to the navbar.
    navbar.append(close);
    //	Update to target the page node.
    this.bind('setPage:after', (page) => {
        close.href = `#${page.id}`;
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.prev.js

/* harmony default export */ function navbar_prev(navbar) {
    /** The prev button. */
    let prev = create('a.mm-btn.mm-hidden');
    //	Add button to navbar.
    navbar.append(prev);
    //  Hide navbar in the panel.
    this.bind('initNavbar:after', (panel) => {
        dom_children(panel, '.mm-navbar')[0].classList.add('mm-hidden');
    });
    // Update the button href when opening a panel.
    this.bind('openPanel:before', (panel) => {
        if (panel.parentElement.matches('.mm-listitem--vertical')) {
            return;
        }
        prev.classList.add('mm-hidden');
        /** Original button in the panel. */
        const original = panel.querySelector('.mm-navbar__btn.mm-btn--prev');
        if (original) {
            /** Clone of the original button in the panel. */
            const clone = original.cloneNode(true);
            prev.after(clone);
            prev.remove();
            prev = clone;
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.searchfield.js


/* harmony default export */ function navbar_searchfield(navbar) {
    /** Empty wrapper for the searchfield. */
    let wrapper = create('div.mm-navbar__searchfield');
    wrapper.id = uniqueId();
    //	Add button to navbar.
    navbar.append(wrapper);
    this.opts.searchfield = this.opts.searchfield || {};
    this.opts.searchfield.add = true;
    this.opts.searchfield.addTo = `#${wrapper.id}`;
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.title.js

/* harmony default export */ function navbar_title(navbar) {
    /** The title node in the navbar. */
    let title = create('a.mm-navbar__title');
    //	Add title to the navbar.
    navbar.append(title);
    //	Update the title to the opened panel.
    this.bind('openPanel:before', (panel) => {
        //	Do nothing in a vertically expanding panel.
        if (panel.parentElement.matches('.mm-listitem--vertical')) {
            return;
        }
        /** Original title in the panel. */
        const original = panel.querySelector('.mm-navbar__title');
        if (original) {
            /** Clone of the original title in the panel. */
            const clone = original.cloneNode(true);
            title.after(clone);
            title.remove();
            title = clone;
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/navbar.tabs.js

/* harmony default export */ function navbar_tabs(navbar) {
    navbar.classList.add('mm-navbar--tabs');
    navbar.closest('.mm-navbars').classList.add('mm-navbars--has-tabs');
    dom_children(navbar, 'a').forEach(anchor => {
        anchor.classList.add('mm-navbar__tab');
    });
    /**
     * Mark a tab as selected.
     * @param {HTMLElement} panel Opened panel.
     */
    function selectTab(panel) {
        /** The tab that links to the opened panel. */
        const anchor = dom_children(navbar, `.mm-navbar__tab[href="#${panel.id}"]`)[0];
        if (anchor) {
            anchor.classList.add('mm-navbar__tab--selected');
            // @ts-ignore
            anchor.ariaExpanded = 'true';
        }
        else {
            /** The parent listitem. */
            const parent = find(this.node.pnls, `#${panel.dataset.mmParent}`)[0];
            if (parent) {
                selectTab.call(this, parent.closest('.mm-panel'));
            }
        }
    }
    this.bind('openPanel:before', (panel) => {
        //  Remove selected class.
        dom_children(navbar, 'a').forEach(anchor => {
            anchor.classList.remove('mm-navbar__tab--selected');
            // @ts-ignore
            anchor.ariaExpanded = 'false';
        });
        selectTab.call(this, panel);
    });
    this.bind('initPanels:after', () => {
        //	Add animation class to panel.
        navbar.addEventListener('click', event => {
            var _a, _b, _c;
            /** The href for the clicked tab. */
            const href = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('.mm-navbar__tab')) === null || _b === void 0 ? void 0 : _b.getAttribute('href');
            try {
                (_c = find(this.node.pnls, `${href}.mm-panel`)[0]) === null || _c === void 0 ? void 0 : _c.classList.add('mm-panel--noanimation');
            }
            catch (err) { }
        }, {
            // useCapture to ensure the logical order.
            capture: true
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/navbars/mmenu.navbars.js











Navbars.navbarContents = {
    breadcrumbs: navbar_breadcrumbs,
    close: navbar_close,
    prev: navbar_prev,
    searchfield: navbar_searchfield,
    title: navbar_title,
};
Navbars.navbarTypes = {
    tabs: navbar_tabs,
};
function Navbars() {
    this.opts.navbars = this.opts.navbars || [];
    this.conf.navbars = this.conf.navbars || {};
    //	Extend options.
    extend(this.conf.navbars, navbars_configs);
    let navs = this.opts.navbars;
    if (typeof navs == 'undefined') {
        return;
    }
    if (!(navs instanceof Array)) {
        navs = [navs];
    }
    if (!navs.length) {
        return;
    }
    var navbars = {};
    navs.forEach((options) => {
        options = extendShorthandOptions(options);
        if (!options.use) {
            return;
        }
        //	Create the navbar element.
        const navbar = create('div.mm-navbar');
        //	Get the position for the navbar.
        let { position } = options;
        //	Restrict the position to either "bottom" or "top" (default).
        if (position !== 'bottom') {
            position = 'top';
        }
        //	Create the wrapper for the navbar position.
        if (!navbars[position]) {
            navbars[position] = create('div.mm-navbars.mm-navbars--' + position);
        }
        navbars[position].append(navbar);
        //	Add content to the navbar.
        for (let c = 0, l = options.content.length; c < l; c++) {
            const ctnt = options.content[c];
            //	The content is a string.
            if (typeof ctnt == 'string') {
                const func = Navbars.navbarContents[ctnt];
                //	The content refers to one of the navbar-presets ("prev", "title", etc).
                if (typeof func == 'function') {
                    //	Call the preset function.
                    func.call(this, navbar);
                    //	The content is just HTML.
                }
                else {
                    //	Add the HTML.
                    //  Wrap the HTML in a single node
                    let node = create('span');
                    node.innerHTML = ctnt;
                    //  If there was only a single node, use that.
                    const children = dom_children(node);
                    if (children.length == 1) {
                        node = children[0];
                    }
                    navbar.append(node);
                }
                //	The content is not a string, it must be an element.
            }
            else {
                navbar.append(ctnt);
            }
        }
        //	The type option is set.
        if (typeof options.type == 'string') {
            //	The function refers to one of the navbar-presets ("tabs").
            const func = Navbars.navbarTypes[options.type];
            if (typeof func == 'function') {
                //	Call the preset function.
                func.call(this, navbar);
            }
        }
        //	En-/disable the navbar.
        let enable = () => {
            navbar.classList.remove('mm-hidden');
        };
        let disable = () => {
            navbar.classList.add('mm-hidden');
        };
        if (typeof options.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            matchmedia_add(options.use, enable, disable);
        }
    });
    //	Add to menu.
    this.bind('initMenu:after', () => {
        for (let position in navbars) {
            this.node.pnls[position == 'bottom' ? 'after' : 'before'](navbars[position]);
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/pagescroll/options.js
const pagescroll_options_options = {
    scroll: false,
    update: false
};
/* harmony default export */ var pagescroll_options = (pagescroll_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/pagescroll/configs.js
const pagescroll_configs_configs = {
    scrollOffset: 0,
    updateOffset: 50
};
/* harmony default export */ var pagescroll_configs = (pagescroll_configs_configs);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/pagescroll/mmenu.pagescroll.js





/* harmony default export */ function mmenu_pagescroll() {
    this.opts.pageScroll = this.opts.pageScroll || {};
    this.conf.pageScroll = this.conf.pageScroll || {};
    //	Extend options.
    const options = extend(this.opts.pageScroll, pagescroll_options);
    const configs = extend(this.conf.pageScroll, pagescroll_configs);
    /** The currently "active" section */
    var section;
    function scrollTo() {
        if (section) {
            // section.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: section.getBoundingClientRect().top +
                    document.scrollingElement.scrollTop -
                    configs.scrollOffset,
                behavior: 'smooth'
            });
        }
        section = null;
    }
    function anchorInPage(href) {
        try {
            if (href.slice(0, 1) == '#') {
                return find(mmenu_oncanvas_Mmenu.node.page, href)[0];
            }
        }
        catch (err) { }
        return null;
    }
    if (this.opts.offCanvas.use && options.scroll) {
        //	Scroll to section after clicking menu item.
        this.bind('close:after', () => {
            scrollTo();
        });
        this.node.menu.addEventListener('click', event => {
            var _a, _b;
            const href = ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('a[href]')) === null || _b === void 0 ? void 0 : _b.getAttribute('href')) || '';
            section = anchorInPage(href);
            if (section) {
                event.preventDefault();
                //	If the sidebar add-on is "expanded"...
                if (this.node.menu.matches('.mm-menu--sidebar-expanded') &&
                    this.node.wrpr.matches('.mm-wrapper--sidebar-expanded')) {
                    //	... scroll the page to the section.
                    scrollTo();
                    //	... otherwise...
                }
                else {
                    //	... close the menu.
                    this.close();
                }
            }
        });
    }
    //	Update selected menu item after scrolling.
    if (options.update) {
        let scts = [];
        this.bind('initListview:after', (listview) => {
            const listitems = dom_children(listview, '.mm-listitem');
            filterLIA(listitems).forEach(anchor => {
                const section = anchorInPage(anchor.getAttribute('href'));
                if (section) {
                    scts.unshift(section);
                }
            });
        });
        let _selected = -1;
        window.addEventListener('scroll', evnt => {
            const scrollTop = window.scrollY;
            for (var s = 0; s < scts.length; s++) {
                if (scts[s].offsetTop < scrollTop + configs.updateOffset) {
                    if (_selected !== s) {
                        _selected = s;
                        let panel = dom_children(this.node.pnls, '.mm-panel--opened')[0];
                        let listitems = find(panel, '.mm-listitem');
                        let anchors = filterLIA(listitems);
                        anchors = anchors.filter(anchor => anchor.matches('[href="#' + scts[s].id + '"]'));
                        if (anchors.length) {
                            this.setSelected(anchors[0].parentElement);
                        }
                    }
                    break;
                }
            }
        }, {
            passive: true
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/options.js
const searchfield_options_options = {
    add: false,
    addTo: 'panels',
    noResults: 'No results found.',
    placeholder: 'Search',
    search: true,
    searchIn: 'panels',
    splash: '',
    title: 'Search',
};
/* harmony default export */ var searchfield_options = (searchfield_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/configs.js
const searchfield_configs_configs = {
    cancel: true,
    clear: true,
    form: {},
    input: {},
    panel: {},
    submit: false
};
/* harmony default export */ var searchfield_configs = (searchfield_configs_configs);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/de.js
/* harmony default export */ var translations_de = ({
    'cancel': 'abbrechen',
    'Cancel searching': 'Suche abbrechen',
    'Clear searchfield': 'Suchfeld löschen',
    'No results found.': 'Keine Ergebnisse gefunden.',
    'Search': 'Suche',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/fa.js
/* harmony default export */ var translations_fa = ({
    'cancel': 'انصراف',
    'Cancel searching': 'لغو جستجو',
    'Clear searchfield': 'پاک کردن فیلد جستجو',
    'No results found.': 'نتیجه‌ای یافت نشد.',
    'Search': 'جستجو',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/nl.js
/* harmony default export */ var translations_nl = ({
    'cancel': 'annuleren',
    'Cancel searching': 'Zoeken annuleren',
    'Clear searchfield': 'Zoekveld leeg maken',
    'No results found.': 'Geen resultaten gevonden.',
    'Search': 'Zoeken',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/pt_br.js
/* harmony default export */ var translations_pt_br = ({
    'cancel': 'cancelar',
    'Cancel searching': 'Cancelar pesquisa',
    'Clear searchfield': 'Limpar campo de pesquisa',
    'No results found.': 'Nenhum resultado encontrado.',
    'Search': 'Buscar',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/ru.js
/* harmony default export */ var translations_ru = ({
    'cancel': 'отменить',
    'Cancel searching': 'Отменить поиск',
    'Clear searchfield': 'Очистить поле поиска',
    'No results found.': 'Ничего не найдено.',
    'Search': 'Найти',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/sk.js
/* harmony default export */ var translations_sk = ({
    'cancel': 'zrušiť',
    'Cancel searching': 'Zrušiť vyhľadávanie',
    'Clear searchfield': 'Vymazať pole vyhľadávania',
    'No results found.': 'Neboli nájdené žiadne výsledky.',
    'Search': 'Vyhľadávanie',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/uk.js
/* harmony default export */ var translations_uk = ({
    'cancel': 'скасувати',
    'Cancel searching': 'Скасувати пошук',
    'Clear searchfield': 'Очистити поле пошуку',
    'No results found.': 'Нічого не знайдено.',
    'Search': 'Пошук',
});

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/translations/index.js








/* harmony default export */ function searchfield_translations() {
    add(translations_de, 'de');
    add(translations_fa, 'fa');
    add(translations_nl, 'nl');
    add(translations_pt_br, 'pt_br');
    add(translations_ru, 'ru');
    add(translations_sk, 'sk');
    add(translations_uk, 'uk');
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/searchfield/mmenu.searchfield.js





//  Add the translations.
searchfield_translations();
/* harmony default export */ function mmenu_searchfield() {
    this.opts.searchfield = this.opts.searchfield || {};
    this.conf.searchfield = this.conf.searchfield || {};
    //	Extend options.
    const options = extend(this.opts.searchfield, searchfield_options);
    const configs = extend(this.conf.searchfield, searchfield_configs);
    if (!options.add) {
        return;
    }
    switch (options.addTo) {
        case 'panels':
            options.addTo = '.mm-panel';
            break;
        case 'searchpanel':
            options.addTo = '.mm-panel--search';
            break;
    }
    switch (options.searchIn) {
        case 'panels':
            options.searchIn = '.mm-panel';
            break;
    }
    //  Add a searchfield to panels matching the "addTo" querySelector.
    this.bind('initPanel:after', (panel) => {
        if (panel.matches(options.addTo) &&
            !panel.closest('.mm-listitem--vertical')) {
            initPanel.call(this, panel);
        }
    });
    this.bind('initMenu:after', () => {
        //  Create the resultspanel.
        const resultspanel = createResultsPanel.call(this);
        initPanel.call(this, resultspanel);
        //  Add a searchfield to anything other than a panel (most likely a navbar).
        find(this.node.menu, options.addTo).forEach(wrapper => {
            if (!wrapper.matches('.mm-panel')) {
                /** The searchform. */
                const form = createSearchfield.call(this, true);
                //  Add the form to the panel.
                wrapper.append(form);
                /** The input node. */
                const input = find(form, 'input')[0];
                //  Bind events for opening and closing the resultspanel.
                // With a splash...
                if (options.splash.length) {
                    //  Open on focus.
                    input.addEventListener('focusin', () => {
                        this.openPanel(resultspanel, false, false);
                    });
                    //  Show cancel button if searchpanel is opened.
                    this.bind('openPanel:after', (panel) => {
                        if (panel.matches('.mm-panel--search')) {
                            form.classList.add('mm-searchfield--cancelable');
                        }
                        else {
                            form.classList.remove('mm-searchfield--cancelable');
                        }
                    });
                    // ...without splash.
                }
                else {
                    //  Open resultspanel when searching.
                    this.bind('search:after', () => {
                        this.openPanel(resultspanel, false, false);
                    });
                    //  Close resultspanel when resetting.
                    input.addEventListener('focusout', () => {
                        if (!input.value.length) {
                            this.closePanel(resultspanel, false);
                        }
                    });
                }
                //  Initialize searching.
                initSearch.call(this, form);
            }
        });
    });
    //	Blur searchfield
    this.bind('close:before', () => {
        find(this.node.menu, '.mm-searchfield input').forEach((input) => {
            input.blur();
        });
    });
}
/**
 * Create the searchpanel.
 * @param {Mmenu} this
 */
const createResultsPanel = function () {
    /** Options for the searchfield. */
    const options = this.opts.searchfield;
    /** Configs for the searchfield. */
    const configs = this.conf.searchfield;
    /** The panel. */
    let panel = dom_children(this.node.pnls, '.mm-panel--search')[0];
    //	Only once
    if (panel) {
        return panel;
    }
    panel = create('div.mm-panel--search');
    //	Add attributes to the panel.    
    _addAttributes(panel, configs.panel);
    //  Add a title to the panel.
    if (options.title.length) {
        panel.dataset.mmTitle = this.i18n(options.title);
    }
    //  Add a listview to the panel.
    panel.append(create('ul'));
    this._initPanel(panel);
    return panel;
};
/**
 * Add a searchfield, splash message and no-results message to a panel.
 * @param {Mmenu}       this
 * @param {HTMLElement} panel The panel to initialise.
 */
const initPanel = function (panel) {
    /** Options for the searchfield. */
    const options = this.opts.searchfield;
    //	Create the searchfield.
    if (panel.matches(options.addTo)) {
        /** Whether or not the panel is the resultspanel */
        const isResultspanel = panel.matches('.mm-panel--search');
        //  Only one per panel.
        if (!find(panel, '.mm-searchfield').length) {
            /** The searchform. */
            const form = createSearchfield.call(this, isResultspanel);
            if (isResultspanel) {
                form.classList.add('mm-searchfield--cancelable');
            }
            //  Add the form to the panel.
            panel.prepend(form);
            //  Initialize searching.
            initSearch.call(this, form);
        }
    }
    //	Create the splash content.
    if (options.splash.length &&
        panel.matches('.mm-panel--search')) {
        //  Only one per panel.
        if (!find(panel, '.mm-panel__splash').length) {
            /** The splash content node. */
            const splash = create('div.mm-panel__splash');
            splash.innerHTML = options.splash;
            panel.append(splash);
        }
    }
    //  Add no results message.
    if (options.noResults.length) {
        //	Only once per panel.
        if (!find(panel, '.mm-panel__noresults').length) {
            /** The no results message node. */
            const message = create('div.mm-panel__noresults');
            message.innerHTML = this.i18n(options.noResults);
            panel.append(message);
        }
    }
};
/**
 * Create the searchfield.
 * @param {Mmenu}   this
 * @param {boolean} [addCancel=false] Whether or not to add the cancel button
 */
const createSearchfield = function (addCancel = false) {
    /** Options for the searchfield. */
    const options = this.opts.searchfield;
    /** Configs for the searchfield. */
    const configs = this.conf.searchfield;
    /** The form node. */
    const form = create('form.mm-searchfield');
    //	Add attributes to the form
    _addAttributes(form, configs.form);
    /** The fieldset node. */
    const field = create('div.mm-searchfield__input');
    form.append(field);
    /** The input node. */
    const input = create('input');
    field.append(input);
    //	Add attributes to the input
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = this.i18n(options.placeholder);
    input.setAttribute('aria-label', this.i18n(options.placeholder));
    _addAttributes(input, configs.input);
    //	Add a button to submit to the form.
    if (configs.submit) {
        /** The submit button. */
        const submit = create('button.mm-btnreset.mm-btn.mm-btn--next.mm-searchfield__btn');
        submit.type = 'submit';
        field.append(submit);
    }
    //	Add a button to clear the searchfield.
    else if (configs.clear) {
        /** The reset button. */
        const reset = create('button.mm-btnreset.mm-btn.mm-btn--close.mm-searchfield__btn');
        reset.type = 'reset';
        reset.setAttribute('aria-label', this.i18n('Clear searchfield'));
        field.append(reset);
        //  Apparently, resetting a form doesn't trigger any event on the input,
        //  so we manually dispatch the event, one frame later :/
        form.addEventListener('reset', () => {
            window.requestAnimationFrame(() => {
                input.dispatchEvent(new Event('input'));
            });
        });
    }
    // Add a button to close the searchpanel.
    if (configs.cancel && addCancel) {
        /** The cancel button. */
        const cancel = create('a.mm-searchfield__cancel');
        cancel.href = '#';
        cancel.setAttribute('aria-label', this.i18n('Cancel searching'));
        cancel.textContent = this.i18n('cancel');
        form.append(cancel);
        // Close the search panel.
        cancel.addEventListener('click', event => {
            event.preventDefault();
            this.closePanel(dom_children(this.node.pnls, '.mm-panel--search')[0], false);
        });
    }
    return form;
};
/**
 * Initialize the searching.
 * @param {Mmenu}       this
 * @param {HTMLElement} form The searchform.
 */
const initSearch = function (form) {
    /** Options for the searchfield. */
    const options = this.opts.searchfield;
    /** The panel the results will be in. */
    const resultspanel = form.closest('.mm-panel') || find(this.node.pnls, '.mm-panel--search')[0];
    /** The input node. */
    const input = find(form, 'input')[0];
    /** Where to search. */
    let searchIn = resultspanel.matches('.mm-panel--search')
        ? dom_children(this.node.pnls, options.searchIn)
        : [resultspanel];
    //  Filter out the resultspanel
    searchIn = searchIn.filter(panel => !panel.matches('.mm-panel--search'));
    /** Search */
    const search = () => {
        /** The searchquery */
        const query = input.value.toLowerCase().trim();
        if (query.length) {
            form.classList.add('mm-searchfield--searching');
        }
        else {
            form.classList.remove('mm-searchfield--searching');
        }
        if (!options.search) {
            return;
        }
        /** All listitems */
        const listitems = [];
        searchIn.forEach(panel => {
            //  Scroll all panels to top.
            panel.scrollTop = 0;
            //  Find listitems.
            listitems.push(...find(panel, '.mm-listitem'));
        });
        //	Search
        if (query.length) {
            // Trigger event.
            this.trigger('search:before');
            resultspanel.classList.add('mm-panel--searching');
            //	Add data attribute to the matching listitems.
            listitems.forEach((listitem) => {
                const text = dom_children(listitem, '.mm-listitem__text')[0];
                if (!text || dom_text(text).toLowerCase().indexOf(query) > -1) {
                    listitem.dataset.mmSearchresult = query;
                }
            });
            /** The number of matching results. */
            let count = 0;
            //  Resultspanel: Copy results to resultspanel.
            if (resultspanel.matches('.mm-panel--search')) {
                count = _searchResultsPanel(resultspanel, query, searchIn);
                //  Search per panel: Hide the non-matching listitems.
            }
            else {
                count = _searchPerPanel(query, searchIn);
            }
            resultspanel.classList[count == 0 ? 'add' : 'remove']('mm-panel--noresults');
            // Trigger event.
            this.trigger('search:after');
            //  Don't search, reset all.
        }
        else {
            // Trigger event.
            this.trigger('clear:before');
            resultspanel.classList.remove('mm-panel--searching', 'mm-panel--noresults');
            //  Resultspanel.
            if (resultspanel.matches('.mm-panel--search')) {
                _resetResultsPanel(resultspanel);
                if (!options.splash) {
                    this.closePanel(resultspanel, false, false);
                }
                //  Search per panel: Show all listitems and dividers.
            }
            else {
                _resetPerPanel(searchIn);
            }
            // Trigger event.
            this.trigger('clear:after');
        }
    };
    input.addEventListener('input', search);
    search();
};
const _searchResultsPanel = (resultspanel, query, searchIn) => {
    /** The listview for the results/ */
    const listview = find(resultspanel, '.mm-listview')[0];
    //  Clear listview.
    listview.innerHTML = '';
    /** Amount of resutls found. */
    let count = 0;
    searchIn.forEach(panel => {
        /** The results in this panel. */
        const results = find(panel, `[data-mm-searchresult="${query}"]`);
        count += results.length;
        if (results.length) {
            /** Title for the panel. */
            const title = find(panel, '.mm-navbar__title')[0];
            //  Add a divider to indicate in what panel the results are.
            if (title) {
                const divider = create('li.mm-divider');
                divider.innerHTML = title.innerHTML;
                listview.append(divider);
            }
            //  Add the results
            results.forEach((result) => {
                const clone = result.cloneNode(true);
                listview.append(clone);
            });
        }
    });
    //  Remove inline subpanels.
    find(listview, '.mm-panel').forEach(panel => {
        panel.remove();
    });
    //  Remove ID's and data-attributes
    ['id', 'data-mm-parent', 'data-mm-child'].forEach(attr => {
        find(listview, `[${attr}]`).forEach(elem => {
            elem.removeAttribute(attr);
        });
    });
    //  Remove "opened" class
    find(listview, '.mm-listitem--opened').forEach(listitem => {
        listitem.classList.remove('mm-listitem--opened');
    });
    return count;
};
const _resetResultsPanel = (resultspanel) => {
    /** The listview for the results. */
    const listview = find(resultspanel, '.mm-listview')[0];
    //  Clear listview.
    listview.innerHTML = '';
};
const _searchPerPanel = (query, searchIn) => {
    /** Amount of resutls found. */
    let count = 0;
    searchIn.forEach(panel => {
        /** The results in this panel. */
        const results = find(panel, `[data-mm-searchresult="${query}"]`);
        count += results.length;
        if (results.length) {
            //  Add first preceeding divider to the results.
            results.forEach(result => {
                const divider = prevAll(result, '.mm-divider')[0];
                if (divider) {
                    divider.dataset.mmSearchresult = query;
                }
            });
        }
        find(panel, '.mm-listitem, .mm-divider').forEach(item => {
            //  Hide all
            item.classList.add('mm-hidden');
            //  Show matching + its parents.
            if (item.dataset.mmSearchresult === query) {
                [item, ...parents(item, '.mm-listitem')].forEach(item2 => {
                    item2.classList.remove('mm-hidden');
                });
            }
        });
    });
    return count;
};
const _resetPerPanel = (searchIn) => {
    searchIn.forEach((panel) => {
        find(panel, '.mm-listitem, .mm-divider').forEach(item => {
            item.classList.remove('mm-hidden');
        });
    });
};
/**
 * Add array of attributes to an element.
 * @param {HTMLEement}  element     The element to add the attributes to.
 * @param {Object}      attributes  The attributes to add.
 */
const _addAttributes = (element, attributes) => {
    if (attributes) {
        Object.keys(attributes).forEach(a => {
            element[a] = attributes[a];
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/sectionindexer/options.js
const sectionindexer_options_options = {
    add: false,
    addTo: 'panels'
};
/* harmony default export */ var sectionindexer_options = (sectionindexer_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer.js




/* harmony default export */ function mmenu_sectionindexer() {
    this.opts.sectionIndexer = this.opts.sectionIndexer || {};
    //	Extend options.
    const options = extend(this.opts.sectionIndexer, sectionindexer_options);
    if (!options.add) {
        return;
    }
    this.bind('initPanels:after', () => {
        //	Add the indexer, only if it does not allready excists
        if (!this.node.indx) {
            let buttons = '';
            'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
                buttons += '<a href="#">' + letter + '</a>';
            });
            let indexer = create('div.mm-sectionindexer');
            indexer.innerHTML = buttons;
            this.node.pnls.prepend(indexer);
            this.node.indx = indexer;
            //	Prevent default behavior when clicking an anchor
            this.node.indx.addEventListener('click', evnt => {
                const anchor = evnt.target;
                if (anchor.matches('a')) {
                    evnt.preventDefault();
                }
            });
            //	Scroll onMouseOver / onTouchStart
            let mouseOverEvent = evnt => {
                if (!evnt.target.matches('a')) {
                    return;
                }
                const letter = evnt.target.textContent;
                const panel = dom_children(this.node.pnls, '.mm-panel--opened')[0];
                let newTop = -1, oldTop = panel.scrollTop;
                panel.scrollTop = 0;
                find(panel, '.mm-divider')
                    .filter(divider => !divider.matches('.mm-hidden'))
                    .forEach(divider => {
                    if (newTop < 0 &&
                        letter ==
                            divider.textContent
                                .trim()
                                .slice(0, 1)
                                .toLowerCase()) {
                        newTop = divider.offsetTop;
                    }
                });
                panel.scrollTop = newTop > -1 ? newTop : oldTop;
            };
            if (touch) {
                this.node.indx.addEventListener('touchstart', mouseOverEvent);
                this.node.indx.addEventListener('touchmove', mouseOverEvent);
            }
            else {
                this.node.indx.addEventListener('mouseover', mouseOverEvent);
            }
        }
        //	Show or hide the indexer
        this.bind('openPanel:before', (panel) => {
            const active = find(panel, '.mm-divider').filter(divider => !divider.matches('.mm-hidden')).length;
            this.node.indx.classList[active ? 'add' : 'remove']('mm-sectionindexer--active');
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/setselected/options.js
const setselected_options_options = {
    current: true,
    hover: false,
    parent: false
};
/* harmony default export */ var setselected_options = (setselected_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/setselected/mmenu.setselected.js



/* harmony default export */ function mmenu_setselected() {
    this.opts.setSelected = this.opts.setSelected || {};
    //	Extend options.
    const options = extend(this.opts.setSelected, setselected_options);
    //	Find current by URL
    if (options.current == 'detect') {
        const findCurrent = (url) => {
            url = url.split('?')[0].split('#')[0];
            const anchor = this.node.menu.querySelector('a[href="' + url + '"], a[href="' + url + '/"]');
            if (anchor) {
                this.setSelected(anchor.parentElement);
            }
            else {
                const arr = url.split('/').slice(0, -1);
                if (arr.length) {
                    findCurrent(arr.join('/'));
                }
            }
        };
        this.bind('initMenu:after', () => {
            findCurrent.call(this, window.location.href);
        });
        //	Remove current selected item
    }
    else if (!options.current) {
        this.bind('initListview:after', (listview) => {
            dom_children(listview, '.mm-listitem--selected').forEach((listitem) => {
                listitem.classList.remove('mm-listitem--selected');
            });
        });
    }
    //	Add :hover effect on items
    if (options.hover) {
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--selected-hover');
        });
    }
    //	Set parent item selected for submenus
    if (options.parent) {
        this.bind('openPanel:after', (panel) => {
            //	Remove all
            find(this.node.pnls, '.mm-listitem--selected-parent').forEach((listitem) => {
                listitem.classList.remove('mm-listitem--selected-parent');
            });
            //	Move up the DOM tree
            let current = panel;
            while (current) {
                let li = find(this.node.pnls, `#${current.dataset.mmParent}`)[0];
                current = li === null || li === void 0 ? void 0 : li.closest('.mm-panel');
                if (li && !li.matches('.mm-listitem--vertical')) {
                    li.classList.add('mm-listitem--selected-parent');
                }
            }
        });
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--selected-parent');
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/sidebar/options.js
const sidebar_options_options = {
    collapsed: {
        use: false,
    },
    expanded: {
        use: false,
        initial: 'open'
    }
};
/* harmony default export */ var sidebar_options = (sidebar_options_options);

;// CONCATENATED MODULE: ./node_modules/mmenu-js/dist/addons/sidebar/mmenu.sidebar.js




/* harmony default export */ function mmenu_sidebar() {
    // Only for off-canvas menus.
    if (!this.opts.offCanvas.use) {
        return;
    }
    this.opts.sidebar = this.opts.sidebar || {};
    //	Extend options.
    const options = extend(this.opts.sidebar, sidebar_options);
    //	Collapsed
    if (options.collapsed.use) {
        //	Make the menu collapsable.
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--sidebar-collapsed');
        });
        /** Enable the collapsed sidebar */
        let enable = () => {
            this.node.wrpr.classList.add('mm-wrapper--sidebar-collapsed');
        };
        /** Disable the collapsed sidebar */
        let disable = () => {
            this.node.wrpr.classList.remove('mm-wrapper--sidebar-collapsed');
        };
        if (typeof options.collapsed.use === 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            matchmedia_add(options.collapsed.use, enable, disable);
        }
    }
    //	Expanded
    if (options.expanded.use) {
        //	Make the menu expandable
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--sidebar-expanded');
        });
        let expandedEnabled = false;
        /** Enable the expanded sidebar */
        let enable = () => {
            expandedEnabled = true;
            this.node.wrpr.classList.add('mm-wrapper--sidebar-expanded');
            this.node.menu.removeAttribute('aria-modal');
            this.open();
            mmenu_oncanvas_Mmenu.node.page.removeAttribute('inert');
        };
        /** Disable the expanded sidebar */
        let disable = () => {
            expandedEnabled = false;
            this.node.wrpr.classList.remove('mm-wrapper--sidebar-expanded');
            this.node.menu.setAttribute('aria-modal', 'true');
            this.close();
        };
        if (typeof options.expanded.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            matchmedia_add(options.expanded.use, enable, disable);
        }
        //  Store exanded state when opening and closing the menu.
        this.bind('close:after', () => {
            if (expandedEnabled) {
                window.sessionStorage.setItem('mmenuExpandedState', 'closed');
            }
        });
        this.bind('open:after', () => {
            if (expandedEnabled) {
                window.sessionStorage.setItem('mmenuExpandedState', 'open');
                mmenu_oncanvas_Mmenu.node.page.removeAttribute('inert');
            }
        });
        //  Set the initial state
        let initialState = options.expanded.initial;
        const state = window.sessionStorage.getItem('mmenuExpandedState');
        switch (state) {
            case 'open':
            case 'closed':
                initialState = state;
                break;
        }
        if (initialState === 'closed') {
            this.bind('init:after', () => {
                this.close();
            });
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/mmenu-js/src/mmenu.js
/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 */

//	Core


//	Core add-ons




//	Add-ons












mmenu_oncanvas_Mmenu.addons = {
    //	Core add-ons
    offcanvas: mmenu_offcanvas,
    scrollBugFix: mmenu_scrollbugfix,
    theme: mmenu_theme,

    //	Add-ons
    backButton: mmenu_backbutton,
    counters: mmenu_counters,
    iconbar: mmenu_iconbar,
    iconPanels: mmenu_iconpanels,
    navbars: Navbars,
    pageScroll: mmenu_pagescroll,
    searchfield: mmenu_searchfield,
    sectionIndexer: mmenu_sectionindexer,
    setSelected: mmenu_setselected,
    sidebar: mmenu_sidebar
};

//  Export module
/* harmony default export */ var mmenu = ((/* unused pure expression or super */ null && (Mmenu)));

//	Global namespace
if (window) {
    window.Mmenu = mmenu_oncanvas_Mmenu;
}

/***/ })

}]);