import {
  submitHandler,
  carsSelectionChangeHandler,
  modelsSelectionChangeHandler,
  modificationsSelectionChangeHandler,
  configurationsSelectionChangeHandler,
  renderNextOptions
} from "./tiresCarsSelection.handlers";

export const initTiresCarsSelection = () => {

  renderNextOptions('data-cars-select', '/cars/brands/', '')

  $("[data-cars-select]").on("change", carsSelectionChangeHandler);

  $("[data-models-select]").on("change", modelsSelectionChangeHandler);

  $("[data-modifications-select]").on("change", modificationsSelectionChangeHandler);

  $("[data-configurations-select]").on("change", configurationsSelectionChangeHandler);

  $("[data-tires-form]").on("submit", submitHandler);
};
