(function ($) {
  $(document).ready(function () {
      let pickupSection = document.getElementById("pickup-section");  // pickup section

      function toggleExtraFields() {
          // Проверяем, существует ли pickupSection
          if (pickupSection) {
              let delivery_selected = document.querySelector('input[name="delivery_variant"]:checked');
              let payment_selected = document.querySelector('input[name="payment_variant"]:checked');

              if (!delivery_selected || !payment_selected) {
                  return; // если не выбраны варианты, ничего не делаем
              }

              let delivery_id = parseInt(delivery_selected.getAttribute("id").slice(-1));
              let payment_id = parseInt(payment_selected.getAttribute("id").slice(-1));

              switch (delivery_id) {
                  case 0:
                      pickupSection.style.display = "block";
                      break;
                  case 1:
                  case 2:
                      pickupSection.style.display = "none";
                      break;
              }
          }
          // Если pickupSection нет, просто пропускаем работу с ним

          // Продолжаем выполнять остальные действия
          let delivery_selected = document.querySelector('input[name="delivery_variant"]:checked');
          let payment_selected = document.querySelector('input[name="payment_variant"]:checked');

          if (!delivery_selected || !payment_selected) {
              return; // если не выбраны варианты, ничего не делаем
          }

          let delivery_id = parseInt(delivery_selected.getAttribute("id").slice(-1));
          let payment_id = parseInt(payment_selected.getAttribute("id").slice(-1));

          $('.cart-extra-field').each(function (index, element) {
              let element_bind = parseInt(element.getAttribute("binded"));
              if ([payment_id + 5, delivery_id + 2, 0].includes(element_bind)) {
                  $(element).show();
              } else {
                  $(element).hide();
              }
          });
      }

      $("input[name=delivery_variant]").click(toggleExtraFields);
      $("input[name=payment_variant]").click(toggleExtraFields);
      toggleExtraFields();
  });
})(jQuery);