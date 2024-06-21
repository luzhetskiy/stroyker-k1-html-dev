$(() => {
  if ($("[data-search-select-input]").length === 0) return;

  const setValue = (optionElement) => {
    const id = optionElement.attr("data-search-select-option");
    const value = optionElement.attr("data-search-select-option-value");
    const textValue = optionElement.text().trim();
    const options = $(`[data-search-select-option="${id}"]`);
    options.removeAttr("data-search-select-option-selected");
    options.removeClass("d-none");
    optionElement.attr("data-search-select-option-selected", id);
    $(`[data-search-select-input="${id}"]`).val(value);
    $(`[data-search-select-value="${id}"]`).text(textValue);
    $("[data-search-select-content]").addClass("d-none");
  }

  const openSelect = (id) => {
    const options = $(`[data-search-select-option="${id}"]`);
    const input = $(`[data-search-select-value="${id}"]`);
    options.removeClass("d-none");
    if ($(`[data-search-select-content="${id}"]`).hasClass("d-none") || input.text()) {
      $("[data-search-select-content]").addClass("d-none");
      $(`[data-search-select-content="${id}"]`).removeClass("d-none");
      return;
    }
    $(`[data-search-select-content="${id}"]`).addClass("d-none");
  }

  const closeSelect = (id) => {
    const value = $(`[data-search-select-option-selected="${id}"]`).text().trim();
    $(`[data-search-select-value="${id}"]`).text(value);
  }

  const paramsStr = window.location.search.replace( '?', '')
  const params = paramsStr.split('&')

  for (const param of params) {
    const paramArray = param.split('=')
    const paramSetterElement = $(`[data-set-get-param="${paramArray[0]}"][data-set-get-param-value="${paramArray[1]}"]`)
    if (paramSetterElement) {
      setValue(paramSetterElement)
    }
  }

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
      if (optionValue.indexOf(value)) {
        currentOption.addClass("d-none");
        continue;
      }
      currentOption.removeClass("d-none");
    }
  });

  $("[data-search-select-value]").on("focusout", (event) => {
    const target = $(event.currentTarget);
    const id = target.attr("data-search-select-value");
    closeSelect(id)
  });

  $("body").on("click", (event) => {
    if (event.target.closest("[data-search-select-input-container]")) {
      const target = $(event.target.closest("[data-search-select-input-container]"));
      const id = target.attr("data-search-select-input-container");
      openSelect(id)
    }
    if (event.target.closest("[data-search-select-option]")) {
      const target = $(event.target.closest("[data-search-select-option]"));
      setValue(target)
    }
    if (
      !event.target.closest("[data-search-select-content]") &&
      !event.target.closest("[data-search-select-input-container]")
    ) {
      $("[data-search-select-content]").addClass("d-none");
    }
  });

  $('[data-set-get-param]').on('click', (event) => {
    const target = $(event.currentTarget)
    const value = target.attr('data-set-get-param-value')
    const name = target.attr('data-set-get-param')
    const url = new URL(window.location); 
    url.searchParams.set(name, value); 
    history.pushState(null, null, url);  
  })

  $('[data-delete-get-param]').on('click', (event) => {
    const target = $(event.currentTarget)
    const name = target.attr('data-delete-get-param')
    const url = new URL(window.location); 
    url.searchParams.delete(name);
    history.pushState(null, null, url);  
  })

  $('[data-params-submit]').on('submit', (event) => {
    event.preventDefault()
    const target = $(event.currentTarget)
    const category = target.attr('data-params-submit')
    const params = target.serializeArray()
    const url = new URL(`/catalog/${category}`, window.location); 
    for (const param of params) {
      if (!param.value) continue 
      url.searchParams.set(param.name, param.value)
    }
    window.location.href = url
  })

});
