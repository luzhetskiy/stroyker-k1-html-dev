document.addEventListener('DOMContentLoaded', function () {

  // phone toggle 
  document.addEventListener('click', function (e) {
    if (!e.target.matches('.contact-box p')) return;
    else {
      e.target.classList.add('toggled')
    }
  });

  // catalog and menu vars 
  var catalogBtn = document.querySelector(".catalog-btn");
  var catalogBox = document.querySelector(".catalog-box");
  var menuBtn = document.querySelector(".menu-btn");
  var menuBox = document.querySelector(".menu-box");

  // catalog open 
  document.addEventListener('click', function (e) {
    if (e.target.matches('.catalog-btn')){
      catalogBtn.classList.toggle('toggled');
      catalogBox.classList.toggle('show');
      if(menuBtn) {
        menuBtn.classList.remove('toggled');
        menuBox.classList.remove('show');
      }
    }
    else{
      return;
    }
  });

  // menu open 
  document.addEventListener('click', function (e) {
    if (e.target.matches('.menu-btn')){
      menuBtn.classList.toggle('toggled');
      menuBox.classList.toggle('show');
      if(catalogBtn){
        catalogBtn.classList.remove('toggled');
        catalogBox.classList.remove('show');
      }
    }
    else{
      return;
    }
  });

 

});
