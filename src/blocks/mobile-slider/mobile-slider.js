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
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        effect: "fade",
        pagination: {
          el: ".mobile-slider__pagination",
          clickable: true,
        },
      });
    };
    initSlider();
    window.addEventListener("resize", () => {
      if (mobileBreakpoint.matches) {
        if (slider === "undefined" || slider?.destroyed) {
          initSlider();
        }
      } else {
        slider.destroy();
      }
    });
  }
});