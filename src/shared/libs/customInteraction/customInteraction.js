import { _classCallCheck, _createForOfIteratorHelper } from "../utils/utils";

export const initCustomInteraction = () => {
  var СustomInteraction = function СustomInteraction() {
    var _this2 = this;
  
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
    _classCallCheck(this, СustomInteraction);
  
    this.targets = options.targets;
    this.touchendDelay = options.touchendDelay || 100; //ms
  
    var events = function events(event) {
      var $targets = [];
      $targets[0] = event.target !== document ? event.target.closest(_this2.targets) : null;
      var $element = $targets[0],
        i = 0;
  
      while ($targets[0]) {
        $element = $element.parentNode;
  
        if ($element !== document) {
          if ($element.matches($targets.value)) {
            i++;
            $targets[i] = $element;
          }
        } else {
          break;
        }
      } //touchstart
  
      if (event.type == "touchstart") {
        _this2.touched = true;
        if (_this2.timeout) clearTimeout(_this2.timeout);
  
        if ($targets[0]) {
          var _iterator = _createForOfIteratorHelper($targets),
            _step;
  
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var $target = _step.value;
              $target.setAttribute("data-touch", "");
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      //touchend
      else if (event.type == "touchend" || (event.type == "contextmenu" && _this2.touched)) {
        _this2.timeout = setTimeout(function () {
          _this2.touched = false;
        }, _this2.touchendDelay);
  
        if ($targets[0]) {
          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper($targets),
              _step2;
  
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _$target = _step2.value;
  
                _$target.removeAttribute("data-touch");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, _this2.touchendDelay);
        }
      } //mouseenter
  
      if (event.type == "mouseenter" && !_this2.touched && $targets[0] && $targets[0] == event.target) {
        $targets[0].setAttribute("data-hover", "");
      }
      //mouseleave
      else if (event.type == "mouseleave" && !_this2.touched && $targets[0] && $targets[0] == event.target) {
        $targets[0].removeAttribute("data-click");
        $targets[0].removeAttribute("data-hover");
      } //mousedown
  
      if (event.type == "mousedown" && !_this2.touched && $targets[0]) {
        $targets[0].setAttribute("data-click", "");
      }
      //mouseup
      else if (event.type == "mouseup" && !_this2.touched && $targets[0]) {
        $targets[0].removeAttribute("data-click");
      }
    };
  
    document.addEventListener("touchstart", events);
    document.addEventListener("touchend", events);
    document.addEventListener("mouseenter", events, true);
    document.addEventListener("mouseleave", events, true);
    document.addEventListener("mousedown", events);
    document.addEventListener("mouseup", events);
    document.addEventListener("contextmenu", events);
  };
  
  new СustomInteraction({
    targets: "a, button, [data-custom-interaction], .image-zoom",
  });
}

