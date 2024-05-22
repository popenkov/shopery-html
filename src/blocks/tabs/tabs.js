import ready from "../../js/utils/documentReady.js";

ready(function () {
  function makeTabs(tabs, panes) {
    if (!tabs && !panes) {
      return;
    }
    const tabsLabels = tabs.children;
    const tabsPanes = panes.children;

    Array.from(tabsLabels).forEach((elem) => {
      elem.addEventListener("click", activateTab);
    });

    const scrollContainerOnTabClick = (clickedTab, clickedTabValue) => {
      // скролл таба
      const tabIndex = Number(clickedTabValue.at(-1));
      const allTabsLength = Array.from(tabsLabels).length;
      const scrollContainer = clickedTab.closest(".tabs__labels-content");
      const position = (tabIndex - Math.floor(allTabsLength / 2)) * 200;
      scrollContainer.scrollTo({
        left: position,
        behavior: "smooth",
      });
    };

    function activateTab(e) {
      e.preventDefault();
      Array.from(tabsLabels).forEach(function (label) {
        label.classList.remove("tabs__label--active");
      });
      [].forEach.call(tabsPanes, function (pane) {
        pane.classList.remove("tabs__pane--active");
      });
      e.target.classList.add("tabs__label--active");
      let clickedTab = e.target;
      let clickedTabValue = clickedTab.getAttribute("data-href");
      const currentTabPane = document.querySelector(clickedTabValue);
      currentTabPane.classList.add("tabs__pane--active");

      // todo управление высотой таба
      updateTabContentHeight(currentTabPane);

      scrollContainerOnTabClick(clickedTab, clickedTabValue);
    }
  }

  let tabs = document.querySelector(".tabs__labels .tabs__scroll-container");
  let panes = document.querySelector(".tabs__panes");

  const updateTabContentHeight = (currentTabPane) => {
    const tabContent = currentTabPane.querySelector(".js-tab-content");

    if (!tabContent) {
      return;
    }
    const tabContentHeight = tabContent.clientHeight;
    panes.style.height = tabContentHeight + "px";
  };

  const updateTabHeight = () => {
    const currentTabPane = panes?.querySelector(".tabs__pane--active");
    if (!currentTabPane) {
      return;
    }
    updateTabContentHeight(currentTabPane);
  };

  updateTabHeight();

  window.addEventListener("resize", updateTabHeight);

  makeTabs(tabs, panes);
});
