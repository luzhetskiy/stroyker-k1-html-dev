$(() => {
  if (!$('[data-required-field]').length) return

  $('[data-required-field]').on('input', (event) => {
    const target = $(event.currentTarget)
    id = target.attr('data-required-field')
    const button = $(`[data-wait-requred*="${id}"]`)
    if (button.length === 0) return
    const buttonFields = button.attr('data-wait-requred')
    const newButtonFields = buttonFields.replace(id, '').trim()
    button.attr('data-wait-requred', newButtonFields)
    if (newButtonFields) return
    button.removeAttr('disabled')
  })

  // const handler = (event) => {
  //   const target = $(event.currentTarget)
  //   const fields = target.find('[required]')

  //   for (const field of fields) {
  //     console.log(field, $(field));
  //     console.log($(field).val());
  //     if (!$(field).val()) {
  //       return
  //     }
  //   }
  //   $('[data-wait-requred-button]').removeAttr('disabled')
  // }

  // $('[data-wait-requred-form]').on('change', handler).on('input', handler)


})