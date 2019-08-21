function listenInput() {
  global.input.addEventListener("input", e => {
    global.inputValue = e.target.value;

    if (
      global.inputValue.toLowerCase() === "start" &&
      global.gameOver === true
    ) {
      global.gameOver = false;
      reset(global.input, 3000);
      clearInterval(global.interval.screenInterval);
      generateTarget();
      reset(global.colorSpan, 1000, global.target.targetColor.name, 1000);
      
      
      console.log("started");
    }

    colorListen();

    if (
      global.inputValue.toLowerCase() === "stop" &&
      global.gameOver === false
    ) {
      global.gameOver = true;
      reset(global.input, 2000);
      reset(global.colorSpan, 2000);
      setBackground();
      setScreen();
      console.log("stopped");
    }
  });
}

function reset(element, duration = 0, content = "", delay = 0) {
  setTimeout(() => {
    element.setAttribute("readonly", "readonly");
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
    setTimeout(() => {
      element.removeAttribute("readonly", "readonly");
      element.value ? (element.value = content) : (element.innerHTML = content);
      element.style.opacity = 1;
    }, duration);
  }, delay);
}

function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 0;
}
function fadeIn(element, duration) {
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 1;
}

function generateTarget() {
  global.target.targetColor =
    global.colors[Math.floor(Math.random() * global.colors.length)];
}

