import { initMmenuRegions } from "./mmenu-region";

export const initMmenu = () => {
  const srcMenu = $("#menu");
  const srcNavbar = $("#menu-navbar");
  if (!srcMenu.length || !srcNavbar.length) return;

  const menu = new Mmenu("#menu", {
    offCanvas: {
      position: srcMenu.attr("data-position"),
    },
    navbars: [
      {
        content: srcNavbar.html(),
      },
    ],
    screenReader: {
      closeMenu: "Close menu",
    },
    page: {
      noSelector: [],
    },
    hooks: {
      "initMenu:before": () => {
        srcNavbar.remove();
      },
      "initMenu:after": () => {
        initMmenuRegions();
      },
    },
  });

  const menuApi = menu.API;

  $("[data-open-menu]").on("click", () => {
    menuApi.openPanel();
  });

  $("[data-close-menu]").on("click", () => {
    menuApi.close();
  });

  // legacy buttons support
  $("#my-button").on("click", () => {
    menuApi.open();
  });
};
