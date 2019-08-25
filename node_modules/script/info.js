function toggleInfo() {
  toggle(
    global.current.name,
    0,
    INFO_TRANSITION_DURATION,
    INFO_TRANSITION_DURATION / 2,
    INFO_TRANSITION_DURATION / 2
  );
  toggle(
    global.current.rgb,
    INFO_INCREMENTAL_DELAY,
    INFO_TRANSITION_DURATION,
    INFO_TRANSITION_DURATION / 2,
    INFO_TRANSITION_DURATION / 2
  );
  toggle(
    global.current.hex,
    INFO_INCREMENTAL_DELAY * 2,
    INFO_TRANSITION_DURATION,
    INFO_TRANSITION_DURATION / 2,
    INFO_TRANSITION_DURATION / 2
  );
}

function setInfo(delay = 0) {
  setTimeout(() => {
    setContent(global.current.name, global.currentColor.name);
    setContent(
      global.current.rgb,
      `rgb(${global.currentColor.rgb.r}, ${global.currentColor.rgb.g}, ${
        global.currentColor.rgb.b
      })`
    );
    setContent(global.current.hex, global.currentColor.hex);
  }, delay);
}

function show(element, duration = 0, delay = 0) {
  setTimeout(() => {
    setTransition(element, "opacity", duration, "ease-in-out");
    element.style.opacity = 1;
    removeDisabled(element);
  }, delay);
}

function hide(element, duration = 0, delay = 0) {
  setTimeout(() => {
    setTransition(element, "opacity", duration, "ease-in-out");
    element.style.opacity = 0;
    setDisabled(element);
  }, delay);
}

function setContent(element, content, delay = 0) {
  setTimeout(() => {
    try{
      element.value = content;
      element.innerHTML = content;
    }catch(err){}
  }, delay);
}
