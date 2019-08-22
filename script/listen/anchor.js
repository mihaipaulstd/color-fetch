function anchorListener() {
  Object.values(global.commands)
    .concat(Object.values(global.current))
    .forEach(element => {
      element.addEventListener("click", e => {
        if (e.target === global.commands.start && global.gameOver) {
          setDisabled(global.commands.stop);
          global.input.value = "start";
          global.inputValue = "start";
          removeDisabled(global.commands.start);
        }
        if (e.target === global.commands.stop && !global.gameOver) {
          setDisabled(global.commands.start);
          global.input.value = "stop";
          global.inputValue = "stop";
          removeDisabled(global.commands.stop);
        }
        keywordListener();
        if (e.target.id.includes("current")) {
          new ClipboardJS("a");
          e.target.setAttribute("data-clipboard-text", e.target.innerHTML);
          toggle(e.target.nextElementSibling, 0, 0, false, "Copied! ");
          
          toggle(e.target.nextElementSibling, 2000, 250, true);
        }
      });
      element.addEventListener("mouseenter", e => {
        if (
          (e.target === global.commands.start && global.gameOver) ||
          (e.target === global.commands.stop && !global.gameOver) ||
          e.target.id.includes("current")
        ) {
          e.target.style.color = tinycolor("rgba(#fff, .3)").brighten(75);
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
          e.target.style.color = "rgba(255,255,255, .3)";
          document.body.style.cursor = "default";
        }
      });
    });
}
