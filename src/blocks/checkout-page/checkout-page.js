import ready from "../../js/utils/documentReady.js";

import JustValidate from "just-validate";
import { handleIsPhoneCheck, initPhoneMasks } from "../../js/utils/form.js";

ready(function () {
  const checkoutPage = document.querySelector(".checkout-page");
  if (!checkoutPage) {
    return;
  }

  const showAddAdressCheckbox = checkoutPage.querySelector(".js-checkout-show-address");
  const addAddressContainer = checkoutPage.querySelector(".js-checkout-shipping-address");

  showAddAdressCheckbox.addEventListener("change", () => {
    const isChecked = showAddAdressCheckbox.checked;
    isChecked
      ? addAddressContainer.classList.add("opened")
      : addAddressContainer.classList.remove("opened");
  });

  const checkoutForm = checkoutPage.querySelector(".js-checkout-form");
  const formInputs = checkoutForm.querySelectorAll("input");

  initPhoneMasks();

  const validate = new JustValidate(checkoutForm);

  validate

    .addField("#firstName", [
      {
        rule: "required",
        errorMessage: "Введите корректное значение",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Значение должно содержать больше 2 символов",
      },
    ])
    .addField("#lastName", [
      {
        rule: "required",
        errorMessage: "Введите корректное значение",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Значение должно содержать больше 2 символов",
      },
    ])
    .addField("#phone", [
      {
        rule: "function",
        validator: handleIsPhoneCheck,
        errorMessage: "Введите корректный номер телефона",
      },
    ]);

  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      validate.revalidateField(`#${input.getAttribute("id")}`);
    });
  });

  checkoutForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const isFormValid = validate.isValid;
    if (isFormValid) {
    }
  });
});
