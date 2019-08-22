function anchorListener() {
  Object.values(global.commands)
    .concat(Object.values(global.current))
    .forEach(element => {
      element.addEventListener("click", e => {
        if (e.target === global.commands.start) {
          global.input.value = "start";
          global.inputValue = "start";
        }
        if (e.target === global.commands.stop) {
          global.input.value = "stop";
          global.inputValue = "stop";
        }
        keywordListener();
      });
      element.addEventListener("mouseenter", e => {
        if (
          (e.target === global.commands.start && global.gameOver) ||
          (e.target === global.commands.stop && !global.gameOver) ||
          e.target.id.includes("current")
        ) {
          e.target.style.color = "#fff";
          e.target.style.transition = "color 500ms ease-in-out";
          document.body.style.cursor = "pointer";
        }
      });
      element.addEventListener("mouseleave", e => {
        if (
          (e.target === global.commands.start && global.gameOver) ||
          (e.target === global.commands.stop && !global.gameOver) ||
          e.target.id.includes("current")
        ) {
          e.target.style.color = "rgba(255, 255, 255, .3)";
        }
      });
    });
}
