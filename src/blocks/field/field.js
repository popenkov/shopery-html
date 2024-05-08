import ready from "../../js/utils/documentReady.js";

ready(function () {
  const field = document.querySelector(".field");
  if (!field) {
    return;
  }

  // password field
  const showPassButtonClass = ".js-show-password-button";
  document.addEventListener("click", (evt) => {
    if (evt.target.closest(showPassButtonClass)) {
      evt.preventDefault();
      const currentButton = evt.target.closest(showPassButtonClass);
      const currentField = currentButton.previousSibling;
      currentField.type = currentField.type === "password" ? "text" : "password";
    }
  });
});
