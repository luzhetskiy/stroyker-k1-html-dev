$(() => {
  if ($("[data-search-select-input]").length === 0) return;

  const setValue = (optionElement) => {
    const id = optionElement.attr("data-search-select-option");
    const value = optionElement.attr("data-search-select-option-value");
    const textValue = optionElement.text().trim();
    const options = $(`[data-search-select-option="${id}"]`);
    const input = $(`[data-search-select-input="${id}"]`)
    options.removeAttr("data-search-select-option-selected");
    options.removeClass("d-none");
    input.val(value);
    input.trigger('change')
    optionElement.attr("data-search-select-option-selected", id);
    $(`[data-search-select-value="${id}"]`).text(textValue);
    $("[data-search-select-content]").addClass("d-none");
  }

  const openSelect = (id) => {
    const options = $(`[data-search-select-option="${id}"]`);
    const input = $(`[data-search-select-value="${id}"]`);
    options.removeClass("d-none");
    if ($(`[data-search-select-content="${id}"]`).hasClass("d-none") || input.text()) {
      $("[data-search-select-content]").addClass("d-none");
      $('[data-search-select-input-container-active]').removeAttr('data-search-select-input-container-active')
      $(`[data-search-select-content="${id}"]`).removeClass("d-none");
      $(`[data-search-select-input-container="${id}"]`).attr('data-search-select-input-container-active', id)
      return;
    }
    $(`[data-search-select-content="${id}"]`).addClass("d-none");
    $(`[data-search-select-input-container-active]`).removeAttr('data-search-select-input-container-active')
  }

  const closeSelect = (id) => {
    const value = $(`[data-search-select-option-selected="${id}"]`).text().trim();
    $(`[data-search-select-value="${id}"]`).text(value);
  }

  const paramsStr = window.location.search.replace('?', '')
  const params = paramsStr.split('&')

  for (const param of params) {
    const paramArray = param.split('=')
    const paramSetterElement = $(`[data-set-get-param="${paramArray[0]}"][data-set-get-param-value="${paramArray[1]}"]`)
    if (paramSetterElement) {
      setValue(paramSetterElement)
      const id = $(paramSetterElement).attr('data-search-select-option')
      $(`[data-search-select-reset*="${id}"]`).removeClass('d-none')
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
      $('[data-search-select-input-container-active]').removeAttr('data-search-select-input-container-active')
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
    const names = target.attr('data-delete-get-param').split(' ')
    const url = new URL(window.location); 
    for (const name of names) {
      url.searchParams.delete(name);
    }
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
      const values = param.value.split(' ')
      const names = param.name.split(' ')
      for (let index = 0; index < names.length; index++) {
        url.searchParams.set(names[index], values[index])
      }
    }
    window.location.href = url
  })

  $('[data-search-select-reset]').on('click', (event) => {
    event.preventDefault()
    const target = $(event.currentTarget)
    const ids = target.attr('data-search-select-reset')
    const resettableInputs = []

    for (const id of ids) {
      resettableInputs.push($(`[data-search-select-show-reset="${id}"]`))
    }

    for (const input of resettableInputs) {
      const inputObj = $(input)
      const selectId = inputObj.attr('data-search-select-input')
      const option = $(`[data-search-select-option-default="${selectId}"]`)
      setValue(option)
    }
    target.addClass('d-none')
  })

  $('[data-search-select-show-reset]').on('change', (event) => {
    const id = $(event.currentTarget).attr('data-search-select-show-reset')
    const allShowResetInputs = $(`[data-search-select-show-reset*="${id}"]`)
    for (const input of allShowResetInputs) {
      const inputObj = $(input)
      if (inputObj.val()) {
        $(`[data-search-select-reset*="${id}"]`).removeClass('d-none')
        return
      }
    }
    $(`[data-search-select-reset*="${id}"]`).addClass('d-none')
  })

});
