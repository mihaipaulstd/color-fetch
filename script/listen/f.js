function listenInput() {
  global.input.addEventListener("input", e => {
    global.inputValue = e.target.value;

    if (
      global.inputValue.toLowerCase() === "start" &&
      global.gameOver === true
    ) {
      if (global.transitioning) clearTimeout(global.timeout.timeoutInterval);
      global.gameOver = false;
      reset(global.input, 3000);
      reset(global.info, 2000, 1000, false, "Available commands:");
      reset(global.commands, 2000, 2000, false, ">\tstop");

      clearInterval(global.interval.screenInterval);
      generateTarget();
      reset(
        global.colorSpan,
        1000,
        1000,
        false,
        global.target.targetColor.name
      );

      console.log("started");
    }

    colorListen();

    if (
      global.inputValue.toLowerCase() === "stop" &&
      global.gameOver === false
    ) {
      global.gameOver = true;
      reset(global.input, 3000);
      reset(global.info, 3000, 0, false, "Available commands:");
      reset(global.commands, 4000, 0, false, ">\tstart");
      reset(global.colorSpan, 2000, 0, true);

      setBackground();
      setScreen();

      console.log("stopped");
    }
  });
}

function reset(element, duration = 0, delay = 0, erase = false, content = "") {
  setTimeout(() => {
    element.setAttribute("readonly", "readonly");
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
    if (erase) return;
    setTimeout(() => {
      element.removeAttribute("readonly", "readonly");
      element.value && !content
        ? (element.value = content)
        : (element.innerHTML = content);
      element.style.opacity = 1;
    }, duration);
  }, delay);
}

function generateTarget() {
  global.target.targetColor =
    global.colors[Math.floor(Math.random() * global.colors.length)];
}
