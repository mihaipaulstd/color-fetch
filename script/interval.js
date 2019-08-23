function setIdleInterval(intervalDuration) {
  setup();
  setInterval(() => {
    cycle(intervalDuration);
  }, intervalDuration);
}
