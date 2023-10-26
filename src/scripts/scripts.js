"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

$(document).ready(function () {
  $(".catalog-filter-accordion a.opener").click(function () {
    $(this).parent().find("ul:first").slideToggle();
    $(this).parent().toggleClass("active");
    return false;
  });
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
      if (
        choice.classList.contains(clicked.id) ||
        choice.classList.contains("delivery-type-" + clicked.value)
      ) {
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

/* select */

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
          theOptions =
            '<li class="selected" data-value="' + curVal + '">' + curHtml + "</li>" + theOptions;
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
/* tabs */
// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp

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
      var eventOffset =
        scrollDirection === "vert" ? e.originalEvent.layerY : e.originalEvent.layerX;
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

      if (
        width === widthMinusScrollbars &&
        navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      ) {
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
}); // catalog

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
/* range slider */

var keypressSliders = $(".range-slider");
$(keypressSliders).each(function (index, keypressSlider) {
  var field_name = $(keypressSlider).data("name");
  var input0 = document.getElementById("id_" + field_name + "_0");
  var input1 = document.getElementById("id_" + field_name + "_1");
  var inputs = [input0, input1];

  if (input0 && input1) {
    var startVal = parseInt(input0.dataset.currentValue),
      endVal = parseInt(input1.dataset.currentValue);
    var minVal = parseInt(input0.dataset.minValue),
      maxVal = parseInt(input1.dataset.maxValue);
  }

  var postfix = "";

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
    var r = [null, null];
    r[i] = value;
    keypressSlider.noUiSlider.set(r);
  } // Listen to keydown events on the input field.

  inputs.forEach(function (input, handle) {
    if (input === null) return;
    input.addEventListener("change", function () {
      setSliderHandle(handle, this.value);
    });
    input.addEventListener("keydown", function (e) {
      var values = keypressSlider.noUiSlider.get();
      var value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

      var steps = keypressSlider.noUiSlider.steps(); // [down, up]

      var step = steps[handle];
      var position; // 13 is enter,
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

// accordion
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
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
};
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

function throttle(func, interval, context) {
  var isCooldown = false;
  return function () {
    if (isCooldown) return;
    func.apply(context || this, arguments);
    isCooldown = true;
    setTimeout(function () {
      return (isCooldown = false);
    }, interval);
  };
}

function debounce(func, interval, context) {
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

function gallery() {
  if ($.fancybox) {
    $(".owl-item [data-fancybox]").on("click", function () {
      var $selector = $(this)
      .parents(".owl-carousel")
      .find(".owl-item:not(.cloned) [data-fancybox]");
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

    if (
      event.type == "mouseenter" &&
      !_this2.touched &&
      $targets[0] &&
      $targets[0] == event.target
    ) {
      $targets[0].setAttribute("data-hover", "");
    }
    //mouseleave
    else if (
      event.type == "mouseleave" &&
      !_this2.touched &&
      $targets[0] &&
      $targets[0] == event.target
    ) {
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

var SliderConstructor = /*#__PURE__*/ (function () {
  function SliderConstructor(element) {
    _classCallCheck(this, SliderConstructor);

    this.element = element;
  }

  _createClass(SliderConstructor, [
    {
      key: "init",
      value: function init() {
        var _this3 = this;

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
          var breakpoint = index !== 0 ? "-" + key + "-" : "-";

          var attr = _this3.element.getAttribute("data".concat(breakpoint, "mounted"));

          if (attr === null && index !== 0) {
            var prevKey = Object.keys(breakpoints)[index - 1];
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
        this.checkSliderStateDebounced = debounce(this.checkSliderState, 500, this);
        window.addEventListener("resize", this.checkSliderStateDebounced);
      },
    },
    {
      key: "createIcons",
      value: function createIcons() {
        var leftIcon =
          '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ';
        var rightIcon =
          '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ';
        var leftIconClass = "custom-icon-left";
        var rightIconClass = "custom-icon-right";
        var customIcons = this.element.querySelectorAll(
          ".".concat(leftIconClass, ", .").concat(rightIconClass)
        );
        customIcons.forEach(function (icon) {
          var isLeftIcon = icon.classList.contains(leftIconClass);
          var isRightIcon = icon.classList.contains(rightIconClass);

          if (isLeftIcon) {
            icon.classList.remove(leftIconClass);
            leftIcon = icon.outerHTML;
          } else if (isRightIcon) {
            icon.classList.remove(rightIconClass);
            rightIcon = icon.outerHTML;
          }

          icon.remove();
        });
        this.nextArrow = '<button type="button" class="button button_style-1 slick-next">'.concat(
          leftIcon,
          "</button>"
        );
        this.prevArrow = '<button type="button" class="button button_style-1 slick-prev">'.concat(
          rightIcon,
          "</button>"
        );
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

        var state;

        for (var breakpoint in breakpoints) {
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
        var _this4 = this;

        this.slides.forEach(function (slide) {
          slide.remove();
        });
        this.slides.forEach(function (slide) {
          var shouldBeHidden = slide.getAttribute("data-slide-mobile-hidden") !== null;
          var breakpoint = window.innerWidth < breakpoints.sm;

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
