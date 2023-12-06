$(".acc__toggle:not(.not_toggle)").click(function (e) {
  // e.preventDefault();

  var $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.removeClass("active");
    $this.next().slideUp(200);
  } else {
    $this.parent().parent().find("li .inner").removeClass("show");
    $this.parent().parent().find("li .acc__toggle").removeClass("active");
    $this.parent().parent().find("li .inner").slideUp(200);
    $this.next().toggleClass("show");
    $this.toggleClass("active");
    $this.next().slideToggle(200);
  }
});
