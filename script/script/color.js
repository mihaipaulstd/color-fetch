async function getColor() {
  const response = await fetch(`https://api.color.pizza/v1/${generateHex()}`);
  const obj = await response.json();
  return (global.currentColor = obj.colors[0]);
}

function generateHex() {
  let color = "";
  "xxxxxx"
    .split("")
    .forEach(char => (color += Math.floor(Math.random() * 16).toString(16)));
  return color;
}

function setScreenBackground(delay = 0) {
  setTimeout(() => {
    setTransition(
      global.screen,
      "background-color",
      SCREEN_TRANSITION_DURATION,
      SCREEN_TRANSITION_FUNCTION,
      0
    );
    global.screen.style.backgroundColor = global.currentColor.hex;
  }, delay);
}
