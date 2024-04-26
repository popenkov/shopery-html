import ready from "../../js/utils/documentReady.js";

ready(function () {
  const cartWidget = document.querySelector(".amount-actions");
  if (!cartWidget) {
    return;
  }

  const handleMinusButtonClick = (evt) => {
    const currentButton = evt.target.closest(".js-quantity-minus");
    const currentInput = currentButton
      .closest(".amount-actions")
      .querySelector(".js-quantity-input");
    const newQuantity = parseInt(currentInput.value) - 1;
    if (newQuantity >= 1) {
      currentInput.value = newQuantity;
      currentInput.style.width = `${currentInput.scrollWidth}px`;
    }
  };

  const handlePlusButtonClick = (evt) => {
    const currentButton = evt.target.closest(".js-quantity-plus");
    const currentInput = currentButton
      .closest(".amount-actions")
      .querySelector(".js-quantity-input");
    const newQuantity = parseInt(currentInput.value) + 1;
    if (newQuantity >= 1) {
      currentInput.value = newQuantity;
      currentInput.style.width = `${currentInput.scrollWidth}px`;
    }
  };

  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".js-quantity-minus")) {
      handleMinusButtonClick(evt);
    }

    if (evt.target.closest(".js-quantity-plus")) {
      handlePlusButtonClick(evt);
    }
  });
});
