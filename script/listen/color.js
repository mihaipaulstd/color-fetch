function colorListener() {
  if (!global.gameOver)
    if (
      global.inputValue.toLowerCase() === global.targetColor.name.toLowerCase()
    ) {
      setColor();
      toggleInput(2000, 0);
      toggleAvailableInfo(2000, 500);
      toggleCommands(2000, 1000);
      toggleColorInfo(750, 250);
      generateTarget();
      toggleTarget(3000, 1000, false);
    }
}
