dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString){
  const targetDate = dayjs(dateString);

  element.querySelector(".until-event").textContent = `Until ${ targetDate.format("D MMMM YYYY") }`;

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) return;

    
    element.querySelector(".until-seconds").textContent = duration.seconds().toString().padStart(2, "0");
    element.querySelector(".until-minutes").textContent = duration.minutes().toString().padStart(2, "0");
    element.querySelector(".until-Hours").textContent = duration.hours().toString().padStart(2, "0");
    element.querySelector(".until-days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
  } , 250);

}

activateCountdown(document.getElementById("myCountdown"), "2022-12-31");