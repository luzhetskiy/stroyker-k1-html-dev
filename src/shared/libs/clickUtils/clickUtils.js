export const initClickUtils = () => {
  const clearInputs = $("[data-clear-input-button]");
  if (!clearInputs.length) return;

  $(document).on('click', (event) => {
    if (event.target.closest('[data-clear-input-button]')) {
      const id = $(event.target.closest('[data-clear-input-button]')).attr("data-clear-input-button");
      const input = $(`[data-clear-input="${id}"]`);
      input.val("");
      input.trigger("input").trigger("change");
    }
  })
};
