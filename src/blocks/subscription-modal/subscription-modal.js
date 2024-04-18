import Cookies from "js-cookie";
import ready from "../../js/utils/documentReady.js";

ready(function () {
  const subscriptionModal = document.querySelector(".subscription-modal");
  if (Cookies.get("show-subscription-modal") || !subscriptionModal) {
    return;
  }
  window.myModal.open("#emailSubscription");
  const form = subscriptionModal.querySelector(".js-subscription-modal-form");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    Cookies.set("show-subscription-modal", true);
    window.myModal.close();
  });

  const showCheckbox = subscriptionModal.querySelector(".js-subscribe-show-checkbox input");
  showCheckbox.addEventListener("change", (evt) => {
    evt.preventDefault();
    const isChecked = showCheckbox.checked;
    isChecked
      ? Cookies.set("show-subscription-modal", true)
      : Cookies.remove("show-subscription-modal");
  });
});
