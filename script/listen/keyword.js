function keywordListener() {
  if (global.inputValue.toLowerCase() === "start" && global.gameOver === true) {
    global.gameOver = false;
    
    generateTarget();
    
    toggleInput(2000, 0);
    toggleAvailableInfo(2000, 500);
    toggleCommands(2000, 1000);
    toggleCommandsColor(0, 3200);
    toggleTarget(3000, 1000);

    clearInterval(global.interval.screenInterval);
  }

  if (global.inputValue.toLowerCase() === "stop" && global.gameOver === false) {
    global.gameOver = true;
    
    toggleInput(2000, 0, false);
    toggleAvailableInfo(2000, 500);
    toggleCommands(2000, 1000);
    toggleCommandsColor(0, 3200);
    toggleTarget(3000, 0, true);

    setColor('random');
    setIdleInterval(7500, 5000, 1500, 200);
  }
}
