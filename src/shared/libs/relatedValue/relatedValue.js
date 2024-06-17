$(() => {
  $('[data-related-value]').on('change', (event) => {
    const target = $(event.currentTarget)
    const value = target.val()
    const id = target.attr('data-related-value')
    $(`[data-related-value="${id}"]`).val(value)
  })
})