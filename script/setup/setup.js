function setup() {
  setColor('normal');
  toggleScreen();
  toggleInput(2000, 0);
  toggleAvailableInfo(2000, 500);
  toggleCommands(2000, 1000);
  setIdleInterval(7500, 5000, 1500, 200);
}
