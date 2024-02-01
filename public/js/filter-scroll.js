var scrollAreaColor = document.getElementById("filter-scroll-gradus");
var scrollGradientColor = document.getElementById("filter-gradient__gradus");

scrollAreaColor.addEventListener("scroll", function () {
  if (scrollAreaColor.scrollTop > 0) {
    scrollGradientColor.classList.add("scrolled-down");
  } else {
    scrollGradientColor.classList.remove("scrolled-down");
  }
});
var scrollAreaPro = document.getElementById("filter-scroll-pro");
var scrollGradientPro = document.getElementById("filter-gradient__pro");

scrollAreaPro.addEventListener("scroll", function () {
  if (scrollAreaPro.scrollTop > 0) {
    scrollGradientPro.classList.add("scrolled-down");
  } else {
    scrollGradientPro.classList.remove("scrolled-down");
  }
});
