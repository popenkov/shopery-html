import ready from "../../js/utils/documentReady.js";

import JustValidate from "just-validate";
import { handleIsPhoneCheck, initPhoneMasks } from "../../js/utils/form.js";

ready(function () {
  const checkoutPage = document.querySelector(".checkout-page");
  if (!checkoutPage) {
    return;
  }

  const checkoutForm = checkoutPage.querySelector(".js-checkout-form");
  const formInputs = checkoutForm.querySelectorAll("input");
  const showAddAdressCheckbox = checkoutPage.querySelector(".js-checkout-show-address");
  const addAddressContainer = checkoutPage.querySelector(".js-checkout-shipping-address");

  initPhoneMasks();

  const validate = new JustValidate(checkoutForm, {
    lockForm: true,
  });

  validate
    .addField("#firstName", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#lastName", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#addressStreet", [
      {
        rule: "required",
      },
    ])
    .addField("#addressCountry", [
      {
        rule: "required",
      },
    ])
    .addField("#addressState", [
      {
        rule: "required",
      },
    ])
    .addField("#addressZip", [
      {
        rule: "required",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#phone", [
      {
        rule: "function",
        validator: handleIsPhoneCheck,
      },
    ]);

  showAddAdressCheckbox.addEventListener("change", () => {
    const isChecked = showAddAdressCheckbox.checked;
    if (isChecked) {
      addAddressContainer.classList.add("opened");
      validate
        .addField("#shippingAddressStreet", [
          {
            rule: "required",
          },
        ])
        .addField("#shippingAddressCountry", [
          {
            rule: "required",
          },
        ])
        .addField("#shippingAddressStates", [
          {
            rule: "required",
          },
        ])
        .addField("#shippingAddressZipCode", [
          {
            rule: "required",
          },
        ]);
    } else {
      addAddressContainer.classList.remove("opened");
      validate
        .removeField("#shippingAddressStreet", [
          {
            rule: "required",
          },
        ])
        .removeField("#shippingAddressCountry", [
          {
            rule: "required",
          },
        ])
        .removeField("#shippingAddressStates", [
          {
            rule: "required",
          },
        ])
        .removeField("#shippingAddressZipCode", [
          {
            rule: "required",
          },
        ]);
    }
  });

  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      validate.revalidateField(`#${input.getAttribute("id")}`);
    });
  });

  checkoutForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const isFormValid = validate.isValid;
    if (isFormValid) {
      console.log("form sent");
    }
  });
});
