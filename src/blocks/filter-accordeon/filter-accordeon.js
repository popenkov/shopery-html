import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordeon = document.querySelector(".filter-accordeon");

  if (accordeon) {
    const accordeonBtns = accordeon.querySelectorAll(".filter-accordeon__button");
    const ACCORDEON_CONTENT_PADDING_SIZE = 26;
    const handleAccordeonBtnClick = (btn) => {
      btn.classList.toggle("is-open");

      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + ACCORDEON_CONTENT_PADDING_SIZE + "px";
      }
    };
    accordeonBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleAccordeonBtnClick(btn));
    });
  }
});
