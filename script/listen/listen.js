function listen() {
  global.input.addEventListener("input", e => {
    global.inputValue = e.target.value;
    keywordListener();
    colorListener();
  });
  preventDefaultSubmit();
  anchorListener();
}
