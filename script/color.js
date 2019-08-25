async function getColor() {
  const response = await fetch(`https://api.color.pizza/v1/${generateHex()}`);
  const obj = await response.json();
  return (global.currentColor = obj.colors[0]);
}

function generateHex() {
  let color = "";
  "xxxxxx"
    .split("")
    .forEach(x => (color += Math.floor(Math.random() * 16).toString(16)));
  return color;
}

function setColors(delay = 0) {
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

  setTimeout(() => {
    Object.values(global.current).forEach(element => {
      setTransition(
        element,
        "text-shadow",
        COLOR_TRANSITION_DURATION,
        SCREEN_TRANSITION_FUNCTION,
        0
      );
      global.currentTextColor =
        global.currentColor.luminance >= 100
          ? "rgba(0, 0, 0, 0.5)"
          : "rgba(255, 255, 255, 0.5)";
      element.style.textShadow = `.1rem .2rem .1rem ${
        global.currentTextColor
      }`;
    });
  }, delay + INFO_TRANSITION_DURATION / 2 + 2 * INFO_INCREMENTAL_DELAY);
}

function setTextColor() {
  console.log(global.currentColor.luminance);
}
