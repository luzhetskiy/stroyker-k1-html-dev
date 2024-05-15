import jQuery from "jquery";
import wNumb from "wnumb";
import noUiSlider from "nouislider";
import "owl.carousel";
import "mmenu-js";
import "slick-carousel";
import "@fancyapps/fancybox";
import "inputmask";
import "notifyjs";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function throttle(delay, callback, options) {
  var _ref = options || {},
    _ref$noTrailing = _ref.noTrailing,
    noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
    _ref$noLeading = _ref.noLeading,
    noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
    _ref$debounceMode = _ref.debounceMode,
    debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;

  var timeoutID;
  var cancelled = false;

  var lastExec = 0;

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  function cancel(options) {
    var _ref2 = options || {},
      _ref2$upcomingOnly = _ref2.upcomingOnly,
      upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    }

    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }

    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel;

  return wrapper;
}

function debounce(delay, callback, options) {
  var _ref = options || {},
    _ref$atBegin = _ref.atBegin,
    atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false,
  });
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
  navText: [
    '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
    '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>',
  ],
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
  margin: 0,
  items: 1,
  nav: true,
});
$(".news-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  items: 4,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1,
    },
    479: {
      nav: false,
      dots: true,
      items: 2,
    },
    768: {
      nav: true,
      dots: false,
      items: 3,
    },
    992: {
      items: 4,
    },
  },
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
      items: 1,
    },
    479: {
      nav: false,
      dots: true,
      items: 2,
    },
    768: {
      nav: true,
      dots: false,
      items: 3,
    },
  },
});
$(".partners-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 5,
  responsive: {
    0: {
      dots: true,
      nav: false,
      items: 1,
    },
    566: {
      nav: false,
      dots: true,
      items: 2,
    },
    768: {
      nav: false,
      dots: true,
      items: 3,
    },
    900: {
      nav: false,
      dots: true,
      items: 4,
    },
    950: {
      dots: false,
    },
  },
});

(() => {
  const buttonDefaultView = $(".button1");
  const buttonWideView = $(".button2");
  const buttonLineView = $(".button3");
  const items = $(".product-item");

  buttonWideView.click((event) => {
    buttonDefaultView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--line");
    items.addClass("product-item--wide");
  });

  buttonLineView.click((event) => {
    buttonWideView.removeClass("current");
    buttonDefaultView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--wide");
    items.addClass("product-item--line");
  });

  buttonDefaultView.click((event) => {
    buttonWideView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "default");
    items.removeClass("product-item--wide");
    items.removeClass("product-item--line");
  });
})();

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
    parent.find("[data-close-dropdown-content]").removeClass("d-none");
    target.addClass("d-none");
  });

  $("[data-close-dropdown-content]").on("click", (event) => {
    const target = $(event.currentTarget);
    const parent = target.parent();
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

  $("[data-clear-input-button]").on("click", (event) => {
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

(function ($) {
  var customSelect = $("select.custom-select"); // FIRST, create the custom select menus from the existing select

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

    customSelect =
      '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>' +
      startingOption +
      '</span></div><ul class="dropdown-select-ul" data-role="' +
      listID +
      '">' +
      theOptions +
      "</ul></div> <!-- .custom-select-wrapper -->"; //append it after the actual select

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
})(jQuery);

function gallery() {
  if ($.fancybox) {
    $(".owl-item [data-fancybox]").on("click", function () {
      var $selector = $(this).parents(".owl-carousel").find(".owl-item:not(.cloned) [data-fancybox]");
      $.fancybox.open(
        $selector,
        {
          selector: $selector,
          backFocus: false,
        },
        $selector.index(this)
      );
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
    arrowPrev =
      '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
    arrowNext =
      '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>';

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

    if (typeof noUiSlider !== "undefined") {
      noUiSlider.create(keypressSlider, {
        start: [startVal, endVal],
        connect: true,
        range: {
          min: minVal,
          max: maxVal,
        },
        format: wNumb({
          decimals: 0,
          thousand: " ",
          postfix: postfix,
        }),
        step: 1,
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
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        ); // The number here represents the speed of the scroll in milliseconds

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
  sync1
  .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    margin: 10,
  })
  .on("changed.owl.carousel", syncPosition);
  sync2
  .on("initialized.owl.carousel", function () {
    sync2.find(".owl-item").eq(0).addClass("current");
  })
  .owlCarousel({
    items: slidesPerPage,
    dots: true,
    nav: true,
    margin: 10,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: slidesPerPage,
    //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100,
  })
  .on("changed.owl.carousel", syncPosition2);

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
jQuery(document).ready(function () {
  jQuery(".schedule-btn a").click(function () {
    jQuery(".schedule-link").toggleClass("active");
  });
});
jQuery(document).ready(function () {
  jQuery(".product-card__review-link a").click(function () {
    jQuery(".review-tab-link").toggleClass("active");
  });
}); //slideshow

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
jQuery(document).ready(function () {
  jQuery(".schedule-btn a").click(function () {
    jQuery(".schedule-link").toggleClass("active");
  });
});
jQuery(document).ready(function () {
  jQuery(".product-card__review-link a").click(function () {
    jQuery(".review-tab-link").toggleClass("active");
  });
}); //slideshow

$(() => {
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
      $("[data-booking-tooltip-button]").on("click", (event) => {
        const form = $("#booking-form");
        $("[data-booking-item-selected]").removeAttr("data-booking-item-selected");
        target.attr("data-booking-item-selected", "");

        if (!form.length) return;
        form.find("input, textarea, button").removeAttr("disabled");
        form.attr("action", action);
        if (isTime && date) {
          form
          .find('[name="message"]')
          .val(`Хочу забронировать: ${title}, дата: ${date}, время: ${time} \nКол-во гостей: -`);
          $("html, body").animate(
            {
              scrollTop: $("[data-booking-form]").offset().top - 200,
            },
            500
          );
          return;
        }
        if (date) {
          form.find('[name="message"]').val(`Хочу забронировать: ${title}, дата: ${date} \nКол-во гостей: -`);
          $("html, body").animate(
            {
              scrollTop: $("[data-booking-form]").offset().top - 200,
            },
            500
          );
          return;
        }

        form.find('[name="message"]').val(`Хочу забронировать: ${title}, ${time}  \nКол-во гостей: -`);
        $("html, body").animate(
          {
            scrollTop: $("[data-booking-form]").offset().top - 200,
          },
          500
        );
      });
    },
  });

  $("[data-booking-scroll]").scroll((event) => {
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
      title.css({ "min-height": target.height() });
      $("[data-booking-mobile-titles]").append(title);
    });
  };
  appendMobileTitles();
});

$(() => {
  const customCollapseSetup = () => {
    Array.from($("[data-custom-collapse]")).forEach((element) => {
      const collapse = $(element);
      const collapseId = collapse.attr("data-custom-collapse");
      const collapseChildren = collapse.children();
      let collapseChildrenHeight = 0;

      for (const child of collapseChildren) {
        collapseChildrenHeight += $(child).height();
      }

      if (collapseChildrenHeight > 85) return;

      collapse.attr("data-custom-collapse-inactive", "");
      $(`[data-custom-collapse-open="${collapseId}"]`).addClass("d-none");
      $(`[data-custom-collapse-close="${collapseId}"]`).addClass("d-none");
    });
  };
  customCollapseSetup();

  $("[data-custom-collapse-open]").on("click", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-custom-collapse-open");
    target.addClass("d-none");
    $(`[data-custom-collapse-close="${id}"]`).removeClass("d-none");
  });

  $("[data-custom-collapse-close]").on("click", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-custom-collapse-close");
    target.addClass("d-none");
    $(`[data-custom-collapse-open="${id}"]`).toggleClass("d-none");
  });
});

$(document).ready(() => {
  let touchstartX = 0;
  let touchendX = 0;

  $(".product-card-slideshow__sector").on("mousemove", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-sector");
    const parent = target.parent().parent();
    parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
    parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
    parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
    parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
  });

  $(".product-card-slideshow__sectors").on("touchstart", (event) => {
    touchstartX = event.changedTouches[0].screenX;
  });

  $(".product-card-slideshow__sectors").on("touchend", (event) => {
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

  $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass(
    "product-card-slideshow__image_active"
  );
  $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass("product-card-slideshow__dot_active");
});

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

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

const SliderConstructor = /*#__PURE__*/ (function () {
  function SliderConstructor(element) {
    _classCallCheck(this, SliderConstructor);

    this.element = element;
  }

  _createClass(SliderConstructor, [
    {
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

        this.params.adaptiveHeight = this.element.getAttribute("data-adaptive-height") !== null;
        this.params.centerMode = this.element.getAttribute("data-center") === null ? false : true;
        this.params.infinite = this.element.getAttribute("data-no-infinite") === null ? true : false;
        this.params.count = {};
        this.params.count.xs = +this.element.getAttribute("data-slides") || 1;
        this.params.count.sm = +this.element.getAttribute("data-sm-slides") || this.params.count.xs;
        this.params.count.md = +this.element.getAttribute("data-md-slides") || this.params.count.sm;
        this.params.count.lg = +this.element.getAttribute("data-lg-slides") || this.params.count.md;
        this.params.count.xl = +this.element.getAttribute("data-xl-slides") || this.params.count.lg;
        this.params.rows = {};
        (this.params.rows.xs = +this.element.getAttribute("data-rows") || 1),
          (this.params.rows.sm = +this.element.getAttribute("data-sm-rows") || this.params.rows.xs),
          (this.params.rows.md = +this.element.getAttribute("data-md-rows") || this.params.rows.sm),
          (this.params.rows.lg = +this.element.getAttribute("data-lg-rows") || this.params.rows.md),
          (this.params.rows.xl = +this.element.getAttribute("data-xl-rows") || this.params.rows.lg);
        this.params.state = {};
        Object.keys(breakpoints).forEach(function (key, index) {
          let breakpoint = index !== 0 ? "-" + key + "-" : "-";

          let attr = _this3.element.getAttribute("data".concat(breakpoint, "mounted"));

          if (attr === null && index !== 0) {
            let prevKey = Object.keys(breakpoints)[index - 1];
            _this3.params.state[key] = _this3.params.state[prevKey];
          } else if (attr === "true" || (index === 0 && attr !== "false")) {
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
      },
    },
    {
      key: "createIcons",
      value: function createIcons() {
        let leftIcon =
          '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ';
        let rightIcon =
          '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ';
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
          this.prevArrow = '<button type="button" class="button button_style-1 slick-prev">'.concat(
            rightIcon,
            "</button>"
          );
        }
        if (nextButton) {
          const button = document.getElementById(nextButton);
          this.nextArrow = button.outerHTML;
          button.remove();
        } else {
          this.nextArrow = '<button type="button" class="button button_style-1 slick-next">'.concat(
            leftIcon,
            "</button>"
          );
        }
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
      key: "mount",
      value: function mount() {
        $(this.element).slick({
          autoplay: this.params.autoplay,
          autoplaySpeed: this.params.autoplayTimeout,
          mobileFirst: true,
          slidesToShow: this.params.count.xs,
          slidesToScroll: this.params.count.xs,
          rows: this.params.rows.xs,
          prevArrow: this.prevArrow,
          nextArrow: this.nextArrow,
          arrows: this.params.arrows,
          adaptiveHeight: this.params.adaptiveHeight,
          dots: this.params.dots,
          centerMode: this.params.centerMode,
          accessibility: false,
          infinite: this.params.infinite,
          responsive: [
            {
              breakpoint: breakpoints.sm - 1,
              settings: {
                slidesToShow: this.params.count.sm,
                slidesToScroll: this.params.count.sm,
                rows: this.params.rows.sm,
              },
            },
            {
              breakpoint: breakpoints.md - 1,
              settings: {
                slidesToShow: this.params.count.md,
                slidesToScroll: this.params.count.md,
                rows: this.params.rows.md,
              },
            },
            {
              breakpoint: breakpoints.lg - 1,
              settings: {
                slidesToShow: this.params.count.lg,
                slidesToScroll: this.params.count.lg,
                rows: this.params.rows.lg,
              },
            },
            {
              breakpoint: breakpoints.xl - 1,
              settings: {
                slidesToShow: this.params.count.xl,
                slidesToScroll: this.params.count.xl,
                rows: this.params.rows.xl,
              },
            },
          ],
        });
        $(document).ready(() => {
          let touchstartX = 0;
          let touchendX = 0;

          $(".product-card-slideshow__sector").on("mousemove", (event) => {
            const target = $(event.currentTarget);
            const id = target.attr("data-sector");
            const parent = target.parent().parent();
            parent.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active");
            parent.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active");
            parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
            parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
          });

          $(".product-card-slideshow__sectors").on("touchstart", (event) => {
            touchstartX = event.changedTouches[0].screenX;
          });

          $(".product-card-slideshow__sectors").on("touchend", (event) => {
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
                parent
                .find(`[data-sector-image]:nth-child(${length})`)
                .addClass("product-card-slideshow__image_active");
                parent.find(`[data-sector-dot]:nth-child(${length})`).addClass("product-card-slideshow__dot_active");
                return;
              }
              parent.find(`[data-sector-image="${id}"]`).prev().addClass("product-card-slideshow__image_active");
              parent.find(`[data-sector-dot="${id}"]`).prev().addClass("product-card-slideshow__dot_active");
            }
          });

          $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass(
            "product-card-slideshow__image_active"
          );
          $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass(
            "product-card-slideshow__dot_active"
          );
        });

        this.mounted = true;
      },
    },
    {
      key: "unmount",
      value: function unmount() {
        $(this.element).slick("unslick");
        this.mounted = false;
      },
    },
  ]);

  return SliderConstructor;
})();

$(document).ready(function () {
  const tireFilterToggle = document.querySelector(".filter-toggle .toggle-input");

  if (!tireFilterToggle) return;

  tireFilterToggle.addEventListener("change", function () {
    let blockParameter = document.querySelector(".parameter-block");
    let blockAuto = document.querySelector(".auto-block");
    let poParametram = document.querySelector(".po-parametram");
    let poAuto = document.querySelector(".po-auto");
    if (this.checked) {
      blockParameter.style.display = "none";
      blockAuto.style.display = "block";
      poParametram.style.color = "#A7A7AB";
      poAuto.style.color = "#000";
      return;
    }
    blockParameter.style.display = "block";
    blockAuto.style.display = "none";
    poParametram.style.color = "#000";
    poAuto.style.color = "#A7A7AB";
  });
  function resetFilters(block) {
    let selectors = block.querySelectorAll(".parameter-select .selected-option");
    let resetButton = block.querySelector(".button-reset");
    resetButton.style.display = "none";
    let selectOptions = block.querySelector(".select-options");
    selectors.forEach(function (selector) {
      selector.textContent = selectOptions.firstElementChild.textContent;
    });
  }
  const resetFilterButtonParameter = document.querySelector(".parameter-block .button-reset");
  if (resetFilterButtonParameter) {
    const parameterBlock = document.querySelector(".parameter-block");
    resetFilterButtonParameter.addEventListener("click", function () {
      resetFilters(parameterBlock);
    });
  }
  const resetFilterButtonAuto = document.querySelector(".auto-block .button-reset");
  if (resetFilterButtonAuto) {
    const autoBlock = document.querySelector(".auto-block");
    resetFilterButtonAuto.addEventListener("click", function () {
      resetFilters(autoBlock);
    });
  }

  // search selector

  function toggleOptions(searchInput, selectOptions, selectedOption) {
    selectOptions.style.display = selectOptions.style.display === "none" ? "block" : "none";
    searchInput.style.display = searchInput.style.display === "none" ? "block" : "none";
    selectedOption.style.display = selectedOption.style.display === "block" ? "none" : "block";
    if (selectOptions.style.display === "block") {
      searchInput.focus();
    }
  }
  function closeOptions(searchInput, selectOptions, selectedOption) {
    selectOptions.style.display = "none";
    searchInput.style.display = "none";
    selectedOption.style.display = "block";
  }
  function searchOptions(selectOption, searchString) {
    const text = selectOption.textContent.toLowerCase();
    selectOption.style.display = text.includes(searchString) ? "block" : "none";
  }

  const selectors = document.querySelectorAll(".selector");

  function checkSelectors() {
    const atLeastOneSelectedParam = Array.from(selectors).some(function (selector) {
      return selector.querySelector(".parameter-block .selected") !== null;
    });
    atLeastOneSelectedParam
      ? (resetFilterButtonParameter.style.display = "flex")
      : (resetFilterButtonParameter.style.display = "none");
    const atLeastOneSelectedAuto = Array.from(selectors).some(function (selector) {
      return selector.querySelector(".auto-block .selected") !== null;
    });
    atLeastOneSelectedAuto
      ? (resetFilterButtonAuto.style.display = "flex")
      : (resetFilterButtonAuto.style.display = "none");
  }

  selectors.forEach(function (selector) {
    selector.addEventListener("click", function (event) {
      const target = event.target;
      if (target !== this.firstChild) {
        checkSelectors();
      }
    });
    const selectedOption = selector.querySelector(".selected-option");
    const searchInput = selector.querySelector(".select-search-input");
    const selectOptions = selector.querySelector(".select-options");
    selectedOption.style.display = "block";
    searchInput.style.display = "none";
    selectOptions.style.display = "none";
    selectedOption.addEventListener("click", function () {
      toggleOptions(searchInput, selectOptions, selectedOption);
    });
    const selectOption = selector.querySelectorAll(".select-option");
    selectOption.forEach(function (selectOption) {
      selectOption.addEventListener("click", function (event) {
        const target = event.target;
        if (target !== selector.firstChild) {
          const selected = selector.querySelector(".selected");
          selected ? selected.classList.remove("selected") : null;
          target.classList.add("selected");
        }
        selectedOption.textContent = selectOption.textContent;
        closeOptions(searchInput, selectOptions, selectedOption);
      });
    });
    const outerArea = document.querySelector("body");
    outerArea.addEventListener("click", function (event) {
      if (!selector.contains(event.target)) {
        closeOptions(searchInput, selectOptions, selectedOption);
      }
    });
    searchInput.addEventListener("input", function () {
      const searchString = searchInput.value.toLowerCase();
      selectOption.forEach(function (selectOption) {
        searchOptions(selectOption, searchString);
      });
    });
  });

  // слайдер категорий в мобилке

  $(".tabs-slider-mobile").slick({
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    centerMode: false,
  });

  if (document.documentElement.clientWidth < 768) {
    if (document.documentElement.clientWidth < 768) {
      const tabs = document.querySelectorAll(".tab-content");
      tabs.forEach(function (tab) {
        tab.style.display = "none";
      });
    }
  }

  const sliderItems = document.querySelectorAll(".tabs-slider-mobile .slider-item");

  sliderItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const targetItem = event.target;
      const tabId = item.getAttribute("data-tab");
      const tab = document.getElementById(tabId);
      const allTabs = document.querySelectorAll(".tab-content");
      allTabs.forEach(function (tab) {
        tab.style.display = "none";
      });
      tab.style.display = "block";
      const mobileSlider = document.querySelector(".tabs-slider-mobile");
      const itemActive = mobileSlider.querySelector(".slider-item.active");
      itemActive ? itemActive.classList.remove("active") : null;
      targetItem.classList.add("active");
    });
  });

  // всплывашка

  const parameterModal = document.querySelector(".parameter-modal-content");

  tippy("#parameter-modal-btn", {
    content: parameterModal.innerHTML,
    allowHTML: true,
    theme: "light",
    placement: "bottom-start",
    trigger: "click",
  });

  const autoModal = document.querySelector(".auto-modal-content");

  tippy("#auto-modal-btn", {
    content: autoModal.innerHTML,
    allowHTML: true,
    theme: "light",
    placement: "bottom",
    trigger: "click",
  });

  // модальное окно в мобилке

  const parameterOpenButton = document.querySelector(".parameter__modal-button-mobile");
  const parameterModalMobile = document.querySelector(".po-parametram__modal-mobile");
  const parameterCloseButton = document.querySelector(".po-parametram-close-button");

  parameterOpenButton.addEventListener("click", function () {
    parameterModalMobile.style.display = "block";
  });
  parameterCloseButton.addEventListener("click", function () {
    parameterModalMobile.style.display = "none";
  });

  const autoOpenButton = document.querySelector(".auto__modal-button-mobile");
  const autoModalMobile = document.querySelector(".po-auto__modal-mobile");
  const autoCloseButton = document.querySelector(".po-auto-close-button");

  autoOpenButton.addEventListener("click", function () {
    autoModalMobile.style.display = "block";
  });
  autoCloseButton.addEventListener("click", function () {
    autoModalMobile.style.display = "none";
  });
});

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
      var scrollPos =
        eventOffset < dragHandleOffset
          ? $scrollContentEl[scrollOffsetAttr]() - jumpAmt
          : $scrollContentEl[scrollOffsetAttr]() + jumpAmt;
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
            height: handleSize,
          });
        } else {
          $dragHandleEl.css({
            left: handleOffset,
            width: handleSize,
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
      var tempEl = $(
        '<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'
      );
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
        "overflow-y": "scroll",
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
      recalculate: recalculate,
    };
  }

  $.fn[pluginName] = function (options) {
    if (typeof arguments[0] === "string") {
      var methodName = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      var returnVal;
      this.each(function () {
        if (
          $.data(this, "plugin_" + pluginName) &&
          typeof $.data(this, "plugin_" + pluginName)[methodName] === "function"
        ) {
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
    autoHide: false,
  };
})(jQuery);

$(function () {
  $(".cscrlb-scrollable").cscrlb();
});

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
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
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
    },
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

$(document).ready(function () {
  homeBanner();
  header();
  gallery();
  landing_sliders();
  up();
  chatBlock();
  toggle(); //interaction

  new СustomInteraction({
    targets: "a, button, [data-custom-interaction], .image-zoom",
  }); //slider constructor

  document.querySelectorAll(".slider-constructor").forEach(function ($this) {
    new SliderConstructor($this).init();
  });
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
            margin: 16,
          },
          576: {
            items: count2,
          },
          768: {
            items: count3,
          },
          992: {
            items: count4,
          },
        },
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
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
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

var СustomInteraction = function СustomInteraction() {
  var _this2 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, СustomInteraction);

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
        var _iterator = _createForOfIteratorHelper($targets),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
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
    else if (event.type == "touchend" || (event.type == "contextmenu" && _this2.touched)) {
      _this2.timeout = setTimeout(function () {
        _this2.touched = false;
      }, _this2.touchendDelay);

      if ($targets[0]) {
        setTimeout(function () {
          var _iterator2 = _createForOfIteratorHelper($targets),
            _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
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

// search.js
jQuery(document).ready(function ($) {
  let searchInputEl,
    resultBoxEl,
    mobile = false;

  if (screen.width > 767) {
    searchInputEl = $(".search_input");
    resultBoxEl = $(".header-search-results");
  } else {
    searchInputEl = $(".search_input_mobile");
    resultBoxEl = $("#search-result-mob");
    mobile = true;
  }

  processSearchResult(searchInputEl, resultBoxEl, mobile);
  processSearchBtnClick(searchInputEl);
});

function processSearchResult(searchInputEl, resultBoxEl, mobile = false) {
  let searchUrl = searchInputEl.data("search-url"),
    searchMinChars = searchInputEl.data("min-chars");

  searchInputEl.on("focus keyup paste", function (e) {
    var input = $(this),
      minChars = this.dataset.minChars;
    if (input.val().length >= searchMinChars) {
      $.ajax({
        type: "get",
        url: searchUrl,
        data: input.serialize(),
        dataType: "html",
      }).done(function (result) {
        if (result.replace(/\s/g, "").length > 0) {
          resultBoxEl.html(result);
          resultBoxEl.show();
          $(document).mouseup(function (e) {
            if (!resultBoxEl.is(e.target) && resultBoxEl.has(e.target).length === 0) {
              resultBoxEl.hide();
            }
          });
        } else {
          resultBoxEl.html("");
          resultBoxEl.hide();
        }
      });
    } else {
      resultBoxEl.hide().empty();
    }
  });
}

function processSearchBtnClick(searchInputEl) {
  var searchBtn = searchInputEl.next("button");

  searchBtn.click(function () {
    var searchInputVal = searchInputEl.val();
    if (searchInputVal) {
      var url = searchInputEl.data("search-url");
      window.location = url + "?q=" + searchInputVal;
    }
  });

  searchInputEl.keyup(function (event) {
    if (event.keyCode === 13) {
      searchBtn.click();
    }
  });
}

$(document).ready(function ($) {
  $("[data-search-button]").on("click", (event) => {
    const id = $(event.currentTarget).attr("data-search-button");
    const input = $(`[data-search-input="${id}"]`);
    const value = input.val();
    const searchUrl = input.attr("data-search-url");
    window.location = searchUrl + "?q=" + value;
  });

  $("[data-search-input]").on("focus keyup paste", (event) => {
    const input = $(event.currentTarget);
    const value = input.val();
    const id = input.attr("data-search-input");
    const searchMinChars = input.attr("data-min-chars");
    const searchUrl = input.attr("data-search-url");
    const resultContainer = $(`[data-search-results="${id}"]`);
    const clickOuterHandler = (event) => {
      if (!event.target.closest("[data-search-results-active]")) {
        $(event.target).removeAttr("data-search-results-active");
        $(document).off("click", clickOuterHandler);
      }
    };

    if (event.key === "enter") return (window.location = searchUrl + "?q=" + value);

    if (value.length < searchMinChars) return;

    try {
      $.ajax({
        type: "get",
        url: searchUrl,
        data: input.serialize(),
        dataType: "html",
      }).done((result) => {
        if (result.replace(/\s/g, "").length <= 0) {
          resultContainer.html("");
          resultContainer.removeAttr("data-search-results-active");
          return;
        }
        resultContainer.html(result);
        resultContainer.attr("data-search-results-active", "");
        $(document).on("click", clickOuterHandler);
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  });
});

// script-mobile.js
("use strict");

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
          dots: true,
        },
        768: {
          nav: false,
          dots: false,
        },
      },
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
      items: 1,
    },
    479: {
      nav: false,
      dots: true,
      items: 2,
    },
  },
});
$(".articles-block .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 3,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1,
    },
    479: {
      nav: false,
      dots: true,
      items: 2,
    },
  },
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

// script-desktop.js
("use strict");

$(".product-slider--5 .owl-carousel").owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});
$(".product-slider--4:not(.product-slider--5) .owl-carousel").owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  items: 5,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1240: {
      items: 5,
    },
  },
});
$(".product-slider--3 .owl-carousel").owlCarousel({
  loop: true,
  margin: 11,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1240: {
      items: 4,
    },
  },
});

// header-custom.js
$(document).ready(() => {
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
});

$(document).ready(() => {
  // phone toggle
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".contact-box p")) return;
    else {
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

// header-search-catalog.js

// поиск результат при вводе
function gid(a_id) {
  return document.getElementById(a_id);
}

function close_all() {
  // hide all divs
  var o_res = gid("search-result");

  for (i = 0; i < 7; i++) {
    // to simplify the story I have here the hardcoded number of elements. In real life make it better.
    var o = gid("user_" + i);
    if (o) {
      //just to make sure this object really exists
      o.style.display = "none";
    }
  }
  o_res.style.display = "none";
  overlay.classList.remove("show");
}

function find_my_div() {
  // find and show
  close_all(); // close previous searhc results

  var o_res = gid("search-result");
  var overlay = gid("overlay");
  var str_needle = edit_search.value;
  str_needle = str_needle.toUpperCase();

  if (str_needle != "") {
    // we will not search for empty strings
    for (i = 0; i < 7; i++) {
      var o = gid("user_" + i);
      if (o) {
        //just to make sure this object really exists
        // we want case insensitive search, so bring the both parts to upper case and compare
        var str_haystack = o.innerHTML.toUpperCase();
        if (str_haystack.indexOf(str_needle) == -1) {
          // not found, do nothing
        } else {
          // yes, we got it, show it

          o.style.display = "flex";
          o_res.style.display = "block";
          overlay.classList.add("show");
        }
      }
    }
  }
}

// header-search-catalog-mobile.js

function close_all_mob() {
  // hide all divs
  var o_res = gid("search-result-mob");
  var overlay = gid("overlay_mob");
  for (i = 0; i < 7; i++) {
    // to simplify the story I have here the hardcoded number of elements. In real life make it better.
    var o = gid("user_" + i);
    if (o) {
      //just to make sure this object really exists
      o.style.display = "none";
    }
  }
  o_res.style.display = "none";
  overlay.classList.remove("show");
}

function find_my_div_mob() {
  // find and show
  close_all_mob(); // close previous searhc results

  var o_res = gid("search-result-mob");
  var overlay = gid("overlay_mob");
  var str_needle = edit_search_mob.value;
  str_needle = str_needle.toUpperCase();

  if (str_needle != "") {
    // we will not search for empty strings
    for (i = 0; i < 7; i++) {
      var o = gid("user_" + i);
      if (o) {
        //just to make sure this object really exists
        // we want case insensitive search, so bring the both parts to upper case and compare
        var str_haystack = o.innerHTML.toUpperCase();
        if (str_haystack.indexOf(str_needle) == -1) {
          // not found, do nothing
        } else {
          // yes, we got it, show it

          o.style.display = "flex";
          o_res.style.display = "block";
          overlay.classList.add("show");
        }
      }
    }
  }
}

// ajax-setup.js

$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
      // Only send the token to relative URLs i.e. locally.
      xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
    }
  },
});

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

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
    showMaskOnHover: false,
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
        items: 1,
      },
      479: {
        nav: false,
        dots: true,
        items: 3,
      },
      768: {
        nav: true,
        dots: false,
        items: 4,
      },
      992: {
        nav: true,
        items: 5,
      },
    },
  });
});

// catalog.js

const filterForm = $("#catalog_filter_form");

jQuery(document).ready(function ($) {
  updRangeSliders();

  filterForm.on("keyup change paste", "input, select, textarea", function () {
    handleFilterChange(this);
  });

  // Remove empty fields from GET forms
  filterForm.submit(function () {
    var $this = $(this);
    $this
    .find(":input")
    .filter(function () {
      return !this.value;
    })
    .attr("disabled", "disabled");

    prepareFilterForm();
    return true;
  });

  // Un-disable form fields when page loads, in case they click back after submission
  filterForm.find(":input").not(".range-input").prop("disabled", false);

  $(".found-cheaper-panel").on("click", ".close-panel", function () {
    document.cookie = "found_chaper_panel_closed=1; path=/";
  });

  const questionFormBoxId = "question-main";

  $('[href="#' + questionFormBoxId + '"]').click(function () {
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 80,
      },
      300,
      function () {}
    );

    var $this = $(this),
      message;
    if ($this.hasClass("smoothScroll")) {
      prepareQestionForm(questionFormBoxId, "Нашли дешевле?", "Где дешевле?");
    } else {
      if ($this.hasClass("not-available")) {
        message = $this.attr("data-form-main-msg") ? $this.data("form-main-msg") : "Когда будет в наличии?";
        message += "\n\n" + $this.data("product-name");
        message += '\n"Артикул: ' + $this.data("product-code") + ".";

        prepareQestionForm(questionFormBoxId, $this.data("form-subject"), "Ваш вопрос", message);
      } else if ($this.hasClass("not-price")) {
        message = $this.attr("data-form-main-msg") ? $this.data("form-main-msg") : "Хочу узнать цену.";
        message += "\n\n" + $this.data("product-name");
        message += "\nАртикул: " + $this.data("product-code") + ".";
        prepareQestionForm(questionFormBoxId, $this.data("form-subject"), "Ваш вопрос", message);
      }
    }
  });

  function prepareQestionForm(form_id, title, placeholder, message = "") {
    const questionFormBox = $("#" + form_id);
    if (questionFormBox.length) {
      if (title) {
        $(".content-title", questionFormBox).text(title);
      }
      if (placeholder) {
        $('label[for="message"] .content-name', questionFormBox).text(placeholder);
      }
      $("textarea", questionFormBox).text(message);
    }
  }

  // catalog product list sort (mobile mode)
  const sortingList = $('.dropdown-select-ul[data-role="products-header-sort-mobile"]');
  sortingList.on("DOMSubtreeModified", "li.selected", function () {
    var url = $(this).data("value");
    if (url.length > 0) {
      location = url;
    }
  });

  // scroll to target tag
  $('a[rel^="tab"]').click(function () {
    var targetTab = $('.tabs li[rel="' + $(this).attr("rel") + '"]:visible');

    if (!targetTab.length) {
      targetTab = $('.tab_drawer_heading[rel="' + $(this).attr("rel") + '"]:visible');
    }

    if (targetTab.length) {
      $("body,html").animate(
        {
          scrollTop: targetTab.offset().top,
        },
        800 //speed
      );
    }
  });

  $(".view-sort-item").on("click", function () {
    if ($(this).is("[data-list-view-mode]")) {
      Cookies.set("list_view_mode", this.dataset.listViewMode);
    }
  });

  $("#catalog_filter_form input").on("change", (event) => {
    $(event.currentTarget).attr("data-active-input", "");
    console.log("change");
  });
  $("#catalog_filter_form input").on("input", (event) => {
    $(event.currentTarget).attr("data-active-input", "");
    console.log("input");
  });
});

function prepareFilterForm() {
  // clear price_range values
  var rangeInputs = document.querySelectorAll(".range-input");
  rangeInputs.forEach(function (item) {
    if (!item.disabled) {
      item.value = item.value.replace(/[^0-9]+/g, "");
    }
  });
}

function handleFilterChange(elem) {
  var $this = $(elem);
  filterForm
  .find(":input")
  .not("button")
  .filter(function () {
    if (this.classList.contains("range-input")) {
      return parseInt(this.dataset.initValue) === parseInt(this.value);
    }
    return !this.value;
  })
  .attr("disabled", "disabled");
  prepareFilterForm();
  var formData = filterForm.serialize();
  var url = filterForm.attr("action");
  if (formData.length) {
    url += "?" + formData;
  }
  $.getJSON(url, function (response) {
    var filterShowAll = $(".filter-show-all");
    if (filterShowAll.length > 0) {
      filterShowAll.hide();
      filterShowAll.show();
      filterShowAll.insertAfter($this.parent());
      if (response.count) {
        filterShowAll.html('<a href="' + url + '">Показать ' + response.count + "</a>");
      } else {
        filterShowAll.html('<a href="#">Найдено 0</a>');
      }
      setTimeout(function () {
        filterShowAll.not(":hover").fadeOut("fast");
      }, 5000);
    }
  });
}

function updRangeSliders() {
  $(".filter-range").each(function () {
    var filter = this,
      keypressSliders = $(".range-slider");

    $(keypressSliders).each(function (index, keypressSlider) {
      if (keypressSlider !== null && keypressSlider.noUiSlider) {
        var rangeInputs = filter.querySelectorAll(".range-input");
        keypressSlider.noUiSlider.on("update", function () {
          var minInput = rangeInputs[0].value.replace(/[^0-9]+/g, "") === rangeInputs[0].dataset.minValue;
          var maxInput = rangeInputs[1].value.replace(/[^0-9]+/g, "") === rangeInputs[1].dataset.maxValue;
          for (var i = 0; i < rangeInputs.length; i++) {
            rangeInputs[i].disabled = minInput && maxInput;
          }
        });
        keypressSlider.noUiSlider.on("set", function () {
          handleFilterChange(keypressSlider);
        });
      }
    });
  });
}

// cart.simple.js

(function ($) {
  $(document).ready(function () {
    var delivery_payment_mapping = JSON.parse(document.getElementById("delivery_payment_mapping").textContent);
    var current_delivery = $("input[name=delivery_variant]:checked").val();
    var payment_block = $("#id_payment_variant").parent();
    payment_block.hide().find("input").prop("checked", false);

    function change_delivery_variant(e) {
      if (e) {
        current_delivery = $(this).val();
      }
      if (current_delivery) {
        payment_block.show().find("li").show();
        payment_block
        .show()
        .find("input")
        .each(function () {
          var current_element = $(this);
          if (!delivery_payment_mapping[current_delivery].includes(current_element.val())) {
            current_element.prop("checked", false).parent().parent().hide();
          }
        });
      }
    }
    $("input[name=delivery_variant]").click(change_delivery_variant);
    change_delivery_variant(undefined);
  });
})(jQuery);

$(() => {
  $(".simple-order-form").on("submit", (event) => {
    const formData = $(event.currentTarget).serializeArray();
    if (formData[1].value.length === 0) return;
    if (formData[2].value.length !== 18) return;
    if (!/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(formData[3].value)) return;

    if (typeof roistat !== "undefined") {
      const obj = formData.reduce((acc, item) => ((acc[item.name] = item.value), acc), {});
      roistat.event.send("orderForm", obj);
    }
  });
});

// cart.js

(function ($) {
  $(document).ready(function () {
    $(".input-number").each(function () {
      let spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find(".order-up"),
        btnDown = spinner.find(".order-down"),
        min = parseInt(input.attr("min")),
        max = input.attr("max"),
        multiplicity = parseInt(input.attr("step")),
        qty;

      if (max === "inf") {
        max = Infinity;
      } else {
        max = parseInt(max);
      }
      btnUp.click(function () {
        qty = parseInt(input.val());
        if (qty > max) {
          input.val(max);
        } else if (qty < max) {
          input.val(qty + multiplicity);
        }
        input.trigger("change");
      });
      input.change(function () {
        qty = parseInt(input.val());
        if (qty > 9 && qty <= 99) {
          btnDown.css("right", 57);
        } else if (qty > 99 && qty <= 999) {
          btnDown.css("right", 74);
        } else if (qty > 999) {
          btnDown.css("right", 90);
        } else {
          btnDown.css("right", 45);
        }
      });
      btnDown.click(function () {
        qty = parseInt(input.val());
        if (qty < min) {
          input.val(min);
        } else if (qty > min) {
          input.val(qty - multiplicity);
        }

        input.trigger("change");
      });
    });

    // добавление товара в корзину
    // ссылка обновления кол-ва товара должна иметь класс add-to-cart
    $(document).on("click", ".add-to-cart", function (e) {
      e.preventDefault();

      // Элемент, на который меняется кнопка добавления в корзину
      // после нажатия и успешного добавления.
      const CHECKOUT_BTN = `<a href="/cart/"
                                     class="st-button st-button_primary w-100">Оформить</a>`;

      var $this = $(this),
        qty = $("input", $this.prev()).val(),
        url = $this.attr("href");

      if (typeof qty !== "undefined") {
        url += "?qty=" + qty;
      }

      $.getJSON(url, function (response) {
        $this.prev().not(".input-number--lg").hide();
        $this.replaceWith(CHECKOUT_BTN);
        if (response.result == "success") {
          if (window.location.pathname == URLS.cart) {
            window.location.reload(true);
          } else {
            $(".cart-number").html(response.count);
          }
        }
      });
    });

    // обновление кол-ва товара
    // ссылка обновления кол-ва товара должна иметь класс cart-qty-control
    $(".cart-qty-control").click(function (e) {
      var $this = $(this);
      updateQtyAjax($this, $this.data("qty-update-url"));
    });

    // обновление кол-ва товара при вводе в поле
    $(".cart-qty-control-input").on("input", function (e) {
      var $this = $(this),
        updateUrl = $this.data("qty-update-url") + "?qty=" + $this.val();
      updateQtyAjax($this, updateUrl);
    });

    function updateQtyAjax(element, url) {
      $.getJSON(url, function (response) {
        element.notify(response.message, response.result);
        if (response.result == "success") {
          element
          .closest("span")
          .next()
          .html(response.product_price_total + ' <span class="rouble"> ₽</span>');
          $(".cart-total-price").html(response.total_price + " ₽");
          $(".cart-total-weight").html(response.total_weight);
          $(".cart-total-volume").html(response.total_volume);
          $(element).parent().find("input.cart-qty-control-input").val(response.quantity);
        }
      });
    }

    $(".shopping-cart-item__delete").click(function (e) {
      var url = $(this).data("cart-delete-url");
      if (url) {
        window.location = url;
      }
    });

    showLoginFormCheckbox();
  });
})(jQuery);

function showLoginFormCheckbox() {
  $("#account-exists-checkbox").click(function () {
    var loginForm = $("#commerce-login-form");
    if (this.checked) {
      loginForm.show();
    } else {
      loginForm.hide();
    }
  });
}

// crm.js

function ajax_send_crm_form(form, key, run_onsubmit = false) {
  if (run_onsubmit && form.hasAttribute("onsubmit")) {
    eval(form.getAttribute("onsubmit")); // jshint ignore:line
  }
  var data = form.serializeArray();
  $.ajax({
    type: "POST",
    url: form.attr("action"),
    data: data,
    dataType: "json",
  }).done(function (response) {
    formDoneAction(form, response, key);
  });
}

// feedback message request form handler
//
$("#feedback-message-request-form").on("submit", function (event) {
  event.preventDefault();
  var form = $(this);
  form.find('input[name="url"]').val(window.location.pathname);
  ajax_send_crm_form(form, "feedBackForm");
});

// Вместо того чтобы написать один обработчик для всех тут создан новый как callBack для капчи
function feedback_form_ajax_submit() {
  var form = $("#feedback-message-request-form");
  form.find('input[name="url"]').val(window.location.pathname);
  ajax_send_crm_form(form, "feedBackForm", true);
}

// call-merequest form handler
$("form.callme-request-form").on("submit", function (event) {
  event.preventDefault();
  ajax_send_crm_form($(this), "callMeForm");
});

function callme_form_ajax_submit(token) {
  let form = $("#crm-callme-request-form");
  ajax_send_crm_form(form, "callMeForm", true);
}

function formDoneAction(form, response, key) {
  var msg;
  form.find(".error-text").each(function () {
    $(this).remove();
  });
  form.find(".form-group").each(function () {
    $(this).removeClass("form-group--error");
  });
  if (response.success) {
    if (typeof roistat !== "undefined") {
      const obj = form.serializeArray().reduce((acc, item) => ((acc[item.name] = item.value), acc), {});
      roistat.event.send(key, obj);
    }
    // дальше очистка полей, без понятия зачем если и так из dom удаляется модалка
    form.find("input, textarea").val("");
    $.fancybox.close();
    msg = response.msg ? response.msg : "<h3>Ваше сообщение отправлено!</h3>";
    $.fancybox.open(msg);
  } else {
    for (var f in response.errors) {
      msg = '<span class="error-text">' + response.errors[f] + "</span>";
      var input = form.find('[name="' + f + '"]');
      var formGroup = input.parent(".form-group");
      formGroup.addClass("form-group--error");
      formGroup.append(msg);
    }
  }
}

// gift for phone form handler
$("form.git-for-phone-form").on("submit", function (event) {
  event.preventDefault();
  var form = $(this);
  var data = form.serializeArray();
  $.ajax({
    type: "POST",
    url: form.attr("action"),
    data: data,
    dataType: "json",
  }).done(function (response) {
    formDoneAction(form, response, "giftForm");
  });
});

// custom_forms.js

let customForm = $("form.custom-form-instance");
customForm.not(":visible").show();

customForm.on("submit", function (event) {
  event.preventDefault();
  ajax_send_custom_form($(this));
});

function ajax_send_custom_form(jquery_form_obj) {
  var token = getCookie("csrftoken");
  jquery_form_obj.find('[name="csrfmiddlewaretoken"]').val(token);
  var data = jquery_form_obj.serialize();

  $.ajax({
    type: "POST",
    url: jquery_form_obj.attr("action"),
    data: new FormData(jquery_form_obj[0]),
    processData: false,
    contentType: false,
    success: function (response) {
      formErrAction(jquery_form_obj, response);
      if (typeof roistat !== "undefined") {
        const obj = jquery_form_obj.serializeArray().reduce((acc, item) => ((acc[item.name] = item.value), acc), {});
        roistat.event.send(`customForm - ${jquery_form_obj.attr("action")}`, obj);
      }
    },
  });
}

function formErrAction(form, response) {
  var msg;
  form.find(".error-text").each(function () {
    $(this).remove();
  });
  form.find(".form-group").each(function () {
    $(this).removeClass("form-group--error");
  });

  if (response.success) {
    form.find("input, textarea").val("");
    $.fancybox.close();
    for (var indexPod = 0; indexPod < filePods.length; indexPod++) {
      var filePond = filePods[indexPod];
      if (filePond.getFiles().length !== 0) {
        for (var i = 0; i <= filePond.getFiles().length - 1; i++) {
          filePond.removeFile(filePond.getFiles()[0].id);
        }
      }
    }
    msg = response.msg ? response.msg : "<h3>Ваше сообщение отправлено!</h3>";
    $.fancybox.open(msg);
  } else {
    for (var f in response.errors) {
      msg = '<span class="error-text">' + response.errors[f] + "</span>";
      var input = form.find('[name="' + f + '"]');
      var formGroup = input.parent(".form-group");
      formGroup.addClass("form-group--error");
      formGroup.append(msg);
    }
  }
}

// subscruption.js

$("#footer-subscription-form").on("submit", function (event) {
  event.preventDefault();
  var $this = $(this),
    msg = "";
  $.post($this.attr("action"), $this.serialize(), function (data) {
    if (data.success) {
      msg = '<p style="color: white">Поздравляем! Вы успешно подписались на нашу рассылку.</p>';
      if (typeof roistat !== "undefined") {
        const obj = $this.serializeArray().reduce((acc, item) => ((acc[item.name] = item.value), acc), {});
        roistat.event.send(`newsSubForm`, obj);
      }
    } else if (data.errors) {
      for (var e in data.errors) {
        msg = msg + '<p style="color: white">' + data.errors[e] + "</p>";
      }
    }
    $this.html(msg);
  });
});
