$(() => {
  if ($('[data-select]').length === 0) return

  $('body').on('click', (event) => {
    if (event.target.closest('[data-select-value-container]')) {
      const target = $(event.target.closest('[data-select-value-container]'))
      const id = target.attr('data-select-value-container')
      $(`[data-select-content="${id}"]`).removeClass('d-none')
    }
    if (!event.target.closest('[data-select-content]') && !event.target.closest('[data-select-value-container]')) {
      $('[data-select-content]').addClass('d-none')
    }
    if (event.target.closest('[data-select-option]')) {
      const target = $(event.target.closest('[data-select-option]'))
      const id = target.attr('data-select-option')
      const value = target.attr('data-select-option-value')
      const textValue = target.text()
      $(`[data-select="${id}"]`).val(value)
      $(`[data-select-value="${id}"]`).text(textValue)
      $('[data-select-content]').addClass('d-none')
    }
  })
})