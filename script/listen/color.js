function colorListen() {
  if (global.inputValue.toLowerCase() === global.target.targetColor.name.toLowerCase()) {
    global.screen.style.backgroundColor = global.target.targetColor.hex;
    reset(global.input, 2000, 0, false, undefined);
    reset(global.info, 2000, 0, false, "Available commands:");
    reset(global.commands, 3000, 0, false, ">\tstop");
    generateTarget();
    reset(global.colorSpan, 1500, 1500, false, global.target.targetColor.name);
  }
}
