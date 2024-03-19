import NiceSelect from "nice-select2/dist/js/nice-select2";

import ready from "../../js/utils/documentReady.js";

ready(function () {
  const selects = document.querySelectorAll(".js-nice-select");
  if (selects?.length) {
    selects.forEach((select) => {
      new NiceSelect(select);
    });
  }
});
