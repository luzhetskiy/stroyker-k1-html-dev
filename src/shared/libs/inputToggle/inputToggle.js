export const initInputToggle = () => {
  if ($('[data-input]').length === 0) return

  $('[data-input]').on('input', (event) => {
    const target = $(event.currentTarget)
    const value = target.attr('data-input-value') || target.val()
    const id = target.attr('data-input')

    $(`[data-input-content-container*="${id}"]`).removeClass('d-none')
    $(`[data-input-content*="${id}"]`).html(value)
  })
}