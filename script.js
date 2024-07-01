let ms = 0, s = 0, m = 0, h = 0;
let timer;

const display = document.querySelector(".timer-Display");
const laps = document.querySelector(".laps");

document.querySelector('#startTimer').addEventListener('click', start);
document.querySelector('#pauseTimer').addEventListener('click', pause);
document.querySelector('#resetTime').addEventListener('click', reset);
document.querySelector('#lap').addEventListener('click', lap);

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function pause() {
    stopTimer();
}

function reset() {
    stopTimer();
    ms = 0; s = 0; m = 0; h = 0;
    updateDisplay();
}

function lap() {
    if (timer) {
        const li = document.createElement("li");
        li.textContent = getTimer();
        laps.appendChild(li);
    }
}

function run() {
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }
    updateDisplay();
}

function getTimer() {
    return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}:${ms < 10 ? "0" + ms : ms}`;
}

function updateDisplay() {
    display.textContent = getTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}