const withVatCheckbox = $('#invoicing-with-vat-input');
withVatCheckbox.hide();

$(document).ready(function () {
    $('input[name=payment_method]').on('change', function () {
        $this = $(this);
        if ($this.val() == 0) {
            withVatCheckbox.show();
        } else {
            withVatCheckbox.hide();
        }
    });


    function toggleExtraFields() {
        let payment_selected = document.querySelector('input[name="payment_method"]:checked');
        if (!payment_selected) {
            $('.cart-extra-field').hide().find(':input').prop('disabled', true);
            return;
        }
        let payment_value = parseInt(payment_selected.getAttribute("value"));

        $('.cart-extra-field').each(function (index, element) {
            let element_bind = parseInt(element.getAttribute("binded"));
            let visible = element_bind === payment_value + 5;
            $(element).find(':input').prop('disabled', !visible);
            if (visible) {
                $(element).show();
            } else {
                $(element).hide();
            }
        })
    }

    $("input[name=payment_method]").click(toggleExtraFields);
    toggleExtraFields();
});
