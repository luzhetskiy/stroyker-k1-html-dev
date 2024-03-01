$(() => {
  const customCollapseSetup = () => {
    Array.from($("[data-custom-collapse]")).forEach(element => {
      const collapse = $(element)
      const collapseId = collapse.attr("data-custom-collapse");
      const collapseChildren = collapse.children();
      let collapseChildrenHeight = 0;

      for (const child of collapseChildren) {
        collapseChildrenHeight += $(child).height();
      }
  
      if (collapseChildrenHeight > 85) return;
  
      collapse.attr("data-custom-collapse-inactive", '');
      $(`[data-custom-collapse-open="${collapseId}"]`).addClass("d-none");
      $(`[data-custom-collapse-close="${collapseId}"]`).addClass("d-none");
    })
  };
  customCollapseSetup();

  $("[data-custom-collapse-open]").on("click", (event) => {
    const target = $(event.currentTarget)
    const id = target.attr("data-custom-collapse-open");
    target.addClass('d-none')
    $(`[data-custom-collapse-close="${id}"]`).removeClass("d-none");
  });

  $("[data-custom-collapse-close]").on("click", (event) => {
    const target = $(event.currentTarget)
    const id = target.attr("data-custom-collapse-close");
    target.addClass('d-none')
    $(`[data-custom-collapse-open="${id}"]`).toggleClass("d-none");
  });
});
