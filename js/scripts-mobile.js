"use strict";function goTo(e){var t=document.querySelector(e);if(t){var o=t.getBoundingClientRect(),n=document.body.getBoundingClientRect(),c=o.bottom-n.top;window.scrollTo(0,c)}}$((function(){$(".product-slider--3 .item").slice(0,2).show(),$(".btn-download-1").on("click",(function(e){e.preventDefault(),$(".product-slider--3 .item:hidden").slice(0,2).show(),goTo(".product-slider--3 .item:nth-child(2)"),0==$(".product-slider--3 .item:hidden").length&&$("#load").show()}))})),$((function(){$(".actions-content .item").slice(0,4).show(),$(".btn-download-4").on("click",(function(e){e.preventDefault(),$(".actions-content .item:hidden").slice(0,3).show(),goTo(".actions-content .item:nth-child(3)"),0==$(".actions-content .item:hidden").length&&$("#load").show()}))})),$((function(){$(".articles-block .item").slice(0,4).show(),$(".btn-download-5").on("click",(function(e){e.preventDefault(),$(".articles-block .item:hidden").slice(0,3).show(),goTo(".articles-block .item:nth-child(5)"),0==$(".articles-block .item:hidden").length&&$("#load").show()}))})),$((function(){$(".catalog-menu--search .catalog-menu-item").slice(0,4).show(),$(".btn-download-6").on("click",(function(e){e.preventDefault(),$(".catalog-menu--search .catalog-menu-item:hidden").slice(0,2).show(),goTo(".catalog-menu--search .catalog-menu-item:nth-child(4)"),0==$(".catalog-menu--search .catalog-menu-item:hidden").length&&$("#load").show()}))})),$((function(){$(".catalog-content--search-results .product-item").slice(0,4).show(),$(".btn-download-7").on("click",(function(e){e.preventDefault(),$(".catalog-content--search-results .product-item:hidden").slice(0,2).show(),goTo(".catalog-content--search-results .product-item:nth-child(4)"),0==$(".catalog-content--search-results .product-item:hidden").length&&$("#load").show()}))})),$((function(){$(".catalog-content .product-item").slice(0,4).show(),$(".btn-download-8").on("click",(function(e){e.preventDefault(),$(".catalog-content .product-item:hidden").slice(0,4).show(),goTo(".catalog-content .product-item:nth-child(4)"),0==$(".catalog-content .product-item:hidden").length&&$("#load").show()}))})),$(".city-selection__link").click((function(){$(".city-selection__list").toggle(0)}));var $banners=$(".product-slider__banners.owl-carousel, .new-banners.owl-carousel");function moveBtnexitToLktop(){if(!document.querySelector(".page-head > .btn-exit")){var e=document.querySelector(".btn-exit"),t=document.querySelector(".page-head");t&&e&&t.appendChild(e)}}function moveCompareToHeadright(){if(!document.querySelector(".top-header__content-right > .header-compare")){var e=document.querySelector(".header-compare"),t=document.querySelector(".top-header__content-right");t&&e&&t.appendChild(e)}}function moveCartToHeadright(){if(!document.querySelector(".top-header__content-right > .header-cart")){var e=document.querySelector(".header-cart"),t=document.querySelector(".top-header__content-right");t&&e&&t.appendChild(e)}}function moveBtnToMobbtn(){if(!document.querySelector(".mobile-btn-container > .btn-form")){var e=document.querySelector(".btn-form"),t=document.querySelector(".mobile-btn-container");t&&e&&t.appendChild(e)}}function handleResize(){if(window.innerWidth<768)return moveBtnexitToLktop(),moveCompareToHeadright(),moveCartToHeadright(),void moveBtnToMobbtn()}$banners.each((function(){console.log($(this));var e=$(this);e.find(".item").length>2&&e.owlCarousel({loop:!0,nav:!1,dots:!0,items:2,responsive:{0:{nav:!1,dots:!0},768:{nav:!1,dots:!1}}})})),$((function(){$(".product-slider--4 .item").slice(0,4).show(),$(".btn-download-2").on("click",(function(e){e.preventDefault(),$(".product-slider--4 .item:hidden").slice(0,4).show(),goTo(".product-slider--4 .item:nth-child(4)"),0==$(".product-slider--4 .item:hidden").length&&$("#load").show()}))})),$(".actions-content .owl-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,items:3,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2}}}),$(".articles-block .owl-carousel").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,items:3,responsive:{0:{nav:!1,dots:!0,items:1},479:{nav:!1,dots:!0,items:2}}}),window.addEventListener("resize",handleResize),handleResize();