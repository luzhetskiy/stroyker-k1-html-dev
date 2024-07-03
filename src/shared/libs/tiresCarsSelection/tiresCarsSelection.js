import {
  submitHandler,
  carsSelectionChangeHandler,
  modelsSelectionChangeHandler,
  modificationsSelectionChangeHandler,
  configurationsSelectionChangeHandler,
} from "./tiresCarsSelection.handlers";

export const initTiresCarsSelection = () => {
  $("[data-cars-select]").on("change", carsSelectionChangeHandler);

  $("[data-models-select]").on("change", modelsSelectionChangeHandler);

  $("[data-modifications-select]").on("change", modificationsSelectionChangeHandler);

  $("[data-configurations-select]").on("change", configurationsSelectionChangeHandler);

  $("[data-tires-form]").on("submit", submitHandler);
};
