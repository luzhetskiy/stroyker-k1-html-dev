$(() => {
  $('[data-collapse]').each((index, element) => {
    const collapse = $(element)
    const id = collapse.attr('data-collapse')
    const collapseChildren = collapse.children();
    let collapseChildrenHeight = 0;

    for (const child of collapseChildren) {
      collapseChildrenHeight += $(child).outerHeight(true);
    }
    if (collapseChildrenHeight <= 200) return

    collapse.attr('data-collapse-initialized', '')
    collapse.attr('data-open-height', collapseChildrenHeight)
    collapse.css('height', 200)
    $(`[data-collapse-open="${id}"], [data-collapse-toggle="${id}"]`).removeClass('d-none')
  });
  
  $('[data-collapse-toggle]').on('click', (event) => {
    const id = $(event.currentTarget).attr('data-collapse-toggle')
    const collapse = $(`[data-collapse="${id}"]`)
    const collapseHeight = collapse.attr('data-open-height')

    if( collapse.attr('data-collapse-active') === undefined ){
      collapse.animate({'height': collapseHeight}, 300)
        .attr('data-collapse-active', '')
        .siblings('[data-collapse-active]')
        .animate({'height': 200}, 300)
        .removeAttr('data-collapse-active');
      return
    }
    collapse.animate({'height': 200}, 300).removeAttr('data-collapse-active');
  });

  $('[data-collapse-open]').on('click', (event) => {
    const id = $(event.currentTarget).attr('data-collapse-open')
    const collapse = $(`[data-collapse="${id}"]`)
    const collapseHeight = collapse.attr('data-open-height')
    collapse.animate({'height': collapseHeight}, 300)
      .attr('data-collapse-active', '')
      .siblings('[data-collapse-active]')
      .animate({'height': 200}, 300)
      .removeAttr('data-collapse-active');
  });

  $('[data-collapse-close]').on('click', (event) => {
    const id = $(event.currentTarget).attr('data-collapse-close')
    const collapse = $(`[data-collapse="${id}"]`)
    collapse.animate({'height': 200}, 300).removeAttr('data-collapse-active');
  });

  $('[data-collapse-hiding-open]').on('click', (event) => {
    const target = $(event.currentTarget)
    const id = target.attr('data-collapse-hiding-open')
    const collapseClose = $(`[data-collapse-hiding-close="${id}"]`)
    target.addClass('d-none')
    collapseClose.removeClass('d-none')
  })

  $('[data-collapse-hiding-close]').on('click', (event) => {
    const target = $(event.currentTarget)
    const id = target.attr('data-collapse-hiding-close')
    const collapseOpen = $(`[data-collapse-hiding-open="${id}"]`)
    target.addClass('d-none')
    collapseOpen.removeClass('d-none')
  })
});