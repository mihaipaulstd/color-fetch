function setScreen() {
    global.screen.style.opacity = 1;
    setBackground();
    const colorInterval = setInterval(() => {
        global.screen.style.transitionDuration = '3000ms';
        setBackground()
    }, 3000);

}

function setInput() {
    global.input.style.color = '#fff';
    global.input.style.opacity = 1;
}

function setIntervalColor() {
    const color = global.colors[Math.floor(Math.random() * global.colors.length)];
    return color.luminance >= 80 && color.luminance <= 120 ? global.intervalColor = color : setIntervalColor();
}

function setBackground() {
    setIntervalColor();
    global.screen.style.backgroundColor = global.intervalColor.hex;
    
}