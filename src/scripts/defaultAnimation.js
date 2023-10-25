$(document).ready(function () {

  // Пример анимации для заголовков h1:
  $("h1").attr({
    "data-aos": "fade", //тип анимации 
    "data-aos-delay": "100", // задержка
    "data-aos-duration": "1000", // продолжительность
  });
  // анимация больших слайдов
  $(".home-banner .owl-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация слайдов новостей
  $(".news_slider .owl-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация слайдов статей
  $(".articles_slider .owl-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация карточек продуктов
  $(".product-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация карточек продуктов v2
  $(".product-card-v2").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация контента банера
  $(".content-standard-box").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация блока с ответами на вопросы
  $(".faq_frontpage_block").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация блока с формой телефона
  $(".gift_for_phone_block").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация формы в подвале
  $(".question-form").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });


  AOS.init({
    once: true,
  });

});
