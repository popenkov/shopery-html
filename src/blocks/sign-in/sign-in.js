import JustValidate from "just-validate";

// todo не подключается скрипт страницы через сборщик
export const initSignInScripts = () => {
  const signinPage = document.querySelector(".sign-in");
  if (!signinPage) {
    return;
  }

  const signinForm = signinPage.querySelector(".js-signin-form");
  const formInputs = signinForm.querySelectorAll("input");

  const validate = new JustValidate(signinForm, {
    lockForm: true,
  });

  validate
    .addField("#signin-email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#signin-password", [
      {
        rule: "required",
      },
    ]);

  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      validate.revalidateField(`#${input.getAttribute("id")}`);
    });
  });

  signinForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const isFormValid = validate.isValid;
    if (isFormValid) {
      console.log("form sent");
    }
  });
};
