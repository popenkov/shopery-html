import ready from "../../js/utils/documentReady.js";

ready(function () {
  const checkoutPage = document.querySelector(".checkout-page");
  if (!checkoutPage) {
    return;
  }

  const showAddAdressCheckbox = checkoutPage.querySelector(".js-checkout-show-address input");
  const addAddressContainer = checkoutPage.querySelector(".js-checkout-shipping-address");

  showAddAdressCheckbox.addEventListener("change", () => {
    const isChecked = showAddAdressCheckbox.checked;
    isChecked
      ? addAddressContainer.classList.add("opened")
      : addAddressContainer.classList.remove("opened");
  });
});
