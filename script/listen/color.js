function colorListen() {  
  if(global.inputValue === global.target.targetColor.name) {
    global.screen.style.backgroundColor = global.target.targetColor.hex;
    reset(global.input, 1000);
    generateTarget();
    reset(global.colorSpan, 1000, global.target.targetColor.name, 0);
  }
}