function setTransition(
  element,
  property,
  duration = 0,
  timingFunction = "ease",
  delay = 0
) {
  element.style.transition = `${property} ${duration}ms ${timingFunction} ${delay}ms`;
}
