import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordion = document.querySelector(".filter-accordion");

  if (accordion) {
    const accordionBtns = accordion.querySelectorAll(".filter-accordion__button");
    const accordion_CONTENT_PADDING_SIZE = 26;
    const handleaccordionBtnClick = (btn) => {
      btn.classList.toggle("is-open");

      const isOpen = btn.classList.contains("is-open");

      const content = btn.nextElementSibling;

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + accordion_CONTENT_PADDING_SIZE + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    };

    accordionBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleaccordionBtnClick(btn));
    });
  }
});
