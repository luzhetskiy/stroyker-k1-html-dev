export const clearInputClickHandler = (event) => {
  const id = $(event.currentTarget).attr("data-clear-input-button");
  $(`[data-clear-input="${id}"]`).val("");
}