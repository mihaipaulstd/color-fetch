function setup() {
  getColor().then(() => {
    setColors();
    setInfo();
    show(
      global.current.name,
      INFO_TRANSITION_DURATION,
      SCREEN_INITIAL_TRANSITION_DURATION - INFO_INCREMENTAL_DELAY * 2
    );
    show(
      global.current.rgb,
      INFO_TRANSITION_DURATION,
      SCREEN_INITIAL_TRANSITION_DURATION - INFO_INCREMENTAL_DELAY
    );
    show(
      global.current.hex,
      INFO_TRANSITION_DURATION,
      SCREEN_INITIAL_TRANSITION_DURATION
    );
  });
}
