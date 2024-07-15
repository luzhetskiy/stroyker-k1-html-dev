import { initClickUtils } from "./libs/clickUtils/clickUtils";
import { initRadioToggle } from "./libs/radioToggle/radioToggle";
import { initCollapse } from "./libs/collapse/collapse";
import { initSelect } from "./libs/select/select";
import { initInputToggle } from "./libs/inputToggle/inputToggle";
import { initTrigger } from "./libs/trigger/trigger";
import { initRelatedValue } from "./libs/relatedValue/relatedValue";
import { initDataSelect } from "./libs/dataSelect/dataSelect";
import { initCheckBoxToggle } from "./libs/checkBoxToggle/checkBoxToggle";
import { initSearchSelects } from "./libs/searchSelect/searchSelect";
import { initTiresCarsSelection } from "./libs/tiresCarsSelection/tiresCarsSelection";
import { initRequaredField } from "./libs/requaredField/requaredField";
import { initSliderConstructor } from "./libs/sliderConstructor/sliderConstructor";
import { initCustomInteraction } from "./libs/customInteraction/customInteraction";
import { initCscrlb } from "./libs/cscrlb/cscrlb";

export const initShared = () => {
  initClickUtils();
  initRadioToggle();
  initCollapse();
  initSelect();
  initInputToggle();
  initTrigger();
  initRelatedValue();
  initDataSelect();
  initCheckBoxToggle();
  initSearchSelects();
  initTiresCarsSelection();
  initRequaredField();
  initSliderConstructor();
  initCustomInteraction();
  initCscrlb();
};
