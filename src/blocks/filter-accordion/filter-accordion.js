import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordion = document.querySelector(".filter-accordion");

  if (accordion) {
    const accordionBtns = accordion.querySelectorAll(".filter-accordion__button");
    const accordion_CONTENT_PADDING_SIZE = 26;
    const handleaccordionBtnClick = (btn) => {
      btn.classList.toggle("is-open");

      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + accordion_CONTENT_PADDING_SIZE + "px";
      }
    };
    accordionBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleaccordionBtnClick(btn));
    });
  }
});
