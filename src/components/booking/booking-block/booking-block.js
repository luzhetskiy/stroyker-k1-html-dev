$(() => {
  if (!$("[data-booking-tooltip-content]").length) return;

  const selectedItems = new Map();
  const tooltipContent = $("[data-booking-tooltip-content]");
  const clonedTooltipContent = tooltipContent.clone();
  tooltipContent.remove();

  const getValues = (map) => {
    let result = "";
    map.forEach((element) => {
      if (result) result += ",";
      result += ` ${element.title} на время ${element.time}`;
    });
    return result;
  };

  const getKey = (title, time) => {
    return title + time;
  };

  const getValue = (title, time) => {
    return {
      time: time,
      title: title,
    };
  };

  const bookingButtonClickHandler = (event) => {
    const target = $(event.currentTarget);
    const time = target.attr("data-booking-tooltip-button-time");
    const title = target.attr("data-booking-tooltip-button-title");
    const value = getValue(title, time);
    const key = getKey(title, time);
    const tooltipItem = $(`[data-booking-title="${title}"]`).parent().find(`[data-booking-time="${time}"]`);
    const form = $("#booking-form");

    selectedItems.set(key, value);
    tooltipItem.attr("data-booking-item-selected", "");

    if (!form.length) return;
    const inputValue = getValues(selectedItems);
    form.find('[name="message"]').val(inputValue);
    $("html, body").animate(
      {
        scrollTop: $("[data-booking-form]").offset().top - 200,
      },
      1000
    );
  };

  $("[data-booking-tooltip]").on("click", (event) => {
    const target = $(event.currentTarget);
    const title = target.parent().parent().find("[data-booking-title]").attr("data-booking-title");
    const time = target.attr("data-booking-time");
    const key = getKey(title, time);
    const value = getValue(title, time);
    if (selectedItems.get(key)) {
      selectedItems.delete(key);
      target.removeAttr("data-booking-item-selected");
      return;
    }
    selectedItems.set(key, value);
    target.attr("data-booking-item-selected", "");
  });

  tippy("[data-booking-tooltip]", {
    content: clonedTooltipContent.html(),
    allowHTML: true,
    placement: "top-start",
    theme: "light",
    interactive: true,
    onMount(instance) {
      const target = $(instance.reference);
      const title = target.parent().parent().find("[data-booking-title]").attr("data-booking-title");
      const time = target.attr("data-booking-time");
      const button = $("[data-booking-tooltip-button]");
      button.attr("data-booking-tooltip-button-time", time);
      button.attr("data-booking-tooltip-button-title", title);
      $("[data-booking-tooltip-title]").text(title);
      $("[data-booking-tooltip-time]").text(time);
      $("[data-booking-tooltip-button]").on("click", bookingButtonClickHandler);
    },
  });

  $("[data-booking-scroll]").scroll((event) => {
    const currentScroll = $(event.currentTarget).scrollLeft();
    if (currentScroll > 1) {
      $("[data-booking-mobile-titles]").attr("data-booking-mobile-titles-active", "");
      return;
    }
    $("[data-booking-mobile-titles-active]").removeAttr("data-booking-mobile-titles-active");
  });

  const appendMobileTitles = () => {
    $("[data-booking-title]").each((index, element) => {
      const target = $(element);
      const title = target.clone();
      title.css({ "min-height": target.height() });
      $("[data-booking-mobile-titles]").append(title);
    });
  };
  appendMobileTitles();
});
