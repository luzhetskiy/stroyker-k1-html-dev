$(document).ready(function() {
    $('.reveal').each(function() {
        var _this = $(this),
            reveal_delay = _this.attr('data-reveal-delay');
        setTimeout(function () {
            _this.addClass('item-revealed')
        }, reveal_delay);        
    });  
});