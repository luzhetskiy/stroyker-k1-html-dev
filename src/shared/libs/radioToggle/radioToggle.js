const CART_STORAGE_KEY = 'cart_form_state'

const saveCartFormState = () => {
  const formState = {
    deliveryType: $('input[name="delivery_type"]:checked').attr('id') || null,
    deliveryRadio: $('input[name="delivery_type"]:checked').attr('data-radio') || null,
    paymentType: $('input[name="payment"]:checked').attr('id') || null,
    paymentRadio: $('input[name="payment"]:checked').attr('data-radio') || null,
    deliveryCost: $('input[name="delivery_cost"]:checked').attr('id') || null,
    address: $('input[name="address"]').val() || '',
    stock: $('input[data-select="stock"]').val() || '0',
    car: $('input[data-select="car"]').val() || '0',
    paymentEmail: $('input[name="payment_email"]').val() || '',
    companyName: $('input[name="company_name"]').val() || '',
    inn: $('input[name="inn"]').val() || '',
    kpp: $('input[name="kpp"]').val() || '',
    legalAddress: $('input[name="legal_address"]').val() || ''
  }
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(formState))
  } catch (e) {
    console.error('Ошибка при сохранении состояния формы:', e)
  }
}

const restoreCartFormState = () => {
  try {
    const savedState = localStorage.getItem(CART_STORAGE_KEY)
    if (!savedState) return
    
    const formState = JSON.parse(savedState)
    
    if (formState.deliveryType) {
      const $deliveryRadio = $(`#${formState.deliveryType}`)
      if ($deliveryRadio.length) {
        $deliveryRadio.prop('checked', true).trigger('change')
      }
    }
    
    setTimeout(() => {
      if (formState.deliveryCost) {
        $(`#${formState.deliveryCost}`).prop('checked', true)
      }
      
      if (formState.address) {
        $('input[name="address"]').val(formState.address).trigger('input')
      }
      
      if (formState.stock && formState.stock !== '0') {
        const $stockInput = $('input[data-select="stock"]')
        $stockInput.val(formState.stock)
        const $stockOption = $(`[data-select-option="stock"][data-select-option-value="${formState.stock}"]`)
        if ($stockOption.length) {
          $('[data-select-value="stock"]').text($stockOption.text())
        }
      }
      
      if (formState.car && formState.car !== '0') {
        const $carInput = $('input[data-select="car"]')
        $carInput.val(formState.car)
        const $carOption = $(`[data-select-option="car"][data-select-option-value="${formState.car}"]`)
        if ($carOption.length) {
          $('[data-select-value="car"]').text($carOption.text())
        }
      }
      
      if (formState.paymentType) {
        const $paymentRadio = $(`#${formState.paymentType}`)
        if ($paymentRadio.length) {
          $paymentRadio.prop('checked', true).trigger('change')
        }
      }
      
      setTimeout(() => {
        if (formState.paymentEmail) {
          $('input[name="payment_email"]').val(formState.paymentEmail)
        }
        
        if (formState.companyName) {
          $('input[name="company_name"]').val(formState.companyName)
        }
        
        if (formState.inn) {
          $('input[name="inn"]').val(formState.inn)
        }
        
        if (formState.kpp) {
          $('input[name="kpp"]').val(formState.kpp)
        }
        
        if (formState.legalAddress) {
          $('input[name="legal_address"]').val(formState.legalAddress)
        }
      }, 100)
    }, 100)
  } catch (e) {
    console.error('Ошибка при восстановлении состояния формы:', e)
  }
}

const clearCartFormState = () => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY)
  } catch (e) {
    console.error('Ошибка при очистке состояния формы:', e)
  }
}

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
    
    if (target.closest('#cart-form').length) {
      saveCartFormState()
    }
  })
  
  if ($('#cart-form').length) {
    setTimeout(restoreCartFormState, 200)
    
    $('input[name="delivery_cost"]').on('change', saveCartFormState)
    $('input[name="address"]').on('input', saveCartFormState)
    $('input[data-select="stock"]').on('change', saveCartFormState)
    $('input[data-select="car"]').on('change', saveCartFormState)
    $('input[name="payment_email"]').on('input', saveCartFormState)
    $('input[name="company_name"]').on('input', saveCartFormState)
    $('input[name="inn"]').on('input', saveCartFormState)
    $('input[name="kpp"]').on('input', saveCartFormState)
    $('input[name="legal_address"]').on('input', saveCartFormState)
    
    $('[data-select-option="stock"], [data-select-option="car"]').on('click', () => {
      setTimeout(saveCartFormState, 50)
    })
    
    $('#cart-form').on('submit', () => {
      setTimeout(clearCartFormState, 1000)
    })
  }
}
