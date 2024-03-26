$(() => {
  if (!$("[data-booking-tooltip-content]").length) return;

  const tooltipContent = $("[data-booking-tooltip-content]");
  const clonedTooltipContent = tooltipContent.clone();
  tooltipContent.remove();
  
  tippy("[data-booking-tooltip]", {
    content: clonedTooltipContent.html(),
    allowHTML: true,
    placement: "top-start",
    theme: "light",
    interactive: true,
    delay: [100, 200],
    onMount(instance) {
      const target = $(instance.reference);
      const title = target.parent().parent().find("[data-booking-title]").attr("data-booking-title");
      const time = target.attr("data-booking-time");
      const action = target.attr("data-submit-url");
      const button = $("[data-booking-tooltip-button]");
      
        // const url = 'https://secret-smr.ru/booking/matrix/test-hours/2024-03-26/'
        var url = window.location.href;
        var pattern = /(\d{4})-(\d{2})-(\d{2})/;
        var match = url.match(pattern);
        
        if (match) {
            var year = match[1];
            var month = match[2];
            var day = match[3];
            var date = day + '.' + month + '.' + year;
            console.log(date);
        } 
      button.attr("data-booking-tooltip-button-time", time);
      button.attr("data-booking-tooltip-button-title", title);
      $("[data-booking-tooltip-title]").text(title);
      $("[data-booking-tooltip-time]").text(time);
      $("[data-booking-tooltip-button]").on("click", (event) => {
        const form = $("#booking-form");
        $("[data-booking-item-selected]").removeAttr("data-booking-item-selected");
        target.attr("data-booking-item-selected", "");

        if (!form.length) return;
        form.find("input, textarea, button").removeAttr("disabled");
        form.attr("action", action);
        if(date) {
        form.find('[name="message"]').val(`Хочу забронировать: ${title}, дата: ${date}, время: ${time}`);
        $("html, body").animate(
          {
            scrollTop: $("[data-booking-form]").offset().top - 200,
          },
          500
        );
        } else {
          form.find('[name="message"]').val(`Хочу забронировать: ${title}, время: ${time}`);
        $("html, body").animate(
          {
            scrollTop: $("[data-booking-form]").offset().top - 200,
          },
          500
        );
        }
      });
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
