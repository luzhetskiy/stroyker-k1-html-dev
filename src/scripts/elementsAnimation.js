$(document).ready(function () {
  // slide-content
  $(".slide-content").attr({
    "data-aos": "zoom-in",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // content-title
  $(".content-title").attr({
    "data-aos": "zoom-out-right",
    "data-aos-duration": "700",
  });
  // h1
  $("h1").attr({
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  });
  // h2
  $("h2").attr({
    "data-aos": "zoom-out-right",
    "data-aos-duration": "700",
  });
  // .category-slider owl-nav
  $(".category-slider .owl-item").attr({
    "data-aos": "zoom-in",
    "data-aos-duration": "500",
    "data-aos-delay": "200",
  });
  // product-item
  $(".product-item").attr({
    "data-aos": "zoom-in",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // product-card-v2
  $(".product-card-v2").attr({
    "data-aos": "zoom-in",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // action-slider .owl-item
  $(".action-slider .owl-item").attr({
    "data-aos": "flip-right",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // news-slider .owl-item
  $(".news-slider .owl-item").attr({
    "data-aos": "flip-left",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // partners-slider .owl-item
  $(".partners-slider .owl-item").attr({
    "data-aos": "zoom-in",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });
  // content-standard-box__container
  $(".content-standard-box__container").attr({
    "data-aos": "fade-down-right",
    "data-aos-delay": "100",
    "data-aos-duration": "500",
  });

  AOS.init({
    once: true,
  });
});
