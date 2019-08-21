function colorListen() {
  if (global.inputValue === global.target.targetColor.name) {
    global.screen.style.backgroundColor = global.target.targetColor.hex;
    reset(global.input, 2000, false, undefined, 0);
    generateTarget();
    reset(global.colorSpan, 1500, false, global.target.targetColor.name, 1500);
  }
}
