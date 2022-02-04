import '../css/common.css';

const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
stopEl.disabled = true;
let intervalID = null;

const randomBodyColorGenerator = {
  DELAY: 1000,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgColorRandom();
    }, this.DELAY);
    stopEl.disabled = false;
  },

  start() {
    startEl.addEventListener('click', () => {
      this.interval();
      startEl.disabled = true;
      stopEl.disabled = false;
    });
    stopEl.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(intervalID);
    stopEl.disabled = true;
    startEl.disabled = false;
  },
};

function changeBgColorRandom() {
  bodyEl.style.backgroundColor = `${randomBodyColorGenerator.getRandomHexColor()}`;
}

randomBodyColorGenerator.start();
