function filterColorCheckboxes() {
  const searchInput = document.getElementById("filter-search__color");
  const checkboxes = document.querySelectorAll(
    "#form-groups__search-color .form-group .checkbox"
  );
  const filter = searchInput.value.toLowerCase();

  checkboxes.forEach(function (checkbox) {
    const label = checkbox.querySelector("label").textContent.toLowerCase();
    if (label.indexOf(filter) > -1) {
      checkbox.style.display = "block";
    } else {
      checkbox.style.display = "none";
    }
  });
}
const searchInputColor = document.getElementById("filter-search__color");
searchInputColor.addEventListener("input", function () {
  filterColorCheckboxes();
});
const searchButtonColor = document.getElementById(
  "filter-search-button__color"
);
searchButtonColor.addEventListener("click", function (event) {
  event.preventDefault();
  filterColorCheckboxes();
});

function filterProCheckboxes() {
  const searchInput = document.getElementById("filter-search__pro");
  const checkboxes = document.querySelectorAll(
    "#form-groups__search-pro .form-group .checkbox"
  );
  const filter = searchInput.value.toLowerCase();

  checkboxes.forEach(function (checkbox) {
    const label = checkbox.querySelector("label").textContent.toLowerCase();
    if (label.indexOf(filter) > -1) {
      checkbox.style.display = "block";
    } else {
      checkbox.style.display = "none";
    }
  });
}
const searchInputPro = document.getElementById("filter-search__pro");
searchInputPro.addEventListener("input", function () {
  filterProCheckboxes();
});
const searchButtonPro = document.getElementById("filter-search-button__pro");
searchButtonPro.addEventListener("click", function (event) {
  event.preventDefault();
  filterProCheckboxes();
});
