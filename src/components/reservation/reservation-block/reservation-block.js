$(() => {
  if (!$('[data-booking-tooltip]').length) return

  const selectedItems = new Map();
  const tooltipContent = $("[data-booking-tooltip]");

  const getValues = (map) => {
    let result = "";
    map.forEach((element) => {
      if (result) result += ",";
      result += ` ${element.title} на время ${element.time}`;
    });
    return result;
  };

  const bookingButtonClickHandler = (event) => {
    const value = `Хочу забронировать` + getValues(selectedItems);

    if ($(".custom-form-instance").length) {
      const form = $(".custom-form-instance");
      if (!form.length) return;
      form.find("textarea").val(value);
      $("html, body").animate(
        {
          scrollTop: form.offset().top,
        },
        1000
      );
      return;
    }

    const form = $("#feedback-message-request-form");
    if (!form.length) return;
    form.find("textarea").val(value);
    $("html, body").animate(
      {
        scrollTop: form.offset().top,
      },
      1000
    );
  };

  $("[data-booking-tooltip]").on("click", (event) => {
    const target = $(event.currentTarget);
    const title = target.parent().parent().find("[data-booking-title]").text();
    const time = target.attr("data-booking-time");
    const value = title + time
    const item = {
      time: time,
      title: title,
    };
    if (selectedItems.get(value)) {
      selectedItems.delete(value);
      target.removeAttr("data-booking-item-selected");
      return;
    }
    selectedItems.set(value, item);
    target.attr("data-booking-item-selected", "");
  });

  tippy("[data-booking-tooltip]", {
    content: tooltipContent.html(),
    allowHTML: true,
    placement: "top-start",
    theme: "light",
    interactive: true,
    onMount(instance) {
      const target = $(instance.reference);
      const title = target.parent().parent().find("[data-booking-title]").text();
      const time = target.attr("data-booking-time");
      $("[data-booking-tooltip-button]").on("click", bookingButtonClickHandler);
      $("[data-booking-tooltip-title]").text(title);
      $("[data-booking-tooltip-time]").text(time);
    },
    onHide(instance) {
      $("[data-booking-tooltip-button]").off("click", bookingButtonClickHandler);
    },
  });
});
