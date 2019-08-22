function toggle(element, duration = 0, delay = 0, erase = false, content = "") {
  setTimeout(() => {
    setReadOnly(element);
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
    if (erase) return;
    setTimeout(() => {
      element.value && !content
        ? (element.value = content)
        : (element.innerHTML = content);
      element.style.opacity = 1;
      removeReadOnly(element);
      removeDisabled(element);
    }, duration);
  }, delay);
}

function toggleInput(duration = 0, delay = 0, erase = false) {
  toggle(global.input, duration, delay, erase);
  global.input.focus();
}

function toggleAvailableInfo(duration = 0, delay = 0) {
  toggle(global.info, duration, delay, false, "Available commands:");
}

function toggleCommands(duration = 0, delay = 0) {
  toggle(global.commands.start, duration, delay, false, "start");
  toggle(global.commands.stop, duration, delay + 500, false, "stop");
}

function toggleColorInfo(duration = 0, delay = 0) {
  Object.values(global.current).forEach(option => {
    setDisabled(option);
    setTimeout(() => {
      removeDisabled(option);
    }, 1500);
  });
  toggle(
    global.current.name,
    duration,
    delay,
    false,
    `${global.currentColor.name}`
  );
  toggle(
    global.current.rgb,
    duration,
    delay * 2,
    false,
    `rgb(${global.currentColor.rgb.r}, ${global.currentColor.rgb.g}, ${
      global.currentColor.rgb.b
    })`
  );
  toggle(
    global.current.hex,
    duration,
    delay * 3,
    false,
    `${global.currentColor.hex}`
  );

  Object.values(global.current)
    .filter(element => element.id.includes("copied"))
    .forEach((span, index) => {
      toggle(span, 1500, 200 * (index + 1), true);
    });
}

function toggleTarget(duration = 0, delay = 0, erase = false) {
  toggle(global.target, duration, delay, erase, global.targetColor.name);
}

function toggleCommandsColor(duration = 0, delay = 0) {
  global.commands.start.style.transition = `color ${duration}ms ease-in-out`;
  global.commands.stop.style.transition = `color ${duration}ms ease-in-out`;
  setTimeout(() => {
    if (!global.gameOver) {
      global.commands.start.style.color = "rgba(255, 255, 255, 0.1)";
      global.commands.stop.style.color = "rgba(255, 255, 255, 0.3)";
    } else {
      global.commands.start.style.color = "rgba(255, 255, 255, 0.3)";
      global.commands.stop.style.color = "rgba(255, 255, 255, 0.1)";
    }
  }, delay);
}

function toggleScreen() {
  global.screen.style.opacity = 1;
}
