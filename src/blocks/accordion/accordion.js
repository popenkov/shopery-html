import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordion = document.querySelector(".accordion");

  if (accordion) {
    const accordionBtns = accordion.querySelectorAll(".accordion__button");

    const handleaccordionBtnClick = (btn) => {
      btn.classList.toggle("is-open");

      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    accordionBtns.forEach((btn) => {
      btn.addEventListener("click", () => handleaccordionBtnClick(btn));
    });
  }
});
