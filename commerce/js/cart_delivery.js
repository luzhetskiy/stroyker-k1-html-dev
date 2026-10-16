(function ($) {
    $(document).ready(function () {

        const radioButtonsChecked = document.querySelectorAll(
            '.delivery-selection input[type="radio"]:checked');
        const choices = document.querySelectorAll(".delivery-choice");

        radioButtonsChecked.forEach(function (btn) {
            choices.forEach(function (choice) {
                if (choice.classList.contains(btn.id) ||
                    choice.classList.contains('delivery-type-' + btn.value)) {
                    choice.style.display = "block";
                }
            });

        });

    });

    ////// Cart //////
    // delivery

    var df = $('#delivery_form');
    if (df.length > 0) {
        // Django adds "required" attribute, it's not needed.
        df.find('input, select, textarea').removeAttr('required');

        var dt_checkboxes = df.find('[name="delivery_type"]');

        df.on('submit', function () {
            var delivery_type = dt_checkboxes.filter(':checked').val();
            // remove all unneeded delivery forms before submitting
            df.find('.delivery__form').filter(function () {
                return $(this).attr('id') != 'delivery_form_' + delivery_type;
            }).remove();
            return true;
        });
    }

    $('input.common-data').change(function () {
        var $this = $(this);
        $('input.common-data[name="' + $this.attr('name') + '"]').val($this.val());
    });

    function initializePhoneMasks() {
        const phoneField = $('[name="phone"]').not('.no-mask');
        if (phoneField && phoneField.hasOwnProperty('mask')) {
            $('[name="phone"]').not('.no-mask').mask('0 (000) 000-00-00');

        }
    }

    initializePhoneMasks();

    // слушаем выбор транспортной компании
    $('#id_company').on('change', function (event) {
        var tc_pk = $('#' + this.id + ' option:selected').val();
        recalculateTCDeliveryCost(tc_pk);
    });

    function toggleExtraFields() {
        let delivery_selected = document.querySelector('input[name="delivery_type"]:checked');
        if (!delivery_selected) return;

        let delivery_form = document.getElementById(
            'delivery_form_' + delivery_selected.value
        );
        let delivery_binding = parseInt(
            delivery_form && delivery_form.dataset.extraFieldsBinding
        );

        $('.cart-extra-field').each(function (index, element) {
            let element_bind = parseInt(element.getAttribute("binded"));
            let visible = [1, delivery_binding].includes(element_bind);
            $(element).find(':input').prop('disabled', !visible);
            if (visible) {
                $(element).show();
            } else {
                $(element).hide();
            }
        })
    }

    $("input[name=delivery_type]").click(toggleExtraFields);
    toggleExtraFields();

})(jQuery);
