import ready from "../../js/utils/documentReady.js";

ready(function () {
  const counterList = document.querySelectorAll(".js-counter");

  if (counterList) {
    const updateCountdown = () => {
      counterList.forEach((counter) => {
        const targetDate = new Date(counter.dataset.end);

        const days = counter.querySelector(".js-counter-days");
        const hours = counter.querySelector(".js-counter-seconds");
        const minuts = counter.querySelector(".js-counter-minuts");
        const seconds = counter.querySelector(".js-counter-seconds");

        const now = new Date();
        const timeLeft = targetDate - now;

        const daysValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursValue = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesValue = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

        days.textContent = daysValue;
        hours.textContent = hoursValue;
        minuts.textContent = minutesValue;
        seconds.textContent = secondsValue;
      });
    };

    setInterval(updateCountdown, 1000);
  }
});
