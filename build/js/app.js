"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["app"],{

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/app/scripts/index.js");


/***/ }),

/***/ "./src/app/scripts/index.js":
/*!**********************************!*\
  !*** ./src/app/scripts/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inputmask_dist_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inputmask/dist/jquery.inputmask.js */ "./node_modules/inputmask/dist/jquery.inputmask.js");
/* harmony import */ var inputmask_dist_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/shared/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");











window.wNumb = (wnumb__WEBPACK_IMPORTED_MODULE_1___default());
window.noUiSlider = nouislider__WEBPACK_IMPORTED_MODULE_2__["default"];
window.tippy = tippy_js__WEBPACK_IMPORTED_MODULE_10__["default"];
window.breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280
};
$(() => {
  (0,_shared__WEBPACK_IMPORTED_MODULE_8__.initShared)();
  (0,_components__WEBPACK_IMPORTED_MODULE_9__.initComponents)();
});
const $compareCarousel = $(".owl-carousel--compare");
const $detailCarousel = $(".owl-carousel--detail");
if ($compareCarousel.length && $detailCarousel.length) {
  const $pagination = $(".owl-pagination--compare");
  const $counter = $pagination.find(".counter");
  const $prev = $pagination.find(".prev");
  const $next = $pagination.find(".next");
  function updatePagination(event) {
    const itemsPerPage = event.page.size; // Количество слайдов на странице
    const totalItems = event.item.count; // Всего слайдов
    const startIndex = event.item.index + 1; // Номер первого отображаемого слайда
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems); // Номер последнего отображаемого слайда

    // Обновляем текст пагинации
    $counter.text(`${startIndex}-${endIndex}/${totalItems}`);

    // Проверяем, первый ли это слайд
    if (event.item.index === 0) {
      // Начало слайдера
      $prev.prop("disabled", true).attr("inert", "");
    } else {
      $prev.prop("disabled", false).removeAttr("inert");
    }

    // Проверяем, последний ли это слайд
    const isLastPage = event.item.index + itemsPerPage >= totalItems;
    if (isLastPage) {
      // Конец слайдера
      $next.prop("disabled", true).attr("inert", "");
    } else {
      $next.prop("disabled", false).removeAttr("inert");
    }
  }

  // Инициализация Owl Carousel
  $compareCarousel.owlCarousel({
    items: 4,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 0
      },
      992: {
        items: 4,
        margin: 0
      }
    },
    onInitialized: updatePagination,
    // Обновить пагинацию при инициализации
    onTranslated: updatePagination // Обновить пагинацию при смене слайдов
  });
  $detailCarousel.owlCarousel({
    items: 4,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 0
      },
      992: {
        items: 4,
        margin: 0
      }
    }
  });
  function updateFirstVisibleClass(carousel) {
    // Удаляем класс со всех элементов
    carousel.find('.owl-item').removeClass('owl-active-first');

    // Находим текущие видимые элементы
    const visibleItems = carousel.find('.owl-item.active');

    // Добавляем класс только к первому
    if (visibleItems.length) {
      visibleItems.first().addClass('owl-active-first');
    }
  }

  // Синхронизация двух каруселей
  function syncCarousels(event) {
    const targetIndex = event.item.index;
    const syncedCarousel = event.currentTarget === $compareCarousel[0] ? $detailCarousel : $compareCarousel;
    syncedCarousel.trigger('to.owl.carousel', [targetIndex, 300, true]);
  }
  $compareCarousel.on('changed.owl.carousel', syncCarousels);
  $detailCarousel.on('changed.owl.carousel', syncCarousels);

  // Добавляем класс после инициализации
  updateFirstVisibleClass($detailCarousel);

  // Добавляем класс при изменении активного слайда
  $detailCarousel.on('changed.owl.carousel', function () {
    setTimeout(() => updateFirstVisibleClass($detailCarousel));
  });

  // Кнопки навигации
  $prev.on("click", function () {
    $compareCarousel.trigger("prev.owl.carousel");
    $detailCarousel.trigger("prev.owl.carousel");
  });
  $next.on("click", function () {
    $compareCarousel.trigger("next.owl.carousel");
    $detailCarousel.trigger("next.owl.carousel");
  });
  function setEqualHeights() {
    const allProducts = document.querySelectorAll('.detail-product');

    // Сбрасываем высоты перед пересчётом
    allProducts.forEach(product => Array.from(product.children).forEach(item => item.style.minHeight = ''));
    const maxItems = Math.max(...Array.from(allProducts).map(product => product.children.length));

    // Пройдём по каждому индексу
    for (let i = 0; i < maxItems; i++) {
      const heights = [];

      // Собираем высоты всех элементов с текущим индексом
      allProducts.forEach(product => {
        const item = product.children[i];
        if (item) heights.push(item.offsetHeight);
      });

      // Определяем максимальную высоту
      const maxHeight = Math.max(...heights);

      // Устанавливаем максимальную высоту для всех элементов с этим индексом
      allProducts.forEach(product => {
        const item = product.children[i];
        if (item) item.style.minHeight = `${maxHeight}px`;
      });
    }
  }
  const throttle = (func, delay = 300) => {
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;
    return function wrap(...args) {
      if (isThrottled) {
        savedArgs = args, savedThis = this;
        return;
      }
      func.apply(this, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        if (savedThis) {
          wrap.apply(savedThis, savedArgs);
          savedThis = null;
          savedArgs = null;
        }
      }, delay);
    };
  };

  // Добавляем обработчик события resize
  window.addEventListener('resize', throttle(() => {
    setTimeout(setEqualHeights, 300);
  }));

  // Инициализация при загрузке
  setEqualHeights();
}
$(".acc__toggle:not(.not_toggle)").click(function (e) {
  // e.preventDefault();

  var $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.removeClass("active");
    $this.next().slideUp(200);
  } else {
    $this.parent().parent().find("li .inner").removeClass("show");
    $this.parent().parent().find("li .acc__toggle").removeClass("active");
    $this.parent().parent().find("li .inner").slideUp(200);
    $this.next().toggleClass("show");
    $this.toggleClass("active");
    $this.next().slideToggle(200);
  }
});
var bigSlides = $(".main-slider .owl-carousel"),
  autoPlayTimeoutSec = parseInt(bigSlides.data("autoplay-timeout"));
bigSlides.owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: autoPlayTimeoutSec * 1000,
  navText: ['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>', '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']
});
var radioButtons = document.querySelectorAll('.delivery-selection input[type="radio"]');
var choices = document.querySelectorAll(".delivery-choice");
radioButtons.forEach(function (btn) {
  btn.addEventListener("change", function () {
    var clicked = this;
    choices.forEach(function (choice) {
      if (choice.classList.contains(clicked.id) || choice.classList.contains("delivery-type-" + clicked.value)) {
        choice.style.display = "block";
      } else {
        choice.style.display = "none";
      }
    });
  });
});
$(".shopping-cart-item__delete").click(function () {
  $(this).parent(".shopping-cart-item").remove();
});
$(".slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: true
});
$(".news-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 4,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1
    },
    479: {
      nav: false,
      dots: true,
      items: 2
    },
    768: {
      nav: true,
      dots: false,
      items: 3
    },
    992: {
      items: 4
    }
  }
});
$(".action-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  items: 3,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1
    },
    479: {
      nav: false,
      dots: true,
      items: 2
    },
    768: {
      nav: true,
      dots: false,
      items: 3
    }
  }
});
$(".partners-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 5,
  responsive: {
    0: {
      dots: true,
      nav: false,
      items: 1
    },
    566: {
      nav: false,
      dots: true,
      items: 2
    },
    768: {
      nav: false,
      dots: true,
      items: 3
    },
    900: {
      nav: false,
      dots: true,
      items: 4
    },
    950: {
      dots: false
    }
  }
});
(() => {
  const buttonDefaultView = $(".button1");
  const buttonWideView = $(".button2");
  const buttonLineView = $(".button3");
  const items = $(".product-item");
  buttonWideView.click(event => {
    buttonDefaultView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--line");
    items.addClass("product-item--wide");
  });
  buttonLineView.click(event => {
    buttonWideView.removeClass("current");
    buttonDefaultView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--wide");
    items.addClass("product-item--line");
  });
  buttonDefaultView.click(event => {
    buttonWideView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "default");
    items.removeClass("product-item--wide");
    items.removeClass("product-item--line");
  });
})();
$(document).ready(function () {
  $(document).on("click", event => {
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
  $("[data-open-dropdown-content]").on("click", event => {
    const target = $(event.currentTarget);
    const parent = target.parent();
    parent.find("[data-close-dropdown-content]").removeClass("d-none");
    target.addClass("d-none");
  });
  $("[data-close-dropdown-content]").on("click", event => {
    const target = $(event.currentTarget);
    const parent = target.parent();
    parent.find("[data-open-dropdown-content]").removeClass("d-none");
    target.addClass("d-none");
  });
  $("[data-toggle-bottom-dropdown]").on("click", event => {
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
  $("[data-clear-input-button]").on("click", event => {
    const id = $(event.currentTarget).attr("data-clear-input-button");
    $(`[data-clear-input="${id}"]`).val("");
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
function gallery() {
  if ($.fancybox) {
    $(".owl-item [data-fancybox]").on("click", function () {
      var $selector = $(this).parents(".owl-carousel").find(".owl-item:not(.cloned) [data-fancybox]");
      $.fancybox.open($selector, {
        selector: $selector,
        backFocus: false
      }, $selector.index(this));
      return false;
    });
  }
}
function header() {
  var $header = $("header"),
    height,
    scroll;
  let isThrottled = false;
  check();
  $(window).scroll(function () {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
      check();
      isThrottled = false;
    }, 100);
  });
  function check() {
    if (!$header.hasClass("header_landing")) {
      scroll = $(window).scrollTop();
      height = $header.height();
      if (scroll > height) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
      }
    }
  }
} //gallery

function homeBanner() {
  var $slider = $(".home-banner .owl-carousel"),
    arrowPrev = '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
    arrowNext = '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>';
  if ($slider.length) {
    $slider.owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 500,
      dots: true,
      items: 1,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: (+$slider.data("autoplay-timeout") || 5) * 1000,
      navText: [arrowPrev, arrowNext],
      autoplayHoverPause: true
    });
  }
}
$(document).ready(() => {
  const keypressSliders = $(".range-slider");
  $(keypressSliders).each(function (index, keypressSlider) {
    const field_name = $(keypressSlider).data("name");
    const input0 = document.getElementById("id_" + field_name + "_0");
    const input1 = document.getElementById("id_" + field_name + "_1");
    const inputs = [input0, input1];
    const startVal = input0 ? parseInt(input0.dataset.currentValue) : undefined;
    const endVal = input1 ? parseInt(input1.dataset.currentValue) : undefined;
    const minVal = input0 ? parseInt(input0.dataset.minValue) : undefined;
    const maxVal = input1 ? parseInt(input1.dataset.maxValue) : undefined;
    let postfix = "";
    if (field_name == "price_range") {
      postfix = " ₽";
    }
    if (typeof nouislider__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined") {
      nouislider__WEBPACK_IMPORTED_MODULE_2__["default"].create(keypressSlider, {
        start: [startVal, endVal],
        connect: true,
        range: {
          min: minVal,
          max: maxVal
        },
        format: wnumb__WEBPACK_IMPORTED_MODULE_1___default()({
          decimals: 0,
          thousand: " ",
          postfix: postfix
        }),
        step: 1
      });
    }
    if (keypressSlider !== null && keypressSlider.noUiSlider) {
      keypressSlider.noUiSlider.on("update", function (values, handle) {
        inputs[handle].value = values[handle];
      });
    }
    function setSliderHandle(i, value) {
      let r = [null, null];
      r[i] = value;
      keypressSlider.noUiSlider.set(r);
    } // Listen to keydown events on the input field.

    inputs.forEach(function (input, handle) {
      if (input === null) return;
      input.addEventListener("change", function () {
        setSliderHandle(handle, this.value);
      });
      input.addEventListener("keydown", function (e) {
        let values = keypressSlider.noUiSlider.get();
        let value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

        let steps = keypressSlider.noUiSlider.steps(); // [down, up]

        let step = steps[handle];
        let position; // 13 is enter,
        // 38 is key up,
        // 40 is key down.

        switch (e.which) {
          case 13:
            setSliderHandle(handle, this.value);
            break;
          case 38:
            // Get step to go increase slider value (up)
            position = step[1]; // false = no step is set

            if (position === false) {
              position = 1;
            } // null = edge of slider

            if (position !== null) {
              setSliderHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              setSliderHandle(handle, value - position);
            }
            break;
        }
      });
    });
  });
});
$(function () {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $(".smoothScroll").click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds

        return false;
      }
    }
  });
});
$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page

  var syncedSecondary = true;
  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    margin: 10
  }).on("changed.owl.carousel", syncPosition);
  sync2.on("initialized.owl.carousel", function () {
    sync2.find(".owl-item").eq(0).addClass("current");
  }).owlCarousel({
    items: slidesPerPage,
    dots: true,
    nav: true,
    margin: 10,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: slidesPerPage,
    //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  }).on("changed.owl.carousel", syncPosition2);
  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    } //end block

    sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();
    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }
  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});
$(".tab-content").hide();
$(".tab-content:first").show();
/* if in tab mode */

$("ul.tabs li,.product-card__review-link a,.schedule-btn a").click(function () {
  $(".tab-content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
/* if in drawer mode */

$(".tab_drawer_heading").click(function () {
  var d_activeTab = $(this).attr("rel"),
    activeTabBlock = $("#" + d_activeTab + ":hidden"),
    $thisActive = $(this).not(".d_active");
  $(".tab-content").hide();
  activeTabBlock.fadeIn();
  $(".tab_drawer_heading").removeClass("d_active");
  $thisActive.addClass("d_active");
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
/* Extra class "tab_last"
 to add border to right side
 of last tab */

$("ul.tabs li").last().addClass("tab_last");
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".schedule-btn a").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".schedule-link").toggleClass("active");
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".product-card__review-link a").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".review-tab-link").toggleClass("active");
  });
}); //slideshow

$(document).ready(() => {
  let touchstartX = 0;
  let touchendX = 0;
  $(".product-card-slideshow__sector").on("mousemove", event => {
    const target = $(event.currentTarget);
    const id = target.attr("data-sector");
    const parent = target.parent().parent();
    parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
    parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
    parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
    parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
  });
  $(".product-card-slideshow__sectors").on("touchstart", event => {
    touchstartX = event.changedTouches[0].screenX;
  });
  $(".product-card-slideshow__sectors").on("touchend", event => {
    touchendX = event.changedTouches[0].screenX;
    const parent = $(event.currentTarget).parent();
    const img = parent.find(".product-card-slideshow__image_active");
    const id = Number(img.attr("data-sector-image"));
    const length = parent.find(".product-card-slideshow__image").length;
    if (touchendX < touchstartX) {
      parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
      parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
      if (id >= length) {
        parent.find(`[data-sector-image]:nth-child(1)`).addClass("product-card-slideshow__image_active");
        parent.find(`[data-sector-dot]:nth-child(1)`).addClass("product-card-slideshow__dot_active");
        return;
      }
      parent.find(`[data-sector-image="${id}"]`).next().addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${id}"]`).next().addClass("product-card-slideshow__dot_active");
    }
    if (touchendX > touchstartX) {
      parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
      parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
      if (id <= 1) {
        parent.find(`[data-sector-image]:nth-child(${length})`).addClass("product-card-slideshow__image_active");
        parent.find(`[data-sector-dot]:nth-child(${length})`).addClass("product-card-slideshow__dot_active");
        return;
      }
      parent.find(`[data-sector-image="${id}"]`).prev().addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${id}"]`).prev().addClass("product-card-slideshow__dot_active");
    }
  });
  $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass("product-card-slideshow__image_active");
  $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass("product-card-slideshow__dot_active");
});
$(document).ready(function () {
  homeBanner();
  header();
  gallery();
  landing_sliders();
  up();
  chatBlock();
  toggle(); //interaction
});
function landing_sliders() {
  var $sliders = $(".landing-slider .owl-carousel");
  if ($sliders.length) {
    $sliders.each(function () {
      var $this = $(this);
      var count1, count2, count3, count4;
      if ($this.is(".landing-slider_1 .owl-carousel")) {
        count1 = 2;
        count2 = 2;
        count3 = 3;
        count4 = 4;
      } else if ($this.is(".landing-slider_2 .owl-carousel")) {
        count1 = 1;
        count2 = 2;
        count3 = 3;
        count4 = 4;
      }
      $this.owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
          0: {
            items: count1,
            margin: 16
          },
          576: {
            items: count2
          },
          768: {
            items: count3
          },
          992: {
            items: count4
          }
        }
      });
    });
  }
}
function toggle() {
  var $section = $(".toggle-section"),
    speed = 250;
  $section.each(function () {
    var $this = $(this),
      $toggle = $this.children(".toggle-section__trigger"),
      $content = $this.children(".toggle-section__content"),
      $close = $content.find(".toggle-section__close"),
      state = $this.hasClass("active") ? true : false,
      initialized;
    $toggle.on("click", function () {
      state = !state ? true : false;
      check();
    });
    $close.on("click", function () {
      state = false;
      check();
    });
    if ($this.is("[data-hover]")) {
      var timeout;
      $toggle.add($content).on("mouseenter", function (event) {
        if (!isTouch) {
          if (timeout) clearTimeout(timeout);
          state = true;
          check();
        }
      });
      $toggle.add($content).on("mouseleave", function (event) {
        if (!isTouch) {
          var delay;
          if ($(this).is($toggle)) {
            delay = 500;
          } else {
            delay = 100;
          }
          timeout = setTimeout(function () {
            state = false;
            check();
          }, delay);
        }
      });
    }
    if ($this.is("[data-out-hide]") || $this.is("[data-hover]")) {
      $(document).on("click touchstart", function (event) {
        var $target = $(event.target);
        if (!$target.closest($content).length && !$target.closest($toggle).length && state) {
          state = false;
          check();
        }
      });
    }
    function check() {
      if (state) {
        $this.add($content).add($toggle).addClass("active");
        if ($this.is("[data-slide]")) {
          $content.slideDown(speed);
        }
      } else {
        $this.add($toggle).add($content).removeClass("active");
        if ($this.is("[data-slide]")) {
          if (initialized) {
            $content.stop().slideUp(speed);
          } else {
            $content.hide(0);
          }
        }
      }
    }
    check();
    initialized = true;
  });
}
function up() {
  var $btn = $(".js-up");
  function check() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $btn.addClass("visible");
    } else {
      $btn.removeClass("visible");
    }
  }
  let isThrottled = false;
  $(window).on("scroll", function () {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
      check();
      isThrottled = false;
    }, 100);
  });
  check();
  $btn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
}
function chatBlock() {
  var $block = $(".chat-block"),
    $open = $("[data-chat-open]"),
    $close = $("[data-chat-close]");
  $open.on("click", function () {
    $block.addClass("active");
  });
  $close.on("click", function () {
    $block.removeClass("active");
  });
}

// header-custom.js

$(document).ready(() => {
  const srcMenu = $("#menu");
  const srcNavbar = $("#menu-navbar");
  if (!srcMenu.length || !srcNavbar.length) return;
  const menu = new Mmenu("#menu", {
    offCanvas: {
      position: srcMenu.attr("data-position")
    },
    navbars: [{
      content: srcNavbar.html()
    }],
    screenReader: {
      closeMenu: "Close menu"
    },
    page: {
      noSelector: []
    },
    hooks: {
      "initMenu:before": () => {
        srcNavbar.remove();
      }
    }
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
});
$(document).ready(() => {
  // phone toggle
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".contact-box p")) return;else {
      e.target.classList.add("toggled");
    }
  });

  // catalog and menu vars
  var catalogBtn = document.querySelector(".catalog-btn");
  var catalogBox = document.querySelector(".catalog-box");
  var menuBtn = document.querySelector(".menu-btn");
  var menuBox = document.querySelector(".menu-box");

  // catalog open
  document.addEventListener("click", function (e) {
    if (e.target.matches(".catalog-btn")) {
      catalogBtn.classList.toggle("toggled");
      catalogBox.classList.toggle("show");
      if (menuBtn) {
        menuBtn.classList.remove("toggled");
        menuBox.classList.remove("show");
      }
    } else {
      return;
    }
  });

  // menu open
  document.addEventListener("click", function (e) {
    if (e.target.matches(".menu-btn")) {
      menuBtn.classList.toggle("toggled");
      menuBox.classList.toggle("show");
      if (catalogBtn) {
        catalogBtn.classList.remove("toggled");
        catalogBox.classList.remove("show");
      }
    } else {
      return;
    }
  });
});

// scripts-desktop.js

$(() => {
  if (window.innerWidth >= 767) {
    $(".product-slider--5 .owl-carousel").owlCarousel({
      loop: true,
      margin: 11,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
    $(".product-slider--4:not(.product-slider--5) .owl-carousel").owlCarousel({
      loop: true,
      margin: 11,
      nav: true,
      dots: false,
      items: 5,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1240: {
          items: 5
        }
      }
    });
    $(".product-slider--3 .owl-carousel").owlCarousel({
      loop: true,
      margin: 11,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1240: {
          items: 4
        }
      }
    });
    function goTo(selector) {
      var lastVisible = document.querySelector(selector);
      if (lastVisible) {
        var elemRect = lastVisible.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var offset = elemRect.bottom - bodyRect.top;
        window.scrollTo(0, offset);
      }
    }
  } else {
    "use strict";
    function goTo(selector) {
      var lastVisible = document.querySelector(selector);
      if (lastVisible) {
        var elemRect = lastVisible.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var offset = elemRect.bottom - bodyRect.top;
        window.scrollTo(0, offset);
      }
    }
    $(function () {
      $(".product-slider--3 .item").slice(0, 2).show();
      $(".btn-download-1").on("click", function (e) {
        e.preventDefault();
        $(".product-slider--3 .item:hidden").slice(0, 2).show();
        goTo(".product-slider--3 .item:nth-child(2)");
        if ($(".product-slider--3 .item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(function () {
      $(".actions-content .item").slice(0, 4).show();
      $(".btn-download-4").on("click", function (e) {
        e.preventDefault();
        $(".actions-content .item:hidden").slice(0, 3).show();
        goTo(".actions-content .item:nth-child(3)");
        if ($(".actions-content .item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(function () {
      $(".articles-block .item").slice(0, 4).show();
      $(".btn-download-5").on("click", function (e) {
        e.preventDefault();
        $(".articles-block .item:hidden").slice(0, 3).show();
        goTo(".articles-block .item:nth-child(5)");
        if ($(".articles-block .item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(function () {
      $(".catalog-menu--search .catalog-menu-item").slice(0, 4).show();
      $(".btn-download-6").on("click", function (e) {
        e.preventDefault();
        $(".catalog-menu--search .catalog-menu-item:hidden").slice(0, 2).show();
        goTo(".catalog-menu--search .catalog-menu-item:nth-child(4)");
        if ($(".catalog-menu--search .catalog-menu-item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(function () {
      $(".catalog-content--search-results .product-item").slice(0, 4).show();
      $(".btn-download-7").on("click", function (e) {
        e.preventDefault();
        $(".catalog-content--search-results .product-item:hidden").slice(0, 2).show();
        goTo(".catalog-content--search-results .product-item:nth-child(4)");
        if ($(".catalog-content--search-results .product-item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(function () {
      $(".catalog-content .product-item").slice(0, 4).show();
      $(".btn-download-8").on("click", function (e) {
        e.preventDefault();
        $(".catalog-content .product-item:hidden").slice(0, 4).show();
        goTo(".catalog-content .product-item:nth-child(4)");
        if ($(".catalog-content .product-item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(".city-selection__link").click(function () {
      $(".city-selection__list").toggle(0);
    });
    var $banners = $(".product-slider__banners.owl-carousel, .new-banners.owl-carousel");
    $banners.each(function () {
      console.log($(this));
      var $this = $(this); //

      if ($this.find(".item").length > 2) {
        $this.owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          items: 2,
          responsive: {
            0: {
              nav: false,
              dots: true
            },
            768: {
              nav: false,
              dots: false
            }
          }
        });
      }
    }); //$(function () {
    //  $(".product-slider--third .item").slice(0, 2).show();
    //  $(".btn-download-1").on('click', function (e) {
    //    e.preventDefault();
    //    $(".product-slider--third .item:hidden").slice(0, 2).show();
    //    if ($(".product-slider--third .item:hidden").length == 0) {
    //      $("#load").show();
    //    }
    //  });
    //});
    //

    $(function () {
      $(".product-slider--4 .item").slice(0, 4).show();
      $(".btn-download-2").on("click", function (e) {
        e.preventDefault();
        $(".product-slider--4 .item:hidden").slice(0, 4).show();
        goTo(".product-slider--4 .item:nth-child(4)");
        if ($(".product-slider--4 .item:hidden").length == 0) {
          $("#load").show();
        }
      });
    });
    $(".actions-content .owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      items: 3,
      responsive: {
        0: {
          nav: false,
          dots: true,
          items: 1
        },
        479: {
          nav: false,
          dots: true,
          items: 2
        }
      }
    });
    $(".articles-block .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      items: 3,
      responsive: {
        0: {
          nav: false,
          dots: true,
          items: 1
        },
        479: {
          nav: false,
          dots: true,
          items: 2
        }
      }
    });
    function moveBtnexitToLktop() {
      if (!document.querySelector(".page-head > .btn-exit")) {
        var btnexitBlock = document.querySelector(".btn-exit");
        var lktopBlock = document.querySelector(".page-head");
        if (lktopBlock && btnexitBlock) {
          lktopBlock.appendChild(btnexitBlock);
        }
      }
    }
    function moveCompareToHeadright() {
      if (!document.querySelector(".top-header__content-right > .header-compare")) {
        var compareBlock = document.querySelector(".header-compare");
        var headrightBlock = document.querySelector(".top-header__content-right");
        if (headrightBlock && compareBlock) {
          headrightBlock.appendChild(compareBlock);
        }
      }
    }
    function moveCartToHeadright() {
      if (!document.querySelector(".top-header__content-right > .header-cart")) {
        var cartBlock = document.querySelector(".header-cart");
        var headrightBlock = document.querySelector(".top-header__content-right");
        if (headrightBlock && cartBlock) {
          headrightBlock.appendChild(cartBlock);
        }
      }
    }
    function moveBtnToMobbtn() {
      if (!document.querySelector(".mobile-btn-container > .btn-form")) {
        var btnBlock = document.querySelector(".btn-form");
        var mobbtnBlock = document.querySelector(".mobile-btn-container");
        if (mobbtnBlock && btnBlock) {
          mobbtnBlock.appendChild(btnBlock);
        }
      }
    }
    function handleResize() {
      var width = window.innerWidth;
      if (width < 768) {
        moveBtnexitToLktop();
        moveCompareToHeadright();
        moveCartToHeadright();
        moveBtnToMobbtn();
        return;
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }
});

// common.js

$(document).ready(function () {
  if (window.innerWidth < 767) {
    $(".product-item.product-item--wide").removeClass("product-item--wide");
  }
  var sysMessages = $("#system-messages");
  if (sysMessages) {
    $.fancybox.open(sysMessages);
  }
  // phone mask init
  $('.phone:not(".skip-mask")').inputmask("+9 (999) 999-99-99", {
    placeholder: "",
    showMaskOnHover: false
  });
  $('.phone:not(".skip-mask")').on("input", function () {
    const value = $(this).val();
    if (value[1] == 8) {
      $(this).val(7 + value.slice(2));
      return;
    }
    if (value[1] != 8 && value[1] != 7 && value[1]) {
      $(this).val("7" + value);
      return;
    }
  });
  headerPhones();
});
function externalLinksInit() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.startsWith("http") && linkIsExternal(links[i])) {
      links[i].setAttribute("target", "_blank");
    }
  }
}
function linkIsExternal(link_element) {
  return link_element.host !== window.location.host;
}
function headerPhones() {
  let phoneToggle = document.querySelector(".header-phones__toggle");
  if (phoneToggle) {
    phoneToggle.addEventListener("click", function () {
      $(".header-phones.top-header__phones .header-phones__inner").show();
    });
  }
}

// frontpage.js

$(document).ready(function () {
  $(".category-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 5,
    responsive: {
      0: {
        nav: false,
        dots: true,
        items: 1
      },
      479: {
        nav: false,
        dots: true,
        items: 3
      },
      768: {
        nav: true,
        dots: false,
        items: 4
      },
      992: {
        nav: true,
        items: 5
      }
    }
  });
});
$(() => {
  $(".tabs-slider-mobile").slick({
    infinite: !1,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: !1,
    variableWidth: !1,
    centerMode: !1
  });
});

/***/ }),

/***/ "./src/components/booking/model/index.js":
/*!***********************************************!*\
  !*** ./src/components/booking/model/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBooking: function() { return /* binding */ initBooking; }
/* harmony export */ });
/* harmony import */ var _tooltips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltips */ "./src/components/booking/model/tooltips.js");

const initBooking = () => {
  (0,_tooltips__WEBPACK_IMPORTED_MODULE_0__.initTooltips)();
};

/***/ }),

/***/ "./src/components/booking/model/tooltips.js":
/*!**************************************************!*\
  !*** ./src/components/booking/model/tooltips.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTooltips: function() { return /* binding */ initTooltips; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initTooltips = () => {
  if (!$("[data-booking-tooltip-content]").length) return;
  const tooltipContent = $("[data-booking-tooltip-content]");
  const clonedTooltipContent = tooltipContent.clone();
  tooltipContent.remove();
  tippy("[data-booking-tooltip]", {
    content: clonedTooltipContent.html(),
    allowHTML: true,
    placement: "top-start",
    theme: "light",
    interactive: true,
    delay: [100, 200],
    onMount(instance) {
      const target = $(instance.reference);
      const title = target.parent().parent().find("[data-booking-title]").attr("data-booking-title");
      const time = target.attr("data-booking-time");
      const action = target.attr("data-submit-url");
      const button = $("[data-booking-tooltip-button]");
      const timePattern = /\/\d{4}-\d{2}-\d{2}\/\d+(?:\/\d+)?\/?$/;
      const isTime = timePattern.test(action);
      const datePattern = /\d{4}-\d{2}-\d{2}/;
      const match = action.match(datePattern);
      const date = match ? new Date(match[0]).toLocaleDateString() : new Date().toLocaleDateString();
      button.attr("data-booking-tooltip-button-time", time);
      button.attr("data-booking-tooltip-button-title", title);
      $("[data-booking-tooltip-title]").text(title);
      $("[data-booking-tooltip-time]").text(time);
      $("[data-booking-tooltip-button]").on("click", event => {
        const form = $("#booking-form");
        $("[data-booking-item-selected]").removeAttr("data-booking-item-selected");
        target.attr("data-booking-item-selected", "");
        if (!form.length) return;
        form.find("input, textarea, button").removeAttr("disabled");
        form.attr("action", action);
        let guestText = "";
        if (!form.find('[name="message"]').is("[data-not-guests]")) {
          guestText = "\nКол-во гостей: -";
        }
        if (isTime && date) {
          form.find('[name="message"]').val(`Хочу забронировать: ${title}, дата: ${date}, время: ${time} ${guestText}`);
          $("html, body").animate({
            scrollTop: $("[data-booking-form]").offset().top - 200
          }, 500);
          return;
        }
        if (date) {
          form.find('[name="message"]').val(`Хочу забронировать: ${title}, дата: ${date} ${guestText}`);
          $("html, body").animate({
            scrollTop: $("[data-booking-form]").offset().top - 200
          }, 500);
          return;
        }
        form.find('[name="message"]').val(`Хочу забронировать: ${title}, ${time}  ${guestText}`);
        $("html, body").animate({
          scrollTop: $("[data-booking-form]").offset().top - 200
        }, 500);
      });
    }
  });
  $("[data-booking-scroll]").scroll(event => {
    const currentScroll = $(event.currentTarget).scrollLeft();
    if (currentScroll > 1) {
      $("[data-booking-mobile-titles]").attr("data-booking-mobile-titles-active", "");
      return;
    }
    $("[data-booking-mobile-titles-active]").removeAttr("data-booking-mobile-titles-active");
  });
  const appendMobileTitles = () => {
    $("[data-booking-title]").each((index, element) => {
      const target = $(element);
      const title = target.clone();
      title.css({
        "min-height": target.height()
      });
      $("[data-booking-mobile-titles]").append(title);
    });
  };
  appendMobileTitles();
};

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initComponents: function() { return /* binding */ initComponents; }
/* harmony export */ });
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking/model */ "./src/components/booking/model/index.js");
/* harmony import */ var _product_teasers_model_product_card_slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-teasers/model/product-card-slideshow */ "./src/components/product-teasers/model/product-card-slideshow.js");
/* harmony import */ var _modals_model_searchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/model/searchInput */ "./src/components/modals/model/searchInput.js");
/* harmony import */ var _menus_model_mmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus/model/mmenu */ "./src/components/menus/model/mmenu.js");




const initComponents = () => {
  (0,_booking_model__WEBPACK_IMPORTED_MODULE_0__.initBooking)();
  (0,_product_teasers_model_product_card_slideshow__WEBPACK_IMPORTED_MODULE_1__.productCartSlideShowInit)();
  (0,_modals_model_searchInput__WEBPACK_IMPORTED_MODULE_2__.initSearchInput)();
  (0,_menus_model_mmenu__WEBPACK_IMPORTED_MODULE_3__.initMmenu)();
};

/***/ }),

/***/ "./src/components/menus/model/mmenu.js":
/*!*********************************************!*\
  !*** ./src/components/menus/model/mmenu.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMmenu: function() { return /* binding */ initMmenu; }
/* harmony export */ });
/* harmony import */ var _mmenuCities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mmenuCities */ "./src/components/menus/model/mmenuCities.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const initMmenu = () => {
  const srcMenu = $("#menu");
  const srcNavbar = $("#menu-navbar");
  if (!srcMenu.length || !srcNavbar.length) return;
  const menu = new Mmenu("#menu", {
    offCanvas: {
      position: srcMenu.attr("data-position")
    },
    navbars: [{
      content: srcNavbar.html()
    }],
    screenReader: {
      closeMenu: "Close menu"
    },
    page: {
      noSelector: []
    },
    hooks: {
      "initMenu:before": () => {
        srcNavbar.remove();
      },
      "initMenu:after": () => {
        (0,_mmenuCities__WEBPACK_IMPORTED_MODULE_0__.initMmenuCities)();
      }
    }
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

/***/ }),

/***/ "./src/components/menus/model/mmenuCities.js":
/*!***************************************************!*\
  !*** ./src/components/menus/model/mmenuCities.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMmenuCities: function() { return /* binding */ initMmenuCities; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initMmenuCities = () => {
  if (!$("[data-mmenu-cities]").length) return;
  $(document).on("click", event => {
    const target = event.target;
    if (target.closest("[data-mmenu-cities-ignore]")) return;
    if (target.closest("[data-mmenu-cities-link]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-cities-search]").removeClass("d-none");
      return;
    }
    if (target.closest(".mm-navbar")) {
      $("[data-mmenu-search]").removeClass("d-none");
      $("[data-mmenu-cities-search]").addClass("d-none");
      return;
    }
    if (target.closest("[data-mmenu-cities-page]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-cities-search]").removeClass("d-none");
      return;
    }
  });
  $("[data-mmenu-cities-search-input]").on("input", event => {
    const target = $(event.currentTarget);
    const value = target.val().toLocaleLowerCase().trim();
    if (value.length === 0) {
      $('[data-clear-input-button="mmenu-search-cities"]').addClass("opacity-0");
      $("[data-mmenu-cities-search-icon]").removeClass("opacity-0");
      target.addClass("ps-40");
      for (const item of Array.from($("[data-mmenu-cities-item]"))) {
        const itemObj = $(item);
        const text = itemObj.text().trim();
        const newText = text.replace("<span>", "").replace("<span/>", "");
        itemObj.find(".mm-listitem__text").html(newText);
        itemObj.removeClass("d-none");
      }
      return;
    }
    $('[data-clear-input-button="mmenu-search-cities"]').removeClass("opacity-0");
    $("[data-mmenu-cities-search-icon]").addClass("opacity-0");
    target.removeClass("ps-40");
    for (const item of Array.from($("[data-mmenu-cities-item]"))) {
      const itemObj = $(item);
      const text = itemObj.text().trim();
      const index = text.toLocaleLowerCase().indexOf(value);
      if (index === -1) {
        itemObj.addClass("d-none");
        continue;
      }
      const subStr = text.slice(index, value.length);
      const newText = text.replace(subStr, `<span>${subStr}</span>`);
      itemObj.find(".mm-listitem__text").html(newText);
      itemObj.removeClass("d-none");
    }
  });
};

/***/ }),

/***/ "./src/components/modals/model/searchInput.js":
/*!****************************************************!*\
  !*** ./src/components/modals/model/searchInput.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchInput: function() { return /* binding */ initSearchInput; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initSearchInput = () => {
  if (!$("[data-search-input]").length) return;
  $("[data-search-input]").on("input", event => {
    const target = $(event.currentTarget);
    const value = target.val().toLocaleLowerCase().trim();
    const items = Array.from($("[data-search-item]"));
    if (value.length === 0) {
      $("[data-search-result-list]").addClass("d-none");
      $("[data-search-list]").removeClass("d-none");
      $('[data-clear-input-button="city-search"]').addClass("opacity-0");
      $("[data-search-result-list]").html("");
      $("[data-search-icon]").removeClass("opacity-0");
      target.addClass("ps-40");
      return;
    }
    $("[data-search-result-list]").html("");
    $("[data-search-list]").addClass("d-none");
    $("[data-search-result-list]").removeClass("d-none");
    $('[data-clear-input-button="city-search"]').removeClass("opacity-0");
    $("[data-search-icon]").addClass("opacity-0");
    target.removeClass("ps-40");
    for (let index = 0; index < items.length; index++) {
      if (index >= 25) break;
      const itemObj = $(items[index]);
      const text = itemObj.text().trim();
      const subStrIndex = text.toLocaleLowerCase().indexOf(value);
      if (subStrIndex === -1) {
        continue;
      }
      const subStr = text.slice(subStrIndex, value.length);
      const newText = text.replace(subStr, `<span>${subStr}</span>`);
      const newItem = itemObj.clone();
      newItem.html(newText);
      $("[data-search-result-list]").append(newItem);
    }
  });
};

/***/ }),

/***/ "./src/components/product-teasers/model/product-card-slideshow.js":
/*!************************************************************************!*\
  !*** ./src/components/product-teasers/model/product-card-slideshow.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productCartSlideShowInit: function() { return /* binding */ productCartSlideShowInit; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const productCartSlideShowInit = () => {
  if (!$(".product-card-slideshow__sector").length) return;
  let touchstartX = 0;
  let touchendX = 0;
  $(".product-card-slideshow__sector").on("mousemove", event => {
    const target = $(event.currentTarget);
    const id = target.attr("data-sector");
    const parent = target.parent().parent();
    parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
    parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
    parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
    parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
  });
  $(".product-card-slideshow__sectors").on("touchstart", event => {
    touchstartX = event.changedTouches[0].screenX;
  });
  $(".product-card-slideshow__sectors").on("touchend", event => {
    touchendX = event.changedTouches[0].screenX;
    const parent = $(event.currentTarget).parent();
    const img = parent.find(".product-card-slideshow__image_active");
    const id = Number(img.attr("data-sector-image"));
    const length = parent.find(".product-card-slideshow__image").length;
    if (touchendX < touchstartX) {
      parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
      parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
      if (id >= length) {
        parent.find(`[data-sector-image]:nth-child(1)`).addClass("product-card-slideshow__image_active");
        parent.find(`[data-sector-dot]:nth-child(1)`).addClass("product-card-slideshow__dot_active");
        return;
      }
      parent.find(`[data-sector-image="${id}"]`).next().addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${id}"]`).next().addClass("product-card-slideshow__dot_active");
    }
    if (touchendX > touchstartX) {
      parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
      parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
      if (id <= 1) {
        parent.find(`[data-sector-image]:nth-child(${length})`).addClass("product-card-slideshow__image_active");
        parent.find(`[data-sector-dot]:nth-child(${length})`).addClass("product-card-slideshow__dot_active");
        return;
      }
      parent.find(`[data-sector-image="${id}"]`).prev().addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${id}"]`).prev().addClass("product-card-slideshow__dot_active");
    }
  });
  $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass("product-card-slideshow__image_active");
  $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass("product-card-slideshow__dot_active");
};

/***/ }),

/***/ "./src/shared/index.js":
/*!*****************************!*\
  !*** ./src/shared/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initShared: function() { return /* binding */ initShared; }
/* harmony export */ });
/* harmony import */ var _libs_clickUtils_clickUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/clickUtils/clickUtils */ "./src/shared/libs/clickUtils/clickUtils.js");
/* harmony import */ var _libs_radioToggle_radioToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/radioToggle/radioToggle */ "./src/shared/libs/radioToggle/radioToggle.js");
/* harmony import */ var _libs_collapse_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/collapse/collapse */ "./src/shared/libs/collapse/collapse.js");
/* harmony import */ var _libs_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/select/select */ "./src/shared/libs/select/select.js");
/* harmony import */ var _libs_inputToggle_inputToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/inputToggle/inputToggle */ "./src/shared/libs/inputToggle/inputToggle.js");
/* harmony import */ var _libs_trigger_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/trigger/trigger */ "./src/shared/libs/trigger/trigger.js");
/* harmony import */ var _libs_relatedValue_relatedValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/relatedValue/relatedValue */ "./src/shared/libs/relatedValue/relatedValue.js");
/* harmony import */ var _libs_dataSelect_dataSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/dataSelect/dataSelect */ "./src/shared/libs/dataSelect/dataSelect.js");
/* harmony import */ var _libs_checkBoxToggle_checkBoxToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./libs/checkBoxToggle/checkBoxToggle */ "./src/shared/libs/checkBoxToggle/checkBoxToggle.js");
/* harmony import */ var _libs_searchSelect_searchSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./libs/searchSelect/searchSelect */ "./src/shared/libs/searchSelect/searchSelect.js");
/* harmony import */ var _libs_tiresCarsSelection_tiresCarsSelection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs/tiresCarsSelection/tiresCarsSelection */ "./src/shared/libs/tiresCarsSelection/tiresCarsSelection.js");
/* harmony import */ var _libs_requaredField_requaredField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./libs/requaredField/requaredField */ "./src/shared/libs/requaredField/requaredField.js");
/* harmony import */ var _libs_sliderConstructor_sliderConstructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./libs/sliderConstructor/sliderConstructor */ "./src/shared/libs/sliderConstructor/sliderConstructor.js");
/* harmony import */ var _libs_customInteraction_customInteraction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./libs/customInteraction/customInteraction */ "./src/shared/libs/customInteraction/customInteraction.js");
/* harmony import */ var _libs_cscrlb_cscrlb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./libs/cscrlb/cscrlb */ "./src/shared/libs/cscrlb/cscrlb.js");















const initShared = () => {
  (0,_libs_clickUtils_clickUtils__WEBPACK_IMPORTED_MODULE_0__.initClickUtils)();
  (0,_libs_radioToggle_radioToggle__WEBPACK_IMPORTED_MODULE_1__.initRadioToggle)();
  (0,_libs_collapse_collapse__WEBPACK_IMPORTED_MODULE_2__.initCollapse)();
  (0,_libs_select_select__WEBPACK_IMPORTED_MODULE_3__.initSelect)();
  (0,_libs_inputToggle_inputToggle__WEBPACK_IMPORTED_MODULE_4__.initInputToggle)();
  (0,_libs_trigger_trigger__WEBPACK_IMPORTED_MODULE_5__.initTrigger)();
  (0,_libs_relatedValue_relatedValue__WEBPACK_IMPORTED_MODULE_6__.initRelatedValue)();
  (0,_libs_dataSelect_dataSelect__WEBPACK_IMPORTED_MODULE_7__.initDataSelect)();
  (0,_libs_checkBoxToggle_checkBoxToggle__WEBPACK_IMPORTED_MODULE_8__.initCheckBoxToggle)();
  (0,_libs_searchSelect_searchSelect__WEBPACK_IMPORTED_MODULE_9__.initSearchSelects)();
  (0,_libs_tiresCarsSelection_tiresCarsSelection__WEBPACK_IMPORTED_MODULE_10__.initTiresCarsSelection)();
  (0,_libs_requaredField_requaredField__WEBPACK_IMPORTED_MODULE_11__.initRequaredField)();
  (0,_libs_sliderConstructor_sliderConstructor__WEBPACK_IMPORTED_MODULE_12__.initSliderConstructor)();
  (0,_libs_customInteraction_customInteraction__WEBPACK_IMPORTED_MODULE_13__.initCustomInteraction)();
  (0,_libs_cscrlb_cscrlb__WEBPACK_IMPORTED_MODULE_14__.initCscrlb)();
};

/***/ }),

/***/ "./src/shared/libs/api/api.js":
/*!************************************!*\
  !*** ./src/shared/libs/api/api.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getApiQuery: function() { return /* binding */ getApiQuery; }
/* harmony export */ });
const getApiQuery = async query => {
  return fetch(query);
};

/***/ }),

/***/ "./src/shared/libs/checkBoxToggle/checkBoxToggle.js":
/*!**********************************************************!*\
  !*** ./src/shared/libs/checkBoxToggle/checkBoxToggle.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCheckBoxToggle: function() { return /* binding */ initCheckBoxToggle; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initCheckBoxToggle = () => {
  $("[data-check-box-toggle]").on("change", event => {
    const target = $(event.currentTarget);
    const id = target.attr("data-check-box-toggle");
    const checked = event.currentTarget.checked;
    const contentOn = $(`[data-check-box-toggle-content-on="${id}"]`);
    const contentOff = $(`[data-check-box-toggle-content-off="${id}"]`);
    if (checked) {
      contentOn.removeClass("d-none");
      contentOff.addClass("d-none");
      return;
    }
    contentOn.addClass("d-none");
    contentOff.removeClass("d-none");
  });
};

/***/ }),

/***/ "./src/shared/libs/clickUtils/clickUtils.js":
/*!**************************************************!*\
  !*** ./src/shared/libs/clickUtils/clickUtils.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initClickUtils: function() { return /* binding */ initClickUtils; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initClickUtils = () => {
  const clearInputs = $("[data-clear-input-button]");
  if (!clearInputs.length) return;
  $(document).on('click', event => {
    if (event.target.closest('[data-clear-input-button]')) {
      const id = $(event.target.closest('[data-clear-input-button]')).attr("data-clear-input-button");
      const input = $(`[data-clear-input="${id}"]`);
      input.val("");
      input.trigger("input").trigger("change");
    }
  });
};

/***/ }),

/***/ "./src/shared/libs/collapse/collapse.js":
/*!**********************************************!*\
  !*** ./src/shared/libs/collapse/collapse.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCollapse: function() { return /* binding */ initCollapse; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initCollapse = () => {
  $('[data-collapse]').each((index, element) => {
    const collapse = $(element);
    const id = collapse.attr('data-collapse');
    const collapseChildren = collapse.children();
    let collapseChildrenHeight = 0;
    for (const child of collapseChildren) {
      collapseChildrenHeight += $(child).outerHeight(true);
    }
    if (collapseChildrenHeight <= 200) return;
    collapse.attr('data-collapse-initialized', '');
    collapse.attr('data-open-height', collapseChildrenHeight);
    collapse.css('height', 200);
    $(`[data-collapse-open="${id}"], [data-collapse-toggle="${id}"]`).removeClass('d-none');
  });
  $('[data-collapse-toggle]').on('click', event => {
    const id = $(event.currentTarget).attr('data-collapse-toggle');
    const collapse = $(`[data-collapse="${id}"]`);
    const collapseHeight = collapse.attr('data-open-height');
    if (collapse.attr('data-collapse-active') === undefined) {
      collapse.animate({
        'height': collapseHeight
      }, 300).attr('data-collapse-active', '').siblings('[data-collapse-active]').animate({
        'height': 200
      }, 300).removeAttr('data-collapse-active');
      return;
    }
    collapse.animate({
      'height': 200
    }, 300).removeAttr('data-collapse-active');
  });
  $('[data-collapse-open]').on('click', event => {
    const id = $(event.currentTarget).attr('data-collapse-open');
    const collapse = $(`[data-collapse="${id}"]`);
    const collapseHeight = collapse.attr('data-open-height');
    collapse.animate({
      'height': collapseHeight
    }, 300).attr('data-collapse-active', '').siblings('[data-collapse-active]').animate({
      'height': 200
    }, 300).removeAttr('data-collapse-active');
  });
  $('[data-collapse-close]').on('click', event => {
    const id = $(event.currentTarget).attr('data-collapse-close');
    const collapse = $(`[data-collapse="${id}"]`);
    collapse.animate({
      'height': 200
    }, 300).removeAttr('data-collapse-active');
  });
  $('[data-collapse-hiding-open]').on('click', event => {
    const target = $(event.currentTarget);
    const id = target.attr('data-collapse-hiding-open');
    const collapseClose = $(`[data-collapse-hiding-close="${id}"]`);
    target.addClass('d-none');
    collapseClose.removeClass('d-none');
  });
  $('[data-collapse-hiding-close]').on('click', event => {
    const target = $(event.currentTarget);
    const id = target.attr('data-collapse-hiding-close');
    const collapseOpen = $(`[data-collapse-hiding-open="${id}"]`);
    target.addClass('d-none');
    collapseOpen.removeClass('d-none');
  });
};

/***/ }),

/***/ "./src/shared/libs/cscrlb/cscrlb.js":
/*!******************************************!*\
  !*** ./src/shared/libs/cscrlb/cscrlb.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCscrlb: function() { return /* binding */ initCscrlb; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initCscrlb = () => {
  if (!$(".cscrlb-scrollable").length) return;
  (function ($) {
    var pluginName = "cscrlb";
    function Plugin(element, options) {
      var el = element;
      var $el = $(element);
      var $scrollContentEl;
      var $contentEl = $el.find(".cscrlb-content");
      var $scrollbarEl;
      var $dragHandleEl;
      var dragOffset;
      var flashTimeout;
      var pageJumpMultp = 7 / 8;
      var scrollDirection = "vert";
      var scrollOffsetAttr = "scrollTop";
      var sizeAttr = "height";
      var offsetAttr = "top";
      options = $.extend({}, $.fn[pluginName].defaults, options);
      window.onload = function () {
        $contentEl.focus();
      };
      function init() {
        if ($el.hasClass("horizontal")) {
          scrollDirection = "horiz";
          scrollOffsetAttr = "scrollLeft";
          sizeAttr = "width";
          offsetAttr = "left";
        }
        $el.prepend('<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>');
        $scrollbarEl = $el.find(".cscrlb-scrollbar");
        $dragHandleEl = $el.find(".drag-handle");
        if (options.wrapContent) {
          $contentEl.wrap('<div class="cscrlb-scroll-content" />');
        }
        $scrollContentEl = $el.find(".cscrlb-scroll-content");
        resizeScrollContent();
        if (options.autoHide) {
          $el.on("mouseenter", flashScrollbar);
        }
        $dragHandleEl.on("mousedown", startDrag);
        $scrollbarEl.on("mousedown", jumpScroll);
        $scrollContentEl.on("scroll", onScrolled);
        resizeScrollbar();
        $(window).on("resize", function () {
          recalculate();
        });
        if (!options.autoHide) {
          showScrollbar();
        }
      }
      function startDrag(e) {
        e.preventDefault();
        var eventOffset = e.pageY;
        if (scrollDirection === "horiz") {
          eventOffset = e.pageX;
        }
        dragOffset = eventOffset - $dragHandleEl.offset()[offsetAttr];
        $(document).on("mousemove", drag);
        $(document).on("mouseup", endDrag);
      }
      function drag(e) {
        e.preventDefault();
        var eventOffset = e.pageY;
        if (scrollDirection === "horiz") {
          eventOffset = e.pageX;
        }
        var dragPos = eventOffset - $scrollbarEl.offset()[offsetAttr] - dragOffset;
        var dragPerc = dragPos / $scrollbarEl[sizeAttr]();
        var scrollPos = dragPerc * $contentEl[sizeAttr]();
        $scrollContentEl[scrollOffsetAttr](scrollPos);
      }
      function endDrag() {
        $(document).off("mousemove", drag);
        $(document).off("mouseup", endDrag);
      }
      function jumpScroll(e) {
        if (e.target === $dragHandleEl[0]) {
          return;
        }
        var jumpAmt = pageJumpMultp * $scrollContentEl[sizeAttr]();
        var eventOffset = scrollDirection === "vert" ? e.originalEvent.layerY : e.originalEvent.layerX;
        var dragHandleOffset = $dragHandleEl.position()[offsetAttr];
        var scrollPos = eventOffset < dragHandleOffset ? $scrollContentEl[scrollOffsetAttr]() - jumpAmt : $scrollContentEl[scrollOffsetAttr]() + jumpAmt;
        $scrollContentEl[scrollOffsetAttr](scrollPos);
      }
      function onScrolled(e) {
        flashScrollbar();
      }
      function resizeScrollbar() {
        var contentSize = $contentEl[sizeAttr]();
        var scrollOffset = $scrollContentEl[scrollOffsetAttr](); // scrollTop() か scrollLeft()

        var scrollbarSize = $scrollbarEl[sizeAttr]();
        var scrollbarRatio = scrollbarSize / contentSize;
        var handleOffset = Math.round(scrollbarRatio * scrollOffset);
        /* + 2; */

        var handleSize = Math.floor(scrollbarRatio * (scrollbarSize + 2));
        /*  - 2)) - 2; */

        if (scrollbarSize < contentSize) {
          if (scrollDirection === "vert") {
            $dragHandleEl.css({
              top: handleOffset,
              height: handleSize
            });
          } else {
            $dragHandleEl.css({
              left: handleOffset,
              width: handleSize
            });
          }
          $scrollbarEl.show();
        } else {
          $scrollbarEl.hide();
        }
      }
      function flashScrollbar() {
        resizeScrollbar();
        showScrollbar();
      }
      function showScrollbar() {
        $dragHandleEl.addClass("visible");
        if (!options.autoHide) {
          return;
        }
        if (typeof flashTimeout === "number") {
          window.clearTimeout(flashTimeout);
        }
        flashTimeout = window.setTimeout(function () {
          hideScrollbar();
        }, 1000);
      }
      function hideScrollbar() {
        $dragHandleEl.removeClass("visible");
        if (typeof flashTimeout === "number") {
          window.clearTimeout(flashTimeout);
        }
      }
      function resizeScrollContent() {
        if (scrollDirection === "vert") {
          $scrollContentEl.width($el.width() + scrollbarWidth());
          $scrollContentEl.height($el.height());
        } else {
          $scrollContentEl.width($el.width());
          $scrollContentEl.height($el.height() + scrollbarWidth());
          $contentEl.height($el.height());
        }
      }
      function scrollbarWidth() {
        var tempEl = $('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
        $("body").append(tempEl);
        var width = $(tempEl).innerWidth();
        var widthMinusScrollbars = $("div", tempEl).innerWidth();
        tempEl.remove();
        if (width === widthMinusScrollbars && navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
          return 17;
        }
        return width - widthMinusScrollbars;
      }
      function recalculate() {
        resizeScrollContent();
        resizeScrollbar();
      }
      function option(key, val) {
        if (val) {
          options[key] = val;
        } else {
          return options[key];
        }
      }
      function destroy() {
        $contentEl.insertBefore($scrollbarEl);
        $scrollbarEl.remove();
        $scrollContentEl.remove();
        $contentEl.css({
          height: $el.height() + "px",
          "overflow-y": "scroll"
        });
        hook("onDestroy");
        $el.removeData("plugin_" + pluginName);
      }
      function hook(hookName) {
        if (options[hookName] !== undefined) {
          options[hookName].call(el);
        }
      }
      init();
      return {
        option: option,
        destroy: destroy,
        recalculate: recalculate
      };
    }
    $.fn[pluginName] = function (options) {
      if (typeof arguments[0] === "string") {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function () {
          if ($.data(this, "plugin_" + pluginName) && typeof $.data(this, "plugin_" + pluginName)[methodName] === "function") {
            returnVal = $.data(this, "plugin_" + pluginName)[methodName].apply(this, args);
          } else {
            throw new Error(" " + methodName + " " + pluginName);
          }
        });
        if (returnVal !== undefined) {
          return returnVal;
        } else {
          return this;
        }
      } else if (_typeof(options) === "object" || !options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
          }
        });
      }
    };
    $.fn[pluginName].defaults = {
      onInit: function onInit() {},
      onDestroy: function onDestroy() {},
      wrapContent: true,
      autoHide: false
    };
  })(jQuery);
  $(function () {
    $(".cscrlb-scrollable").cscrlb();
  });
};

/***/ }),

/***/ "./src/shared/libs/customInteraction/customInteraction.js":
/*!****************************************************************!*\
  !*** ./src/shared/libs/customInteraction/customInteraction.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCustomInteraction: function() { return /* binding */ initCustomInteraction; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/shared/libs/utils/utils.js");

const initCustomInteraction = () => {
  var СustomInteraction = function СustomInteraction() {
    var _this2 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__._classCallCheck)(this, СustomInteraction);
    this.targets = options.targets;
    this.touchendDelay = options.touchendDelay || 100; //ms

    var events = function events(event) {
      var $targets = [];
      $targets[0] = event.target !== document ? event.target.closest(_this2.targets) : null;
      var $element = $targets[0],
        i = 0;
      while ($targets[0]) {
        $element = $element.parentNode;
        if ($element !== document) {
          if ($element.matches($targets.value)) {
            i++;
            $targets[i] = $element;
          }
        } else {
          break;
        }
      } //touchstart

      if (event.type == "touchstart") {
        _this2.touched = true;
        if (_this2.timeout) clearTimeout(_this2.timeout);
        if ($targets[0]) {
          var _iterator = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__._createForOfIteratorHelper)($targets),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var $target = _step.value;
              $target.setAttribute("data-touch", "");
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      //touchend
      else if (event.type == "touchend" || event.type == "contextmenu" && _this2.touched) {
        _this2.timeout = setTimeout(function () {
          _this2.touched = false;
        }, _this2.touchendDelay);
        if ($targets[0]) {
          setTimeout(function () {
            var _iterator2 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__._createForOfIteratorHelper)($targets),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _$target = _step2.value;
                _$target.removeAttribute("data-touch");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, _this2.touchendDelay);
        }
      } //mouseenter

      if (event.type == "mouseenter" && !_this2.touched && $targets[0] && $targets[0] == event.target) {
        $targets[0].setAttribute("data-hover", "");
      }
      //mouseleave
      else if (event.type == "mouseleave" && !_this2.touched && $targets[0] && $targets[0] == event.target) {
        $targets[0].removeAttribute("data-click");
        $targets[0].removeAttribute("data-hover");
      } //mousedown

      if (event.type == "mousedown" && !_this2.touched && $targets[0]) {
        $targets[0].setAttribute("data-click", "");
      }
      //mouseup
      else if (event.type == "mouseup" && !_this2.touched && $targets[0]) {
        $targets[0].removeAttribute("data-click");
      }
    };
    document.addEventListener("touchstart", events);
    document.addEventListener("touchend", events);
    document.addEventListener("mouseenter", events, true);
    document.addEventListener("mouseleave", events, true);
    document.addEventListener("mousedown", events);
    document.addEventListener("mouseup", events);
    document.addEventListener("contextmenu", events);
  };
  new СustomInteraction({
    targets: "a, button, [data-custom-interaction], .image-zoom"
  });
};

/***/ }),

/***/ "./src/shared/libs/dataSelect/dataSelect.js":
/*!**************************************************!*\
  !*** ./src/shared/libs/dataSelect/dataSelect.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDataSelect: function() { return /* binding */ initDataSelect; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initDataSelect = () => {
  if ($("[data-select]").length === 0) return;
  $("body").on("click", event => {
    if (event.target.closest("[data-select-value-container]")) {
      const target = $(event.target.closest("[data-select-value-container]"));
      const id = target.attr("data-select-value-container");
      if ($(`[data-select-content="${id}"]`).hasClass("d-none")) {
        $("[data-select-content]").addClass("d-none");
        $(`[data-select-content="${id}"]`).removeClass("d-none");
        return;
      }
      $(`[data-select-content="${id}"]`).addClass("d-none");
    }
    if (!event.target.closest("[data-select-content]") && !event.target.closest("[data-select-value-container]")) {
      $("[data-select-content]").addClass("d-none");
    }
    if (event.target.closest("[data-select-option]")) {
      const target = $(event.target.closest("[data-select-option]"));
      const id = target.attr("data-select-option");
      const value = target.attr("data-select-option-value");
      const textValue = target.text();
      $(`[data-select-option="${id}"]`).removeAttr("data-select-option-selected");
      target.attr("data-select-option-selected", "");
      $(`[data-select="${id}"]`).val(value);
      $(`[data-select-value="${id}"]`).text(textValue);
      $("[data-select-content]").addClass("d-none");
    }
  });
};

/***/ }),

/***/ "./src/shared/libs/inputToggle/inputToggle.js":
/*!****************************************************!*\
  !*** ./src/shared/libs/inputToggle/inputToggle.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initInputToggle: function() { return /* binding */ initInputToggle; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initInputToggle = () => {
  if ($('[data-input]').length === 0) return;
  $('[data-input]').on('input', event => {
    const target = $(event.currentTarget);
    const value = target.attr('data-input-value') || target.val();
    const id = target.attr('data-input');
    $(`[data-input-content-container*="${id}"]`).removeClass('d-none');
    $(`[data-input-content*="${id}"]`).html(value);
  });
};

/***/ }),

/***/ "./src/shared/libs/radioToggle/radioToggle.js":
/*!****************************************************!*\
  !*** ./src/shared/libs/radioToggle/radioToggle.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioToggle: function() { return /* binding */ initRadioToggle; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initRadioToggle = () => {
  const toggles = $('[data-radio]');
  if (!toggles.length) return;
  toggles.on('change', event => {
    const target = $(event.currentTarget);
    const id = target.attr('data-radio');
    $('[data-radio-content]').addClass('d-none');
    $(`[data-radio-content="${id}"]`).removeClass('d-none');
    $(`[data-radio-content="*"]`).removeClass('d-none');
  });
};

/***/ }),

/***/ "./src/shared/libs/relatedValue/relatedValue.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/relatedValue/relatedValue.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRelatedValue: function() { return /* binding */ initRelatedValue; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initRelatedValue = () => {
  $('[data-related-value]').on('change', event => {
    const target = $(event.currentTarget);
    const value = target.val();
    const id = target.attr('data-related-value');
    $(`[data-related-value="${id}"]`).val(value);
  });
};

/***/ }),

/***/ "./src/shared/libs/requaredField/requaredField.js":
/*!********************************************************!*\
  !*** ./src/shared/libs/requaredField/requaredField.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRequaredField: function() { return /* binding */ initRequaredField; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initRequaredField = () => {
  if (!$("[data-required-field]").length) return;
  $("[data-required-field]").on("input", event => {
    const target = $(event.currentTarget);
    id = target.attr("data-required-field");
    const button = $(`[data-wait-requred*="${id}"]`);
    if (button.length === 0) return;
    const buttonFields = button.attr("data-wait-requred");
    const newButtonFields = buttonFields.replace(id, "").trim();
    button.attr("data-wait-requred", newButtonFields);
    if (newButtonFields) return;
    button.removeAttr("disabled");
  });
};

/***/ }),

/***/ "./src/shared/libs/searchSelect/searchSelect.handlers.js":
/*!***************************************************************!*\
  !*** ./src/shared/libs/searchSelect/searchSelect.handlers.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentClicksDelegate: function() { return /* binding */ documentClicksDelegate; },
/* harmony export */   paramsSubmitHandler: function() { return /* binding */ paramsSubmitHandler; },
/* harmony export */   resetClickHandler: function() { return /* binding */ resetClickHandler; },
/* harmony export */   selectInputHandler: function() { return /* binding */ selectInputHandler; },
/* harmony export */   showResetChangeHandler: function() { return /* binding */ showResetChangeHandler; }
/* harmony export */ });
/* harmony import */ var _searchSelect_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchSelect.utils */ "./src/shared/libs/searchSelect/searchSelect.utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const selectInputHandler = event => {
  const target = $(event.currentTarget);
  const id = target.attr("data-search-select-value");
  const value = target.text().trim().toLowerCase();
  const options = $(`[data-search-select-option="${id}"]`);
  if (!value) {
    options.removeClass("d-none");
    return;
  }
  for (const option of options) {
    const currentOption = $(option);
    const optionValue = currentOption.text().trim().toLowerCase();
    if (optionValue.indexOf(value) === -1) {
      currentOption.addClass("d-none");
      continue;
    }
    currentOption.removeClass("d-none");
  }
};
const documentClicksDelegate = event => {
  if (event.target.closest("[data-search-select-value]")) {
    const target = $(event.target.closest("[data-search-select-value]"));
    const id = target.attr("data-search-select-value");
    (0,_searchSelect_utils__WEBPACK_IMPORTED_MODULE_0__.openSelect)(id);
  }
  if (event.target.closest("[data-search-select-option]")) {
    const target = $(event.target.closest("[data-search-select-option]"));
    (0,_searchSelect_utils__WEBPACK_IMPORTED_MODULE_0__.setValue)(target);
  }
  if (!event.target.closest("[data-search-select-value]") && !event.target.closest("[data-search-select-content]")) {
    const values = Array.from($("[data-search-select-value]"));
    for (const value of values) {
      const valueObj = $(value);
      const id = valueObj.attr("data-search-select-value");
      (0,_searchSelect_utils__WEBPACK_IMPORTED_MODULE_0__.closeSelect)(id);
    }
  }
};
const paramsSubmitHandler = event => {
  event.preventDefault();
  const target = $(event.currentTarget);
  const category = target.attr("data-params-submit");
  const params = target.serializeArray();
  const url = new URL(`/catalog/${category}`, window.location);
  for (const param of params) {
    if (!param.value) continue;
    const values = param.value.split(" ");
    const names = param.name.split(" ");
    for (let index = 0; index < names.length; index++) {
      url.searchParams.set(names[index], values[index]);
    }
  }
  window.location.href = url;
};
const resetClickHandler = event => {
  event.preventDefault();
  const target = $(event.currentTarget);
  const ids = target.attr("data-search-select-reset").split(" ");
  const resettableInputs = [];
  for (const id of ids) {
    resettableInputs.push($(`[data-search-select-show-reset="${id}"]`));
  }
  for (const input of resettableInputs) {
    const inputObj = $(input);
    const selectId = inputObj.attr("data-search-select-input");
    const option = $(`[data-search-select-option-default="${selectId}"]`);
    (0,_searchSelect_utils__WEBPACK_IMPORTED_MODULE_0__.setValue)(option);
  }
  target.addClass("d-none");
};
const showResetChangeHandler = event => {
  const allShowResetInputs = Array.from($(`[data-search-select-show-reset]`));
  for (const input of allShowResetInputs) {
    const inputObj = $(input);
    if (inputObj.val()) {
      $(`[data-search-select-reset]`).removeClass("d-none");
      return;
    }
  }
  $(`[data-search-select-reset]`).addClass("d-none");
};

/***/ }),

/***/ "./src/shared/libs/searchSelect/searchSelect.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/searchSelect/searchSelect.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchSelects: function() { return /* binding */ initSearchSelects; }
/* harmony export */ });
/* harmony import */ var _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchSelect.handlers */ "./src/shared/libs/searchSelect/searchSelect.handlers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const initSearchSelects = () => {
  if (!$("[data-search-select-input], [data-search-select]").length) return;
  if ($("[data-search-select-input-container]").length !== 0) {
    $("[data-search-select-value]").off("input", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.selectInputHandler);
    $(document).off("click", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.documentClicksDelegate);
    $("[data-params-submit]").off("submit", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.paramsSubmitHandler);
    $("[data-search-select-reset]").off("click", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.resetClickHandler);
    $("[data-search-select-show-reset]").off("change", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.showResetChangeHandler);
  }
  const searchSelects = Array.from($("[data-search-select]"));
  for (const select of searchSelects) {
    const selectObj = $(select);
    const id = selectObj.attr("data-search-select");
    const options = Array.from(selectObj.find("option"));
    const selectedOption = options.find(option => option.selected);
    const inert = selectObj.attr('data-inert');
    selectObj.wrapAll(`<div data-search-select-wrapper="${id}" class="search-select" />`);
    selectObj.addClass("d-none").after(`
      <div data-search-select-input-container="${id}" class="search-select__input-container">
        <div ${inert !== undefined ? 'inert' : ''} data-search-select-value="${id}" tabindex="-1" contenteditable class="search-select__input form-control">${selectedOption.text}</div>
        <div class="search-select__icon">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72606 -1.19209e-07L11.1403 1.41421L5.57036 6.98453L4.15614 5.57031L9.72606 -1.19209e-07Z"
              fill="currentColor"
            />
            <path
              d="M0 1.41421L1.41421 1.19209e-07L6.98434 5.57047L5.57036 6.98453L0 1.41421Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div class="search-select__content d-none" data-search-select-content="${id}">
        ${options.map((option, index) => `
          <div
            class="search-select__option"
            data-search-select-option="${id}"
            data-search-select-option-value="${option.value}" 
            ${index === 0 ? `data-search-select-option-default="${id}"` : ""}
            ${option.selected ? `data-search-select-option-selected="${id}"` : ""}
          >
            ${option.text}
          </div>
          `).join("")}
      </div>
      `);
  }
  $("[data-search-select-value]").on("input", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.selectInputHandler);
  $(document).on("click", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.documentClicksDelegate);
  $("[data-params-submit]").on("submit", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.paramsSubmitHandler);
  $("[data-search-select-reset]").on("click", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.resetClickHandler);
  $("[data-search-select-show-reset]").on("change", _searchSelect_handlers__WEBPACK_IMPORTED_MODULE_0__.showResetChangeHandler);
};

/***/ }),

/***/ "./src/shared/libs/searchSelect/searchSelect.utils.js":
/*!************************************************************!*\
  !*** ./src/shared/libs/searchSelect/searchSelect.utils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSelect: function() { return /* binding */ closeSelect; },
/* harmony export */   openSelect: function() { return /* binding */ openSelect; },
/* harmony export */   setValue: function() { return /* binding */ setValue; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const setValue = optionElement => {
  const id = optionElement.attr("data-search-select-option");
  const value = optionElement.attr("data-search-select-option-value");
  const textValue = optionElement.text().trim();
  const options = $(`[data-search-select-option="${id}"]`);
  const input = $(`[data-search-select-input="${id}"]`);
  const select = $(`[data-search-select="${id}"]`);
  options.removeAttr("data-search-select-option-selected");
  options.removeClass("d-none");
  input.val(value);
  input.trigger('change');
  select.val(value);
  select.trigger('change');
  optionElement.attr("data-search-select-option-selected", id);
  $(`[data-search-select-value="${id}"]`).text(textValue);
  $("[data-search-select-content]").addClass("d-none");
};
const closeSelect = id => {
  const value = $(`[data-search-select-option-selected="${id}"]`).text().trim();
  const input = $(`[data-search-select-value="${id}"]`);
  input.removeAttr('contenteditable');
  input.trigger('blue');
  input.text(value);
  $(`[data-search-select-content="${id}"]`).addClass("d-none");
  $(`[data-search-select-input-container-active="${id}"]`).removeAttr("data-search-select-input-container-active");
};
const openSelect = id => {
  const options = $(`[data-search-select-option="${id}"]`);
  const input = $(`[data-search-select-value="${id}"]`);
  options.removeClass("d-none");
  const allInputs = Array.from($(`[data-search-select-value]`));
  for (const inputElement of allInputs) {
    const inputObj = $(inputElement);
    const id = inputObj.attr("data-search-select-value");
    closeSelect(id);
  }
  input.text("");
  input.attr('contenteditable', 'true');
  input.trigger('focus');
  $(`[data-search-select-content="${id}"]`).removeClass("d-none");
  $(`[data-search-select-input-container="${id}"]`).attr("data-search-select-input-container-active", id);
  return;
};

/***/ }),

/***/ "./src/shared/libs/select/select.js":
/*!******************************************!*\
  !*** ./src/shared/libs/select/select.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSelect: function() { return /* binding */ initSelect; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initSelect = () => {
  var customSelect = $("select.custom-select"); // FIRST, create the custom select menus from the existing select

  if (!customSelect.length) return;
  customSelect.each(function () {
    var that = $(this);
    var listID = that.attr("id"),
      groups = that.children("optgroup"),
      theOptions = "",
      startingOption = "",
      customSelect = ""; //check if there are option groups

    if (groups.length) {
      groups.each(function () {
        var curGroup = $(this);
        var curName = curGroup.attr("label"); //Open the option group

        theOptions += '<li class="optgroup">' + curName + "</li>"; //get the options

        curGroup.children("option").each(function () {
          var curOpt = $(this);
          var curVal = curOpt.attr("value"),
            curHtml = curOpt.html(),
            isSelected = curOpt.attr("selected");
          if (isSelected === "selected") {
            startingOption = curHtml;
            theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + "</li>";
          } else {
            theOptions += '<li data-value="' + curVal + '">' + curHtml + "</li>";
          }
        }); //Close the option group
        //theOptions += '<li class="optgroup-close"></li>';
      }); //add options not in a group to the top of the list

      that.children("option").each(function () {
        var curOpt = $(this);
        var curVal = curOpt.attr("value"),
          curHtml = curOpt.html(),
          isSelected = curOpt.attr("selected");
        if (isSelected === "selected") {
          startingOption = curHtml;
          theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + "</li>" + theOptions;
        } else {
          theOptions = '<li data-value="' + curVal + '">' + curHtml + "</li>" + theOptions;
        }
      });
    } else {
      that.children("option").each(function () {
        var curOpt = $(this);
        var curVal = curOpt.attr("value"),
          curHtml = curOpt.html(),
          isSelected = curOpt.attr("selected");
        if (isSelected === "selected") {
          startingOption = curHtml;
          theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + "</li>";
        } else {
          theOptions += '<li data-value="' + curVal + '">' + curHtml + "</li>";
        }
      });
    } //build the custom select

    customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + "</ul></div> <!-- .custom-select-wrapper -->"; //append it after the actual select

    $(customSelect).insertAfter(that);
  });
  var selectdd = $(".dropdown-select"),
    selectul = $(".dropdown-select-ul"),
    selectli = $(".dropdown-select-ul li"); //THEN make them work

  selectdd.on("click", function () {
    $(this).parent(".dropdown-container").toggleClass("active");
  }); //Hide it on mouseleave

  selectul.on("mouseleave", function () {
    $(this).parent(".dropdown-container").removeClass("active");
  }); //select the option

  selectli.on("click", function () {
    var that = $(this); //ensure clicking group labels does not cause change

    if (!that.hasClass("optgroup")) {
      var parentUl = that.parent("ul"),
        thisdd = parentUl.siblings(".dropdown-select"),
        lihtml = that.html(),
        livalue = that.attr("data-value"),
        originalSelect = "#" + parentUl.attr("data-role"); //close the dropdown

      parentUl.parent(".dropdown-container").toggleClass("active"); //remove selected class from all list items

      that.siblings("li").removeClass("selected"); //add .selected to clicked li

      that.addClass("selected"); //set the value of the hidden input

      $(originalSelect).val(livalue); //change the dropdown text

      thisdd.children("span").html(lihtml);
    }
  });
};

/***/ }),

/***/ "./src/shared/libs/sliderConstructor/sliderConstructor.js":
/*!****************************************************************!*\
  !*** ./src/shared/libs/sliderConstructor/sliderConstructor.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSliderConstructor: function() { return /* binding */ initSliderConstructor; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/shared/libs/utils/utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const initSliderConstructor = () => {
  function sliderDebounce(func, interval, context) {
    var timeout = false;
    return function () {
      var _arguments = arguments,
        _this = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context || _this, _arguments);
      }, interval);
    };
  }
  const SliderConstructor = /*#__PURE__*/function () {
    function SliderConstructor(element) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__._classCallCheck)(this, SliderConstructor);
      this.element = element;
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__._createClass)(SliderConstructor, [{
      key: "init",
      value: function init() {
        let _this3 = this;
        this.params = {};
        this.params.autoplay = this.element.getAttribute("data-autoplay-timeout") !== null;
        this.params.autoplayTimeout = +this.element.getAttribute("data-autoplay-timeout") || 5000;
        this.params.arrows = this.element.getAttribute("data-no-arrows") === null ? true : false;
        const mediaQuery = window.matchMedia("(min-width: 575.98px)");
        // Check if the media query is true
        if (mediaQuery.matches) {
          this.params.dots = this.element.getAttribute("data-no-dots") === null ? true : false;
        } else {
          this.params.dots = true;
        }
        this.params.variableWidth = {};
        this.params.variableWidth.xs = this.element.getAttribute("data-variable-width") === "true";
        this.params.variableWidth.sm = this.element.getAttribute("data-sm-variable-width") === "true" || this.params.variableWidth.xs;
        this.params.variableWidth.md = this.element.getAttribute("data-md-variable-width") === "true" || this.params.variableWidth.sm;
        this.params.variableWidth.lg = this.element.getAttribute("data-lg-variable-width") === "true" || this.params.variableWidth.md;
        this.params.variableWidth.xl = this.element.getAttribute("data-xl-variable-width") === "true" || this.params.variableWidth.lg;
        this.params.adaptiveHeight = this.element.getAttribute("data-adaptive-height") !== null;
        this.params.centerMode = {};
        this.params.centerMode.xs = this.element.getAttribute("data-center") === "true";
        this.params.centerMode.sm = this.element.getAttribute("data-sm-center") === "true" || this.params.centerMode.xs;
        this.params.centerMode.md = this.element.getAttribute("data-md-center") === "true" || this.params.centerMode.sm;
        this.params.centerMode.lg = this.element.getAttribute("data-lg-center") === "true" || this.params.centerMode.md;
        this.params.centerMode.xl = this.element.getAttribute("data-xl-center") === "true" || this.params.centerMode.lg;
        this.params.infinite = this.element.getAttribute("data-no-infinite") === null ? true : false;
        this.params.count = {};
        this.params.loop = this.element.getAttribute("data-loop") === "false" ? false : true;
        this.params.count.xs = +this.element.getAttribute("data-slides") || 1;
        this.params.count.sm = +this.element.getAttribute("data-sm-slides") || this.params.count.xs;
        this.params.count.md = +this.element.getAttribute("data-md-slides") || this.params.count.sm;
        this.params.count.lg = +this.element.getAttribute("data-lg-slides") || this.params.count.md;
        this.params.count.xl = +this.element.getAttribute("data-xl-slides") || this.params.count.lg;
        this.params.rows = {};
        this.params.rows.xs = +this.element.getAttribute("data-rows") || 1, this.params.rows.sm = +this.element.getAttribute("data-sm-rows") || this.params.rows.xs, this.params.rows.md = +this.element.getAttribute("data-md-rows") || this.params.rows.sm, this.params.rows.lg = +this.element.getAttribute("data-lg-rows") || this.params.rows.md, this.params.rows.xl = +this.element.getAttribute("data-xl-rows") || this.params.rows.lg;
        this.params.state = {};
        Object.keys(breakpoints).forEach(function (key, index) {
          let breakpoint = index !== 0 ? "-" + key + "-" : "-";
          let attr = _this3.element.getAttribute("data".concat(breakpoint, "mounted"));
          if (attr === null && index !== 0) {
            let prevKey = Object.keys(breakpoints)[index - 1];
            _this3.params.state[key] = _this3.params.state[prevKey];
          } else if (attr === "true" || index === 0 && attr !== "false") {
            _this3.params.state[key] = true;
          } else {
            _this3.params.state[key] = false;
          }
        });
        this.slides = [];
        this.containsMobileHiddenSlides = false;
        this.element.childNodes.forEach(function (slide) {
          if (!slide.tagName) return;
          if (slide.getAttribute("data-slide-mobile-hidden") !== null) {
            _this3.containsMobileHiddenSlides = true;
          }
          _this3.slides.push(slide);
        });
        this.createIcons();
        this.checkSliderState();
        this.checkSliderStateDebounced = sliderDebounce(this.checkSliderState, 500, this);
        window.addEventListener("resize", this.checkSliderStateDebounced);
      }
    }, {
      key: "createIcons",
      value: function createIcons() {
        let leftIcon = '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ';
        let rightIcon = '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ';
        let leftIconClass = "custom-icon-left";
        let rightIconClass = "custom-icon-right";
        let customIcons = this.element.querySelectorAll(".".concat(leftIconClass, ", .").concat(rightIconClass));
        customIcons.forEach(function (icon) {
          let isLeftIcon = icon.classList.contains(leftIconClass);
          let isRightIcon = icon.classList.contains(rightIconClass);
          if (isLeftIcon) {
            icon.classList.remove(leftIconClass);
            leftIcon = icon.outerHTML;
          } else if (isRightIcon) {
            icon.classList.remove(rightIconClass);
            rightIcon = icon.outerHTML;
          }
          icon.remove();
        });
        const prevButton = this.element.getAttribute("data-prev-button-id");
        const nextButton = this.element.getAttribute("data-next-button-id");
        if (prevButton) {
          const button = document.getElementById(prevButton);
          this.prevArrow = button.outerHTML;
          button.remove();
        } else {
          this.prevArrow = '<button type="button" class="button button_style-1 slick-prev">'.concat(rightIcon, "</button>");
        }
        if (nextButton) {
          const button = document.getElementById(nextButton);
          this.nextArrow = button.outerHTML;
          button.remove();
        } else {
          this.nextArrow = '<button type="button" class="button button_style-1 slick-next">'.concat(leftIcon, "</button>");
        }
      }
    }, {
      key: "checkSliderState",
      value: function checkSliderState() {
        if (this.mounted && this.savedWindowWidth === window.innerWidth) return;
        this.savedWindowWidth = window.innerWidth;
        if (this.mounted) {
          this.unmount();
        }
        let state;
        for (let breakpoint in breakpoints) {
          if (window.innerWidth >= breakpoints[breakpoint]) {
            state = this.params.state[breakpoint];
          }
        }
        if (state) {
          this.element.classList.remove("visible");
          if (this.containsMobileHiddenSlides) {
            this.checkSlidesVisibility();
          }
          this.mount();
        } else {
          this.element.classList.add("visible");
        }
      }
    }, {
      key: "checkSlidesVisibility",
      value: function checkSlidesVisibility() {
        let _this4 = this;
        this.slides.forEach(function (slide) {
          slide.remove();
        });
        this.slides.forEach(function (slide) {
          let shouldBeHidden = slide.getAttribute("data-slide-mobile-hidden") !== null;
          let breakpoint = window.innerWidth < breakpoints.sm;
          if (!(shouldBeHidden && breakpoint)) {
            _this4.element.insertAdjacentElement("beforeend", slide);
          }
        });
      }
    }, {
      key: "mount",
      value: function mount() {
        $(this.element).slick({
          autoplay: this.params.autoplay,
          autoplaySpeed: this.params.autoplayTimeout,
          variableWidth: this.params.variableWidth.xs,
          mobileFirst: true,
          slidesToShow: this.params.count.xs,
          slidesToScroll: this.params.count.xs,
          rows: this.params.rows.xs,
          prevArrow: this.prevArrow,
          nextArrow: this.nextArrow,
          arrows: this.params.arrows,
          adaptiveHeight: this.params.adaptiveHeight,
          // loop: this.params.loop,
          dots: this.params.dots,
          centerMode: this.params.centerMode.xs,
          accessibility: false,
          infinite: this.params.infinite,
          responsive: [{
            breakpoint: breakpoints.sm - 1,
            settings: {
              variableWidth: this.params.variableWidth.sm,
              slidesToShow: this.params.count.sm,
              slidesToScroll: this.params.count.sm,
              rows: this.params.rows.sm,
              centerMode: this.params.centerMode.sm
            }
          }, {
            breakpoint: breakpoints.md - 1,
            settings: {
              variableWidth: this.params.variableWidth.md,
              slidesToShow: this.params.count.md,
              slidesToScroll: this.params.count.md,
              rows: this.params.rows.md,
              centerMode: this.params.centerMode.md
            }
          }, {
            breakpoint: breakpoints.lg - 1,
            settings: {
              variableWidth: this.params.variableWidth.lg,
              slidesToShow: this.params.count.lg,
              slidesToScroll: this.params.count.lg,
              rows: this.params.rows.lg,
              centerMode: this.params.centerMode.lg
            }
          }, {
            breakpoint: breakpoints.xl - 1,
            settings: {
              variableWidth: this.params.variableWidth.xl,
              slidesToShow: this.params.count.xl,
              slidesToScroll: this.params.count.xl,
              rows: this.params.rows.xl,
              centerMode: this.params.centerMode.xl
            }
          }]
        });
        $(document).ready(() => {
          let touchstartX = 0;
          let touchendX = 0;
          $(".product-card-slideshow__sector").on("mousemove", event => {
            const target = $(event.currentTarget);
            const id = target.attr("data-sector");
            const parent = target.parent().parent();
            parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
            parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
            parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
            parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
          });
          $(".product-card-slideshow__sectors").on("touchstart", event => {
            touchstartX = event.changedTouches[0].screenX;
          });
          $(".product-card-slideshow__sectors").on("touchend", event => {
            touchendX = event.changedTouches[0].screenX;
            const parent = $(event.currentTarget).parent();
            const img = parent.find(".product-card-slideshow__image_active");
            const id = Number(img.attr("data-sector-image"));
            const length = parent.find(".product-card-slideshow__image").length;
            if (touchendX < touchstartX) {
              parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
              parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
              if (id >= length) {
                parent.find(`[data-sector-image]:nth-child(1)`).addClass("product-card-slideshow__image_active");
                parent.find(`[data-sector-dot]:nth-child(1)`).addClass("product-card-slideshow__dot_active");
                return;
              }
              parent.find(`[data-sector-image="${id}"]`).next().addClass("product-card-slideshow__image_active");
              parent.find(`[data-sector-dot="${id}"]`).next().addClass("product-card-slideshow__dot_active");
            }
            if (touchendX > touchstartX) {
              parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
              parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
              if (id <= 1) {
                parent.find(`[data-sector-image]:nth-child(${length})`).addClass("product-card-slideshow__image_active");
                parent.find(`[data-sector-dot]:nth-child(${length})`).addClass("product-card-slideshow__dot_active");
                return;
              }
              parent.find(`[data-sector-image="${id}"]`).prev().addClass("product-card-slideshow__image_active");
              parent.find(`[data-sector-dot="${id}"]`).prev().addClass("product-card-slideshow__dot_active");
            }
          });
          $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass("product-card-slideshow__image_active");
          $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass("product-card-slideshow__dot_active");
        });
        this.mounted = true;
      }
    }, {
      key: "unmount",
      value: function unmount() {
        $(this.element).slick("unslick");
        this.mounted = false;
      }
    }]);
    return SliderConstructor;
  }();
  document.querySelectorAll(".slider-constructor").forEach(function ($this) {
    new SliderConstructor($this).init();
  });
};

/***/ }),

/***/ "./src/shared/libs/tiresCarsSelection/tiresCarsSelection.handlers.js":
/*!***************************************************************************!*\
  !*** ./src/shared/libs/tiresCarsSelection/tiresCarsSelection.handlers.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carsSelectionChangeHandler: function() { return /* binding */ carsSelectionChangeHandler; },
/* harmony export */   configurationsSelectionChangeHandler: function() { return /* binding */ configurationsSelectionChangeHandler; },
/* harmony export */   modelsSelectionChangeHandler: function() { return /* binding */ modelsSelectionChangeHandler; },
/* harmony export */   modificationsSelectionChangeHandler: function() { return /* binding */ modificationsSelectionChangeHandler; },
/* harmony export */   renderNextOptions: function() { return /* binding */ renderNextOptions; },
/* harmony export */   submitHandler: function() { return /* binding */ submitHandler; }
/* harmony export */ });
/* harmony import */ var _src_shared_libs_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/shared/libs/api/api */ "./src/shared/libs/api/api.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const BASE_API_URL = "https://corsproxy.io/?https://shintorg.nastroyker.ru";
const renderNextOptions = ($select, apiPath, value) => {
  if (!($select instanceof jQuery)) {
    $select = $(`[data-search-select-input="${$select}"]`);
  }

  // const fullApiPath = `${BASE_API_URL}${apiPath}${value}`;
  const fullApiPath = `${apiPath}${value}`;
  const selectId = $select.attr("data-search-select-input");
  const input = $(`[data-search-select-value="${selectId}"]`);
  const optionsContainer = $(`[data-search-select-content="${selectId}"]`);
  const defaultValue = $select.attr("data-select-default");
  (0,_src_shared_libs_api_api__WEBPACK_IMPORTED_MODULE_0__.getApiQuery)(fullApiPath).then(response => response.json()).then(responseItems => {
    input.text(defaultValue);
    optionsContainer.html(`
        <div class="search-select__option" 
          data-search-select-option-selected="${selectId}" 
          data-search-select-option-value="" 
          data-search-select-option-default="${selectId}" 
          data-search-select-option="${selectId}">
          ${defaultValue}
        </div>
        ${responseItems.map(item => {
      if (item.year) {
        // Если это данные по годам
        return `
                  <div class="search-select__option" 
                    data-search-select-option-value="${item.year}" 
                    data-search-select-option="${selectId}">
                    ${item.year}
                  </div>
                `;
      } else if (item.id && item.name) {
        // Если это данные с id и name
        return `
                  <div class="search-select__option" 
                    data-search-select-option-value="${item.id}" 
                    data-search-select-option="${selectId}">
                    ${item.name}
                  </div>
                `;
      }
    }).join("")}
      `);
    input.removeAttr("inert");
  }).catch(error => {
    input.removeAttr("inert");
    console.log(error);
  });
};
const disableSelect = (selectAttribute, $form) => {
  const select = $form.find(`[${selectAttribute}]`);
  const selectId = select.attr("data-search-select-input");
  const input = $form.find(`[data-search-select-value="${selectId}"]`);
  const defaultValue = select.attr("data-select-default");
  const content = $form.find(`[data-search-select-content="${selectId}"]`);
  input.text(defaultValue);
  input.attr("inert", "");
  select.val("");
  content.html(`
    <div class="search-select__option" data-search-select-option-selected="${selectId}" data-search-select-option-value="" data-search-select-option-default="${selectId}" data-search-select-option="${selectId}">
      ${defaultValue}
    </div>
  `);
};
const carsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();
  if (!value) {
    disableSelect("data-models-select", $form);
    disableSelect("data-configurations-select", $form);
    disableSelect("data-modifications-select", $form);
    return;
  }
  $form.find("[data-models-select]").each(function () {
    renderNextOptions($(this), `/cars/models/?brand_id=`, value);
  });
  disableSelect("data-configurations-select", $form);
  disableSelect("data-modifications-select", $form);
};
const modelsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();
  if (!value) {
    disableSelect("data-configurations-select", $form);
    disableSelect("data-modifications-select", $form);
    return;
  }
  $form.find("[data-configurations-select]").each(function () {
    renderNextOptions($(this), `/cars/configurations/?model_id=`, value);
  });
  disableSelect("data-modifications-select", $form);
};
const configurationsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const year = target.val();
  const modelId = $form.find("[data-models-select]").val();
  if (!year || !modelId) {
    disableSelect("data-modifications-select", $form);
    return;
  }
  $form.find("[data-modifications-select]").each(function () {
    renderNextOptions($(this), `/cars/modifications/?model_id=${modelId}&year=`, year);
  });
};
const modificationsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();
  const $submitButton = $form.find("[data-tires-submit]");
  if (!value) {
    $submitButton.attr("disabled", "");
    return;
  }
  $submitButton.removeAttr("disabled");
};
const submitHandler = (event, $form) => {
  event.preventDefault();
  const target = $form;
  const values = target.serializeArray();
  const isRimsForm = $form.attr("data-tires-form") === "rims";
  const slug = isRimsForm ? "&slug=rims" : "";
  const modification = values.find(value => value.name === "modification");
  window.location.href = `${window.location.origin}/tires/search/?modification_id=${modification.value}${slug}`;
};

/***/ }),

/***/ "./src/shared/libs/tiresCarsSelection/tiresCarsSelection.js":
/*!******************************************************************!*\
  !*** ./src/shared/libs/tiresCarsSelection/tiresCarsSelection.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTiresCarsSelection: function() { return /* binding */ initTiresCarsSelection; }
/* harmony export */ });
/* harmony import */ var _tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiresCarsSelection.handlers */ "./src/shared/libs/tiresCarsSelection/tiresCarsSelection.handlers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");

const initTiresCarsSelection = () => {
  // Находим все формы с data-tires-form
  $("[data-tires-form]").each(function () {
    const $form = $(this);

    // Внутри каждой формы находим элементы и привязываем к ним обработчики событий
    $form.find("[data-cars-select]").each(function () {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.renderNextOptions)($(this), "/cars/brands/", "");
    });
    $form.find("[data-cars-select]").on("change", function (event) {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.carsSelectionChangeHandler)(event, $form);
    });
    $form.find("[data-models-select]").on("change", function (event) {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.modelsSelectionChangeHandler)(event, $form);
    });
    $form.find("[data-configurations-select]").on("change", function (event) {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.configurationsSelectionChangeHandler)(event, $form);
    });
    $form.find("[data-modifications-select]").on("change", function (event) {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.modificationsSelectionChangeHandler)(event, $form);
    });
    $form.on("submit", function (event) {
      (0,_tiresCarsSelection_handlers__WEBPACK_IMPORTED_MODULE_0__.submitHandler)(event, $form);
    });
  });
};

/***/ }),

/***/ "./src/shared/libs/trigger/trigger.js":
/*!********************************************!*\
  !*** ./src/shared/libs/trigger/trigger.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTrigger: function() { return /* binding */ initTrigger; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
const initTrigger = () => {
  $("[data-click-trigger]").on("click", event => {
    const target = $(event.currentTarget);
    const id = target.attr("data-click-trigger");
    console.log($(`[data-click-target="${id}"]`), id);
    $(`[data-click-target="${id}"]`).trigger("click");
  });
  $("[data-submit-trigger]").on("click", event => {
    const target = $(event.currentTarget);
    const id = target.attr("data-submit-trigger");
    $(`[data-submit-target="${id}"]`).trigger("submit");
  });
};

/***/ }),

/***/ "./src/shared/libs/utils/utils.js":
/*!****************************************!*\
  !*** ./src/shared/libs/utils/utils.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _arrayLikeToArray: function() { return /* binding */ _arrayLikeToArray; },
/* harmony export */   _classCallCheck: function() { return /* binding */ _classCallCheck; },
/* harmony export */   _createClass: function() { return /* binding */ _createClass; },
/* harmony export */   _createForOfIteratorHelper: function() { return /* binding */ _createForOfIteratorHelper; },
/* harmony export */   _defineProperties: function() { return /* binding */ _defineProperties; },
/* harmony export */   _typeof: function() { return /* binding */ _typeof; },
/* harmony export */   _unsupportedIterableToArray: function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

/***/ })

}]);