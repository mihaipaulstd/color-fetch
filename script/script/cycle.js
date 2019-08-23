function cycle(toggleDelay) {
  getColor().then(() => {
    setScreenBackground();
    setInfo(INFO_TRANSITION_DURATION);
    toggleInfo(toggleDelay);
  });
}