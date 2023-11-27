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
        let customIcons = this.element.querySelectorAll(
          ".".concat(leftIconClass, ", .").concat(rightIconClass)
        );
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
