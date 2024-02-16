import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordeon = document.querySelector(".accordeon");

  if (accordeon) {
    const accordeonBtns = accordeon.querySelectorAll(".accordeon__button");

    const handleAccordeonBtnClick = (btn) => {
      btn.classList.toggle("is-open");

      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    accordeonBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleAccordeonBtnClick(btn));
    });
  }
});
