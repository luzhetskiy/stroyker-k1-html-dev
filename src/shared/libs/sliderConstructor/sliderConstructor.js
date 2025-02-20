import { _classCallCheck, _defineProperties, _createClass } from "../utils/utils";

export const initSliderConstructor = () => {
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
            responsive: [
              {
                breakpoint: breakpoints.sm - 1,
                settings: {
                  variableWidth: this.params.variableWidth.sm,
                  slidesToShow: this.params.count.sm,
                  slidesToScroll: this.params.count.sm,
                  rows: this.params.rows.sm,
                  centerMode: this.params.centerMode.sm,
                },
              },
              {
                breakpoint: breakpoints.md - 1,
                settings: {
                  variableWidth: this.params.variableWidth.md,
                  slidesToShow: this.params.count.md,
                  slidesToScroll: this.params.count.md,
                  rows: this.params.rows.md,
                  centerMode: this.params.centerMode.md,
                },
              },
              {
                breakpoint: breakpoints.lg - 1,
                settings: {
                  variableWidth: this.params.variableWidth.lg,
                  slidesToShow: this.params.count.lg,
                  slidesToScroll: this.params.count.lg,
                  rows: this.params.rows.lg,
                  centerMode: this.params.centerMode.lg,
                },
              },
              {
                breakpoint: breakpoints.xl - 1,
                settings: {
                  variableWidth: this.params.variableWidth.xl,
                  slidesToShow: this.params.count.xl,
                  slidesToScroll: this.params.count.xl,
                  rows: this.params.rows.xl,
                  centerMode: this.params.centerMode.xl,
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
                parent
                .find(".product-card-slideshow__image_active")
                .removeClass("product-card-slideshow__image_active");
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
                parent
                .find(".product-card-slideshow__image_active")
                .removeClass("product-card-slideshow__image_active");
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

  document.querySelectorAll(".slider-constructor").forEach(function ($this) {
    new SliderConstructor($this).init();
  });
};
