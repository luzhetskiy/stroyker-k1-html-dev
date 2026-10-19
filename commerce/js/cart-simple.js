(function ($) {
  $(document).ready(function () {
    var delivery_payment_mapping_node = document.getElementById("delivery_payment_mapping");
    var delivery_payment_mapping = delivery_payment_mapping_node
      ? JSON.parse(delivery_payment_mapping_node.textContent)
      : null;
    var delivery_binding_mapping_node = document.getElementById("delivery_binding_mapping");
    var delivery_binding_mapping = delivery_binding_mapping_node
      ? JSON.parse(delivery_binding_mapping_node.textContent)
      : {};
    var payment_block = $("#id_payment_variant").parent();
    var cart_extra_fields = $(".cart-extra-field");
    var pickup_section = $("#pickup-section");

    function checkedValue(selector) {
      var node = $(selector).filter(":checked").first();
      if (!node.length) return "";
      return node.attr("data-input-value") || node.val() || "";
    }

    function current_delivery() {
      return checkedValue(
        "input[name=delivery][data-input=delivery_type], input[name=delivery_variant]"
      );
    }

    function current_payment() {
      return checkedValue(
        "input[name=payment][data-input=payment], input[name=payment_variant]"
      );
    }

    function updateExtraFields(currentDelivery, currentPayment) {
      const normalizedDelivery = String(currentDelivery || "")
        .trim()
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/\s+/g, " ");
      const fallbackDeliveryBindings = {
        самовывоз: 2,
        "по адресу": 3,
        "доставка по адресу": 3,
        "до тк": 4,
        "доставка до тк": 4
      };
      const deliveryBinding =
        Number(delivery_binding_mapping[currentDelivery]) ||
        fallbackDeliveryBindings[normalizedDelivery] ||
        null;
      const paymentValue = Number.parseInt(currentPayment, 10);
      const normalizedPayment = String(currentPayment || "")
        .trim()
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/\s+/g, " ");
      const fallbackPaymentBindings = {
        "выписать счет": 5,
        "через счет": 5,
        картой: 6,
        "картой при получении": 6,
        наличными: 7,
        "наличными при получении": 7,
        "он-лайн": 8,
        онлайн: 8,
        кредит: 9,
        "в кредит": 9,
        "через yookassa": 10
      };
      const paymentBinding = Number.isNaN(paymentValue)
        ? fallbackPaymentBindings[normalizedPayment] || null
        : paymentValue + 5;

      const visibility = {
        1: true,
        2: deliveryBinding === 2,
        3: deliveryBinding === 3,
        4: deliveryBinding === 4,
        5: paymentBinding === 5,
        6: paymentBinding === 6,
        7: paymentBinding === 7,
        8: paymentBinding === 8,
        9: paymentBinding === 9,
        10: paymentBinding === 10
      };

      const isPickup = deliveryBinding === 2;
      pickup_section.toggle(isPickup).find(":input").prop("disabled", !isPickup);

      // Показываем общий контейнер, если раньше он был скрыт.
      cart_extra_fields.show();

      // Учитываем, что переменная может содержать сами поля
      // или их общий контейнер.
      const fields = cart_extra_fields
        .filter(".cart-extra-field")
        .add(cart_extra_fields.find(".cart-extra-field"));

      fields.each(function () {
        const binding = Number($(this).attr("binded")) || 1;
        const visible = visibility[binding] === true;
        $(this).toggle(visible).find(":input").prop("disabled", !visible);
      });
    }

    function change_delivery_variant(e) {
      if (e && delivery_payment_mapping) {
        var selected_delivery = $(this).val();
        payment_block.show().find("li").show();
        payment_block
          .show()
          .find("input")
          .each(function () {
            var current_element = $(this);
            if (
              !delivery_payment_mapping[selected_delivery].includes(
                current_element.val()
              )
            ) {
              current_element.prop("checked", false).parent().parent().hide();
            }
          });
      }
      updateExtraFields(current_delivery(), current_payment());
    }

    $("input[name=delivery_variant], input[name=delivery]").click(
      change_delivery_variant
    );
    $("input[name=payment_variant], input[name=payment]").click(function () {
      updateExtraFields(current_delivery(), current_payment());
    });
    updateExtraFields(current_delivery(), current_payment());
  });
})(jQuery);
