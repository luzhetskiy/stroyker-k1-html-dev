$(() => {
  $('[data-custom-collapse]').each((index, element) => {
    const currentElement = $(element)
    const height = currentElement.outerHeight()
    currentElement.attr('data-open-height', height)
    currentElement.css('height', 45)
  });
  
  $('[data-custom-collapse-toggle]').on('click', (event) => {
    const id = $(event.currentTarget).attr('data-custom-collapse-toggle')
    const collapse = $(`[data-custom-collapse="${id}"]`)
    const collapseHeight = collapse.attr('data-open-height')
    
    if( !collapse.attr('data-custom-collapse-open') ){
      collapse.animate({'height': collapseHeight}, 300)
        .attr('data-custom-collapse-open', '')
        .siblings('[data-custom-collapse-open]')
        .animate({'height': 45}, 300)
        .removeAttr('data-custom-collapse-open');
      return
    }
    collapse.animate({'height': 45}, 300).removeAttr('data-custom-collapse-open');
  });
});


// $(function() {
//   $('.accordion-item').each(function() {
//     var $self = $(this),
//         _height = $self.outerHeight();
  
//     $self.prop('_height', _height).css('height', 45);
//   });
  
//   $('.accordion-item-title').click(function() {
//     var $item = $(this).parents('.accordion-item'),
//         $item_height = $item.prop('_height');
    
//     if( !$item.hasClass('accordion-item--active') ){
//       $item.animate({'height': $item_height}, 300)
//            .addClass('accordion-item--active')
//            .siblings('.accordion-item--active')
//            .animate({'height': 45}, 300)
//            .removeClass('accordion-item--active');
//     }else{
//       $item.animate({'height': 45}, 300)
//            .removeClass('accordion-item--active');
//     };
//   });
// });



// $(() => {
//   const customCollapseSetup = () => {
//     Array.from($("[data-custom-collapse]")).forEach(element => {
//       const collapse = $(element)
//       const collapseId = collapse.attr("data-custom-collapse");
//       const collapseChildren = collapse.children();
//       let collapseChildrenHeight = 0;

//       for (const child of collapseChildren) {
//         collapseChildrenHeight += $(child).height();
//       }
  
//       if (collapseChildrenHeight > 85) return;
  
//       collapse.attr("data-custom-collapse-inactive", '');
//       $(`[data-custom-collapse-open="${collapseId}"]`).addClass("d-none");
//       $(`[data-custom-collapse-close="${collapseId}"]`).addClass("d-none");
//     })
//   };
//   customCollapseSetup();

//   $("[data-custom-collapse-open]").on("click", (event) => {
//     const target = $(event.currentTarget)
//     const id = target.attr("data-custom-collapse-open");
//     target.addClass('d-none')
//     $(`[data-custom-collapse-close="${id}"]`).removeClass("d-none");
//   });

//   $("[data-custom-collapse-close]").on("click", (event) => {
//     const target = $(event.currentTarget)
//     const id = target.attr("data-custom-collapse-close");
//     target.addClass('d-none')
//     $(`[data-custom-collapse-open="${id}"]`).toggleClass("d-none");
//   });
// });
