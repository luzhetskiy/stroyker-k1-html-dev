export const initCheckBoxToggle = () => {
  $("[data-check-box-toggle]").on("change", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-check-box-toggle");
    const checked = event.currentTarget.checked;
    const contentOn = $(`[data-check-box-toggle-content-on="${id}"]`);
    const contentOff = $(`[data-check-box-toggle-content-off="${id}"]`);
    if (checked) {
      contentOn.removeClass("d-none");
      contentOff.addClass("d-none");
      return;
    }
    contentOn.addClass("d-none");
    contentOff.removeClass("d-none");
  });
};
