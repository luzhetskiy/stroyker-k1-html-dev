import {
  submitHandler,
  carsSelectionChangeHandler,
  modelsSelectionChangeHandler,
  modificationsSelectionChangeHandler,
  configurationsSelectionChangeHandler,
  renderNextOptions
} from "./tiresCarsSelection.handlers";

export const initTiresCarsSelection = () => {
  if (!$('[data-cars-select]').length) return

  renderNextOptions('data-cars-select', '/cars/brands/', '')

  $("[data-cars-select]").on("change", carsSelectionChangeHandler);

  $("[data-models-select]").on("change", modelsSelectionChangeHandler);

  $("[data-configurations-select]").on("change", configurationsSelectionChangeHandler);

  $("[data-modifications-select]").on("change", modificationsSelectionChangeHandler);

  $("[data-tires-form]").on("submit", submitHandler);
};
