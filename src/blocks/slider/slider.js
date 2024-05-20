import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import ready from "../../js/utils/documentReady.js";

ready(function () {
  const slider = document.querySelector(".slider");

  if (slider) {
    // eslint-disable-next-line no-unused-vars
    const gallery = new Swiper(".js-slider", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 24,

      navigation: {
        nextEl: ".js-slider-navigation-next",
        prevEl: ".js-slider-navigation-prev",
      },
    });
  }
});
