$(document).ready(function () {
  $(document).on("click", (event) => {
    if (!event.target.closest(".bottom-mobile-menu") && $(".bottom-mobile-menu-list_active")) {
      $(".bottom-mobile-menu-list_active").removeClass("bottom-mobile-menu-list_active");
      $(".bottom-mobile-menu-button_active").removeClass("bottom-mobile-menu-button_active");
    }
  });

  $(".catalog-filter-accordion a.opener").click(function () {
    $(this).parent().find("ul:first").slideToggle();
    $(this).parent().toggleClass("active");
    return false;
  });

  $("[data-open-dropdown-content]").on("click", (event) => {
    const target = $(event.currentTarget);
    const parent = target.parent();
    parent.find("[data-dropdown-content]").removeClass("d-none");
    parent.find("[data-close-dropdown-content]").removeClass("d-none");
    target.addClass("d-none");
  });

  $("[data-close-dropdown-content]").on("click", (event) => {
    const target = $(event.currentTarget);
    const parent = target.parent();
    parent.find("[data-dropdown-content]").addClass("d-none");
    parent.find("[data-open-dropdown-content]").removeClass("d-none");
    target.addClass("d-none");
  });

  $("[data-toggle-bottom-dropdown]").on("click", (event) => {
    $(".bottom-mobile-menu-list").toggleClass("bottom-mobile-menu-list_active");
    $(event.currentTarget).toggleClass("bottom-mobile-menu-button_active");
  });

  $("[data-close-search-modal]").on("click", () => {
    $(".search-modal-window").removeClass("d-block");
  });

  $("[data-open-search-modal]").on("click", () => {
    $(".search-modal-window").addClass("d-block");
    $(".search-modal-window__input").focus();
  });

  $("[data-clear-input]").on("click", () => {
    $("[data-input]").val("");
  });

  $(".like-btn").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });
  $(".city-selection__link").click(function () {
    $(".city-selection__list").toggle(0);
  });
  $(window).click(function (e) {
    if (!e.target.classList.contains("city-selection__link")) {
      $(".city-selection__list").toggle(false);
    }
  });
  $(".burger-menu").click(function () {
    $(".mobile-menu").toggle(0);
  });
  $(".catalog-inner-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $(".catalog-header-content").toggle(0);
  });
  $(".catalog-inner-btn,.catalog-menu__head a").click(function (e) {
    e.preventDefault();
    $(".catalog-menu").toggle(0);
  });
  $(".burger-catalog").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
  });
  $(".share-btn").click(function () {
    $(".share-block__show").toggle(0);
  });
  $(".close-panel").click(function () {
    $(".bottom-panel").toggle(0);
  });
  $(".filter-btn, .close-btn-2").click(function () {
    $(".catalog-filter").toggle(0);
  });
  $(".catalog-side__title").click(function () {
    $(".catalog-side__content").toggle(0);
    $(".catalog-side__content-accordeon").toggle(0);
  });
  $(".catalog-opened").click(function () {
    $(".catalog-opened .submenu").toggle(0);
  });
  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
  });
  $(".catalog-inner").click(function () {
    $(this).toggleClass("open");
    $(".catalog-inner-content").toggle(0);
  });
});
