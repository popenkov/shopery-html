import ready from "../../js/utils/documentReady.js";

ready(function () {
  const header = document.querySelector(".header");

  if (header) {
    const mobileMenuBtn = header.querySelector(".js-mobile-menu-btn"); //

    mobileMenuBtn.addEventListener("click", (evt) => {
      console.log("click");
    });
  }
});
