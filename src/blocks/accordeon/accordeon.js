import ready from "../../js/utils/documentReady.js";

ready(function () {
  const accordeon = document.querySelector(".accordeon");

  if (accordeon) {
    const accordeonBtns = accordeon.querySelectorAll(".accordeon__button");

    // todo
    const closeAllAccordeons = () => {
      accordeonBtns.forEach((btn) => {
        btn.classList.remove("is-open");
        const content = btn.nextElementSibling;
        content.style.maxHeight = null;
      });
    };

    const handleAccordeonBtnClick = (btn) => {
      // closeAllAccordeons();

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
