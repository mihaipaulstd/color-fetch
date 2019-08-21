var global = {
  screen: document.getElementById("screen"),
  input: document.getElementById("input"),
  colorSpan: document.getElementById("color-span"),
  form: document.getElementById('main-form'),

  gameOver: true,
  inputValue: new String(),
  colors: new Array(),
  target: {
    colorX: new Number(),
    colorY: new Number(),
    targetColor: new String(),
  },
  interval: {
    screenInterval: null,
    intervalColor: new String()
  }
};

window.addEventListener("load", init);

function init() {
  console.log("running");
  fetchColors().then(() => {
    setup();
    listen();
    
    
  });
}
