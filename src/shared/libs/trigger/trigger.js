export const initTrigger = () => {
  $("[data-click-trigger]").on("click", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-click-trigger");
    console.log($(`[data-click-target="${id}"]`), id);
    $(`[data-click-target="${id}"]`).trigger("click");
  });

  $("[data-submit-trigger]").on("click", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-submit-trigger");
    $(`[data-submit-target="${id}"]`).trigger("submit");
  });
};
