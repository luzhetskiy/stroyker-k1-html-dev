(() => {
  const buttonDefaultView = $(".button1");
  const buttonWideView = $(".button2");
  const buttonLineView = $(".button3");
  const items = $(".product-item");

  buttonWideView.click((event) => {
    buttonDefaultView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--line");
    items.addClass("product-item--wide");
  });

  buttonLineView.click((event) => {
    buttonWideView.removeClass("current");
    buttonDefaultView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "wide");
    items.removeClass("product-item--wide");
    items.addClass("product-item--line");
  });

  buttonDefaultView.click((event) => {
    buttonWideView.removeClass("current");
    buttonLineView.removeClass("current");
    $(event.currentTarget).addClass("current");
    localStorage.setItem("catalogGrid", "default");
    items.removeClass("product-item--wide");
    items.removeClass("product-item--line");
  });
})();
