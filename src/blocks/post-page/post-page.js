import ready from "../../js/utils/documentReady.js";

ready(function () {
  const postPage = document.querySelector(".post-page");

  if (!postPage) {
    return;
  }

  const postCommentsWrapper = postPage.querySelector(".js-post-comments-container");
  const showAllCommentsButton = postPage.querySelector(".js-all-post-comments-button");

  const handleCommentsButtonClick = () => {
    postCommentsWrapper.classList.toggle("show-all");
    const buttonText = postCommentsWrapper.classList.contains("show-all")
      ? "Hide comments"
      : "Load More";
    showAllCommentsButton.innerHTML = `<span>${buttonText}</span>`;

    if (!postCommentsWrapper.classList.contains("show-all")) {
      postCommentsWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  showAllCommentsButton?.addEventListener("click", handleCommentsButtonClick);
});
