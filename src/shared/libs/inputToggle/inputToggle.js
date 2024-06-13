$(() => {
  if ($('[data-input]').length === 0) return

  $('[data-input]').on('input', (event) => {
    const target = $(event.currentTarget)
    const value = target.val()
    const id = target.attr('data-input')
    const placeholder = $(target.parent()).find(`[data-input-placeholder="${id}"]`)
    const placeholderValue = placeholder.text()

    $(`[data-input-content-container*="${id}"]`).removeClass('d-none')
    $(`[data-input-content*="${id}"]`).text(value)
    $(`[data-input-content-placeholder*="${id}"]`).text(placeholderValue)
  })
})