function header() {
  var $header = $("header"),
    height,
    scroll;
  let isThrottled = false;
  check();
  $(window).scroll(function () {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
      check();
      isThrottled = false;
    }, 100);
  });

  function check() {
    if (!$header.hasClass("header_landing")) {
      scroll = $(window).scrollTop();
      height = $header.height();

      if (scroll > height) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
      }
    }
  }
} //gallery
