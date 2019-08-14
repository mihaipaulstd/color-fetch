function setup() {
    fetch('http://color-names.herokuapp.com/v1/')
        .then(res => res.json())
        .then(obj => obj.colors)
        .then(colors => {
            colors.forEach(color => {
                global.variables.colors.push(color);
            })
        screen();
        
        });
    function screen() {
        setColors();
        setDelay();
        function setColors() {
            const screen = global.elements.screen;
            const input = global.elements.input;
            const time = global.elements.time;
            
            const lightColor = generateLight();
            const darkColor = generateDark();

            const screenIsLight = Math.floor(Math.random() * 2) == 0 ? true : false;

            if(screenIsLight) {
                screen.style.backgroundColor = lightColor.hex;
                input.style.backgroundColor = 'rgba(0, 0, 0, .4)';
                time.style.backgroundColor = 'rgba(0, 0, 0, .4)';
                input.style.color = '#fff';
                input.style.textShadow = '2px 2px 1px #222';
            }
            else {
                screen.style.backgroundColor = darkColor.hex;
                input.style.backgroundColor = 'rgba(255, 255, 255, .4)';
                time.style.backgroundColor = 'rgba(255, 255, 255, .4)';
                input.style.color = '#222';
            }
            function getRandomColor() {
                return global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            }
    
            function generateLight() {
                const randomColor = getRandomColor();
                return randomColor.luminance >= 65 && randomColor.luminance <= 100 ? randomColor : generateLight();
            }
    
            function generateDark() {
                const randomColor = getRandomColor();
                return randomColor.luminance >= 30 && randomColor.luminance <= 65 ? randomColor : generateLight();
            }
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