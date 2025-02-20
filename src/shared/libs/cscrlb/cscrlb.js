export const initCscrlb = () => {
  if (!$(".cscrlb-scrollable").length) return

  (function ($) {
    var pluginName = "cscrlb";
  
    function Plugin(element, options) {
      var el = element;
      var $el = $(element);
      var $scrollContentEl;
      var $contentEl = $el.find(".cscrlb-content");
      var $scrollbarEl;
      var $dragHandleEl;
      var dragOffset;
      var flashTimeout;
      var pageJumpMultp = 7 / 8;
      var scrollDirection = "vert";
      var scrollOffsetAttr = "scrollTop";
      var sizeAttr = "height";
      var offsetAttr = "top";
      options = $.extend({}, $.fn[pluginName].defaults, options);
  
      window.onload = function () {
        $contentEl.focus();
      };
  
      function init() {
        if ($el.hasClass("horizontal")) {
          scrollDirection = "horiz";
          scrollOffsetAttr = "scrollLeft";
          sizeAttr = "width";
          offsetAttr = "left";
        }
  
        $el.prepend('<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>');
        $scrollbarEl = $el.find(".cscrlb-scrollbar");
        $dragHandleEl = $el.find(".drag-handle");
  
        if (options.wrapContent) {
          $contentEl.wrap('<div class="cscrlb-scroll-content" />');
        }
  
        $scrollContentEl = $el.find(".cscrlb-scroll-content");
        resizeScrollContent();
  
        if (options.autoHide) {
          $el.on("mouseenter", flashScrollbar);
        }
  
        $dragHandleEl.on("mousedown", startDrag);
        $scrollbarEl.on("mousedown", jumpScroll);
        $scrollContentEl.on("scroll", onScrolled);
        resizeScrollbar();
        $(window).on("resize", function () {
          recalculate();
        });
  
        if (!options.autoHide) {
          showScrollbar();
        }
      }
  
      function startDrag(e) {
        e.preventDefault();
        var eventOffset = e.pageY;
  
        if (scrollDirection === "horiz") {
          eventOffset = e.pageX;
        }
  
        dragOffset = eventOffset - $dragHandleEl.offset()[offsetAttr];
        $(document).on("mousemove", drag);
        $(document).on("mouseup", endDrag);
      }
  
      function drag(e) {
        e.preventDefault();
        var eventOffset = e.pageY;
  
        if (scrollDirection === "horiz") {
          eventOffset = e.pageX;
        }
  
        var dragPos = eventOffset - $scrollbarEl.offset()[offsetAttr] - dragOffset;
        var dragPerc = dragPos / $scrollbarEl[sizeAttr]();
        var scrollPos = dragPerc * $contentEl[sizeAttr]();
        $scrollContentEl[scrollOffsetAttr](scrollPos);
      }
  
      function endDrag() {
        $(document).off("mousemove", drag);
        $(document).off("mouseup", endDrag);
      }
  
      function jumpScroll(e) {
        if (e.target === $dragHandleEl[0]) {
          return;
        }
  
        var jumpAmt = pageJumpMultp * $scrollContentEl[sizeAttr]();
        var eventOffset = scrollDirection === "vert" ? e.originalEvent.layerY : e.originalEvent.layerX;
        var dragHandleOffset = $dragHandleEl.position()[offsetAttr];
        var scrollPos =
          eventOffset < dragHandleOffset
            ? $scrollContentEl[scrollOffsetAttr]() - jumpAmt
            : $scrollContentEl[scrollOffsetAttr]() + jumpAmt;
        $scrollContentEl[scrollOffsetAttr](scrollPos);
      }
  
      function onScrolled(e) {
        flashScrollbar();
      }
  
      function resizeScrollbar() {
        var contentSize = $contentEl[sizeAttr]();
        var scrollOffset = $scrollContentEl[scrollOffsetAttr](); // scrollTop() か scrollLeft()
  
        var scrollbarSize = $scrollbarEl[sizeAttr]();
        var scrollbarRatio = scrollbarSize / contentSize;
        var handleOffset = Math.round(scrollbarRatio * scrollOffset);
        /* + 2; */
  
        var handleSize = Math.floor(scrollbarRatio * (scrollbarSize + 2));
        /*  - 2)) - 2; */
  
        if (scrollbarSize < contentSize) {
          if (scrollDirection === "vert") {
            $dragHandleEl.css({
              top: handleOffset,
              height: handleSize,
            });
          } else {
            $dragHandleEl.css({
              left: handleOffset,
              width: handleSize,
            });
          }
  
          $scrollbarEl.show();
        } else {
          $scrollbarEl.hide();
        }
      }
  
      function flashScrollbar() {
        resizeScrollbar();
        showScrollbar();
      }
  
      function showScrollbar() {
        $dragHandleEl.addClass("visible");
  
        if (!options.autoHide) {
          return;
        }
  
        if (typeof flashTimeout === "number") {
          window.clearTimeout(flashTimeout);
        }
  
        flashTimeout = window.setTimeout(function () {
          hideScrollbar();
        }, 1000);
      }
  
      function hideScrollbar() {
        $dragHandleEl.removeClass("visible");
  
        if (typeof flashTimeout === "number") {
          window.clearTimeout(flashTimeout);
        }
      }
  
      function resizeScrollContent() {
        if (scrollDirection === "vert") {
          $scrollContentEl.width($el.width() + scrollbarWidth());
          $scrollContentEl.height($el.height());
        } else {
          $scrollContentEl.width($el.width());
          $scrollContentEl.height($el.height() + scrollbarWidth());
          $contentEl.height($el.height());
        }
      }
  
      function scrollbarWidth() {
        var tempEl = $(
          '<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'
        );
        $("body").append(tempEl);
        var width = $(tempEl).innerWidth();
        var widthMinusScrollbars = $("div", tempEl).innerWidth();
        tempEl.remove();
  
        if (width === widthMinusScrollbars && navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
          return 17;
        }
  
        return width - widthMinusScrollbars;
      }
  
      function recalculate() {
        resizeScrollContent();
        resizeScrollbar();
      }
  
      function option(key, val) {
        if (val) {
          options[key] = val;
        } else {
          return options[key];
        }
      }
  
      function destroy() {
        $contentEl.insertBefore($scrollbarEl);
        $scrollbarEl.remove();
        $scrollContentEl.remove();
        $contentEl.css({
          height: $el.height() + "px",
          "overflow-y": "scroll",
        });
        hook("onDestroy");
        $el.removeData("plugin_" + pluginName);
      }
  
      function hook(hookName) {
        if (options[hookName] !== undefined) {
          options[hookName].call(el);
        }
      }
  
      init();
      return {
        option: option,
        destroy: destroy,
        recalculate: recalculate,
      };
    }
  
    $.fn[pluginName] = function (options) {
      if (typeof arguments[0] === "string") {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function () {
          if (
            $.data(this, "plugin_" + pluginName) &&
            typeof $.data(this, "plugin_" + pluginName)[methodName] === "function"
          ) {
            returnVal = $.data(this, "plugin_" + pluginName)[methodName].apply(this, args);
          } else {
            throw new Error(" " + methodName + " " + pluginName);
          }
        });
  
        if (returnVal !== undefined) {
          return returnVal;
        } else {
          return this;
        }
      } else if (_typeof(options) === "object" || !options) {
        return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
          }
        });
      }
    };
  
    $.fn[pluginName].defaults = {
      onInit: function onInit() {},
      onDestroy: function onDestroy() {},
      wrapContent: true,
      autoHide: false,
    };
  })(jQuery);
  
  $(function () {
    $(".cscrlb-scrollable").cscrlb();
  });
}