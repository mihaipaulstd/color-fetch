function cycle(toggleDelay) {
  getColor().then(() => {
    setColors();
    setInfo(INFO_TRANSITION_DURATION);
    toggleInfo(toggleDelay);
  });
}
