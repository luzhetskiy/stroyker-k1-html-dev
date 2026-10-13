(function ($) {
  $(document).ready(function () {
    var delivery_payment_mapping_node = document.getElementById("delivery_payment_mapping");
    var delivery_payment_mapping = delivery_payment_mapping_node
      ? JSON.parse(delivery_payment_mapping_node.textContent)
      : null;
    var payment_block = $("#id_payment_variant").parent();
    var cart_extra_fields = $(".cart-extra-field");

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
      const PAYMENT_ALIASES = {
        "выписать счёт": "через счет",
        картой: "картой при получении",
        наличными: "наличными при получении",
        "он-лайн": "онлайн",
        кредит: "в кредит"
      };
      const DELIVERY_ALIASES = {
        "по адресу": "доставка по адресу",
        "до пункта выдачи": "доставка до пвз"
      };

      const normalize = value =>
        String(value ?? "")
          .trim()
          .toLowerCase()
          .replace(/ё/g, "е")
          .replace(/\s+/g, " ");

      let delivery = normalize(currentDelivery);
      let payment = normalize(currentPayment);
      delivery = DELIVERY_ALIASES[delivery] || delivery;
      payment = PAYMENT_ALIASES[payment] || payment;

      const visibility = {
        1: true,
        2: delivery === "самовывоз",
        3: delivery === "доставка по адресу",
        4: delivery === "доставка до тк",
        5: payment === "через счет",
        6: payment === "картой при получении",
        7: payment === "наличными при получении",
        8: payment === "онлайн",
        9: payment === "в кредит",
        10: payment === "через yookassa"
      };

      // Показываем общий контейнер, если раньше он был скрыт.
      cart_extra_fields.show();

      // Учитываем, что переменная может содержать сами поля
      // или их общий контейнер.
      const fields = cart_extra_fields
        .filter(".cart-extra-field")
        .add(cart_extra_fields.find(".cart-extra-field"));

      fields.each(function () {
        const binding = Number($(this).attr("binded")) || 1;
        $(this).toggle(visibility[binding] === true);
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