import ready from "../../js/utils/documentReady.js";

ready(function () {
  const asideFilter = document.querySelector(".aside-filter");
  if (asideFilter) {
    const filterButton = asideFilter.querySelector(".js-filter-button");
    const filterMenu = asideFilter.querySelector(".js-filter-menu");
    const closeButton = asideFilter.querySelector(".js-filter-close-button");

    const handeMenuToggle = () => {
      filterMenu.classList.toggle("opened");
    };

    const handeMenuClose = () => {
      filterMenu.classList.remove("opened");
    };

    filterButton.addEventListener("click", handeMenuToggle);

    closeButton.addEventListener("click", handeMenuClose);

    window.addEventListener("resize", handeMenuClose);
  }
});
