import ready from "../js/utils/documentReady.js";
import getScrollSize from "../js/utils/getScrollSize.js";

ready(function () {
  // Adding a custom property with a system scroll width
  document.documentElement.style.setProperty("--css-scroll-size", `${getScrollSize()}px`);
});

// import $ from "jquery"; // Install as dependency before use
// $(function () {
//   console.log("jQuery works!");
// });
