import JustValidate from "just-validate";

// todo не подключается скрипт страницы через сборщик
export const initRegistrationScripts = () => {
  const registrationPage = document.querySelector(".registration");
  if (!registrationPage) {
    return;
  }

  const registrationForm = registrationPage.querySelector(".js-registration-form");
  const formInputs = registrationForm.querySelectorAll("input");

  const validate = new JustValidate(registrationForm, {
    lockForm: true,
  });

  validate
    .addField("#register-email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#register-password", [
      {
        rule: "required",
      },
      {
        rule: "password",
      },
    ])
    .addField("#register-confirm-password", [
      {
        rule: "required",
      },
      {
        validator: (value, fields) => {
          if (fields["#register-password"] && fields["#register-password"].elem) {
            const repeatPasswordValue = fields["#register-password"].elem.value;

            return value === repeatPasswordValue;
          }

          return true;
        },
        errorMessage: "Passwords should be the same",
      },
    ])
    .addField(
      "#register-accept-terms",
      [
        {
          rule: "required",
        },
      ],
      { errorsContainer: registrationForm.querySelector("#registration-checkbox-error") },
    );

  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      validate.revalidateField(`#${input.getAttribute("id")}`);
    });
  });

  registrationForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const isFormValid = validate.isValid;
    if (isFormValid) {
      console.log("form sent");
    }
  });
};
