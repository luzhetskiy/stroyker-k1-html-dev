$(document).ready(() => {
  let touchstartX = 0;
  let touchendX = 0;

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
        parent
        .find(`[data-sector-image]:nth-child(1)`)
        .addClass("product-card-slideshow__image_active");
        parent
        .find(`[data-sector-dot]:nth-child(1)`)
        .addClass("product-card-slideshow__dot_active");
        return;
      }
      parent
      .find(`[data-sector-image="${id}"]`)
      .next()
      .addClass("product-card-slideshow__image_active");
      parent
      .find(`[data-sector-dot="${id}"]`)
      .next()
      .addClass("product-card-slideshow__dot_active");
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
        .find(`[data-sector-image]:nth-child(${length})`)
        .addClass("product-card-slideshow__image_active");
        parent
        .find(`[data-sector-dot]:nth-child(${length})`)
        .addClass("product-card-slideshow__dot_active");
        return;
      }
      parent
      .find(`[data-sector-image="${id}"]`)
      .prev()
      .addClass("product-card-slideshow__image_active");
      parent
      .find(`[data-sector-dot="${id}"]`)
      .prev()
      .addClass("product-card-slideshow__dot_active");
    }
  });

  $(".product-card-slideshow .product-card-slideshow__image:first-child").addClass(
    "product-card-slideshow__image_active"
  );
  $(".product-card-slideshow .product-card-slideshow__dot:first-child").addClass(
    "product-card-slideshow__dot_active"
  );
});
