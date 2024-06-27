$(() => {
  if ($("[data-search-select-input], [data-search-select]").length === 0) return;

  const searchSelects = Array.from($('[data-search-select]'))

  for (const select of searchSelects) {
    const selectObj = $(select)
    const id = selectObj.attr('data-search-select')
    const options = Array.from(selectObj.find('option'))
    const selectedOption = options.find(option => option.selected)

    selectObj.wrapAll(`<div data-search-select-wrapper="${id}" class="search-select" />`)
    selectObj.addClass('d-none').after(
      `
      <div data-search-select-input-container="${id}" class="search-select__input-container">
        <div data-search-select-value="${id}" contenteditable="true" class="search-select__input form-control">${selectedOption.text}</div>
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
        ${options.map((option, index) => 
          `
          <div
            class="search-select__option"
            data-search-select-option="${id}"
            data-search-select-option-value="${option.value}" 
            ${index === 0 ? `data-search-select-option-default="${id}"` : ''}
            ${option.selected ? `data-search-select-option-selected="${id}"` : ''}
          >
            ${option.text}
          </div>
          `
        ).join('')}
      </div>
      `
    )
  }

  const setValue = (optionElement) => {
    const id = optionElement.attr("data-search-select-option");
    const value = optionElement.attr("data-search-select-option-value");
    const textValue = optionElement.text().trim();
    const options = $(`[data-search-select-option="${id}"]`);
    const input = $(`[data-search-select-input="${id}"]`);
    const select = $(`[data-search-select="${id}"]`)
    options.removeAttr("data-search-select-option-selected");
    options.removeClass("d-none");
    input.val(value);
    select.val(value)
    optionElement.attr("data-search-select-option-selected", id);
    $(`[data-search-select-value="${id}"]`).text(textValue);
    $("[data-search-select-content]").addClass("d-none");
  };

  const openSelect = (id) => {
    const options = $(`[data-search-select-option="${id}"]`);
    const input = $(`[data-search-select-value="${id}"]`);
    options.removeClass("d-none");
    const allInputs = Array.from($(`[data-search-select-value]`));
    for (const input of allInputs) {
      inputObj = $(input)
      const id = inputObj.attr("data-search-select-value");
      closeSelect(id);
    }
    input.text("");
    $(`[data-search-select-content="${id}"]`).removeClass("d-none");
    $(`[data-search-select-input-container="${id}"]`).attr("data-search-select-input-container-active", id);
    return;
  };

  const closeSelect = (id) => {
    const value = $(`[data-search-select-option-selected="${id}"]`).text().trim();
    $(`[data-search-select-value="${id}"]`).text(value); 
    $(`[data-search-select-content="${id}"]`).addClass("d-none");
    $(`[data-search-select-input-container-active="${id}"]`).removeAttr('data-search-select-input-container-active')
  };

  $("[data-search-select-value]").on("input", (event) => {
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
  });

  $(document).on('click', (event) => {
    if (event.target.closest('[data-search-select-value]')) {
      const target = $(event.target.closest('[data-search-select-value]'));
      const id = target.attr("data-search-select-value");
      openSelect(id);
    }
    if (event.target.closest('[data-search-select-option]')) {
      const target = $(event.target.closest('[data-search-select-option]'));
      setValue(target);
    };
    if (!event.target.closest('[data-search-select-value]') && !event.target.closest('[data-search-select-content]')) {
      const values = Array.from($('[data-search-select-value]'))
      for (const value of values) {
        valueObj = $(value)
        const id = valueObj.attr("data-search-select-value");
        closeSelect(id);
      }
    }
  })

  $("[data-set-get-param]").on("mousedown", (event) => {
    const target = $(event.currentTarget);
    const value = target.attr("data-set-get-param-value");
    const name = target.attr("data-set-get-param");
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    history.pushState(null, null, url);
  });

  $("[data-delete-get-param]").on("mousedown", (event) => {
    const target = $(event.currentTarget);
    const names = target.attr("data-delete-get-param").split(" ");
    const url = new URL(window.location);
    for (const name of names) {
      url.searchParams.delete(name);
    }
    history.pushState(null, null, url);
  });

  $("[data-params-submit]").on("submit", (event) => {
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
  });

  $("[data-search-select-reset]").on("click", (event) => {
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
  });

  $("[data-search-select-show-reset]").on("change", (event) => {
    const allShowResetInputs = Array.from($(`[data-search-select-show-reset]`));
    for (const input of allShowResetInputs) {
      const inputObj = $(input);
      if (inputObj.val()) {
        $(`[data-search-select-reset]`).removeClass("d-none");
        return;
      }
    }
    $(`[data-search-select-reset]`).addClass("d-none");
  });
});