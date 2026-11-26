(function () {
    'use strict';

    var consentCookieName = 'stroyker_cookie_consent';
    var consentCookieValue = 'accepted';
    var trackingAllowed = true;

    function getCookie(name) {
        var prefix = name + '=';
        return document.cookie.split(';').map(function (item) {
            return item.trim();
        }).filter(function (item) {
            return item.indexOf(prefix) === 0;
        }).map(function (item) {
            return decodeURIComponent(item.slice(prefix.length));
        })[0] || '';
    }

    function eventId() {
        if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
            var random = Math.random() * 16 | 0;
            return (char === 'x' ? random : (random & 3 | 8)).toString(16);
        });
    }

    function initConsent() {
        var required = document.body.getAttribute('data-visitstats-consent-required') === 'true';
        if (!required || getCookie(consentCookieName) === consentCookieValue) return true;

        var modal = document.getElementById('cookie-modal');
        if (!modal) return false;
        modal.style.removeProperty('display');
        var button = modal.querySelector(
            '[data-cookie-consent-accept], [data-cookie-action="accept"]'
        );
        if (!button) {
            button = document.createElement('button');
            button.type = 'button';
            button.textContent = 'Ок';
            modal.querySelector('.cookie-modal__content').appendChild(button);
        }
        button.setAttribute('data-cookie-consent-accept', '');
        button.addEventListener('click', function () {
            var secure = window.location.protocol === 'https:' ? '; Secure' : '';
            document.cookie = consentCookieName + '=' + consentCookieValue
                + '; Path=/; Max-Age=31536000; SameSite=Lax' + secure;
            window.location.reload();
        });
        return false;
    }

    function compactCount(value) {
        var number = Number(value) || 0;
        if (number < 1000) return String(number);
        var truncated = Math.floor(number / 100) / 10;
        return String(truncated).replace('.', ',').replace(',0', '') + 'к';
    }

    function post(path, payload) {
        return fetch(window.location.origin + path, {
            method: 'POST',
            credentials: 'same-origin',
            keepalive: true,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            if (!response.ok) throw new Error('Request failed');
            return response.json();
        });
    }

    function updateCounters(scope, data) {
        var labels = {
            views: 'Просмотров',
            likes: 'Лайков',
            shares: 'Нажатия «Поделиться»'
        };
        ['views', 'likes', 'shares'].forEach(function (name) {
            if (typeof data[name] === 'undefined') return;
            scope.querySelectorAll('[data-visitstats-count="' + name + '"]').forEach(function (node) {
                node.textContent = compactCount(data[name]);
                var item = node.closest('.visitstats-counters__item');
                if (item) item.title = labels[name] + ': ' + data[name];
            });
        });
    }

    function initViewTracker(scope) {
        var remaining = 3000;
        var startedAt = null;
        var timeout = null;
        var sent = false;
        var attempts = 0;
        var viewEventId = eventId();

        function pause() {
            if (startedAt !== null) {
                remaining -= performance.now() - startedAt;
                startedAt = null;
            }
            if (timeout) clearTimeout(timeout);
            timeout = null;
        }

        function send() {
            if (sent) return;
            pause();
            sent = true;
            attempts += 1;
            post('/visitstats/view/', {
                target: scope.getAttribute('data-visitstats-target'),
                event_id: viewEventId
            }).then(function (data) {
                updateCounters(scope, data);
            }).catch(function (error) {
                console.error('Не удалось записать просмотр:', error);
                if (attempts < 3) {
                    sent = false;
                    remaining = 5000;
                    resume();
                }
            });
        }

        function resume() {
            if (sent || document.visibilityState !== 'visible') return;
            if (remaining <= 0) return send();
            startedAt = performance.now();
            timeout = setTimeout(send, remaining);
        }

        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') resume();
            else pause();
        });
        window.addEventListener('pagehide', pause);
        window.addEventListener('pageshow', resume);
        resume();
    }

    function initLikes() {
        document.addEventListener('click', function (event) {
            var button = event.target.closest('[data-visitstats-like]');
            if (!button) return;
            var scope = button.closest('[data-visitstats-target]');
            if (!scope || button.disabled) return;
            event.preventDefault();
            event.stopPropagation();
            if (!trackingAllowed) {
                var modal = document.getElementById('cookie-modal');
                if (modal) modal.style.display = 'flex';
                return;
            }
            var liked = button.getAttribute('aria-pressed') !== 'true';
            var target = scope.getAttribute('data-visitstats-target');
            var matchingButtons = [];
            document.querySelectorAll('[data-visitstats-target]').forEach(function (matchingScope) {
                if (matchingScope.getAttribute('data-visitstats-target') !== target) return;
                matchingScope.querySelectorAll('[data-visitstats-like]').forEach(function (likeButton) {
                    matchingButtons.push(likeButton);
                    likeButton.disabled = true;
                });
            });
            post('/visitstats/like/', {
                target: target,
                liked: liked
            }).then(function (data) {
                document.querySelectorAll('[data-visitstats-target]').forEach(function (matchingScope) {
                    if (matchingScope.getAttribute('data-visitstats-target') !== target) return;
                    matchingScope.querySelectorAll('[data-visitstats-like]').forEach(function (likeButton) {
                        likeButton.setAttribute('aria-pressed', data.liked ? 'true' : 'false');
                        likeButton.classList.toggle('is-active', data.liked);
                    });
                    updateCounters(matchingScope, data);
                });
                if (data.liked === liked) {
                    document.querySelectorAll('[data-visitstats-total="likes"]').forEach(function (total) {
                        var count = Math.max(0, Number(total.getAttribute('data-visitstats-raw')) + (liked ? 1 : -1));
                        total.setAttribute('data-visitstats-raw', count);
                        total.textContent = compactCount(count);
                        var item = total.closest('.visitstats-summary__item');
                        if (item) item.title = 'Лайков: ' + count;
                    });
                }
            }).catch(function () {
                window.alert('Не удалось сохранить лайк. Попробуйте ещё раз.');
            }).finally(function () {
                matchingButtons.forEach(function (likeButton) {
                    likeButton.disabled = false;
                });
            });
        }, true);
    }

    function canonicalUrl() {
        var canonical = document.querySelector('link[rel="canonical"]');
        return canonical ? canonical.href : window.location.origin + window.location.pathname;
    }

    function shareUrl(network, url, title) {
        url = url || canonicalUrl();
        title = title || document.title;
        var targets = {
            max: 'https://max.ru/:share?text=' + encodeURIComponent(title + '\n' + url),
            vk: 'https://vk.com/share.php?url=' + encodeURIComponent(url),
            telegram: 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title),
            whatsapp: 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url),
            odnoklassniki: 'https://connect.ok.ru/offer?url=' + encodeURIComponent(url),
            email: 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url)
        };
        return targets[network] || url;
    }

    function recordShare(target, network) {
        if (!target || !trackingAllowed) return;
        return post('/visitstats/share/', {
            target: target,
            event_id: eventId(),
            network: network
        }).then(function (data) {
            document.querySelectorAll('.visitstats-counters[data-visitstats-target]').forEach(function (counters) {
                if (counters.getAttribute('data-visitstats-target') === target) {
                    updateCounters(counters, data);
                }
            });
            if (data.counted) {
                document.querySelectorAll('[data-visitstats-total="shares"]').forEach(function (total) {
                    var count = Number(total.getAttribute('data-visitstats-raw')) + 1;
                    total.setAttribute('data-visitstats-raw', count);
                    total.textContent = compactCount(count);
                    var item = total.closest('.visitstats-summary__item');
                    if (item) item.title = 'Нажатия «Поделиться»: ' + count;
                });
            }
        }).catch(function (error) {
            console.error('Не удалось записать нажатие «Поделиться»:', error);
        });
    }

    function initShares() {
        var dialog = document.createElement('dialog');
        dialog.className = 'visitstats-share-dialog';
        dialog.setAttribute('aria-label', 'Поделиться');
        dialog.setAttribute('data-visitstats-share-enabled', '');
        var socialIcons = {
            telegram: '/media/uploads/svg/icon-tg-border.svg',
            max: '/media/uploads/svg/icon-max-border.svg',
            email: '/media/uploads/svg/icon-mail-border.svg',
            odnoklassniki: '/media/uploads/svg/icon-ok.svg',
            vk: '/media/uploads/svg/icon-vk.svg'
        };
        dialog.innerHTML = '<div class="visitstats-share-dialog__links">'
            + [['telegram', 'Telegram'], ['max', 'Max'], ['email', 'Почта'],
                ['odnoklassniki', 'Одноклассники'], ['vk', 'ВКонтакте']].map(function (item) {
                var icon = socialIcons[item[0]]
                    ? '<img src="' + socialIcons[item[0]] + '" alt="" width="24" height="24">'
                    : '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m3 5 9 8 9-8" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
                return '<a data-share-network="' + item[0] + '" aria-label="' + item[1] + '" title="' + item[1] + '" target="_blank" rel="noopener noreferrer">' + icon + '</a>';
            }).join('') + '<button type="button" data-share-copy aria-label="Копировать ссылку" title="Копировать ссылку"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x=".5" y=".5" width="23" height="23" fill="white"/><rect x="8" y="5" width="10" height="12"/><path d="M6 8H5v12h10v-1"/></svg></button></div>';
        document.body.appendChild(dialog);
        var copyNotice = document.createElement('div');
        copyNotice.className = 'visitstats-copy-notice';
        copyNotice.setAttribute('role', 'status');
        copyNotice.setAttribute('aria-live', 'polite');
        document.body.appendChild(copyNotice);
        var copyNoticeTimeout;
        function showCopyNotice() {
            clearTimeout(copyNoticeTimeout);
            copyNotice.textContent = 'Ссылка скопирована';
            copyNotice.classList.add('is-visible');
            copyNoticeTimeout = setTimeout(function () {
                copyNotice.classList.remove('is-visible');
                copyNotice.textContent = '';
            }, 2000);
        }
        function closeShare() {
            dialog.close();
            if (activeShareButton) activeShareButton.setAttribute('aria-expanded', 'false');
        }
        var activeShareButton = null;
        document.addEventListener('click', function (event) {
            if (dialog.open && !dialog.contains(event.target) && !event.target.closest('[data-project-share]')) closeShare();
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && dialog.open) {
                closeShare();
                if (activeShareButton) activeShareButton.focus();
            }
        });
        window.addEventListener('resize', closeShare);
        window.addEventListener('scroll', closeShare, true);
        dialog.querySelector('[data-share-copy]').addEventListener('click', function (event) {
            var button = event.currentTarget;
            var url = dialog.getAttribute('data-share-url');
            var target = dialog.getAttribute('data-visitstats-target');
            function copied() {
                button.setAttribute('aria-label', 'Ссылка скопирована');
                button.title = 'Ссылка скопирована';
                button.classList.add('is-copied');
                showCopyNotice();
                recordShare(target, 'copy');
            }
            function fallback() {
                var input = document.createElement('textarea');
                input.value = url;
                input.setAttribute('readonly', '');
                input.style.cssText = 'position:fixed;left:0;top:0;opacity:0;font-size:16px';
                dialog.appendChild(input);
                input.focus();
                input.select();
                input.setSelectionRange(0, input.value.length);
                var success = false;
                try { success = document.execCommand('copy'); } catch (error) { /* Manual copy below. */ }
                if (success) {
                    input.remove();
                    button.focus();
                    copied();
                } else {
                    input.style.cssText = 'width:100%;font-size:14px;margin-top:8px';
                    button.title = 'Выделено — скопируйте ссылку';
                }
            }
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(url).then(copied).catch(fallback);
            } else {
                fallback();
            }
        });
        document.addEventListener('click', function (event) {
            var button = event.target.closest('[data-project-share]');
            if (!button) return;
            event.preventDefault();
            event.stopPropagation();
            if (dialog.open && activeShareButton === button) {
                closeShare();
                return;
            }
            closeShare();
            activeShareButton = button;
            var scope = button.closest('[data-visitstats-target]');
            var card = button.closest('.project-card');
            var link = card && card.querySelector('a.stretched-link');
            var url = link ? link.href : canonicalUrl();
            var heading = card && card.querySelector('.project-card-title');
            var title = heading ? heading.textContent.trim() : document.title;
            dialog.setAttribute('data-share-url', url);
            dialog.setAttribute('data-share-title', title);
            dialog.setAttribute('data-visitstats-target', scope.getAttribute('data-visitstats-target'));
            var copyButton = dialog.querySelector('[data-share-copy]');
            copyButton.classList.remove('is-copied');
            copyButton.title = 'Копировать ссылку';
            copyButton.setAttribute('aria-label', 'Копировать ссылку');
            dialog.querySelectorAll('[data-share-network]').forEach(function (item) {
                item.href = shareUrl(item.getAttribute('data-share-network'), url, title);
            });
            [['vk', 'ВКонтакте'], ['odnoklassniki', 'Одноклассники']].forEach(function (item) {
                var source = document.querySelector('.sb-contact-rail__social-link[aria-label="' + item[1] + '"] svg');
                var destination = dialog.querySelector('[data-share-network="' + item[0] + '"]');
                if (source) {
                    var icon = source.cloneNode(true);
                    icon.removeAttribute('class');
                    destination.replaceChildren(icon);
                }
            });
            dialog.show();
            var anchor = button.getBoundingClientRect();
            var popup = dialog.getBoundingClientRect();
            var left = Math.min(window.innerWidth - popup.width - 8, Math.max(8, anchor.right - popup.width));
            var top = anchor.bottom + 8;
            if (top + popup.height > window.innerHeight - 8) top = Math.max(8, anchor.top - popup.height - 8);
            dialog.style.left = left + 'px';
            dialog.style.top = top + 'px';
            button.setAttribute('aria-expanded', 'true');
        }, true);
        document.querySelectorAll('[data-share-network]').forEach(function (link) {
            var network = link.getAttribute('data-share-network');
            link.href = shareUrl(network);
            link.addEventListener('click', function (event) {
                var scope = link.closest('[data-visitstats-share-enabled]');
                var links = link.closest('.share-links_compact');
                if (links) {
                    links.hidden = true;
                    var toggle = links.parentElement.querySelector('[data-share-toggle]');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                }
                if (!scope || !trackingAllowed) return;
                recordShare(scope.getAttribute('data-visitstats-target'), network);
            });
        });
        document.querySelectorAll('[data-share-toggle]').forEach(function (button) {
            button.addEventListener('click', function () {
                var links = button.parentElement.querySelector('.share-links');
                if (!links) return;
                links.hidden = !links.hidden;
                button.setAttribute('aria-expanded', links.hidden ? 'false' : 'true');
            });
        });
    }

    function placeCountersAfterImages() {
        document.querySelectorAll('[data-visitstats-place-after-image]').forEach(function (block) {
            var scope = block.closest('.blog-content, .text-page, main');
            var image = scope && scope.querySelector('img');
            if (image && !block.contains(image)) {
                var anchor = image;
                while (anchor.parentElement && anchor.parentElement !== scope) {
                    anchor = anchor.parentElement;
                }
                anchor.insertAdjacentElement('afterend', block);
            }
        });
    }

    function init() {
        placeCountersAfterImages();
        initConsent();
        trackingAllowed = true;
        document.querySelectorAll('[data-visitstats-track-view]').forEach(initViewTracker);
        initLikes();
        initShares();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
