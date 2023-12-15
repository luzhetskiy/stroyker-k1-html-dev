var keypressSliders = $(".range-slider");
$(keypressSliders).each(function (index, keypressSlider) {
  var field_name = $(keypressSlider).data("name");
  var input0 = document.getElementById("id_" + field_name + "_0");
  var input1 = document.getElementById("id_" + field_name + "_1");
  var inputs = [input0, input1];

  if (input0 && input1) {
    var startVal = parseInt(input0.dataset.currentValue),
      endVal = parseInt(input1.dataset.currentValue);
    var minVal = parseInt(input0.dataset.minValue),
      maxVal = parseInt(input1.dataset.maxValue);
  }

  var postfix = "";

  if (field_name == "price_range") {
    postfix = " ₽";
  }

  if (typeof noUiSlider !== "undefined") {
    noUiSlider.create(keypressSlider, {
      start: [startVal, endVal],
      connect: true,
      range: {
        min: minVal,
        max: maxVal,
      },
      format: wNumb({
        decimals: 0,
        thousand: " ",
        postfix: postfix,
      }),
      step: 1,
    });
  }

  if (keypressSlider !== null && keypressSlider.noUiSlider) {
    keypressSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = values[handle];
    });
  }

  function setSliderHandle(i, value) {
    var r = [null, null];
    r[i] = value;
    keypressSlider.noUiSlider.set(r);
  } // Listen to keydown events on the input field.

  inputs.forEach(function (input, handle) {
    if (input === null) return;
    input.addEventListener("change", function () {
      setSliderHandle(handle, this.value);
    });
    input.addEventListener("keydown", function (e) {
      var values = keypressSlider.noUiSlider.get();
      var value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

      var steps = keypressSlider.noUiSlider.steps(); // [down, up]

      var step = steps[handle];
      var position; // 13 is enter,
      // 38 is key up,
      // 40 is key down.

      switch (e.which) {
        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:
          // Get step to go increase slider value (up)
          position = step[1]; // false = no step is set

          if (position === false) {
            position = 1;
          } // null = edge of slider

          if (position !== null) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:
          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });
});
