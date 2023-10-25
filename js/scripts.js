"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$(document).ready(function(){$(".catalog-filter-accordion a.opener").click(function(){return $(this).parent().find("ul:first").slideToggle(),$(this).parent().toggleClass("active"),!1})}),$(".like-btn").on("click",function(t){t.preventDefault(),$(this).toggleClass("active")}),$(".city-selection__link").click(function(){$(".city-selection__list").toggle(0)}),$(window).click(function(t){t.target.classList.contains("city-selection__link")||$(".city-selection__list").toggle(!1)}),$(".burger-menu").click(function(){$(".mobile-menu").toggle(0)}),$(".catalog-inner-btn").click(function(t){t.preventDefault(),$(this).toggleClass("open"),$(".catalog-header-content").toggle(0)}),$(".catalog-inner-btn,.catalog-menu__head a").click(function(t){t.preventDefault(),$(".catalog-menu").toggle(0)}),$(".burger-catalog").click(function(t){t.preventDefault(),$(this).toggleClass("open")}),$(".share-btn").click(function(){$(".share-block__show").toggle(0)}),$(".close-panel").click(function(){$(".bottom-panel").toggle(0)}),$(".filter-btn, .close-btn-2").click(function(){$(".catalog-filter").toggle(0)}),$(".catalog-side__title").click(function(){$(".catalog-side__content").toggle(0),$(".catalog-side__content-accordeon").toggle(0)}),$(".catalog-opened").click(function(){$(".catalog-opened .submenu").toggle(0)}),$(".burger-menu").click(function(){$(this).toggleClass("menu-on")}),$(".catalog-inner").click(function(){$(this).toggleClass("open"),$(".catalog-inner-content").toggle(0)}),$(function(){$(".smoothScroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})});var bigSlides=$(".main-slider .owl-carousel"),autoPlayTimeoutSec=parseInt(bigSlides.data("autoplay-timeout")),radioButtons=(bigSlides.owlCarousel({loop:!0,margin:5,nav:!0,dots:!0,items:1,autoplay:!0,autoplayTimeout:1e3*autoPlayTimeoutSec,navText:['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>','<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']}),document.querySelectorAll('.delivery-selection input[type="radio"]')),choices=document.querySelectorAll(".delivery-choice"),keypressSliders=(radioButtons.forEach(function(t){t.addEventListener("change",function(){var e=this;choices.forEach(function(t){t.classList.contains(e.id)||t.classList.contains("delivery-type-"+e.value)?t.style.display="block":t.style.display="none"})})}),$(".shopping-cart-item__delete").click(function(){$(this).parent(".shopping-cart-item").remove()}),$(".slider .owl-carousel").owlCarousel({loop:!0,margin:0,items:1,nav:!0}),$(".news-slider .owl-carousel").owlCarousel({loop:!0,margin:0,items:4,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2},768:{nav:!0,dots:!1,items:3},992:{items:4}}}),$(".action-slider .owl-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,items:3,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2},768:{nav:!0,dots:!1,items:3}}}),$(".partners-slider .owl-carousel").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,items:5,responsive:{0:{dots:!0,nav:!1,items:1},566:{nav:!1,dots:!0,items:2},768:{nav:!1,dots:!0,items:3},900:{nav:!1,dots:!0,items:4},950:{dots:!1}}}),$(".input-number").each(function(){var e=$(this),n=e.find('input[type="number"]'),t=e.find(".order-up"),o=e.find(".order-down"),a=n.attr("min");n.attr("max");t.click(function(){var t=parseFloat(n.val())+1;e.find("input").val(t),e.find("input").trigger("change")}),n.change(function(){9<n.val()&&n.val()<=99?o.css("right",57):99<n.val()&&n.val()<=999?o.css("right",74):999<n.val()?o.css("right",90):o.css("right",45)}),o.click(function(){var t=parseFloat(n.val()),t=t<=a?t:t-1;e.find("input").val(t),e.find("input").trigger("change")})}),!function(s){s("select.custom-select").each(function(){var t=s(this),e=t.attr("id"),n=t.children("optgroup"),o="",a="";n.length?(n.each(function(){var t=s(this),e=t.attr("label");o+='<li class="optgroup">'+e+"</li>",t.children("option").each(function(){var t=s(this),e=t.attr("value"),n=t.html(),t=t.attr("selected");o+="selected"===t?'<li class="selected" data-value="'+e+'">'+(a=n)+"</li>":'<li data-value="'+e+'">'+n+"</li>"})}),t.children("option").each(function(){var t=s(this),e=t.attr("value"),n=t.html(),t=t.attr("selected");o="selected"===t?'<li class="selected" data-value="'+e+'">'+(a=n)+"</li>"+o:'<li data-value="'+e+'">'+n+"</li>"+o})):t.children("option").each(function(){var t=s(this),e=t.attr("value"),n=t.html(),t=t.attr("selected");o+="selected"===t?'<li class="selected" data-value="'+e+'">'+(a=n)+"</li>":'<li data-value="'+e+'">'+n+"</li>"}),s('<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>'+a+'</span></div><ul class="dropdown-select-ul" data-role="'+e+'">'+o+"</ul></div> \x3c!-- .custom-select-wrapper --\x3e").insertAfter(t)});var t=s(".dropdown-select"),e=s(".dropdown-select-ul"),n=s(".dropdown-select-ul li");t.on("click",function(){s(this).parent(".dropdown-container").toggleClass("active")}),e.on("mouseleave",function(){s(this).parent(".dropdown-container").removeClass("active")}),n.on("click",function(){var t,e,n,o,a,i=s(this);i.hasClass("optgroup")||(e=(t=i.parent("ul")).siblings(".dropdown-select"),n=i.html(),o=i.attr("data-value"),a="#"+t.attr("data-role"),t.parent(".dropdown-container").toggleClass("active"),i.siblings("li").removeClass("selected"),i.addClass("selected"),s(a).val(o),e.children("span").html(n))})}(jQuery),$(".tab-content").hide(),$(".tab-content:first").show(),$("ul.tabs li,.product-card__review-link a,.schedule-btn a").click(function(){$(".tab-content").hide();var t=$(this).attr("rel");$("#"+t).fadeIn(),$("ul.tabs li").removeClass("active"),$(this).addClass("active"),$(".tab_drawer_heading").removeClass("d_active"),$(".tab_drawer_heading[rel^='"+t+"']").addClass("d_active")}),$(".tab_drawer_heading").click(function(){var t=$(this).attr("rel"),e=$("#"+t+":hidden"),n=$(this).not(".d_active");$(".tab-content").hide(),e.fadeIn(),$(".tab_drawer_heading").removeClass("d_active"),n.addClass("d_active"),$("ul.tabs li").removeClass("active"),$("ul.tabs li[rel^='"+t+"']").addClass("active")}),$("ul.tabs li").last().addClass("tab_last"),jQuery(document).ready(function(){jQuery(".schedule-btn a").click(function(){jQuery(".schedule-link").toggleClass("active")})}),jQuery(document).ready(function(){jQuery(".product-card__review-link a").click(function(){jQuery(".review-tab-link").toggleClass("active")})}),$(document).ready(function(){var e=$("#sync1"),a=$("#sync2");e.owlCarousel({items:1,slideSpeed:2e3,nav:!0,autoplay:!1,dots:!0,loop:!0,responsiveRefreshRate:200,margin:10}).on("changed.owl.carousel",function(t){var e=t.item.count-1,t=Math.round(t.item.index-t.item.count/2-.5);t<0&&(t=e);e<t&&(t=0);a.find(".owl-item").removeClass("current").eq(t).addClass("current");var e=a.find(".owl-item.active").length-1,n=a.find(".owl-item.active").first().index(),o=a.find(".owl-item.active").last().index();o<t&&a.data("owl.carousel").to(t,100,!0);t<n&&a.data("owl.carousel").to(t-e,100,!0)}),a.on("initialized.owl.carousel",function(){a.find(".owl-item").eq(0).addClass("current")}).owlCarousel({items:3,dots:!0,nav:!0,margin:10,smartSpeed:200,slideSpeed:500,slideBy:3,responsiveRefreshRate:100}).on("changed.owl.carousel",function(t){{t=t.item.index;e.data("owl.carousel").to(t,100,!0)}}),a.on("click",".owl-item",function(t){t.preventDefault();t=$(this).index();e.data("owl.carousel").to(t,300,!0)})}),!function(S){var T="cscrlb";function a(t,n){var a,i,s,o,e,r=t,l=S(t),c=l.find(".cscrlb-content"),u=7/8,d="vert",h="scrollTop",m="height",p="top";function v(t){t.preventDefault();var e=t.pageY;"horiz"===d&&(e=t.pageX),o=e-s.offset()[p],S(document).on("mousemove",f),S(document).on("mouseup",g)}function f(t){t.preventDefault();var e=t.pageY,t=((e="horiz"===d?t.pageX:e)-i.offset()[p]-o)/i[m]()*c[m]();a[h](t)}function g(){S(document).off("mousemove",f),S(document).off("mouseup",g)}function w(t){var e;t.target!==s[0]&&(e=u*a[m](),t=("vert"===d?t.originalEvent.layerY:t.originalEvent.layerX)<s.position()[p]?a[h]()-e:a[h]()+e,a[h](t))}function b(t){$()}function y(){var t=c[m](),e=a[h](),n=i[m](),o=n/t,e=Math.round(o*e),o=Math.floor(o*(n+2));n<t?("vert"===d?s.css({top:e,height:o}):s.css({left:e,width:o}),i.show()):i.hide()}function $(){y(),k()}function k(){s.addClass("visible"),n.autoHide&&("number"==typeof e&&window.clearTimeout(e),e=window.setTimeout(function(){s.removeClass("visible"),"number"==typeof e&&window.clearTimeout(e)},1e3))}function C(){("vert"===d?(a.width(l.width()+_()),a):(a.width(l.width()),a.height(l.height()+_()),c)).height(l.height())}function _(){var t=S('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'),e=(S("body").append(t),S(t).innerWidth()),n=S("div",t).innerWidth();return t.remove(),e===n&&-1<navigator.userAgent.toLowerCase().indexOf("firefox")?17:e-n}function x(){C(),y()}return n=S.extend({},S.fn[T].defaults,n),window.onload=function(){c.focus()},l.hasClass("horizontal")&&(d="horiz",h="scrollLeft",m="width",p="left"),l.prepend('<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>'),i=l.find(".cscrlb-scrollbar"),s=l.find(".drag-handle"),n.wrapContent&&c.wrap('<div class="cscrlb-scroll-content" />'),a=l.find(".cscrlb-scroll-content"),C(),n.autoHide&&l.on("mouseenter",$),s.on("mousedown",v),i.on("mousedown",w),a.on("scroll",b),y(),S(window).on("resize",function(){x()}),n.autoHide||k(),{option:function(t,e){if(!e)return n[t];n[t]=e},destroy:function(){var t;c.insertBefore(i),i.remove(),a.remove(),c.css({height:l.height()+"px","overflow-y":"scroll"}),void 0!==n[t="onDestroy"]&&n[t].call(r),l.removeData("plugin_"+T)},recalculate:x}}S.fn[T]=function(t){var e,n,o;return"string"==typeof t?(e=t,n=Array.prototype.slice.call(arguments,1),this.each(function(){if(!S.data(this,"plugin_"+T)||"function"!=typeof S.data(this,"plugin_"+T)[e])throw new Error(" "+e+" "+T);o=S.data(this,"plugin_"+T)[e].apply(this,n)}),void 0!==o?o:this):"object"!==_typeof(t)&&t?void 0:this.each(function(){S.data(this,"plugin_"+T)||S.data(this,"plugin_"+T,new a(this,t))})},S.fn[T].defaults={onInit:function(){},onDestroy:function(){},wrapContent:!0,autoHide:!1}}(jQuery),$(function(){$(".cscrlb-scrollable").cscrlb()}),(()=>{const e=$(".button1"),n=$(".button2"),o=$(".button3"),a=$(".product-item");n.click(t=>{e.removeClass("current"),o.removeClass("current"),$(t.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","wide"),a.removeClass("product-item--line"),a.addClass("product-item--wide")}),o.click(t=>{n.removeClass("current"),e.removeClass("current"),$(t.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","wide"),a.removeClass("product-item--wide"),a.addClass("product-item--line")}),e.click(t=>{n.removeClass("current"),o.removeClass("current"),$(t.currentTarget).addClass("current"),localStorage.setItem("catalogGrid","default"),a.removeClass("product-item--wide"),a.removeClass("product-item--line")})})(),$(".range-slider"));function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _createForOfIteratorHelper(t,e){var n,o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return n&&(t=n),o=0,{s:e=function(){},n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}$(keypressSliders).each(function(t,s){var e,n,o,a,i=$(s).data("name"),r=document.getElementById("id_"+i+"_0"),l=document.getElementById("id_"+i+"_1"),c=[r,l],r=(r&&l&&(e=parseInt(r.dataset.currentValue),n=parseInt(l.dataset.currentValue),o=parseInt(r.dataset.minValue),a=parseInt(l.dataset.maxValue)),"");function u(t,e){var n=[null,null];n[t]=e,s.noUiSlider.set(n)}"price_range"==i&&(r=" ₽"),"undefined"!=typeof noUiSlider&&noUiSlider.create(s,{start:[e,n],connect:!0,range:{min:o,max:a},format:wNumb({decimals:0,thousand:" ",postfix:r}),step:1}),null!==s&&s.noUiSlider&&s.noUiSlider.on("update",function(t,e){c[e].value=t[e]}),c.forEach(function(t,i){null!==t&&(t.addEventListener("change",function(){u(i,this.value)}),t.addEventListener("keydown",function(t){var e,n=s.noUiSlider.get(),o=Number(n[i]),a=s.noUiSlider.steps()[i];switch(t.which){case 13:u(i,this.value);break;case 38:null!==(e=!1===(e=a[1])?1:e)&&u(i,o+e);break;case 40:null!==(e=!1===(e=a[0])?1:e)&&u(i,o-e)}}))})}),$(".acc__toggle:not(.not_toggle)").click(function(t){var e=$(this);e.next().hasClass("show")?(e.next().removeClass("show"),e.removeClass("active"),e.next().slideUp(200)):(e.parent().parent().find("li .inner").removeClass("show"),e.parent().parent().find("li .acc__toggle").removeClass("active"),e.parent().parent().find("li .inner").slideUp(200),e.next().toggleClass("show"),e.toggleClass("active"),e.next().slideToggle(200))});var breakpoints={xs:0,sm:576,md:768,lg:1024,xl:1280};function throttle(t,e,n){var o=!1;return function(){o||(t.apply(n||this,arguments),o=!0,setTimeout(function(){return o=!1},e))}}function debounce(n,o,a){var i=!1;return function(){var t=arguments,e=this;i&&clearTimeout(i),i=setTimeout(function(){n.apply(a||e,t)},o)}}function homeBanner(){var t=$(".home-banner .owl-carousel");t.length&&t.owlCarousel({loop:!0,nav:!0,smartSpeed:500,dots:!0,items:1,lazyLoad:!0,autoplay:!0,autoplayTimeout:1e3*(+t.data("autoplay-timeout")||5),navText:['<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>','<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>']})}function header(){var t,e=$("header");let n=!1;function o(){e.hasClass("header_landing")||(t=$(window).scrollTop(),e.height()<t?e.addClass("fixed"):e.removeClass("fixed"))}o(),$(window).scroll(function(){n||(n=!0,setTimeout(()=>{o(),n=!1},100))})}function gallery(){$.fancybox&&$(".owl-item [data-fancybox]").on("click",function(){var t=$(this).parents(".owl-carousel").find(".owl-item:not(.cloned) [data-fancybox]");return $.fancybox.open(t,{selector:t,backFocus:!1},t.index(this)),!1})}function landing_sliders(){var t=$(".landing-slider .owl-carousel");t.length&&t.each(function(){var t,e,n,o,a=$(this);a.is(".landing-slider_1 .owl-carousel")?(e=t=2,n=3,o=4):a.is(".landing-slider_2 .owl-carousel")&&(t=1,e=2,n=3,o=4),a.owlCarousel({loop:!0,margin:20,responsive:{0:{items:t,margin:16},576:{items:e},768:{items:n},992:{items:o}}})})}function toggle(){var t=$(".toggle-section");t.each(function(){var t,n,e=$(this),o=e.children(".toggle-section__trigger"),a=e.children(".toggle-section__content"),i=a.find(".toggle-section__close"),s=!!e.hasClass("active");function r(){s?(e.add(a).add(o).addClass("active"),e.is("[data-slide]")&&a.slideDown(250)):(e.add(o).add(a).removeClass("active"),e.is("[data-slide]")&&(t?a.stop().slideUp(250):a.hide(0)))}o.on("click",function(){s=!s,r()}),i.on("click",function(){s=!1,r()}),e.is("[data-hover]")&&(o.add(a).on("mouseenter",function(t){isTouch||(n&&clearTimeout(n),s=!0,r())}),o.add(a).on("mouseleave",function(t){var e;isTouch||(e=$(this).is(o)?500:100,n=setTimeout(function(){s=!1,r()},e))})),(e.is("[data-out-hide]")||e.is("[data-hover]"))&&$(document).on("click touchstart",function(t){t=$(t.target);t.closest(a).length||t.closest(o).length||!s||(s=!1,r())}),r(),t=!0})}function up(){var t=$(".js-up");function e(){50<$(window).scrollTop()?t.addClass("visible"):t.removeClass("visible")}let n=!1;$(window).on("scroll",function(){n||(n=!0,setTimeout(()=>{e(),n=!1},100))}),e(),t.on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},500)})}function chatBlock(){var t=$(".chat-block"),e=$("[data-chat-open]"),n=$("[data-chat-close]");e.on("click",function(){t.addClass("active")}),n.on("click",function(){t.removeClass("active")})}$(document).ready(function(){homeBanner(),header(),gallery(),landing_sliders(),up(),chatBlock(),toggle(),new СustomInteraction({targets:"a, button, [data-custom-interaction], .image-zoom"}),document.querySelectorAll(".slider-constructor").forEach(function(t){new SliderConstructor(t).init()})});var СustomInteraction=function t(){function e(t){for(var n=[],e=(n[0]=t.target!==document?t.target.closest(s.targets):null,n[0]),o=0;n[0]&&(e=e.parentNode)!==document;)e.matches(n.value)&&(n[++o]=e);if("touchstart"==t.type){if(s.touched=!0,s.timeout&&clearTimeout(s.timeout),n[0]){var a,i=_createForOfIteratorHelper(n);try{for(i.s();!(a=i.n()).done;)a.value.setAttribute("data-touch","")}catch(t){i.e(t)}finally{i.f()}}}else("touchend"==t.type||"contextmenu"==t.type&&s.touched)&&(s.timeout=setTimeout(function(){s.touched=!1},s.touchendDelay),n[0])&&setTimeout(function(){var t,e=_createForOfIteratorHelper(n);try{for(e.s();!(t=e.n()).done;)t.value.removeAttribute("data-touch")}catch(t){e.e(t)}finally{e.f()}},s.touchendDelay);"mouseenter"==t.type&&!s.touched&&n[0]&&n[0]==t.target?n[0].setAttribute("data-hover",""):"mouseleave"==t.type&&!s.touched&&n[0]&&n[0]==t.target&&(n[0].removeAttribute("data-click"),n[0].removeAttribute("data-hover")),"mousedown"==t.type&&!s.touched&&n[0]?n[0].setAttribute("data-click",""):"mouseup"==t.type&&!s.touched&&n[0]&&n[0].removeAttribute("data-click")}var s=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,t),this.targets=n.targets,this.touchendDelay=n.touchendDelay||100;document.addEventListener("touchstart",e),document.addEventListener("touchend",e),document.addEventListener("mouseenter",e,!0),document.addEventListener("mouseleave",e,!0),document.addEventListener("mousedown",e),document.addEventListener("mouseup",e),document.addEventListener("contextmenu",e)},SliderConstructor=function(){function e(t){_classCallCheck(this,e),this.element=t}return _createClass(e,[{key:"init",value:function(){var a=this,t=(this.params={},this.params.autoplay=null!==this.element.getAttribute("data-autoplay-timeout"),this.params.autoplayTimeout=+this.element.getAttribute("data-autoplay-timeout")||5e3,this.params.arrows=null===this.element.getAttribute("data-no-arrows"),window.matchMedia("(min-width: 575.98px)"));t.matches?this.params.dots=null===this.element.getAttribute("data-no-dots"):this.params.dots=!0,this.params.adaptiveHeight=null!==this.element.getAttribute("data-adaptive-height"),this.params.centerMode=null!==this.element.getAttribute("data-center"),this.params.count={},this.params.count.xs=+this.element.getAttribute("data-slides")||1,this.params.count.sm=+this.element.getAttribute("data-sm-slides")||this.params.count.xs,this.params.count.md=+this.element.getAttribute("data-md-slides")||this.params.count.sm,this.params.count.lg=+this.element.getAttribute("data-lg-slides")||this.params.count.md,this.params.count.xl=+this.element.getAttribute("data-xl-slides")||this.params.count.lg,this.params.rows={},this.params.rows.xs=+this.element.getAttribute("data-rows")||1,this.params.rows.sm=+this.element.getAttribute("data-sm-rows")||this.params.rows.xs,this.params.rows.md=+this.element.getAttribute("data-md-rows")||this.params.rows.sm,this.params.rows.lg=+this.element.getAttribute("data-lg-rows")||this.params.rows.md,this.params.rows.xl=+this.element.getAttribute("data-xl-rows")||this.params.rows.lg,this.params.state={},Object.keys(breakpoints).forEach(function(t,e){var n,o=a.element.getAttribute("data".concat(0!==e?"-"+t+"-":"-","mounted"));null===o&&0!==e?(n=Object.keys(breakpoints)[e-1],a.params.state[t]=a.params.state[n]):a.params.state[t]="true"===o||0===e&&"false"!==o}),this.slides=[],this.containsMobileHiddenSlides=!1,this.element.childNodes.forEach(function(t){t.tagName&&(null!==t.getAttribute("data-slide-mobile-hidden")&&(a.containsMobileHiddenSlides=!0),a.slides.push(t))}),this.createIcons(),this.checkSliderState(),this.checkSliderStateDebounced=debounce(this.checkSliderState,500,this),window.addEventListener("resize",this.checkSliderStateDebounced)}},{key:"createIcons",value:function(){var o='\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ',a='\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ',i="custom-icon-left",s="custom-icon-right";this.element.querySelectorAll(".".concat(i,", .").concat(s)).forEach(function(t){var e=t.classList.contains(i),n=t.classList.contains(s);e?(t.classList.remove(i),o=t.outerHTML):n&&(t.classList.remove(s),a=t.outerHTML),t.remove()}),this.nextArrow='<button type="button" class="button button_style-1 slick-next">'.concat(o,"</button>"),this.prevArrow='<button type="button" class="button button_style-1 slick-prev">'.concat(a,"</button>")}},{key:"checkSliderState",value:function(){if(!this.mounted||this.savedWindowWidth!==window.innerWidth){var t,e;for(e in this.savedWindowWidth=window.innerWidth,this.mounted&&this.unmount(),breakpoints)window.innerWidth>=breakpoints[e]&&(t=this.params.state[e]);t?(this.element.classList.remove("visible"),this.containsMobileHiddenSlides&&this.checkSlidesVisibility(),this.mount()):this.element.classList.add("visible")}}},{key:"checkSlidesVisibility",value:function(){var o=this;this.slides.forEach(function(t){t.remove()}),this.slides.forEach(function(t){var e=null!==t.getAttribute("data-slide-mobile-hidden"),n=window.innerWidth<breakpoints.sm;e&&n||o.element.insertAdjacentElement("beforeend",t)})}},{key:"mount",value:function(){$(this.element).slick({autoplay:this.params.autoplay,autoplaySpeed:this.params.autoplayTimeout,mobileFirst:!0,slidesToShow:this.params.count.xs,slidesToScroll:this.params.count.xs,rows:this.params.rows.xs,prevArrow:this.prevArrow,nextArrow:this.nextArrow,arrows:this.params.arrows,adaptiveHeight:this.params.adaptiveHeight,dots:this.params.dots,centerMode:this.params.centerMode,accessibility:!1,responsive:[{breakpoint:breakpoints.sm-1,settings:{slidesToShow:this.params.count.sm,slidesToScroll:this.params.count.sm,rows:this.params.rows.sm}},{breakpoint:breakpoints.md-1,settings:{slidesToShow:this.params.count.md,slidesToScroll:this.params.count.md,rows:this.params.rows.md}},{breakpoint:breakpoints.lg-1,settings:{slidesToShow:this.params.count.lg,slidesToScroll:this.params.count.lg,rows:this.params.rows.lg}},{breakpoint:breakpoints.xl-1,settings:{slidesToShow:this.params.count.xl,slidesToScroll:this.params.count.xl,rows:this.params.rows.xl}}]}),this.mounted=!0}},{key:"unmount",value:function(){$(this.element).slick("unslick"),this.mounted=!1}}]),e}();