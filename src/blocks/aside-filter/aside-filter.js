import ready from "../../js/utils/documentReady.js";

ready(function () {
  const asideFilter = document.querySelector(".aside-filter");
  if (asideFilter) {
    const filterButton = asideFilter.querySelector(".js-filter-button");
    const filterMenu = asideFilter.querySelector(".js-filter-menu");
    const closeButton = asideFilter.querySelector(".js-filter-close-button");

    const handeMenuToggle = () => {
      filterMenu.classList.toggle("opened");
      document.body.classList.toggle("lock");
    };

    const handeMenuClose = () => {
      filterMenu.classList.remove("opened");
      document.body.classList.remove("lock");
    };

    filterButton.addEventListener("click", handeMenuToggle);

    filterMenu.addEventListener("click", (evt) => {
      if (evt.target === filterMenu) {
        handeMenuClose();
      }
    });

    closeButton.addEventListener("click", handeMenuClose);

    window.addEventListener("resize", handeMenuClose);
  }
});
