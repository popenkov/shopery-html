import ready from "../../js/utils/documentReady.js";

ready(function () {
  const productPage = document.querySelector(".product-page");

  if (!productPage) {
    return;
  }
  const tabPanes = productPage.querySelector(".tabs__panes");
  const showAllReviewsButton = productPage.querySelector(".js-show-all-reviews-button");
  const reviewsContainer = productPage.querySelector(".js-reviews-container");

  const updateTabContentHeight = () => {
    const tabContent = showAllReviewsButton.closest(".js-tab-content");
    if (!tabContent) {
      return;
    }
    const tabContentHeight = tabContent.clientHeight;
    tabPanes.style.height = tabContentHeight + "px";
  };

  const handleReviewsBtnClick = () => {
    reviewsContainer.classList.toggle("show-all");
    updateTabContentHeight();
    const buttonText = reviewsContainer.classList.contains("show-all")
      ? "Hide reviews"
      : "Load More";
    showAllReviewsButton.innerHTML = `<span>${buttonText}</span>`;

    if (!reviewsContainer.classList.contains("show-all")) {
      reviewsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  showAllReviewsButton.addEventListener("click", handleReviewsBtnClick);
});
