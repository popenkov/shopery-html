export const loadScripts = (src, callback) => {
  let script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0],
    error = false;

  script.classList.add("script");

  script.type = "text/javascript";

  script.onload = script.onreadystatechange = function () {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      if (!error) {
        removeListeners();
        callback(true);
      } else {
        callback(false);
      }
    }
  };

  script.onerror = function () {
    error = true;
    removeListeners();
    callback(false);
  };

  function errorHandle(msg, url) {
    if (url == src) {
      error = true;
      removeListeners();
      callback(false);
    }
    return false;
  }

  function removeListeners() {
    script.onreadystatechange = script.onload = script.onerror = null;

    if (window.removeEventListener) {
      window.removeEventListener("error", errorHandle, false);
    } else {
      window.detachEvent("onerror", errorHandle);
    }
  }

  if (window.addEventListener) {
    window.addEventListener("error", errorHandle, false);
  } else {
    window.attachEvent("onerror", errorHandle);
  }

  script.src = src;
  head.appendChild(script);
};
