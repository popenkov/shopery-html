import ready from "../../js/utils/documentReady.js";
import HystModal from "../../../node_modules/hystmodal/dist/hystmodal.esm.js";

ready(function () {
  window.myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    catchFocus: true,
    waitTransitions: true,
    beforeOpen: function (modal) {
      console.log("Message before opening the modal");
      console.log(modal); //modal window object
    },
    afterClose: function (modal) {
      console.log("Message after modal has closed");
      console.log(modal); //modal window object
    },
  });
});
