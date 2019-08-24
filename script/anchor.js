function anchorListener() {
  Object.values(global.current)
    .filter(element => !element.id.includes("copied"))
    .forEach(element => {
      element.addEventListener("click", e => {
        setContent(e.target.previousElementSibling, "Copied!", 0);
        setTransition(e.target, "color", 500, "ease-in-out");
        new ClipboardJS("a");
        e.target.setAttribute("data-clipboard-text", e.target.innerHTML);
        toggleCopied(e.target, 500);
      });
      element.addEventListener("mouseenter", e => {
        e.target.style.textShadow = `.1rem .2rem .1rem ${global.currentTextColor}`;
        e.target.style.transition = "all 300ms ease-in-out";
        document.body.style.cursor = "pointer";
      });
      element.addEventListener("mouseleave", e => {
        e.target.style.textShadow = `.1rem .2rem .15rem ${global.currentTextColor}`;
        document.body.style.cursor = "default";
      });
    });
}

function setDisabled(element) {
  element.setAttribute("disabled", "disabled");
}

function removeDisabled(element) {
  element.removeAttribute("disabled", "disabled");
}

function toggleCopied(element, duration) {
  show(element.previousElementSibling, 0, 0);
  hide(element.previousElementSibling, duration, duration);
}
