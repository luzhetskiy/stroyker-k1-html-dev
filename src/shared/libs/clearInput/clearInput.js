export const initClearInput = () => {
  const clearInputs = $("[data-clear-input-button]");
  if (!clearInputs.length) return;

  clearInputs.on("click", (event) => {
    const id = $(event.currentTarget).attr("data-clear-input-button");
    const input = $(`[data-clear-input="${id}"]`);
    input.val("");
    input.trigger("input").trigger("change");
  });
};
