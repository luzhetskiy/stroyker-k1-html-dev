$(() => {
  if ($('[data-select-container]').length === 0) return

  $('body').on('click', (event) => {
    if (event.target.closest('[data-select-value-container]')) {
      const target = $(event.target.closest('[data-select-value-container]'))
      const parent = target.closest('[data-select-container]')
      const content = parent.find(`[data-select-content]`)
      if (content.hasClass('d-none')) {
        $('[data-select-content]').addClass('d-none')
        content.removeClass('d-none')
        return
      } 
      $('[data-select-content]').addClass('d-none')
    }
    if (!event.target.closest('[data-select-content]') && !event.target.closest('[data-select-value-container]')) {
      $('[data-select-content]').addClass('d-none')
    }
    if (event.target.closest('[data-select-option-value]')) {
      const target = $(event.target.closest('[data-select-option-value]'))
      const parent = target.closest('[data-select-container]')
      const value = target.attr('data-select-option-value')
      const textValue = target.text()
      const input = parent.find(`[data-select]`)
      if (input.attr('data-input-value') !== undefined) input.attr('data-input-value', textValue)
      input.val(value)
      input.trigger('input')
      parent.find(`[data-select-value]`).text(textValue)
      parent.find('[data-select-content]').addClass('d-none')
    }
  })
})