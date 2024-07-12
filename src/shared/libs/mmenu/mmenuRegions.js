export const initMmenuRegions = () => {
  if (!$("[data-mmenu-regions]").length) return;

  $(document).on("click", (event) => {
    const target = event.target;
    if (target.closest("[data-mmenu-regions-ignore]")) return;
    if (target.closest("[data-mmenu-regions-link]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-regions-search]").removeClass("d-none");
      return;
    }
    if (target.closest(".mm-navbar")) {
      $("[data-mmenu-search]").removeClass("d-none");
      $("[data-mmenu-regions-search]").addClass("d-none");
      return;
    }
    if (target.closest("[data-mmenu-regions-page]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-regions-search]").removeClass("d-none");
      return;
    }
  });

  $("[data-mmenu-regions-search-input]").on("input", (event) => {
    const value = $(event.currentTarget).val().toLocaleLowerCase().trim();

    if (value.length === 0) {
      $('[data-clear-input-button="mmenu-regions-search"]').addClass("opacity-0");
      return;
    }

    $('[data-clear-input-button="mmenu-regions-search"]').removeClass("opacity-0");

    for (const item of Array.from($("[data-mmenu-regions-item]"))) {
      const itemObj = $(item);
      const text = itemObj.text().toLocaleLowerCase().trim();
      if (text.indexOf(value) !== -1) {
        itemObj.removeClass("d-none");
        continue;
      }
      itemObj.addClass("d-none");
    }
  });
};
