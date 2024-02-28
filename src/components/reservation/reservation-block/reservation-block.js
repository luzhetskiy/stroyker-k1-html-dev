$(() => {
  const selectedHours = []
  const tooltipContent = $('[data-reservation-tooltip]')

  const reservationButtonClickHandler = (event) => {
    const target = $(event.currentTarget)
    const time = target.attr('data-time')
    const title = target.attr('data-reservation-title')
    const value = `Хочу забронировать ${title} на время на время ${time}`

    if ($('.custom-form-instance').length) {
      const form = $('.custom-form-instance')
      if (!form.length) return
      form.find('textarea').val(value)
      $('html, body').animate({
          scrollTop: form.offset().top
      }, 1000);
      return
    }

    const form = $('#feedback-message-request-form')
    if (!form.length) return
    form.find('textarea').val(value)
    $('html, body').animate({
        scrollTop: form.offset().top
    }, 1000);
  }

  
  tippy('[data-reservation-tooltip]', {
    content: tooltipContent.html(),
    allowHTML: true,
    placement: 'top-start',
    theme: 'light',
    interactive: true,
    onShown(instance) {
      $('[data-reservation-button]').on('click', reservationButtonClickHandler)
    },
    onHide(instance) {
      $('[data-reservation-button]').off('click', reservationButtonClickHandler)
    },
  });

})

