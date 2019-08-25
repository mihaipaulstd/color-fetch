const INTERVAL_DURATION = 6000;
const SCREEN_TRANSITION_DURATION = 5000;
const SCREEN_TRANSITION_FUNCTION = "ease-in-out";
const SCREEN_INITIAL_TRANSITION_DURATION = 2000;
const INFO_TRANSITION_DURATION = 1000;
const INFO_INCREMENTAL_DELAY = 150;
const COLOR_TRANSITION_DURATION = 1000;

var global = {
  screen: document.querySelector('body'),
  current: {
    name: document.getElementById("current-name"),
    rgb: document.getElementById("current-rgb"),
    hex: document.getElementById("current-hex"),
    copiedName: document.getElementById("copied-name"),
    copiedRgb: document.getElementById("copied-rgb"),
    copiedHex: document.getElementById("copied-hex")
  },

  currentColor: new Object(),
  currentTextColor: new String()
};

window.addEventListener("load", init);

function init() {
  console.log("running");
  run();
}
