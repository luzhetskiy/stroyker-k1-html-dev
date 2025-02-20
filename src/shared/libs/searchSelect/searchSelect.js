import {
  selectInputHandler,
  documentClicksDelegate,
  paramsSubmitHandler,
  resetClickHandler,
  showResetChangeHandler,
} from "./searchSelect.handlers";

export const initSearchSelects = () => {
  if (!$("[data-search-select-input], [data-search-select]").length) return;

  if ($("[data-search-select-input-container]").length !== 0) {
    $("[data-search-select-value]").off("input", selectInputHandler);
    $(document).off("click", documentClicksDelegate);
    $("[data-params-submit]").off("submit", paramsSubmitHandler);
    $("[data-search-select-reset]").off("click", resetClickHandler);
    $("[data-search-select-show-reset]").off("change", showResetChangeHandler);
  }

  const searchSelects = Array.from($("[data-search-select]"));

  for (const select of searchSelects) {
    const selectObj = $(select);
    const id = selectObj.attr("data-search-select");
    const options = Array.from(selectObj.find("option"));
    const selectedOption = options.find((option) => option.selected);
    const inert = selectObj.attr('data-inert')

    selectObj.wrapAll(`<div data-search-select-wrapper="${id}" class="search-select" />`);
    selectObj.addClass("d-none").after(
      `
      <div data-search-select-input-container="${id}" class="search-select__input-container">
        <div ${inert !== undefined ? 'inert' : ''} data-search-select-value="${id}" tabindex="-1" contenteditable class="search-select__input form-control">${
        selectedOption.text
      }</div>
        <div class="search-select__icon">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72606 -1.19209e-07L11.1403 1.41421L5.57036 6.98453L4.15614 5.57031L9.72606 -1.19209e-07Z"
              fill="currentColor"
            />
            <path
              d="M0 1.41421L1.41421 1.19209e-07L6.98434 5.57047L5.57036 6.98453L0 1.41421Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div class="search-select__content d-none" data-search-select-content="${id}">
        ${options
        .map(
          (option, index) =>
            `
          <div
            class="search-select__option"
            data-search-select-option="${id}"
            data-search-select-option-value="${option.value}" 
            ${index === 0 ? `data-search-select-option-default="${id}"` : ""}
            ${option.selected ? `data-search-select-option-selected="${id}"` : ""}
          >
            ${option.text}
          </div>
          `
        )
        .join("")}
      </div>
      `
    );
  }

  $("[data-search-select-value]").on("input", selectInputHandler);
  $(document).on("click", documentClicksDelegate);
  $("[data-params-submit]").on("submit", paramsSubmitHandler);
  $("[data-search-select-reset]").on("click", resetClickHandler);
  $("[data-search-select-show-reset]").on("change", showResetChangeHandler);
};
