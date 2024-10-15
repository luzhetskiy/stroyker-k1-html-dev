import {
  submitHandler,
  carsSelectionChangeHandler,
  modelsSelectionChangeHandler,
  modificationsSelectionChangeHandler,
  configurationsSelectionChangeHandler,
  renderNextOptions,
} from "./tiresCarsSelection.handlers";

export const initTiresCarsSelection = () => {
  if (!$('[data-cars-select]').length) return

  $("[data-cars-select]").each(function() {
    renderNextOptions($(this), "/cars/brands/", "");
  });

  $("[data-cars-select]").on("change", carsSelectionChangeHandler);

  $("[data-models-select]").on("change", modelsSelectionChangeHandler);

  $("[data-configurations-select]").on("change", configurationsSelectionChangeHandler);

  $("[data-modifications-select]").on("change", modificationsSelectionChangeHandler);

  $("[data-tires-form]").on("submit", submitHandler);
};
