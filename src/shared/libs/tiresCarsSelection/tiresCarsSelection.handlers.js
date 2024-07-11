import { getApiQuery } from "@src/shared/libs/api/api";

export const renderNextOptions = (selectAttribute, apiPath, value) => {
  const select = $(`[${selectAttribute}]`);
  const selectId = select.attr("data-search-select-input");
  const input = $(`[data-search-select-value="${selectId}"]`);
  const optionsContainer = $(`[data-search-select-content="${selectId}"]`);
  const defaultValue = select.attr("data-select-default");

  getApiQuery(apiPath + value)
  .then((response) => response.json())
  .then((responseItems) => {
    input.text(defaultValue);
    optionsContainer.html(`
      <div class="search-select__option" data-search-select-option-selected="${selectId}" data-search-select-option-value="" data-search-select-option-default="${selectId}" data-search-select-option="${selectId}">
        ${defaultValue}
      </div>
      ${responseItems
      .map(
        (item) => `
        <div class="search-select__option" data-search-select-option-value="${item.id}" data-search-select-option="${selectId}">
          ${item.name ? item.name : `${item.begin} - ${item.end}`}
        </div>
      `
      )
      .join("")}
    `);
    input.removeAttr("inert");
  })
  .catch((error) => {
    input.removeAttr("inert");
    console.log(error);
  });
};

const disableSelect = (selectAttribute) => {
  const select = $(`[${selectAttribute}]`);
  const selectId = select.attr("data-search-select-input");
  const input = $(`[data-search-select-value="${selectId}"]`);
  const defaultValue = select.attr("data-select-default");
  const content = $(`[data-search-select-content="${selectId}"]`);
  input.text(defaultValue);
  input.attr("inert", "");
  select.val("");
  content.html(`
    <div class="search-select__option" data-search-select-option-selected="${selectId}" data-search-select-option-value="" data-search-select-option-default="${selectId}" data-search-select-option="${selectId}">
      ${defaultValue}
    </div>
  `);
};

export const carsSelectionChangeHandler = (event) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    disableSelect("data-models-select");
    disableSelect("data-configurations-select");
    disableSelect("data-modifications-select");
    return;
  }

  renderNextOptions("data-models-select", `/cars/models/?brand_id=`, value);
  disableSelect("data-configurations-select");
  disableSelect("data-modifications-select");
};

export const modelsSelectionChangeHandler = (event) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    disableSelect("data-configurations-select");
    disableSelect("data-modifications-select");
    return;
  }

  renderNextOptions("data-configurations-select", `/cars/configurations/?model_id=`, value);
  disableSelect("data-modifications-select");
};

export const configurationsSelectionChangeHandler = (event) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    disableSelect("data-modifications-select");
    return;
  }

  renderNextOptions("data-modifications-select", `/cars/modifications/?configuration_id=`, value);
};

export const modificationsSelectionChangeHandler = (event) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    $("[data-tires-submit]").attr("disabled", "");
    return;
  }
  $("[data-tires-submit]").removeAttr("disabled");
};

export const submitHandler = (event) => {
  event.preventDefault();
  const target = $(event.currentTarget);
  const values = target.serializeArray();
  const configuration = values.find((value) => value.name === "configurations");
  window.location.href = `${window.location.origin}/tires/search/?configuration_id=${configuration.value}`;
};
