var global = {
  screen: document.getElementById('screen'),
  input: document.getElementById('input'),
  target: document.getElementById('target-color'),
  form: document.getElementById('main-form'),
  info: document.getElementById('info'),
  commands: {
    start: document.getElementById('start-command'),
    stop: document.getElementById('stop-command')
  },
  current: {
    name: document.getElementById('current-name'),
    rgb: document.getElementById('current-rgb'),
    hex: document.getElementById('current-hex')
  },

  gameOver: true,
  inputValue: new String(),
  colors: new Array(),
  currentColor: new Object(),
  targetColor: new String(),
  
  interval: {
    screenInterval: null,
    intervalColor: new String()
  }
};

window.addEventListener('load', init);

function init() {
  console.log('running');
  fetchColors().then(() => {
    setup();
    listen();
  });
}
