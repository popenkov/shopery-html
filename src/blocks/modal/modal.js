import ready from "../../js/utils/documentReady.js";
import HystModal from "../../../node_modules/hystmodal/dist/hystmodal.esm.js";

ready(function () {
  window.myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    catchFocus: true,
    waitTransitions: true,
  });
});
