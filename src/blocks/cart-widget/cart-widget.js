import ready from "../../js/utils/documentReady.js";

ready(function () {
  const cartWidget = document.querySelector(".cart-widget");
  if (!cartWidget) {
    return;
  }

  const minusButton = cartWidget.querySelector(".js-quantity-minus");
  const plusButton = cartWidget.querySelector(".js-quantity-plus");
  const quantityInput = cartWidget.querySelector(".js-quantity-input");

  minusButton.addEventListener("click", () => {
    const newQuantity = parseInt(quantityInput.value) - 1;
    if (newQuantity >= 1) {
      quantityInput.value = newQuantity;
      quantityInput.style.width = `${quantityInput.scrollWidth}px`;
    }
  });

  plusButton.addEventListener("click", () => {
    const newQuantity = parseInt(quantityInput.value) + 1;
    quantityInput.value = newQuantity;
    quantityInput.style.width = `${quantityInput.scrollWidth}px`;
  });

  // quantityInput.addEventListener("change", () => {
  //   console.log("input");
  //   quantityInput.style.width = `${quantityInput.scrollWidth}px`;
  // });
});
