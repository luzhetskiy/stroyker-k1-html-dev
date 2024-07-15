import { initBooking } from "./booking/model";
import { productCartSlideShowInit } from "./product-teasers/model/product-card-slideshow";

export const initComponents = () => {
  initBooking();
  productCartSlideShowInit();
};
