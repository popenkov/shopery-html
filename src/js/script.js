import { initRegistrationScripts } from "../blocks/registration/registration.js";
import { initSignInScripts } from "../blocks/sign-in/sign-in.js";
import ready from "../js/utils/documentReady.js";
import getScrollSize from "../js/utils/getScrollSize.js";

ready(function () {
  // Adding a custom property with a system scroll width
  document.documentElement.style.setProperty("--css-scroll-size", `${getScrollSize()}px`);
  initRegistrationScripts();
  initSignInScripts();
});

// import $ from "jquery"; // Install as dependency before use
// $(function () {
//   console.log("jQuery works!");
// });
