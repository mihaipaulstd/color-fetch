function toggle(
  element,
  timeToHide,
  timeHidden,
  hideTransitionTime,
  showTransitionTime
) {
  setTimeout(() => {
    hide(element, hideTransitionTime, 0);
    setTimeout(() => {
      show(element, showTransitionTime, 0);
    }, timeHidden);
  }, timeToHide);
}
