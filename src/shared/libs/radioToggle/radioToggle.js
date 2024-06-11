$(() => {
  $('[data-radio]').on('change', (event) => {
    const target = $(event.currentTarget)
    const id = target.attr('data-radio')
    $('[data-radio-content]').addClass('d-none')
    $(`[data-radio-content="${id}"]`).removeClass('d-none')
    $(`[data-radio-content="*"]`).removeClass('d-none')
  })
})