`use strict`

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
// const timerEl = document.querySelector('span');

const timerSec = document.getElementById('seconds');
const timerMin = document.getElementById('minutes');
const timerHour = document.getElementById('hours');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval(function () {
      let one = seconds%60
      let two = seconds/60%60
      let three = seconds/60/60%60
  
      if (one < 0) {
        clearInterval(timer);
        alert("Время истекло!");
      } else {
        timerSec.innerHTML = ("0" + `${one}`).slice(-2);
        timerMin.innerHTML = ("0" + `${Math.trunc(two)}`).slice(-2);
        timerHour.innerHTML = ("0" + `${Math.trunc(three)}`).slice(-2);
      }
      --seconds;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

// Очистите input так, чтобы в значении
// оставались только числа
inputEl.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});