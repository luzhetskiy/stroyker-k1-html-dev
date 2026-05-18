const checkVisibleRequiredFields = (button) => {
  const form = button.closest('form[data-wait-requred-form]');
  if (!form.length) return;

  const visibleRequiredFields = form.find('[data-required-field]').filter(function() {
    const $field = $(this);
    const fieldContainer = $field.closest('[data-radio-content]');
    
    if (fieldContainer.length > 0) {
      return !fieldContainer.hasClass('d-none');
    }
    
    return $field.is(':visible') && !$field.closest('.d-none').length;
  });

  let allFilled = true;
  visibleRequiredFields.each(function() {
    const $field = $(this);
    const value = $field.val();
    
    if (!value || value.trim() === '') {
      allFilled = false;
      return false;
    }
  });

  if (allFilled && visibleRequiredFields.length > 0) {
    button.removeAttr('disabled');
  } else {
    button.attr('disabled', 'disabled');
  }
};

export const initRequaredField = () => {
  if (!$("[data-required-field]").length) return;

  const buttons = $('[data-wait-requred]');
  
  $("[data-required-field]").on("input change", function() {
    const $field = $(this);
    const form = $field.closest('form[data-wait-requred-form]');
    if (!form.length) return;
    
    const button = form.find('[data-wait-requred]');
    if (button.length === 0) return;
    
    checkVisibleRequiredFields(button);
  });

  $('input[data-radio]').on('change', function() {
    const form = $(this).closest('form[data-wait-requred-form]');
    if (!form.length) return;
    
    const button = form.find('[data-wait-requred]');
    if (button.length === 0) return;
    
    setTimeout(() => {
      checkVisibleRequiredFields(button);
    }, 100);
  });

  buttons.each(function() {
    checkVisibleRequiredFields($(this));
  });
};
