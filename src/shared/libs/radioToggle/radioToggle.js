export const initRadioToggle = () => {
  const toggles = $('[data-radio]')
  if (!toggles.length) return

  toggles.on('change', (event) => {
    const target = $(event.currentTarget)
    const id = target.attr('data-radio')
    const group = target.attr('data-radio-group')

    const contentSelector = group
      ? `[data-radio-content][data-radio-group="${group}"]`
      : '[data-radio-content]:not([data-radio-group])'

    $(contentSelector).addClass('d-none')

    $(contentSelector).each(function() {
      const $element = $(this)
      const contentValue = $element.attr('data-radio-content')

      if (contentValue === '*') {
        $element.removeClass('d-none')
        return
      }

      const contentIds = contentValue.split(',').map(item => item.trim())

      if (contentIds.includes(id)) {
        $element.removeClass('d-none')
      }
    })
  })
}
