import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import ready from "../../js/utils/documentReady.js";

ready(function () {
  const heroSlider = document.querySelector(".js-hero-slider");
  if (heroSlider) {
    /* eslint-disable-next-line */
    const slider = new Swiper(".js-hero-slider", {
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      effect: "fade",
      speed: 800,
      fadeEffect: {
        crossFade: true,
      },
      // todo
      // autoplay: {
      //   delay: 2000,
      // },
      loop: true,
      pagination: {
        el: ".hero__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero__navigation-button--next",
        prevEl: ".hero__navigation-button--prev",
      },
    });
  }
});
