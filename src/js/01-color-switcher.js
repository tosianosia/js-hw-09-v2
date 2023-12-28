const COLOR_SWITCH_DELAY = 1000;
let intervalId = null;
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

refs.stopBtn.setAttribute('disabled', '');

function onStartBtnClick() {
  toggleDisabled();

  intervalId = setInterval(changeColor, COLOR_SWITCH_DELAY);
}

function onStopBtnClick() {
  toggleDisabled();

  clearInterval(intervalId);
}

function toggleDisabled() {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
