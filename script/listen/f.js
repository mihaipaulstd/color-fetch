function listenInput() {
  global.input.addEventListener('input', e => {
    global.inputValue = e.target.value;
    
    if(global.inputValue.toLowerCase() === 'start' && global.gameOver === true) {
      global.gameOver = false;
      clear(global.input, 2000);
      clearInterval(global.interval.screenInterval);
  
      console.log('started');
    }
  
    if(global.inputValue.toLowerCase() === 'stop' && global.gameOver === false) {
      global.gameOver = true;
      clear(global.input, 2000);
      setScreen();
  
      console.log('stopped');
    }
  });
}

function clear(element, duration) {
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.value ? element.value = '' : element.innerHTML = '';
    element.style.opacity = 1;
    element.style.transition = `opacity ${duration}ms ease-out`;
  }, duration);

}