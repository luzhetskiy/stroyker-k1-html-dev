import {setValue, openSelect, closeSelect} from './searchSelect.utils'

export const selectInputHandler = (event) => {
  const target = $(event.currentTarget);
  const id = target.attr("data-search-select-value");
  const value = target.text().trim().toLowerCase();
  const options = $(`[data-search-select-option="${id}"]`);

  if (!value) {
    options.removeClass("d-none");
    return;
  }

  for (const option of options) {
    const currentOption = $(option);
    const optionValue = currentOption.text().trim().toLowerCase();
    if (optionValue.indexOf(value) === -1) {
      currentOption.addClass("d-none");
      continue;
    }
    currentOption.removeClass("d-none");
  }
}

export const documentClicksDelegate = (event) => {
  if (event.target.closest("[data-search-select-value]")) {
    const target = $(event.target.closest("[data-search-select-value]"));
    const id = target.attr("data-search-select-value");
    openSelect(id);
  }
  if (event.target.closest("[data-search-select-option]")) {
    const target = $(event.target.closest("[data-search-select-option]"));
    setValue(target);
  }
  if (!event.target.closest("[data-search-select-value]") && !event.target.closest("[data-search-select-content]")) {
    const values = Array.from($("[data-search-select-value]"));
    for (const value of values) {
      const valueObj = $(value);
      const id = valueObj.attr("data-search-select-value");
      closeSelect(id);
    }
  }
}

export const paramsSubmitHandler = (event) => {
  event.preventDefault();
  const target = $(event.currentTarget);
  const category = target.attr("data-params-submit");
  const params = target.serializeArray();
  const url = new URL(`/catalog/${category}`, window.location);
  for (const param of params) {
    if (!param.value) continue;
    const values = param.value.split(" ");
    const names = param.name.split(" ");
    for (let index = 0; index < names.length; index++) {
      url.searchParams.set(names[index], values[index]);
    }
  }
  window.location.href = url;
}

export const resetClickHandler = (event) => {
  event.preventDefault();
  const target = $(event.currentTarget);
  const ids = target.attr("data-search-select-reset").split(" ");
  const resettableInputs = [];

  for (const id of ids) {
    resettableInputs.push($(`[data-search-select-show-reset="${id}"]`));
  }

  for (const input of resettableInputs) {
    const inputObj = $(input);
    const selectId = inputObj.attr("data-search-select-input");
    const option = $(`[data-search-select-option-default="${selectId}"]`);
    setValue(option);
  }
  target.addClass("d-none");
}

export const showResetChangeHandler = (event) => {
  const allShowResetInputs = Array.from($(`[data-search-select-show-reset]`));
  for (const input of allShowResetInputs) {
    const inputObj = $(input);
    if (inputObj.val()) {
      $(`[data-search-select-reset]`).removeClass("d-none");
      return;
    }
  }
  $(`[data-search-select-reset]`).addClass("d-none");
}