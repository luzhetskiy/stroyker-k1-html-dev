export const setValue = (optionElement) => {
  const id = optionElement.attr("data-search-select-option");
  const value = optionElement.attr("data-search-select-option-value");
  const textValue = optionElement.text().trim();
  const options = $(`[data-search-select-option="${id}"]`);
  const input = $(`[data-search-select-input="${id}"]`);
  const select = $(`[data-search-select="${id}"]`);
  options.removeAttr("data-search-select-option-selected");
  options.removeClass("d-none");
  input.val(value);
  select.val(value);
  select.trigger('change')
  optionElement.attr("data-search-select-option-selected", id);
  $(`[data-search-select-value="${id}"]`).text(textValue);
  $("[data-search-select-content]").addClass("d-none");
};

export const closeSelect = (id) => {
  const value = $(`[data-search-select-option-selected="${id}"]`).text().trim();
  const input = $(`[data-search-select-value="${id}"]`)
  input.removeAttr('contenteditable')
  input.trigger('blue')
  input.text(value);
  $(`[data-search-select-content="${id}"]`).addClass("d-none");
  $(`[data-search-select-input-container-active="${id}"]`).removeAttr("data-search-select-input-container-active");
};

export const openSelect = (id) => {
  const options = $(`[data-search-select-option="${id}"]`);
  const input = $(`[data-search-select-value="${id}"]`);
  options.removeClass("d-none");
  const allInputs = Array.from($(`[data-search-select-value]`));
  for (const inputElement of allInputs) {
    const inputObj = $(inputElement);
    const id = inputObj.attr("data-search-select-value");
    closeSelect(id);
  }
  input.text("");
  input.attr('contenteditable', 'true')
  input.trigger('focus')
  $(`[data-search-select-content="${id}"]`).removeClass("d-none");
  $(`[data-search-select-input-container="${id}"]`).attr("data-search-select-input-container-active", id);
  return;
};

