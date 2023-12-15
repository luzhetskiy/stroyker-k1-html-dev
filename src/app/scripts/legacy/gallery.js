function gallery() {
  if ($.fancybox) {
    $(".owl-item [data-fancybox]").on("click", function () {
      var $selector = $(this)
      .parents(".owl-carousel")
      .find(".owl-item:not(.cloned) [data-fancybox]");
      $.fancybox.open(
        $selector,
        {
          selector: $selector,
          backFocus: false,
        },
        $selector.index(this)
      );
      return false;
    });
  }
}
