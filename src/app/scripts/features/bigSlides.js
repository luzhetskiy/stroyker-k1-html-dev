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
