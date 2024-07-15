export const initSearchInput = () => {
  if (!$("[data-search-input]").length) return;

  $("[data-search-input]").on("input", (event) => {
    const target = $(event.currentTarget);
    const value = target.val().toLocaleLowerCase().trim();
    const items = Array.from($("[data-search-item]"));

    if (value.length === 0) {
      $("[data-search-result-list]").addClass("d-none");
      $("[data-search-list]").removeClass("d-none");
      $('[data-clear-input-button="city-search"]').addClass('opacity-0')
      $("[data-search-result-list]").html("");
      $('[data-search-icon]').removeClass('opacity-0')
      target.addClass('ps-40')
      return;
    }

    $("[data-search-result-list]").html("");
    $("[data-search-list]").addClass("d-none");
    $("[data-search-result-list]").removeClass("d-none");
    $('[data-clear-input-button="city-search"]').removeClass('opacity-0')
    $('[data-search-icon]').addClass('opacity-0')
    target.removeClass('ps-40')

    for (let index = 0; index < items.length; index++) {
      if (index >= 25) break;
      const itemObj = $(items[index]);
      const text = itemObj.text().toLocaleLowerCase().trim();
      if (text.indexOf(value) === -1) {
        continue;
      }
      const newItem = itemObj.clone();
      $("[data-search-result-list]").append(newItem);
    }
  });
};

