import NiceSelect from "nice-select2/dist/js/nice-select2";

import ready from "../../js/utils/documentReady.js";

ready(function () {
  const selects = document.querySelectorAll(".js-nice-select");
  if (selects?.length) {
    selects.forEach((select) => {
      const selectWrapper = select.closest(".select");
      const { placeholder, searchable } = selectWrapper.dataset;
      const selectOptions = {
        searchable: Boolean(searchable),
        placeholder,
      };

      new NiceSelect(select, selectOptions);

      select.addEventListener("change", (evt) => {
        console.log("change", evt.target.value);
      });
    });
  }
});
