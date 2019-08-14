function setup() {
    fetch('https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json')
        .then(res => res.json())
        .then(obj => Object.keys(obj))
        .then(keys => {
            keys.forEach(key => {
                global.variables.colors.push(key);
            })
            changeInitialScreenColor();
        });
    
    function changeInitialScreenColor() {
        const screen = global.elements.screen;
        const colors = global.variables.colors;
        screen.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}