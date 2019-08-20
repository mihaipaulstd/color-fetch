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
      generateTarget();
      generateTargetPosition();
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
  element.setAttribute('readonly', 'readonly');
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.removeAttribute('readonly', 'readonly');
    element.value ? (element.value = "") : (element.innerHTML = "");
    element.style.opacity = 1;
  }, duration);
}

function generateTarget() {
  global.target.targetColor = global.colors[Math.floor(Math.random() * global.colors.length)];
  console.log(global.target.targetColor);
  
}

function generateTargetPosition() {
  global.target.colorX = 100 + Math.floor(Math.random() * window.innerWidth - 200);
  global.target.colorY = 100 + Math.floor(Math.random() * window.innerHeight - 200);
}

function displayTarget() {
  const cs = global.colorSpan;
  cs.innerHTML = global.target.targetColor.name;
  cs.style.color = global.target.targetColor.hex;
  cs.style.backgroundColor = 'rgba(255, 255, 255, .05)';
  cs.style.borderRadius = '20px';
  cs.style.padding = '5px 10px';
  cs.style.backgroundColor.opacity = 0;
  cs.style.fontSize = '2rem';
  cs.style.overflow = 'hidden';
  
  cs.style.left = global.target.colorX + 'px';
  cs.style.top = global.target.colorY + 'px';
  cs.style.opacity = 1;
}