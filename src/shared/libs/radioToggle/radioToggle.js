export const initRadioToggle = () => {
  const toggles = $('[data-radio]')
  if (!toggles.length) return

  toggles.on('change', (event) => {
    const target = $(event.currentTarget)
    const id = target.attr('data-radio')
    $('[data-radio-content]').addClass('d-none')
    $(`[data-radio-content="${id}"]`).removeClass('d-none')
    $(`[data-radio-content="*"]`).removeClass('d-none')
  })
}
