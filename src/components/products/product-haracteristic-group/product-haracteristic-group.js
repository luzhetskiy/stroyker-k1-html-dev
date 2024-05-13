$(document).ready(() => {
  const collapse = $(".product-haracteristic-group__collapse");
  const collapseChildren = collapse.children();
  let collapseChildrenHeight = 0;

  for (const child of collapseChildren) {
    collapseChildrenHeight += $(child).height();
  }

  if (collapseChildrenHeight > 85) return;

  collapse.addClass("product-haracteristic-group_inactive");
  $(".product-haracteristic-group__button").addClass("d-none");
});
