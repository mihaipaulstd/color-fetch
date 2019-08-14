function setup() {
    fetch('http://color-names.herokuapp.com/v1/')
        .then(res => res.json())
        .then(obj => obj.colors)
        .then(colors => {
            function getColor() {
                let color = colors[Math.floor(Math.random() * colors.length)];
                console.log(color);

                return color.luminance < 50 ? color : getColor();
            }
            global.variables.initialColor = getColor();
            screen();
            return colors;
        })
        .then(colors => colors.forEach(color => {
            global.variables.colors.push(color);
        }));
        
        
    function screen() {
        setColors();
        setDelay();
        function setColors() {
            const screen = global.elements.screen;
            const input = global.elements.input;
            const time = global.elements.time;
            
            screen.style.backgroundColor = global.variables.initialColor.hex;
            input.style.backgroundColor = 'transparent';
            input.style.color = '#fff';
            input.style.textShadow = '2px 2px 1px #222'
            time.style.backgroundColor = 'transparent';
            
            
            
    
        }
        function setDelay(){
            setTimeout(() => {
                global.elements.input.style.opacity = 1;
            }, 1000)
            setTimeout(() => {
                global.elements.time.style.opacity = 1;
            }, 1500)
        }
    }
}