import { getApiQuery } from "@src/shared/libs/api/api";

const BASE_API_URL = "https://corsproxy.io/?https://shintorg.nastroyker.ru";

export const renderNextOptions = ($select, apiPath, value) => {
  if (!($select instanceof jQuery)) {
    $select = $(`[data-search-select-input="${$select}"]`);
  }

  const fullApiPath = `${BASE_API_URL}${apiPath}${value}`;

  const selectId = $select.attr("data-search-select-input");
  const input = $(`[data-search-select-value="${selectId}"]`);
  const optionsContainer = $(`[data-search-select-content="${selectId}"]`);
  const defaultValue = $select.attr("data-select-default");

  getApiQuery(apiPath + value)
    .then((response) => response.json())
    .then((responseItems) => {
      input.text(defaultValue);
      optionsContainer.html(`
        <div class="search-select__option" 
          data-search-select-option-selected="${selectId}" 
          data-search-select-option-value="" 
          data-search-select-option-default="${selectId}" 
          data-search-select-option="${selectId}">
          ${defaultValue}
        </div>
        ${responseItems
          .map(
            (item) => {
              if (item.year) {
                // Если это данные по годам
                return `
                  <div class="search-select__option" 
                    data-search-select-option-value="${item.year}" 
                    data-search-select-option="${selectId}">
                    ${item.year}
                  </div>
                `;
              } else if (item.id && item.name) {
                // Если это данные с id и name
                return `
                  <div class="search-select__option" 
                    data-search-select-option-value="${item.id}" 
                    data-search-select-option="${selectId}">
                    ${item.name}
                  </div>
                `;
              }
            }
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

const disableSelect = (selectAttribute, $form) => {
  const select = $form.find(`[${selectAttribute}]`);
  const selectId = select.attr("data-search-select-input");
  const input = $form.find(`[data-search-select-value="${selectId}"]`);
  const defaultValue = select.attr("data-select-default");
  const content = $form.find(`[data-search-select-content="${selectId}"]`);

  input.text(defaultValue);
  input.attr("inert", "");
  select.val("");
  content.html(`
    <div class="search-select__option" data-search-select-option-selected="${selectId}" data-search-select-option-value="" data-search-select-option-default="${selectId}" data-search-select-option="${selectId}">
      ${defaultValue}
    </div>
  `);
};

export const carsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    disableSelect("data-models-select", $form);
    disableSelect("data-configurations-select", $form);
    disableSelect("data-modifications-select", $form);
    return;
  }

  $form.find("[data-models-select]").each(function () {
    renderNextOptions($(this), `/cars/models/?brand_id=`, value);
  });
  disableSelect("data-configurations-select", $form);
  disableSelect("data-modifications-select", $form);
};

export const modelsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();

  if (!value) {
    disableSelect("data-configurations-select", $form);
    disableSelect("data-modifications-select", $form);
    return;
  }

  $form.find("[data-configurations-select]").each(function () {
    renderNextOptions($(this), `/cars/configurations/?model_id=`, value);
  });
  disableSelect("data-modifications-select", $form);
};

export const configurationsSelectionChangeHandler = (event, $form) => {
  const target = $(event.currentTarget);
  const value = target.val();
  console.log(target);

  if (!value) {
    disableSelect("data-modifications-select", $form);
    return;
  }

  $form.find("[data-modifications-select]").each(function () {
    renderNextOptions($(this), `/cars/modifications/?model_id=`, value);
  });
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