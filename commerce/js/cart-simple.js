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

          if (!delivery_selected) {
              return; // если не выбран способ доставки, ничего не делаем
          }

          let delivery_id = parseInt(delivery_selected.getAttribute("id").slice(-1));
          
          // Скрываем все методы оплаты сначала
          $('input[name="payment_variant"]').closest('.payment-option').hide();
          
          // Показываем только те методы оплаты, которые доступны для выбранной доставки
          let availablePayments = getAvailablePayments(delivery_id);
          availablePayments.forEach(paymentId => {
              $(`#payment${paymentId}`).closest('.payment-option').show();
          });
          
          // Если выбранный метод оплаты недоступен для текущей доставки, выбираем первый доступный
          if (payment_selected && !availablePayments.includes(parseInt(payment_selected.getAttribute("id").slice(-1)))) {
              $(`#payment${availablePayments[0]}`).prop('checked', true);
          }

          // Обработка дополнительных полей (оставьте вашу существующую логику)
          $('.cart-extra-field').each(function (index, element) {
              let element_bind = parseInt(element.getAttribute("binded"));
              if ([payment_id + 5, delivery_id + 2, 0].includes(element_bind)) {
                  $(element).show();
              } else {
                  $(element).hide();
              }
          });
      }

      // Функция определяет, какие методы оплаты доступны для каждого метода доставки
      function getAvailablePayments(deliveryId) {
          // Настройте эту логику под ваши нужды
          switch (deliveryId) {
              case 0: // Самовывоз
                  return [0, 1, 2]; // Например: наличные, карта, онлайн
              case 1: // Курьерская доставка
                  return [1, 2]; // Только карта и онлайн
              case 2: // Почта
                  return [2]; // Только онлайн оплата
              default:
                  return [0, 1, 2]; // Все методы по умолчанию
          }
      }

      $("input[name=delivery_variant]").click(toggleExtraFields);
      $("input[name=payment_variant]").click(toggleExtraFields);
      toggleExtraFields();
  });
})(jQuery);