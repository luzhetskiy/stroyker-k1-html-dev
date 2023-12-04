"use strict";var breakpoints={xs:0,sm:576,md:768,lg:1024,xl:1280},touchstartX=0,touchendX=0;function throttle(t,e,a){var o,i=a||{},n=i.noTrailing,s=void 0!==n&&n,r=i.noLeading,c=void 0!==r&&r,l=i.debounceMode,d=void 0===l?void 0:l,u=!1,h=0;function m(){o&&clearTimeout(o)}function p(){for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];var r=this,l=Date.now()-h;function p(){h=Date.now(),e.apply(r,i)}function v(){o=void 0}u||(c||!d||o||p(),m(),void 0===d&&l>t?c?(h=Date.now(),s||(o=setTimeout(d?v:p,t))):p():!0!==s&&(o=setTimeout(d?v:p,void 0===d?t-l:t)))}return p.cancel=function(t){var e=(t||{}).upcomingOnly,a=void 0!==e&&e;m(),u=!a},p}function debounce(t,e,a){var o=(a||{}).atBegin;return throttle(t,e,{debounceMode:!1!==(void 0!==o&&o)})}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function sliderDebounce(t,e,a){var o=!1;return function(){var i=arguments,n=this;o&&clearTimeout(o),o=setTimeout((function(){t.apply(a||n,i)}),e)}}var SliderConstructor=function(){function t(e){_classCallCheck(this,t),this.element=e}return _createClass(t,[{key:"init",value:function(){var t=this;this.params={},this.params.autoplay=null!==this.element.getAttribute("data-autoplay-timeout"),this.params.autoplayTimeout=+this.element.getAttribute("data-autoplay-timeout")||5e3,this.params.arrows=null===this.element.getAttribute("data-no-arrows"),window.matchMedia("(min-width: 575.98px)").matches?this.params.dots=null===this.element.getAttribute("data-no-dots"):this.params.dots=!0,this.params.adaptiveHeight=null!==this.element.getAttribute("data-adaptive-height"),this.params.centerMode=null!==this.element.getAttribute("data-center"),this.params.count={},this.params.count.xs=+this.element.getAttribute("data-slides")||1,this.params.count.sm=+this.element.getAttribute("data-sm-slides")||this.params.count.xs,this.params.count.md=+this.element.getAttribute("data-md-slides")||this.params.count.sm,this.params.count.lg=+this.element.getAttribute("data-lg-slides")||this.params.count.md,this.params.count.xl=+this.element.getAttribute("data-xl-slides")||this.params.count.lg,this.params.rows={},this.params.rows.xs=+this.element.getAttribute("data-rows")||1,this.params.rows.sm=+this.element.getAttribute("data-sm-rows")||this.params.rows.xs,this.params.rows.md=+this.element.getAttribute("data-md-rows")||this.params.rows.sm,this.params.rows.lg=+this.element.getAttribute("data-lg-rows")||this.params.rows.md,this.params.rows.xl=+this.element.getAttribute("data-xl-rows")||this.params.rows.lg,this.params.state={},Object.keys(breakpoints).forEach((function(e,a){var o=0!==a?"-"+e+"-":"-",i=t.element.getAttribute("data".concat(o,"mounted"));if(null===i&&0!==a){var n=Object.keys(breakpoints)[a-1];t.params.state[e]=t.params.state[n]}else t.params.state[e]="true"===i||0===a&&"false"!==i})),this.slides=[],this.containsMobileHiddenSlides=!1,this.element.childNodes.forEach((function(e){e.tagName&&(null!==e.getAttribute("data-slide-mobile-hidden")&&(t.containsMobileHiddenSlides=!0),t.slides.push(e))})),this.createIcons(),this.checkSliderState(),this.checkSliderStateDebounced=sliderDebounce(this.checkSliderState,500,this),window.addEventListener("resize",this.checkSliderStateDebounced)}},{key:"createIcons",value:function(){var t='\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ',e='\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ',a="custom-icon-left",o="custom-icon-right";this.element.querySelectorAll(".".concat(a,", .").concat(o)).forEach((function(i){var n=i.classList.contains(a),s=i.classList.contains(o);n?(i.classList.remove(a),t=i.outerHTML):s&&(i.classList.remove(o),e=i.outerHTML),i.remove()})),this.nextArrow='<button type="button" class="button button_style-1 slick-next">'.concat(t,"</button>"),this.prevArrow='<button type="button" class="button button_style-1 slick-prev">'.concat(e,"</button>")}},{key:"checkSliderState",value:function(){if(!this.mounted||this.savedWindowWidth!==window.innerWidth){var t;for(var e in this.savedWindowWidth=window.innerWidth,this.mounted&&this.unmount(),breakpoints)window.innerWidth>=breakpoints[e]&&(t=this.params.state[e]);t?(this.element.classList.remove("visible"),this.containsMobileHiddenSlides&&this.checkSlidesVisibility(),this.mount()):this.element.classList.add("visible")}}},{key:"checkSlidesVisibility",value:function(){var t=this;this.slides.forEach((function(t){t.remove()})),this.slides.forEach((function(e){var a=null!==e.getAttribute("data-slide-mobile-hidden"),o=window.innerWidth<breakpoints.sm;a&&o||t.element.insertAdjacentElement("beforeend",e)}))}},{key:"mount",value:function(){$(this.element).slick({autoplay:this.params.autoplay,autoplaySpeed:this.params.autoplayTimeout,mobileFirst:!0,slidesToShow:this.params.count.xs,slidesToScroll:this.params.count.xs,rows:this.params.rows.xs,prevArrow:this.prevArrow,nextArrow:this.nextArrow,arrows:this.params.arrows,adaptiveHeight:this.params.adaptiveHeight,dots:this.params.dots,centerMode:this.params.centerMode,accessibility:!1,responsive:[{breakpoint:breakpoints.sm-1,settings:{slidesToShow:this.params.count.sm,slidesToScroll:this.params.count.sm,rows:this.params.rows.sm}},{breakpoint:breakpoints.md-1,settings:{slidesToShow:this.params.count.md,slidesToScroll:this.params.count.md,rows:this.params.rows.md}},{breakpoint:breakpoints.lg-1,settings:{slidesToShow:this.params.count.lg,slidesToScroll:this.params.count.lg,rows:this.params.rows.lg}},{breakpoint:breakpoints.xl-1,settings:{slidesToShow:this.params.count.xl,slidesToScroll:this.params.count.xl,rows:this.params.rows.xl}}]});var t=0,e=0;$(".slider-constructor .product-card-slideshow__sector").on("mousemove",(function(t){var e=$(t.currentTarget),a=e.attr("data-sector"),o=e.parent().parent();o.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),o.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),o.find('[data-sector-image="'.concat(a,'"]')).addClass("product-card-slideshow__image_active"),o.find('[data-sector-dot="'.concat(a,'"]')).addClass("product-card-slideshow__dot_active")})),$(".slider-constructor .product-card-slideshow__sectors").on("touchstart",(function(e){t=e.changedTouches[0].screenX})),$(".slider-constructor .product-card-slideshow__sectors").on("touchend",(function(a){e=a.changedTouches[0].screenX;var o=$(a.currentTarget).parent(),i=o.find(".product-card-slideshow__image_active"),n=Number(i.attr("data-sector-image")),s=o.find(".product-card-slideshow__image").length;if(e<t){if(o.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),o.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),n>=s)return o.find('[data-sector-image="'.concat(1,'"]')).addClass("product-card-slideshow__image_active"),void o.find('[data-sector-dot="'.concat(1,'"]')).addClass("product-card-slideshow__dot_active");o.find('[data-sector-image="'.concat(n+1,'"]')).addClass("product-card-slideshow__image_active"),o.find('[data-sector-dot="'.concat(n+1,'"]')).addClass("product-card-slideshow__dot_active")}if(e>t){if(o.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),o.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),n<=1)return o.find('[data-sector-image="'.concat(s,'"]')).addClass("product-card-slideshow__image_active"),void o.find('[data-sector-dot="'.concat(s,'"]')).addClass("product-card-slideshow__dot_active");o.find('[data-sector-image="'.concat(n-1,'"]')).addClass("product-card-slideshow__image_active"),o.find('[data-sector-dot="'.concat(n-1,'"]')).addClass("product-card-slideshow__dot_active")}})),this.mounted=!0}},{key:"unmount",value:function(){$(this.element).slick("unslick"),this.mounted=!1}}]),t}();$(document).ready((function(){$(".catalog-filter-accordion a.opener").click((function(){return $(this).parent().find("ul:first").slideToggle(),$(this).parent().toggleClass("active"),!1})),$("[data-expand]").on("click",(function(t){var e=$(t.currentTarget),a=e.parent();a.find("[data-collapse-content]").removeClass("d-none"),a.find("[data-collapse]").removeClass("d-none"),e.addClass("d-none")})),$("[data-collapse]").on("click",(function(t){var e=$(t.currentTarget),a=e.parent();a.find("[data-collapse-content]").addClass("d-none"),a.find("[data-expand]").removeClass("d-none"),e.addClass("d-none")})),$("[data-expand-menu]").on("click",(function(){$(".mobile-side-menu__background").addClass("d-block"),$(".mobile-side-menu-content").addClass("mobile-side-menu-content_active")})),$("[data-collapse-menu]").on("click",(function(){$(".mobile-side-menu__background").removeClass("d-block"),$(".mobile-side-menu-content").removeClass("mobile-side-menu-content_active"),$("[data-menu-page]:not(:first-child)").removeClass("mobile-side-menu-content__page_active")})),$("[data-menu-page-expand]").on("click",(function(t){var e=$(t.currentTarget).attr("data-menu-page-expand");$('[data-menu-page="'.concat(e,'"]')).addClass("mobile-side-menu-content__page_active")})),$("[data-menu-page-collapse]").on("click",(function(t){var e=$(t.currentTarget).attr("data-menu-page-collapse");$('[data-menu-page="'.concat(e,'"]')).removeClass("mobile-side-menu-content__page_active")})),$("[data-open-bottom-dropdown]").on("click",(function(t){$(".bottom-mobile-menu-list").toggleClass("bottom-mobile-menu-list_active"),$(t.currentTarget).toggleClass("bottom-mobile-menu-button_active")})),$("[data-close-search-modal]").on("click",(function(){$(".search-modal-window").removeClass("d-block")})),$("[data-open-search-modal]").on("click",(function(){$(".search-modal-window").addClass("d-block")})),$(".like-btn").on("click",(function(t){t.preventDefault(),$(this).toggleClass("active")})),$(".city-selection__link").click((function(){$(".city-selection__list").toggle(0)})),$(window).click((function(t){t.target.classList.contains("city-selection__link")||$(".city-selection__list").toggle(!1)})),$(".burger-menu").click((function(){$(".mobile-menu").toggle(0)})),$(".catalog-inner-btn").click((function(t){t.preventDefault(),$(this).toggleClass("open"),$(".catalog-header-content").toggle(0)})),$(".catalog-inner-btn,.catalog-menu__head a").click((function(t){t.preventDefault(),$(".catalog-menu").toggle(0)})),$(".burger-catalog").click((function(t){t.preventDefault(),$(this).toggleClass("open")})),$(".share-btn").click((function(){$(".share-block__show").toggle(0)})),$(".close-panel").click((function(){$(".bottom-panel").toggle(0)})),$(".filter-btn, .close-btn-2").click((function(){$(".catalog-filter").toggle(0)})),$(".catalog-side__title").click((function(){$(".catalog-side__content").toggle(0),$(".catalog-side__content-accordeon").toggle(0)})),$(".catalog-opened").click((function(){$(".catalog-opened .submenu").toggle(0)})),$(".burger-menu").click((function(){$(this).toggleClass("menu-on")})),$(".catalog-inner").click((function(){$(this).toggleClass("open"),$(".catalog-inner-content").toggle(0)}))})),$((function(){$(".smoothScroll").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}))}));var bigSlides=$(".main-slider .owl-carousel"),autoPlayTimeoutSec=parseInt(bigSlides.data("autoplay-timeout"));bigSlides.owlCarousel({loop:!0,margin:5,nav:!0,dots:!0,items:1,autoplay:!0,autoplayTimeout:1e3*autoPlayTimeoutSec,navText:['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>','<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']});var radioButtons=document.querySelectorAll('.delivery-selection input[type="radio"]'),choices=document.querySelectorAll(".delivery-choice");radioButtons.forEach((function(t){t.addEventListener("change",(function(){var t=this;choices.forEach((function(e){e.classList.contains(t.id)||e.classList.contains("delivery-type-"+t.value)?e.style.display="block":e.style.display="none"}))}))})),$(".shopping-cart-item__delete").click((function(){$(this).parent(".shopping-cart-item").remove()})),$(".slider .owl-carousel").owlCarousel({loop:!0,margin:0,items:1,nav:!0}),$(".news-slider .owl-carousel").owlCarousel({loop:!0,margin:0,items:4,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2},768:{nav:!0,dots:!1,items:3},992:{items:4}}}),$(".action-slider .owl-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,items:3,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2},768:{nav:!0,dots:!1,items:3}}}),$(".partners-slider .owl-carousel").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,items:5,responsive:{0:{dots:!0,nav:!1,items:1},566:{nav:!1,dots:!0,items:2},768:{nav:!1,dots:!0,items:3},900:{nav:!1,dots:!0,items:4},950:{dots:!1}}}),function(t){t("select.custom-select").each((function(){var e=t(this),a=e.attr("id"),o=e.children("optgroup"),i="",n="";o.length?(o.each((function(){var e=t(this),a=e.attr("label");i+='<li class="optgroup">'+a+"</li>",e.children("option").each((function(){var e=t(this),a=e.attr("value"),o=e.html();"selected"===e.attr("selected")?(n=o,i+='<li class="selected" data-value="'+a+'">'+o+"</li>"):i+='<li data-value="'+a+'">'+o+"</li>"}))})),e.children("option").each((function(){var e=t(this),a=e.attr("value"),o=e.html();"selected"===e.attr("selected")?(n=o,i='<li class="selected" data-value="'+a+'">'+o+"</li>"+i):i='<li data-value="'+a+'">'+o+"</li>"+i}))):e.children("option").each((function(){var e=t(this),a=e.attr("value"),o=e.html();"selected"===e.attr("selected")?(n=o,i+='<li class="selected" data-value="'+a+'">'+o+"</li>"):i+='<li data-value="'+a+'">'+o+"</li>"})),t('<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>'+n+'</span></div><ul class="dropdown-select-ul" data-role="'+a+'">'+i+"</ul></div> \x3c!-- .custom-select-wrapper --\x3e").insertAfter(e)}));var e=t(".dropdown-select"),a=t(".dropdown-select-ul"),o=t(".dropdown-select-ul li");e.on("click",(function(){t(this).parent(".dropdown-container").toggleClass("active")})),a.on("mouseleave",(function(){t(this).parent(".dropdown-container").removeClass("active")})),o.on("click",(function(){var e=t(this);if(!e.hasClass("optgroup")){var a=e.parent("ul"),o=a.siblings(".dropdown-select"),i=e.html(),n=e.attr("data-value"),s="#"+a.attr("data-role");a.parent(".dropdown-container").toggleClass("active"),e.siblings("li").removeClass("selected"),e.addClass("selected"),t(s).val(n),o.children("span").html(i)}}))}(jQuery),$(".tab-content").hide(),$(".tab-content:first").show(),$("ul.tabs li,.product-card__review-link a,.schedule-btn a").click((function(){$(".tab-content").hide();var t=$(this).attr("rel");$("#"+t).fadeIn(),$("ul.tabs li").removeClass("active"),$(this).addClass("active"),$(".tab_drawer_heading").removeClass("d_active"),$(".tab_drawer_heading[rel^='"+t+"']").addClass("d_active")})),$(".tab_drawer_heading").click((function(){var t=$(this).attr("rel"),e=$("#"+t+":hidden"),a=$(this).not(".d_active");$(".tab-content").hide(),e.fadeIn(),$(".tab_drawer_heading").removeClass("d_active"),a.addClass("d_active"),$("ul.tabs li").removeClass("active"),$("ul.tabs li[rel^='"+t+"']").addClass("active")})),$("ul.tabs li").last().addClass("tab_last"),jQuery(document).ready((function(){jQuery(".schedule-btn a").click((function(){jQuery(".schedule-link").toggleClass("active")}))})),jQuery(document).ready((function(){jQuery(".product-card__review-link a").click((function(){jQuery(".review-tab-link").toggleClass("active")}))})),$(document).ready((function(){var t=$("#sync1"),e=$("#sync2");t.owlCarousel({items:1,slideSpeed:2e3,nav:!0,autoplay:!1,dots:!0,loop:!0,responsiveRefreshRate:200,margin:10}).on("changed.owl.carousel",(function(t){var a=t.item.count-1,o=Math.round(t.item.index-t.item.count/2-.5);o<0&&(o=a);o>a&&(o=0);e.find(".owl-item").removeClass("current").eq(o).addClass("current");var i=e.find(".owl-item.active").length-1,n=e.find(".owl-item.active").first().index(),s=e.find(".owl-item.active").last().index();o>s&&e.data("owl.carousel").to(o,100,!0);o<n&&e.data("owl.carousel").to(o-i,100,!0)})),e.on("initialized.owl.carousel",(function(){e.find(".owl-item").eq(0).addClass("current")})).owlCarousel({items:3,dots:!0,nav:!0,margin:10,smartSpeed:200,slideSpeed:500,slideBy:3,responsiveRefreshRate:100}).on("changed.owl.carousel",(function(e){var a=e.item.index;t.data("owl.carousel").to(a,100,!0)})),e.on("click",".owl-item",(function(e){e.preventDefault();var a=$(this).index();t.data("owl.carousel").to(a,300,!0)}))})),function(){var t=$(".button1"),e=$(".button2"),a=$(".button3"),o=$(".product-item");e.click((function(e){t.removeClass("current"),a.removeClass("current"),$(e.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","wide"),o.removeClass("product-item--line"),o.addClass("product-item--wide")})),a.click((function(a){e.removeClass("current"),t.removeClass("current"),$(a.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","wide"),o.removeClass("product-item--wide"),o.addClass("product-item--line")})),t.click((function(t){e.removeClass("current"),a.removeClass("current"),$(t.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","default"),o.removeClass("product-item--wide"),o.removeClass("product-item--line")}))}();var keypressSliders=$(".range-slider");function gallery(){$.fancybox&&$(".owl-item [data-fancybox]").on("click",(function(){var t=$(this).parents(".owl-carousel").find(".owl-item:not(.cloned) [data-fancybox]");return $.fancybox.open(t,{selector:t,backFocus:!1},t.index(this)),!1}))}function header(){var t,e,a=$("header"),o=!1;function i(){a.hasClass("header_landing")||(e=$(window).scrollTop(),t=a.height(),e>t?a.addClass("fixed"):a.removeClass("fixed"))}i(),$(window).scroll((function(){o||(o=!0,setTimeout((function(){i(),o=!1}),100))}))}function homeBanner(){var t=$(".home-banner .owl-carousel");t.length&&t.owlCarousel({loop:!0,nav:!0,smartSpeed:500,dots:!0,items:1,lazyLoad:!0,autoplay:!0,autoplayTimeout:1e3*(+t.data("autoplay-timeout")||5),navText:['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>','<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']})}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}function _createForOfIteratorHelper(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,r=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){r=!0,n=t},f:function(){try{s||null==a.return||a.return()}finally{if(r)throw n}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function landing_sliders(){var t=$(".landing-slider .owl-carousel");t.length&&t.each((function(){var t,e,a,o,i=$(this);i.is(".landing-slider_1 .owl-carousel")?(t=2,e=2,a=3,o=4):i.is(".landing-slider_2 .owl-carousel")&&(t=1,e=2,a=3,o=4),i.owlCarousel({loop:!0,margin:20,responsive:{0:{items:t,margin:16},576:{items:e},768:{items:a},992:{items:o}}})}))}function toggle(){var t=$(".toggle-section");t.each((function(){var t,e,a=$(this),o=a.children(".toggle-section__trigger"),i=a.children(".toggle-section__content"),n=i.find(".toggle-section__close"),s=!!a.hasClass("active");(o.on("click",(function(){s=!s,r()})),n.on("click",(function(){s=!1,r()})),a.is("[data-hover]"))&&(o.add(i).on("mouseenter",(function(t){isTouch||(e&&clearTimeout(e),s=!0,r())})),o.add(i).on("mouseleave",(function(t){var a;isTouch||(a=$(this).is(o)?500:100,e=setTimeout((function(){s=!1,r()}),a))})));function r(){s?(a.add(i).add(o).addClass("active"),a.is("[data-slide]")&&i.slideDown(250)):(a.add(o).add(i).removeClass("active"),a.is("[data-slide]")&&(t?i.stop().slideUp(250):i.hide(0)))}(a.is("[data-out-hide]")||a.is("[data-hover]"))&&$(document).on("click touchstart",(function(t){var e=$(t.target);e.closest(i).length||e.closest(o).length||!s||(s=!1,r())})),r(),t=!0}))}function up(){var t=$(".js-up");function e(){$(window).scrollTop()>50?t.addClass("visible"):t.removeClass("visible")}var a=!1;$(window).on("scroll",(function(){a||(a=!0,setTimeout((function(){e(),a=!1}),100))})),e(),t.on("click",(function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},500)}))}function chatBlock(){var t=$(".chat-block"),e=$("[data-chat-open]"),a=$("[data-chat-close]");e.on("click",(function(){t.addClass("active")})),a.on("click",(function(){t.removeClass("active")}))}$(keypressSliders).each((function(t,e){var a=$(e).data("name"),o=document.getElementById("id_"+a+"_0"),i=document.getElementById("id_"+a+"_1"),n=[o,i];if(o&&i)var s=parseInt(o.dataset.currentValue),r=parseInt(i.dataset.currentValue),c=parseInt(o.dataset.minValue),l=parseInt(i.dataset.maxValue);var d="";function u(t,a){var o=[null,null];o[t]=a,e.noUiSlider.set(o)}"price_range"==a&&(d=" ₽"),"undefined"!=typeof noUiSlider&&noUiSlider.create(e,{start:[s,r],connect:!0,range:{min:c,max:l},format:wNumb({decimals:0,thousand:" ",postfix:d}),step:1}),null!==e&&e.noUiSlider&&e.noUiSlider.on("update",(function(t,e){n[e].value=t[e]})),n.forEach((function(t,a){null!==t&&(t.addEventListener("change",(function(){u(a,this.value)})),t.addEventListener("keydown",(function(t){var o,i=e.noUiSlider.get(),n=Number(i[a]),s=e.noUiSlider.steps()[a];switch(t.which){case 13:u(a,this.value);break;case 38:!1===(o=s[1])&&(o=1),null!==o&&u(a,n+o);break;case 40:!1===(o=s[0])&&(o=1),null!==o&&u(a,n-o)}})))}))})),$(".product-card-slideshow__sector").on("mousemove",(function(t){var e=$(t.currentTarget),a=e.attr("data-sector"),o=e.parent().parent();o.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),o.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),o.find('[data-sector-image="'.concat(a,'"]')).addClass("product-card-slideshow__image_active"),o.find('[data-sector-dot="'.concat(a,'"]')).addClass("product-card-slideshow__dot_active")})),$(".product-card-slideshow__sectors").on("touchstart",(function(t){touchstartX=t.changedTouches[0].screenX})),$(".product-card-slideshow__sectors").on("touchend",(function(t){touchendX=t.changedTouches[0].screenX;var e=$(t.currentTarget).parent(),a=e.find(".product-card-slideshow__image_active"),o=Number(a.attr("data-sector-image")),i=e.find(".product-card-slideshow__image").length;if(touchendX<touchstartX){if(e.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),e.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),o>=i)return e.find('[data-sector-image="'.concat(1,'"]')).addClass("product-card-slideshow__image_active"),void e.find('[data-sector-dot="'.concat(1,'"]')).addClass("product-card-slideshow__dot_active");e.find('[data-sector-image="'.concat(o+1,'"]')).addClass("product-card-slideshow__image_active"),e.find('[data-sector-dot="'.concat(o+1,'"]')).addClass("product-card-slideshow__dot_active")}if(touchendX>touchstartX){if(e.find(".product-card-slideshow__image_active").removeClass("product-card-slideshow__image_active"),e.find(".product-card-slideshow__dot_active").removeClass("product-card-slideshow__dot_active"),o<=1)return e.find('[data-sector-image="'.concat(i,'"]')).addClass("product-card-slideshow__image_active"),void e.find('[data-sector-dot="'.concat(i,'"]')).addClass("product-card-slideshow__dot_active");e.find('[data-sector-image="'.concat(o-1,'"]')).addClass("product-card-slideshow__image_active"),e.find('[data-sector-dot="'.concat(o-1,'"]')).addClass("product-card-slideshow__dot_active")}})),function(t){var e="cscrlb";function a(a,o){var i,n,s,r,c,l=a,d=t(a),u=d.find(".cscrlb-content"),h=7/8,m="vert",p="scrollTop",v="height",f="top";function g(e){e.preventDefault();var a=e.pageY;"horiz"===m&&(a=e.pageX),r=a-s.offset()[f],t(document).on("mousemove",_),t(document).on("mouseup",w)}function _(t){t.preventDefault();var e=t.pageY;"horiz"===m&&(e=t.pageX);var a=(e-n.offset()[f]-r)/n[v]()*u[v]();i[p](a)}function w(){t(document).off("mousemove",_),t(document).off("mouseup",w)}function b(t){if(t.target!==s[0]){var e=h*i[v](),a=("vert"===m?t.originalEvent.layerY:t.originalEvent.layerX)<s.position()[f]?i[p]()-e:i[p]()+e;i[p](a)}}function y(t){C()}function $(){var t=u[v](),e=i[p](),a=n[v](),o=a/t,r=Math.round(o*e),c=Math.floor(o*(a+2));a<t?("vert"===m?s.css({top:r,height:c}):s.css({left:r,width:c}),n.show()):n.hide()}function C(){$(),k()}function k(){s.addClass("visible"),o.autoHide&&("number"==typeof c&&window.clearTimeout(c),c=window.setTimeout((function(){s.removeClass("visible"),"number"==typeof c&&window.clearTimeout(c)}),1e3))}function x(){"vert"===m?(i.width(d.width()+T()),i.height(d.height())):(i.width(d.width()),i.height(d.height()+T()),u.height(d.height()))}function T(){var e=t('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');t("body").append(e);var a=t(e).innerWidth(),o=t("div",e).innerWidth();return e.remove(),a===o&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1?17:a-o}function S(){x(),$()}return o=t.extend({},t.fn[e].defaults,o),window.onload=function(){u.focus()},d.hasClass("horizontal")&&(m="horiz",p="scrollLeft",v="width",f="left"),d.prepend('<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>'),n=d.find(".cscrlb-scrollbar"),s=d.find(".drag-handle"),o.wrapContent&&u.wrap('<div class="cscrlb-scroll-content" />'),i=d.find(".cscrlb-scroll-content"),x(),o.autoHide&&d.on("mouseenter",C),s.on("mousedown",g),n.on("mousedown",b),i.on("scroll",y),$(),t(window).on("resize",(function(){S()})),o.autoHide||k(),{option:function(t,e){if(!e)return o[t];o[t]=e},destroy:function(){var t;u.insertBefore(n),n.remove(),i.remove(),u.css({height:d.height()+"px","overflow-y":"scroll"}),void 0!==o[t="onDestroy"]&&o[t].call(l),d.removeData("plugin_"+e)},recalculate:S}}t.fn[e]=function(o){if("string"==typeof arguments[0]){var i,n=arguments[0],s=Array.prototype.slice.call(arguments,1);return this.each((function(){if(!t.data(this,"plugin_"+e)||"function"!=typeof t.data(this,"plugin_"+e)[n])throw new Error(" "+n+" "+e);i=t.data(this,"plugin_"+e)[n].apply(this,s)})),void 0!==i?i:this}if("object"===_typeof(o)||!o)return this.each((function(){t.data(this,"plugin_"+e)||t.data(this,"plugin_"+e,new a(this,o))}))},t.fn[e].defaults={onInit:function(){},onDestroy:function(){},wrapContent:!0,autoHide:!1}}(jQuery),$((function(){$(".cscrlb-scrollable").cscrlb()})),$(document).ready((function(){homeBanner(),header(),gallery(),landing_sliders(),up(),chatBlock(),toggle(),new СustomInteraction({targets:"a, button, [data-custom-interaction], .image-zoom"}),document.querySelectorAll(".slider-constructor").forEach((function(t){new SliderConstructor(t).init()}))}));var СustomInteraction=function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,t),this.targets=a.targets,this.touchendDelay=a.touchendDelay||100;var o=function(t){var a=[];a[0]=t.target!==document?t.target.closest(e.targets):null;for(var o=a[0],i=0;a[0]&&(o=o.parentNode)!==document;)o.matches(a.value)&&(i++,a[i]=o);if("touchstart"==t.type){if(e.touched=!0,e.timeout&&clearTimeout(e.timeout),a[0]){var n,s=_createForOfIteratorHelper(a);try{for(s.s();!(n=s.n()).done;){n.value.setAttribute("data-touch","")}}catch(t){s.e(t)}finally{s.f()}}}else("touchend"==t.type||"contextmenu"==t.type&&e.touched)&&(e.timeout=setTimeout((function(){e.touched=!1}),e.touchendDelay),a[0]&&setTimeout((function(){var t,e=_createForOfIteratorHelper(a);try{for(e.s();!(t=e.n()).done;){t.value.removeAttribute("data-touch")}}catch(t){e.e(t)}finally{e.f()}}),e.touchendDelay));"mouseenter"==t.type&&!e.touched&&a[0]&&a[0]==t.target?a[0].setAttribute("data-hover",""):"mouseleave"==t.type&&!e.touched&&a[0]&&a[0]==t.target&&(a[0].removeAttribute("data-click"),a[0].removeAttribute("data-hover")),"mousedown"==t.type&&!e.touched&&a[0]?a[0].setAttribute("data-click",""):"mouseup"==t.type&&!e.touched&&a[0]&&a[0].removeAttribute("data-click")};document.addEventListener("touchstart",o),document.addEventListener("touchend",o),document.addEventListener("mouseenter",o,!0),document.addEventListener("mouseleave",o,!0),document.addEventListener("mousedown",o),document.addEventListener("mouseup",o),document.addEventListener("contextmenu",o)};