("use strict");

//@include ./shared/config/index.js
//@include ./shared/lib/debounce-throttle.js
//@include ./features/sliderConstructor.js
//@include ./features/clickEvents.js
//@include ./features/smoothScroll.js
//@include ./features/bigSlides.js
//@include ./features/customSelect.js
//@include ./features/tabs.js
//@include ./features/syncSliders.js
//@include ./features/catalogViewMode.js
//@include ./features/rangeSlider.js
//@include ./features/gallery.js
//@include ./features/header.js
//@include ./features/homeBanner.js
//@include ./features/catalogCardSlideshow.js
//@include ../../components/product-description-group/index.js
//@include ../../components/product-haracteristic-group/index.js
//@include ../../components/product-cards/index.js

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
