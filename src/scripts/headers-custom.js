document.addEventListener("DOMContentLoaded", function () {
  // phone toggle
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".contact-box p")) return;
    else {
      e.target.classList.add("toggled");
    }
  });

  // catalog and menu vars
  var catalogBtn = document.querySelector(".catalog-btn");
  var catalogBox = document.querySelector(".catalog-box");
  var menuBtn = document.querySelector(".menu-btn");
  var menuBox = document.querySelector(".menu-box");

  // catalog open
  document.addEventListener("click", function (e) {
    if (e.target.matches(".catalog-btn")) {
      catalogBtn.classList.toggle("toggled");
      catalogBox.classList.toggle("show");
      if (menuBtn) {
        menuBtn.classList.remove("toggled");
        menuBox.classList.remove("show");
      }
    } else {
      return;
    }
  });

  // menu open
  document.addEventListener("click", function (e) {
    if (e.target.matches(".menu-btn")) {
      menuBtn.classList.toggle("toggled");
      menuBox.classList.toggle("show");
      if (catalogBtn) {
        catalogBtn.classList.remove("toggled");
        catalogBox.classList.remove("show");
      }
    } else {
      return;
    }
  });
});

// $("#my-menu").mmenu({
//     "extensions": [
//         "position-front"
//         ]
// });

// var API = $("#my-menu").data( "mmenu" );
// // открыть mmenu
// $("#my-button").click(function() {
//     API.open();
// });
// // закрыть mmenu
// $(".close_mm_menu").click(function() {
//     API.close();
//     $(this).hide();
// });

// close button append in mmenu
function addButton() {
  $(".mm-panel .mm-navbar").append(`<button id='my-button-close'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <rect x="1.41406" width="17" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="white"/>
                                        <rect y="12.0208" width="17" height="2" rx="1" transform="rotate(-45 0 12.0208)" fill="white"/>
                                        </svg></button>`);
}
addButton();

// $(document).on("click", ".mm-panel #my-button-close", function () {
//   API.close();
// });
