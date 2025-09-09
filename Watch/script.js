let digitalElement = document.querySelector('.digital');
let secondsElement = document.querySelector('.p_s');
let minutesElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    let secondsDeg = ((360 / 60) * seconds) - 90; // 6 degrees per second
    let minutesDeg = ((360 / 60) * minutes) - 90; // 6 degrees per minute
    let hoursDeg = ((360 / 12) * hours) - 90; // 30 degrees per hour + minute adjustment

    secondsElement.style.transform = `rotate(${secondsDeg}deg)`;
    minutesElement.style.transform = `rotate(${minutesDeg}deg)`;
    hoursElement.style.transform = `rotate(${hoursDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();