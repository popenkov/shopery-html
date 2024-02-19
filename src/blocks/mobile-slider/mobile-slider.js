import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import ready from "../../js/utils/documentReady.js";
import { MOBILE_SLIDER_BREAKPOINT } from "../../js/constants.js";

ready(function () {
  const mobileSlider = document.querySelector(".js-mobile-slider");
  if (mobileSlider) {
    const mobileBreakpoint = window.matchMedia(MOBILE_SLIDER_BREAKPOINT);
    let slider;
    const initSlider = () => {
      slider = new Swiper(".js-mobile-slider", {
        modules: [Pagination],
        spaceBetween: 20,
        loop: true,
        // todo
        // slidesOffsetBefore: 20,
        // slidesOffsetAfter: 20,

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          576: {
            slidesPerView: 2,
          },
        },
        pagination: {
          el: ".mobile-slider__pagination",
          clickable: true,
        },
      });
    };
    initSlider();
    // todo  разобраться с инициализацией при ресайзе. скорее всего ломается, потому что слайдеров несколько
    window.addEventListener("resize", () => {
      if (mobileBreakpoint.matches) {
        if (slider === "undefined" || slider?.destroyed) {
          initSlider();
        }
      } else {
        if (slider.length > 1) {
          slider.forEach((item) => item.destroy());
        } else {
          slider.destroy();
        }
      }
    });
  }
});
