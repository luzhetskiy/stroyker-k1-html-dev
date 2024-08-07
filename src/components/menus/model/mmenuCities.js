export const initMmenuCities = () => {
  if (!$("[data-mmenu-cities]").length) return;

  $(document).on("click", (event) => {
    const target = event.target;
    if (target.closest("[data-mmenu-cities-ignore]")) return;
    if (target.closest("[data-mmenu-cities-link]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-cities-search]").removeClass("d-none");
      return;
    }
    if (target.closest(".mm-navbar")) {
      $("[data-mmenu-search]").removeClass("d-none");
      $("[data-mmenu-cities-search]").addClass("d-none");
      return;
    }
    if (target.closest("[data-mmenu-cities-page]")) {
      $("[data-mmenu-search]").addClass("d-none");
      $("[data-mmenu-cities-search]").removeClass("d-none");
      return;
    }
  });

  $("[data-mmenu-cities-search-input]").on("input", (event) => {
    const target = $(event.currentTarget);
    const value = target.val().toLocaleLowerCase().trim();

    if (value.length === 0) {
      $('[data-clear-input-button="mmenu-search-cities"]').addClass("opacity-0");
      $("[data-mmenu-cities-search-icon]").removeClass("opacity-0");
      target.addClass("ps-40");
      for (const item of Array.from($("[data-mmenu-cities-item]"))) {
        const itemObj = $(item);
        const text = itemObj.text().trim();
        const newText = text.replace("<span>", "").replace("<span/>", "");
        itemObj.find(".mm-listitem__text").html(newText);
        itemObj.removeClass("d-none");
      }
      return;
    }

    $('[data-clear-input-button="mmenu-search-cities"]').removeClass("opacity-0");
    $("[data-mmenu-cities-search-icon]").addClass("opacity-0");
    target.removeClass("ps-40");

    for (const item of Array.from($("[data-mmenu-cities-item]"))) {
      const itemObj = $(item);
      const text = itemObj.text().trim();
      const index = text.toLocaleLowerCase().indexOf(value);
      if (index === -1) {
        itemObj.addClass("d-none");
        continue;
      }
      const subStr = text.slice(index, value.length);
      const newText = text.replace(subStr, `<span>${subStr}</span>`);
      itemObj.find(".mm-listitem__text").html(newText);
      itemObj.removeClass("d-none");
    }
  });
};
