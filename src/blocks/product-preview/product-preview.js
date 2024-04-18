import ready from "../../js/utils/documentReady.js";

ready(function () {
  const itemPreview = document.querySelector(".product-preview");

  if (itemPreview) {
    window.myModal.open("#productPreview");
  }
});
