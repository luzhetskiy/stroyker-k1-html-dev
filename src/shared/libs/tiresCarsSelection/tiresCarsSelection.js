import {
  submitHandler,
  carsSelectionChangeHandler,
  modelsSelectionChangeHandler,
  modificationsSelectionChangeHandler,
  configurationsSelectionChangeHandler,
  renderNextOptions,
} from "./tiresCarsSelection.handlers";

export const initTiresCarsSelection = () => {
  // Находим все формы с data-tires-form
  $("[data-tires-form]").each(function() {
    const $form = $(this);
    
    // Внутри каждой формы находим элементы и привязываем к ним обработчики событий
    $form.find("[data-cars-select]").each(function() {
      renderNextOptions($(this), "/cars/brands/", "");
    });

    $form.find("[data-cars-select]").on("change", function(event) {
      carsSelectionChangeHandler(event, $form);
    });

    $form.find("[data-models-select]").on("change", function(event) {
      modelsSelectionChangeHandler(event, $form);
    });

    $form.find("[data-configurations-select]").on("change", function(event) {
      configurationsSelectionChangeHandler(event, $form);
    });

    $form.find("[data-modifications-select]").on("change", function(event) {
      modificationsSelectionChangeHandler(event, $form);
    });

    $form.on("submit", function(event) {
      submitHandler(event, $form);
    });
  });
};
