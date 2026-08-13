const POPUP_GAP = 10;
const CARD_GAP = 12;
const MAX_POPUP_HEIGHT = 280;
const MIN_POPUP_HEIGHT = 40;
const CLOSE_DELAY_MS = 250;

const findPopup = (icon) => icon.querySelector(".product-info-icon__popup");
const findCard = (icon) =>
  icon.closest(".product-item, .product-card-v2");
const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), Math.max(min, max));

const positionPopup = (icon, popup) => {
  popup.style.display = "block";
  popup.style.position = "fixed";
  popup.style.zIndex = "1000";
  popup.style.maxHeight = "none";
  popup.style.visibility = "hidden";

  const iconRect = icon.getBoundingClientRect();
  const cardRect = findCard(icon)?.getBoundingClientRect() || null;

  const baseWidth = popup.getBoundingClientRect().width || 220;
  const popupWidth = Math.max(
    100,
    Math.min(
      baseWidth,
      window.innerWidth - 2 * POPUP_GAP,
      cardRect ? cardRect.width - 2 * CARD_GAP : Infinity,
    ),
  );
  popup.style.width = `${popupWidth}px`;

  const popupHeight = popup.getBoundingClientRect().height;
  const spaceBelow = window.innerHeight - iconRect.bottom - POPUP_GAP;
  const height = Math.max(
    MIN_POPUP_HEIGHT,
    Math.min(popupHeight, MAX_POPUP_HEIGHT, spaceBelow),
  );

  const leftMin = cardRect
    ? Math.max(cardRect.left + CARD_GAP, POPUP_GAP)
    : POPUP_GAP;
  const leftMax = cardRect
    ? Math.min(
        cardRect.right - popupWidth - CARD_GAP,
        window.innerWidth - popupWidth - POPUP_GAP,
      )
    : window.innerWidth - popupWidth - POPUP_GAP;
  const left = clamp(iconRect.right - popupWidth, leftMin, leftMax);

  popup.style.visibility = "";
  popup.style.maxHeight = `${height}px`;
  popup.style.overflowY = "auto";
  popup.style.left = `${left}px`;
  popup.style.bottom = "auto";
  popup.style.top = `${iconRect.bottom + POPUP_GAP}px`;
};

export const productInfoIconInit = () => {
  let openIcon = null;
  let activePopup = null;
  let closeTimer = null;
  let tapMode = window.matchMedia("(hover: none)").matches;

  const mq = window.matchMedia("(hover: none)");
  const onMqChange = (event) => {
    tapMode = event.matches;
  };
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onMqChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onMqChange);
  }

  const clearCloseTimer = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };

  const scheduleClose = () => {
    if (closeTimer) return;
    closeTimer = setTimeout(() => {
      closeTimer = null;
      close();
    }, CLOSE_DELAY_MS);
  };

  const close = () => {
    if (activePopup) {
      activePopup.removeAttribute("style");
      if (openIcon && activePopup.parentElement !== openIcon) {
        openIcon.appendChild(activePopup);
      }
    }
    activePopup = null;
    openIcon = null;
  };

  const open = (icon) => {
    clearCloseTimer();
    if (openIcon && openIcon !== icon) close();
    const popup = findPopup(icon);
    if (!popup) return;
    if (popup.parentElement !== document.body) {
      document.body.appendChild(popup);
    }
    positionPopup(icon, popup);
    openIcon = icon;
    activePopup = popup;
  };

  const closestIcon = (node) =>
    node instanceof Element && node.closest
      ? node.closest(".product-info-icon")
      : null;

  const iconAtPoint = (x, y) => {
    let found = null;
    const icons = document.querySelectorAll(".product-info-icon");
    for (let i = 0; i < icons.length; i++) {
      const rect = icons[i].getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        found = icons[i];
        break;
      }
    }
    return found;
  };

  document.addEventListener("mouseover", (event) => {
    if (tapMode) return;
    const icon = closestIcon(event.target);
    if (icon) {
      clearCloseTimer();
      open(icon);
      return;
    }
    if (
      event.target instanceof Element &&
      activePopup &&
      activePopup.contains(event.target)
    ) {
      clearCloseTimer();
    }
  });

  document.addEventListener("mouseout", (event) => {
    if (tapMode) return;
    if (!activePopup) return;
    const next = closestIcon(event.relatedTarget);
    if (next === openIcon) {
      clearCloseTimer();
      return;
    }
    if (
      event.relatedTarget instanceof Element &&
      activePopup.contains(event.relatedTarget)
    ) {
      clearCloseTimer();
      return;
    }
    if (next) {
      clearCloseTimer();
      close();
      return;
    }
    scheduleClose();
  });

  document.addEventListener("focusin", (event) => {
    if (tapMode) return;
    const icon = closestIcon(event.target);
    if (icon) open(icon);
  });

  document.addEventListener("focusout", (event) => {
    if (tapMode) return;
    if (!activePopup) return;
    const next = closestIcon(event.relatedTarget);
    if (next === openIcon) return;
    close();
  });

  document.addEventListener(
    "click",
    (event) => {
      const icon =
        closestIcon(event.target) ||
        (event.clientX >= 0 ? iconAtPoint(event.clientX, event.clientY) : null);

      if (!icon) {
        if (tapMode) close();
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (tapMode) {
        if (openIcon === icon) {
          close();
        } else {
          open(icon);
        }
      }
    },
    true,
  );

  const reposition = () => {
    if (activePopup && openIcon) positionPopup(openIcon, activePopup);
  };

  window.addEventListener(
    "scroll",
    (event) => {
      if (!activePopup) return;
      if (
        event.target instanceof Element &&
        (event.target === activePopup || activePopup.contains(event.target))
      )
        return;
      reposition();
    },
    { passive: true, capture: true },
  );
  window.addEventListener("resize", reposition);
};
