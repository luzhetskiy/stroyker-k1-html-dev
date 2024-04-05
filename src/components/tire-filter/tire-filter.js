$(document).ready(function () {
  const tireFilterToggle = document.querySelector(
    ".filter-toggle .toggle-input"
  );

  tireFilterToggle.addEventListener("change", function () {
    let blockParameter = document.querySelector(".parameter-block");
    let blockAuto = document.querySelector(".auto-block");
    let poParametram = document.querySelector(".po-parametram");
    let poAuto = document.querySelector(".po-auto");
    if (this.checked) {
      blockParameter.style.display = "none";
      blockAuto.style.display = "block";
      poParametram.style.color = "#A7A7AB";
      poAuto.style.color = "#000";
      return;
    }
    blockParameter.style.display = "block";
    blockAuto.style.display = "none";
    poParametram.style.color = "#000";
    poAuto.style.color = "#A7A7AB";
  });
  function resetFilters(block) {
    let selectors = block.querySelectorAll(
      ".parameter-select .selected-option"
    );
    let selectOptions = block.querySelector(".select-options");
    selectors.forEach(function (selector) {
      selector.textContent = selectOptions.firstElementChild.textContent;
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
  selectors.forEach(function (selector) {
    const selectedOption = selector.querySelector(".selected-option");
    const searchInput = selector.querySelector(".select-search-input");
    const selectOptions = selector.querySelector(".select-options");
    selectedOption.addEventListener("click", function () {
      toggleOptions(searchInput, selectOptions, selectedOption);
    });
    const selectOption = selector.querySelectorAll(".select-option");
    selectOption.forEach(function (selectOption) {
      selectOption.addEventListener("click", function () {
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

  if (document.documentElement.clientWidth < 768) {
    if (document.documentElement.clientWidth < 768) {
      const tabs = document.querySelectorAll(".tab-content");
      tabs.forEach(function (tab) {
        tab.style.display = "none";
      });
    }
  }

  const sliderItems = document.querySelectorAll(
    ".tabs-slider-mobile .slider-item"
  );

  sliderItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const tabId = item.getAttribute("data-tab");
      const tab = document.getElementById(tabId);
      const allTabs = document.querySelectorAll(".tab-content");
      allTabs.forEach(function (tab) {
        tab.style.display = "none";
      });
      tab.style.display = "block";
    });
  });

  // всплывашка

  const parameterModal = document.querySelector(".parameter-modal-content");

  tippy("#parameter-modal-btn", {
    content: parameterModal.innerHTML,
    allowHTML: true,
    theme: "light",
    placement: "bottom-start",
    trigger: "click",
  });

  const autoModal = document.querySelector(".auto-modal-content");

  tippy("#auto-modal-btn", {
    content: autoModal.innerHTML,
    allowHTML: true,
    theme: "light",
    placement: "bottom",
    trigger: "click",
  });

  // модальное окно в мобилке

  const parameterOpenButton = document.querySelector(
    ".parameter__modal-button-mobile"
  );
  const parameterModalMobile = document.querySelector(
    ".po-parametram__modal-mobile"
  );
  const parameterCloseButton = document.querySelector(
    ".po-parametram-close-button"
  );

  parameterOpenButton.addEventListener("click", function () {
    parameterModalMobile.style.display = "block";
  });
  parameterCloseButton.addEventListener("click", function () {
    parameterModalMobile.style.display = "none";
  });

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
