import ready from "../../js/utils/documentReady.js";

ready(function () {
  const counterList = document.querySelectorAll(".js-counter");
  if (counterList) {
    const updateCountdown = () => {
      counterList.forEach((counter) => {
        const targetDate = new Date(counter.dataset.end);

        const days = counter.querySelector(".js-counter-days");
        const hours = counter.querySelector(".js-counter-seconds");
        const minutes = counter.querySelector(".js-counter-minutes");
        const seconds = counter.querySelector(".js-counter-seconds");

        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft < 0) {
          counter.innerHTML = "";
          return;
        }

        const daysValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursValue = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesValue = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

        days.textContent = Math.abs(daysValue) >= 10 ? daysValue : `0${daysValue}`;
        hours.textContent = Math.abs(hoursValue) >= 10 ? hoursValue : `0${hoursValue}`;
        minutes.textContent = Math.abs(minutesValue) >= 10 ? minutesValue : `0${minutesValue}`;
        seconds.textContent = Math.abs(secondsValue) >= 10 ? secondsValue : `0${secondsValue}`;
      });
    };

    setInterval(updateCountdown, 1000);
  }
});
