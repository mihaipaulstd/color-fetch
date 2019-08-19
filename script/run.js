function run() {
    fetch('http://color-names.herokuapp.com/v1/')
        .then(res => res.json())
        .then(obj => obj.colors)
        .then(colors => {
            colors.forEach(color => {
                global.variables.colors.push(color);
            });
            screen();
        });
        
        
    function screen() {
        setColors();
        setDelay();
        function setColors() {
            global.functions.setDarkColor();
            global.functions.setLightColor();
            const screen = global.elements.screen;
            const input = global.elements.input;
            const time = global.elements.time;
            const darkColor = global.variables.darkColor;
            const lightColor = global.variables.lightColor;
            
            screen.style.backgroundColor = darkColor.hex;
            input.style.color = lightColor.hex;
            input.style.backgroundColor = 'transparent';
            time.style.backgroundColor = 'transparent';
            
            
    
        }
        function setDelay(){
            setTimeout(() => {
                global.elements.input.style.opacity = 1;
            }, 2000)
            setTimeout(() => {
                global.elements.time.style.opacity = 1;
            }, 2500)
            
        }
        
    }

}