function generateLightColor() {
  const color = global.colors[Math.floor(Math.random() * global.colors.length)];
  color.luminance >= 100 ? (global.currentColor = color) : generateLightColor();
}

function generateNormalColor() {
  const color = global.colors[Math.floor(Math.random() * global.colors.length)];
  color.luminance >= 60 && color.luminance <= 100
    ? (global.currentColor = color)
    : generateNormalColor();
}

function generateDarkColor() {
  const color = global.colors[Math.floor(Math.random() * global.colors.length)];
  color.luminance <= 60 ? (global.currentColor = color) : generateDarkColor();
}

function generateColor() {
  global.currentColor =
    global.colors[Math.floor(Math.random() * global.colors.length)];
}

function generateTarget() {
  global.targetColor =
    global.colors[Math.floor(Math.random() * global.colors.length)];
  global.currentColor = global.targetColor;
}
