$(".product-card-slideshow__sector").on("mousemove", (event) => {
  const target = $(event.currentTarget);
  const id = target.attr("data-sector");
  const parent = target.parent().parent();
  parent
  .find(".product-card-slideshow__image_active")
  .removeClass("product-card-slideshow__image_active");
  parent
  .find(".product-card-slideshow__dot_active")
  .removeClass("product-card-slideshow__dot_active");
  parent.find(`[data-sector-image="${id}"]`).addClass("product-card-slideshow__image_active");
  parent.find(`[data-sector-dot="${id}"]`).addClass("product-card-slideshow__dot_active");
});

$(".product-card-slideshow__sectors").on("touchstart", (event) => {
  touchstartX = event.changedTouches[0].screenX;
});

$(".product-card-slideshow__sectors").on("touchend", (event) => {
  touchendX = event.changedTouches[0].screenX;
  const parent = $(event.currentTarget).parent();
  const img = parent.find(".product-card-slideshow__image_active");
  const id = Number(img.attr("data-sector-image"));
  const length = parent.find(".product-card-slideshow__image").length;

  if (touchendX < touchstartX) {
    parent
    .find(".product-card-slideshow__image_active")
    .removeClass("product-card-slideshow__image_active");
    parent
    .find(".product-card-slideshow__dot_active")
    .removeClass("product-card-slideshow__dot_active");
    if (id >= length) {
      parent.find(`[data-sector-image="${1}"]`).addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${1}"]`).addClass("product-card-slideshow__dot_active");
      return;
    }
    parent.find(`[data-sector-image="${id + 1}"]`).addClass("product-card-slideshow__image_active");
    parent.find(`[data-sector-dot="${id + 1}"]`).addClass("product-card-slideshow__dot_active");
  }
  if (touchendX > touchstartX) {
    parent
    .find(".product-card-slideshow__image_active")
    .removeClass("product-card-slideshow__image_active");
    parent
    .find(".product-card-slideshow__dot_active")
    .removeClass("product-card-slideshow__dot_active");
    if (id <= 1) {
      parent
      .find(`[data-sector-image="${length}"]`)
      .addClass("product-card-slideshow__image_active");
      parent.find(`[data-sector-dot="${length}"]`).addClass("product-card-slideshow__dot_active");
      return;
    }
    parent.find(`[data-sector-image="${id - 1}"]`).addClass("product-card-slideshow__image_active");
    parent.find(`[data-sector-dot="${id - 1}"]`).addClass("product-card-slideshow__dot_active");
  }
});
