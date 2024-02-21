import ready from "../../js/utils/documentReady.js";

ready(function () {
  const videoSection = document.querySelector(".video");
  if (videoSection) {
    const videoURL = videoSection.dataset.video;
    const previewContainer = document.querySelector(".js-video-preview");
    const playButton = document.querySelector(".js-video-play-button");

    playButton.addEventListener("click", () => {
      previewContainer.innerHTML = `<iframe class="video__iframe" src="${videoURL}?autoplay=1&mute=1" frameborder="0" allowfullscreen allow='autoplay'></iframe>`;

      previewContainer.style.removeProperty("background-image");
      previewContainer.classList.remove("with-overlay");
    });
  }
});
