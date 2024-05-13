$(document).ready(() => {
  const keypressSliders = $(".range-slider");
  $(keypressSliders).each(function (index, keypressSlider) {
    const field_name = $(keypressSlider).data("name");
    const input0 = document.getElementById("id_" + field_name + "_0");
    const input1 = document.getElementById("id_" + field_name + "_1");
    const inputs = [input0, input1];

    const startVal = input0 ? parseInt(input0.dataset.currentValue) : undefined;
    const endVal = input1 ? parseInt(input1.dataset.currentValue) : undefined;
    const minVal = input0 ? parseInt(input0.dataset.minValue) : undefined;
    const maxVal = input1 ? parseInt(input1.dataset.maxValue) : undefined;

    let postfix = "";

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
      let r = [null, null];
      r[i] = value;
      keypressSlider.noUiSlider.set(r);
    } // Listen to keydown events on the input field.

    inputs.forEach(function (input, handle) {
      if (input === null) return;
      input.addEventListener("change", function () {
        setSliderHandle(handle, this.value);
      });
      input.addEventListener("keydown", function (e) {
        let values = keypressSlider.noUiSlider.get();
        let value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

        let steps = keypressSlider.noUiSlider.steps(); // [down, up]

        let step = steps[handle];
        let position; // 13 is enter,
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
});
