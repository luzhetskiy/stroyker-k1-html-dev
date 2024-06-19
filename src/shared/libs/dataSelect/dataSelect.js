$(() => {
  if ($('[data-select]').length === 0) return

  $('body').on('click', (event) => {
    if (event.target.closest('[data-select-value-container]')) {
      const target = $(event.target.closest('[data-select-value-container]'))
      const id = target.attr('data-select-value-container')
      if ($(`[data-select-content="${id}"]`).hasClass('d-none')) {
        $('[data-select-content]').addClass('d-none')
        $(`[data-select-content="${id}"]`).removeClass('d-none')
        return
      }
      $(`[data-select-content="${id}"]`).addClass('d-none')
    }
    if (!event.target.closest('[data-select-content]') && !event.target.closest('[data-select-value-container]')) {
      $('[data-select-content]').addClass('d-none')
    }
    if (event.target.closest('[data-select-option]')) {
      const target = $(event.target.closest('[data-select-option]'))
      const id = target.attr('data-select-option')
      const value = target.attr('data-select-option-value')
      const textValue = target.text()
      $(`[data-select-option="${id}"]`).removeAttr('data-select-option-selected')
      target.attr('data-select-option-selected', '')
      $(`[data-select="${id}"]`).val(value)
      $(`[data-select-value="${id}"]`).text(textValue)
      $('[data-select-content]').addClass('d-none')
    }
  })
})