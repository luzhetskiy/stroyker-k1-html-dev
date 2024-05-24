$(document).ready(function () {
  const tireFilterToggle = document.querySelector(
    ".filter-toggle .toggle-input"
  );

  if (!tireFilterToggle) return;

  tireFilterToggle.addEventListener("change", function () {
    let blockParameter = document.querySelector(".parameter-block");
    let blockAuto = document.querySelector(".auto-block");
    let poParametram = document.querySelector(".po-parametram");
    let poAuto = document.querySelectorAll(".po-auto");
    if (this.checked) {
      blockParameter.style.display = "none";
      blockAuto.style.display = "block";
      poParametram.classList.add("disactive")
      poAuto.forEach(function(poAuto) {
        poAuto.classList.remove("disactive")
      })
      return;
    }
    blockParameter.style.display = "block";
    blockAuto.style.display = "none";
    poParametram.classList.remove("disactive")
    poAuto.forEach(function(poAuto) {
      poAuto.classList.add("disactive")
    })
  });
  function resetFilters(block) {
    let selectors = block.querySelectorAll(".parameter-select .selector");
    let resetButton = block.querySelector(".button-reset");
    resetButton.style.display = "none";

    selectors.forEach(function (selector) {
      let selectedOption = selector.querySelector(".selected-option");
      let selectOptions = selector.querySelector(".select-options");
      selectedOption.textContent = selectOptions.firstElementChild.textContent;
    });
  }
  const resetFilterButtonParameter = document.querySelector(
    ".parameter-block .button-reset"
  );
  if (resetFilterButtonParameter) {
    const parameterBlock = document.querySelector(".parameter-block");
    resetFilterButtonParameter.addEventListener("click", function () {
      resetFilters(parameterBlock);
    });
  }
  const resetFilterButtonAuto = document.querySelector(
    ".auto-block .button-reset"
  );
  if (resetFilterButtonAuto) {
    const autoBlock = document.querySelector(".auto-block");
    resetFilterButtonAuto.addEventListener("click", function () {
      resetFilters(autoBlock);
    });
  }

  // search selector

  function toggleOptions(searchInput, selectOptions, selectedOption) {
    selectOptions.style.display =
      selectOptions.style.display === "none" ? "block" : "none";
    searchInput.style.display =
      searchInput.style.display === "none" ? "block" : "none";
    selectedOption.style.display =
      selectedOption.style.display === "block" ? "none" : "block";
    if (selectOptions.style.display === "block") {
      searchInput.focus();
    }
  }
  function closeOptions(searchInput, selectOptions, selectedOption) {
    selectOptions.style.display = "none";
    searchInput.style.display = "none";
    selectedOption.style.display = "block";
  }
  function searchOptions(selectOption, searchString) {
    const text = selectOption.textContent.toLowerCase();
    selectOption.style.display = text.includes(searchString) ? "block" : "none";
  }

  const selectors = document.querySelectorAll(".selector");

  function checkSelectors() {
    const atLeastOneSelectedParam = Array.from(selectors).some(function (
      selector
    ) {
      return selector.querySelector(".parameter-block .selected") !== null;
    });
    atLeastOneSelectedParam
      ? (resetFilterButtonParameter.style.display = "flex")
      : (resetFilterButtonParameter.style.display = "none");
    const atLeastOneSelectedAuto = Array.from(selectors).some(function (
      selector
    ) {
      return selector.querySelector(".auto-block .selected") !== null;
    });
    atLeastOneSelectedAuto
      ? (resetFilterButtonAuto.style.display = "flex")
      : (resetFilterButtonAuto.style.display = "none");
  }

  selectors.forEach(function (selector) {
    selector.addEventListener("click", function (event) {
      const target = event.target;
      if (target !== this.firstChild) {
        checkSelectors();
      }
    });
    const selectedOption = selector.querySelector(".selected-option");
    const searchInput = selector.querySelector(".select-search-input");
    const selectOptions = selector.querySelector(".select-options");
    selectedOption.style.display = "block";
    searchInput.style.display = "none";
    selectOptions.style.display = "none";
    selectedOption.addEventListener("click", function () {
      toggleOptions(searchInput, selectOptions, selectedOption);
    });
    const selectOption = selector.querySelectorAll(".select-option");
    selectOption.forEach(function (selectOption) {
      selectOption.addEventListener("click", function (event) {
        const target = event.target;
        if (target !== selector.firstChild) {
          const selected = selector.querySelector(".selected");
          selected ? selected.classList.remove("selected") : null;
          target.classList.add("selected");
        }
        selectedOption.textContent = selectOption.textContent;
        closeOptions(searchInput, selectOptions, selectedOption);
      });
    });
    const outerArea = document.querySelector("body");
    outerArea.addEventListener("click", function (event) {
      if (!selector.contains(event.target)) {
        closeOptions(searchInput, selectOptions, selectedOption);
      }
    });
    searchInput.addEventListener("input", function () {
      const searchString = searchInput.value.toLowerCase();
      selectOption.forEach(function (selectOption) {
        searchOptions(selectOption, searchString);
      });
    });
  });

  // слайдер категорий в мобилке

  $(".tabs-slider-mobile").slick({
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    centerMode: false,
  });

  const tabs = document.querySelectorAll(".tab-content");
  if (document.documentElement.clientWidth < 768) {
    tabs.forEach(function (tab) {
      tab.style.display = "none";
    });
  }

  const sliderItems = document.querySelectorAll(
    ".tabs-slider-mobile .slider-item"
  );
  if (document.documentElement.clientWidth < 768) {
    sliderItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        const targetItem = event.target;
        const tabId = item.getAttribute("data-tab");
        const tab = document.getElementById(tabId);
        const allTabs = document.querySelectorAll(".tab-content");
        allTabs.forEach(function (tab) {
          tab.style.display = "none";
        });
        tab.style.display = "block";
        const mobileSlider = document.querySelector(".tabs-slider-mobile");
        const itemActive = mobileSlider.querySelector(".slider-item.active");
        itemActive ? itemActive.classList.remove("active") : null;
        targetItem.classList.add("active");
      });
    });
  }

  // всплывашка

  const autoModal = document.querySelector(".auto-modal-content");

  tippy("#auto-modal-btn", {
    content: autoModal.innerHTML,
    allowHTML: true,
    theme: "light",
    placement: "bottom",
    trigger: "click",
  });

  // модальное окно в мобилке

  const autoOpenButton = document.querySelector(".auto__modal-button-mobile");
  const autoModalMobile = document.querySelector(".po-auto__modal-mobile");
  const autoCloseButton = document.querySelector(".po-auto-close-button");

  autoOpenButton.addEventListener("click", function () {
    autoModalMobile.style.display = "block";
  });
  autoCloseButton.addEventListener("click", function () {
    autoModalMobile.style.display = "none";
  });
});
