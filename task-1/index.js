const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");
const buttonReset = document.querySelector("#reset");
const buttonPause = document.querySelector("#pause");

const inputEl = document.querySelector("input");
const timerEl = document.querySelector("#timer");
const errorEl = document.querySelector("#error");

let interval;
let totalSeconds = 0;
let pause = false;
let secondsLeft = 0;

makeTimer();

// Инициализация таймера
function makeTimer() {
  // Прячем все кнопки, кроме старта в начале
  buttonReset.style.display = "none";
  buttonPause.style.display = "none";
  buttonStop.style.display = "none";

  // Кнопка старта таймера
  buttonStart.addEventListener("click", () => {
    let inputValue = inputEl.value;
    if (isNaN(inputValue) || !inputValue || inputValue < 0) showError();
    else {
      secondsLeft = totalSeconds = parseInt(inputValue);

      if (totalSeconds < 0) {
        return;
      }

      startTime();

      buttonPause.style.display = "inline-block";
      buttonStop.style.display = "inline-block";
      buttonReset.style.display = "inline-block";
      buttonStart.style.display = "none";
    }
  });

  // Кнопка остановки таймера
  buttonStop.addEventListener("click", () => {
    stopTimer();
    totalSeconds = secondsLeft;
    pause = false;
    updateTimer();

    buttonPause.style.display = "none";
    buttonStop.style.display = "none";
    buttonReset.style.display = "none";
    buttonStart.style.display = "";
  });

  // Кнопка перезапуска таймера
  buttonReset.addEventListener("click", () => {
    totalSeconds = secondsLeft;
    updateTimer();
  });

  // Кнопка паузы таймера
  buttonPause.addEventListener("click", () => {
    pause = !pause;
    if (pause) {
      buttonPause.innerHTML = "Resume";
    } else {
      buttonPause.innerHTML = "Pause";
    }
  });
}

// Функция старта таймера
function startTime() {
  interval = setInterval(() => {
    if (pause) return;
    totalSeconds--;
    updateTimer();

    if (totalSeconds <= 0) {
      stopTimer();
    }
  }, 1000);
}

// Функция обновление таймера
function updateTimer() {
  let h = Math.floor(totalSeconds / 3600);
  let m = Math.floor((totalSeconds - h * 3600) / 60);
  let s = totalSeconds % 60;

  console.log(h, m, s);
  timerEl.innerHTML = timeFormatter(h, m, s);
}

// Подставление нулей
function timeFormatter(hours, minutes, seconds) {
  let res;
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  res = ` ${h} ч : ${m} м : ${s} с`;
  return res;
}

// Остановка таймера
function stopTimer() {
  interval = clearInterval(interval);
}

// Показать ошибку
function showError() {
  errorEl.innerHTML = "Введите положительное числовое значение";
  setTimeout(() => {
    errorEl.innerHTML = "";
  }, 1000);
}
