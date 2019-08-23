function anchorListener() {
  Object.values(global.current).forEach(element => {
    element.addEventListener("click", e => {
      setContent(e.target.nextElementSibling, "Copied!", 0);
      setTransition(e.target, "color", 500, "ease-in-out");
      new ClipboardJS("a");
      e.target.setAttribute("data-clipboard-text", e.target.innerHTML);
      toggleCopied(e.target, 500);
    });
    element.addEventListener("mouseenter", e => {
      e.target.style.textShadow = `.1rem .2rem .1rem ${
        global.currentTextColor
      }`;
      e.target.style.transition = "all 300ms ease-in-out";
      document.body.style.cursor = "pointer";
    });
    element.addEventListener("mouseleave", e => {
      e.target.style.textShadow = `.1rem .2rem .15rem ${
        global.currentTextColor
      }`;
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
  show(element.nextElementSibling, 0, 0);
  hide(element.nextElementSibling, duration, duration);
}
