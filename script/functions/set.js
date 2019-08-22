function setIdleInterval(intervalDuration, transitionDuration) {
  global.interval.screenInterval = setInterval(() => {
    global.screen.style.transitionDuration = `${transitionDuration}ms`;
    setColor("random");
  }, intervalDuration);
}

function setColor(type) {
  switch (type) {
    case "light":
      generateLightColor();
      break;
    case "normal":
      generateNormalColor();
      break;
    case "dark":
      generateDarkColor();
      break;
    case "random":
      generateColor();
      break;
    default:
      toggleColorInfo(1500, 200);
      global.screen.style.backgroundColor = global.currentColor.hex;
      return;
  }
  toggleColorInfo(1500, 200);
  global.screen.style.backgroundColor = global.currentColor.hex;
}

function setReadOnly(element) {
  element.setAttribute("readonly", "readonly");
}

function removeReadOnly(element) {
  element.removeAttribute("readonly", "readonly");
}
