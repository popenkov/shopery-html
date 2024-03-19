import rangeSlider from "range-slider-input";
import ready from "../../js/utils/documentReady.js";

ready(function () {
  const sliderNodes = document.querySelectorAll(".js-range-input");

  if (sliderNodes?.length) {
    const initRangeSlider = (slider) => {
      const sliderParentcontainer = slider.parentNode;
      const sliderTextContainer = sliderParentcontainer.querySelector(".range-input__text-value");

      const minValue = sliderParentcontainer.dataset.min;
      const maxValue = sliderParentcontainer.dataset.max;

      const updatePriceValue = (value) => {
        const textValue = value.join(" - ");
        sliderTextContainer.textContent = textValue;
      };

      updatePriceValue([minValue, maxValue]);
      const rangeOptions = {
        min: minValue,
        max: maxValue,
        step: 1,
        value: [minValue, maxValue],
        onThumbDragEnd: () => {
          const currentValue = rangeSliderElement.value();
          updatePriceValue(currentValue);
        },
      };

      const rangeSliderElement = rangeSlider(slider, rangeOptions);
    };

    sliderNodes.forEach((slider) => {
      initRangeSlider(slider);
    });
  }
});
