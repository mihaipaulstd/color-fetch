function setScreen() {
    global.screen.style.opacity = 1;
    setBackground();
    global.interval.screenInterval = setInterval(() => {
        global.screen.style.transitionDuration = '6000ms';
        setBackground()
    }, 6000);
};

function setInput() {
    global.input.style.color = '#fff';
    global.input.style.opacity = 1;
}

function setIntervalColor() {
    const color = global.colors[Math.floor(Math.random() * global.colors.length)];
    return color.luminance >= 60 && color.luminance <= 100 ? global.interval.intervalColor = color : setIntervalColor();
}



function setBackground() {
    setIntervalColor();
    console.log(global.interval.intervalColor.hex);
    
    
    global.screen.style.backgroundColor = global.interval.intervalColor.hex;
    
}