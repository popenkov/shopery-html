import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";

import ready from "../../js/utils/documentReady.js";

ready(function () {
  const cardSlider = document.querySelector(".card-slider");

  if (cardSlider) {
    const thumbsContainer = cardSlider.querySelector(".js-product-slider-thumb");

    // eslint-disable-next-line no-unused-vars
    const galleryThumbs = new Swiper(".js-product-slider-thumb", {
      modules: [Navigation],
      direction: "vertical",
      spaceBetween: 8,
      slidesPerView: "auto",
      freeMode: true,

      navigation: {
        nextEl: ".js-card-slider-navigation-next",
        prevEl: ".js-card-slider-navigation-prev",
      },
      on: {
        init: function (data) {
          const { slides } = data;
          if (slides.length > 6) {
            thumbsContainer.classList.add("has-gradient--after");
          }
        },
      },
    });

    galleryThumbs.on("progress", function (data) {
      const { isEnd, isBeginning } = data;
      if (isEnd) {
        thumbsContainer.classList.remove("has-gradient--after");
      } else {
        thumbsContainer.classList.add("has-gradient--after");
      }

      if (isBeginning) {
        thumbsContainer.classList.remove("has-gradient--before");
      } else {
        thumbsContainer.classList.add("has-gradient--before");
      }
    });

    // eslint-disable-next-line no-unused-vars
    const galleryMain = new Swiper(".js-product-slider-main", {
      modules: [Navigation, Thumbs],

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: "auto",
          spaceBetween: 16,
        },
        // when window width is >= 480px
        724: {
          slidesPerView: "auto",
          spaceBetween: 16,
        },
        // when window width is >= 640px
        1168: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
        slideThumbActiveClass: "card-slider__thumb-slide--active",
      },
    });
  }
});
