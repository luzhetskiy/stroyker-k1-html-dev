import { initBooking } from "./booking/model";
import { productCartSlideShowInit } from "./product-teasers/model/product-card-slideshow";
import { productInfoIconInit } from "./product-teasers/model/product-info-icon";
import { initSearchInput } from "./modals/model/searchInput";
import { initMmenu } from "./menus/model/mmenu";

export const initComponents = () => {
  initBooking();
  productCartSlideShowInit();
  productInfoIconInit();
  initSearchInput();
  initMmenu();
};
