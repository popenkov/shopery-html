import { toggleBodyLock } from "../../js/bodyLock.js";
import ready from "../../js/utils/documentReady.js";

ready(function () {
  const header = document.querySelector(".header");

  if (header) {
    // categories menu
    const openCategoriesBtn = header.querySelector(".js-header-all-categories-button");
    const categoriesMenu = header.querySelector(".js-header-all-categories-content");

    const handleCategorieMenuToggle = () => {
      openCategoriesBtn.classList.toggle("open");
      categoriesMenu.classList.toggle("open");
    };

    openCategoriesBtn?.addEventListener("click", handleCategorieMenuToggle);

    // mobile menu
    const mobileMenu = header.querySelector(".js-mobile-menu");
    const mobileMenuBtn = header.querySelector(".js-mobile-menu-btn");
    const mobileMenuCloseBtn = mobileMenu.querySelector(".js-close-mobile-menu-btn");

    const openMenu = () => {
      mobileMenu.classList.add("open");
      toggleBodyLock();
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      toggleBodyLock();
    };

    mobileMenuBtn.addEventListener("click", openMenu);

    mobileMenuCloseBtn.addEventListener("click", closeMenu);
    mobileMenu.addEventListener("click", (evt) => {
      if (evt.target === mobileMenu) {
        closeMenu();
      }
    });
  }
});
