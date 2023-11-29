$("#menu").mmenu({
  extensions: ["position-front"],
});

const menuApi = $("#menu").data("mmenu");

$("[data-open-menu]").click(() => {
  menuApi.open();
});

$("[data-close-menu]").click(() => {
  menuApi.close();
});

console.log(123345346);
