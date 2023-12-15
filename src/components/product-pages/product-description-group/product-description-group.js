$(document).ready(() => {
  const collapse = $(".product-description-group__collapse");
  const collapseChildren = collapse.children();
  let collapseChildrenHeight = 0;

  for (const child of collapseChildren) {
    collapseChildrenHeight += $(child).height();
  }

  if (collapseChildrenHeight > 85) return;

  collapse.addClass("product-description-group__collapse_inactive");
  $(".product-description-group__button").addClass("d-none");
});
