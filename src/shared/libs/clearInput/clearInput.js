import { clearInputClickHandler } from "./clearInput.handlers";

export const initClearInput = () => {
  const clearInputs = $("[data-clear-input-button]")
  if (!clearInputs.length) return

  clearInputs.on("click", clearInputClickHandler);
}

