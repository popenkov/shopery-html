import ready from "../../js/utils/documentReady.js";
import { loadScripts } from "../../js/utils/loadScript.js";

ready(function () {
  const contactPage = document.querySelector(".contact-page");

  if (!contactPage) {
    return;
  }

  // todo найти аналог гугл картам
  // const mapBlock = contactPage.querySelector(".js-contact-map #map");
  // let map;
  // const chicago = { lat: 41.85, lng: -87.65 };
  // loadScripts("https://maps.googleapis.com/maps/api/js?", (status) => {
  //   if (status && mapBlock) {
  //     function createCenterControl(map) {
  //       const controlButton = document.createElement("button");

  //       // Set CSS for the control.
  //       controlButton.classList.add("buttonStyle");

  //       controlButton.textContent = "Center Map";
  //       controlButton.title = "Click to recenter the map";
  //       controlButton.type = "button";
  //       // Setup the click event listeners: simply set the map to Chicago.
  //       controlButton.addEventListener("click", () => {
  //         map.setCenter(chicago);
  //       });
  //       return controlButton;
  //     }

  //     function initMap() {
  //       map = new google.maps.Map(mapBlock, {
  //         zoom: 4,
  //         center: { lat: 49.496675, lng: -102.65625 },
  //       });

  //       var georssLayer = new google.maps.KmlLayer({
  //         url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
  //       });
  //       georssLayer.setMap(map);

  //       // Create the DIV to hold the control.
  //       const centerControlDiv = document.createElement("div");
  //       // Create the control.
  //       const centerControl = createCenterControl(map);

  //       // Append the control to the DIV.
  //       centerControlDiv.appendChild(centerControl);
  //       map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  //     }

  //     window.initMap = initMap;
  //     initMap();
  //   }
  // });
});
