function listenInput() {
  global.input.addEventListener("input", e => {
    global.inputValue = e.target.value;

    if (
      global.inputValue.toLowerCase() === "start" &&
      global.gameOver === true
    ) {
      global.gameOver = false;
      clear(global.input, 3000);
      clearInterval(global.interval.screenInterval);
      displayTarget();

      console.log("started");
    }

    if (
      global.inputValue.toLowerCase() === "stop" &&
      global.gameOver === false
    ) {
      global.gameOver = true;

      clear(global.input, 2000);

      setBackground();

      setScreen();

      console.log("stopped");
    }
  });
}

function clear(element, duration) {
  element.setAttribute("readonly", "readonly");
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.removeAttribute("readonly", "readonly");
    element.value ? (element.value = "") : (element.innerHTML = "");
    element.style.opacity = 1;
  }, duration);
}

function generateTarget() {
  global.target.targetColor =
    global.colors[Math.floor(Math.random() * global.colors.length)];
  console.log(global.target.targetColor);
}

function generateTargetPosition() {
  global.target.colorX = getX();
  global.target.colorY = getY();
}

function getX() {
  return Math.floor(
    Math.random() * (window.innerWidth - global.colorSpan.offsetWidth - 1)
  );
}

function getY() {
  let posY = Math.floor(
    Math.random() * (window.innerHeight - global.colorSpan.offsetHeight - 1)
  );
  const inputUpper = global.input.getBoundingClientRect().top;
  const inputLower =
    global.input.getBoundingClientRect().top +
    global.input.getBoundingClientRect().height;
  const colorY = global.colorSpan.offsetHeight;
  if (posY > inputUpper && posY < (inputUpper + inputLower) / 2)
    posY = inputUpper - colorY;
  if (posY < inputLower && posY > (inputUpper + inputLower) / 2)
    posY = inputLower;
  return posY;
}

function displayTarget() {
  const cs = global.colorSpan;
  cs.style.transition = 'opacity 2000ms ease-in-out';
  generateTarget();
  generateTargetPosition();
  cs.innerHTML = global.target.targetColor.name;
  cs.style.left = global.target.colorX + "px";
  cs.style.top = global.target.colorY + "px";
  delayElement(cs, 2000);
  
}

function delayElement(element, delay) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.opacity = 1;
  }, delay);
}
