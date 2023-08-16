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
