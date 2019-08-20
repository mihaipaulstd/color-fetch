function setScreen() {
  global.screen.style.opacity = 1;
  setBackground();
  global.interval.screenInterval = setInterval(() => {
    global.screen.style.transitionDuration = "5000ms";
    setBackground();
  }, 5000);
}

function setInput() {
  global.input.style.color = "#fff";
  global.input.style.opacity = 1;
}

function setIntervalColor() {
  global.interval.intervalColor = getLightColor();
}

function setBackground() {
  global.interval.intervalColor = getLightColor();
  console.log(global.interval.intervalColor.hex);

  global.screen.style.backgroundColor = global.interval.intervalColor.hex;
}

function getLightColor() {
  const color = global.colors[Math.floor(Math.random() * global.colors.length)];
  return color.luminance >= 60 && color.luminance <= 100
  ? color
  : getLightColor();
}