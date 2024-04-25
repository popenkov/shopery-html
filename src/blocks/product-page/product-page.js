import ready from "../../js/utils/documentReady.js";

ready(function () {
  const productPage = document.querySelector(".product-page");

  if (!productPage) {
    return;
  }

  const showAllReviewsButton = productPage.querySelector(".js-show-all-reviews-button");
  const reviewsContainer = productPage.querySelector(".js-reviews-container");

  const handleReviewsBtnClick = () => {
    reviewsContainer.classList.toggle("show-all");
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
