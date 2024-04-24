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

    // cart widget
    const cartButton = header.querySelector(".js-header-cart-button");
    const cartWidget = document.querySelector(".js-cart-aside-widget");
    const closeWidgetButton = cartWidget.querySelector(".js-close-cart-widget");

    const handleCartWidgetToggle = () => {
      cartWidget.classList.toggle("opened");
      toggleBodyLock();
    };

    const handleCartWidgetClose = () => {
      cartWidget.classList.remove("opened");
      toggleBodyLock();
    };

    cartButton.addEventListener("click", handleCartWidgetToggle);
    closeWidgetButton.addEventListener("click", handleCartWidgetClose);
    cartWidget.addEventListener("click", (evt) => {
      console.log("evt.target ", evt.target);
      if (evt.target === cartWidget) {
        handleCartWidgetClose();
      }
    });
  }
});
