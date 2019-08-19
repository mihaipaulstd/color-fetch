var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input')
    },
    variables: {
        gameOver: true,
        inputValue: new String(),
        colors: new Array(),
        darkColor: new String(),
        lightColor: new String(),
    },
    functions: {
        init: {
            setScreen: function() {
                global.functions.init.setElements();
                global.functions.init.setDelay();
            },
            setElements: function() {
                global.functions.setDarkColor();
                global.functions.setLightColor();
    
                const screen = global.elements.screen;
                const input = global.elements.input;

                const screenColor = global.variables.lightColor;
                
                screen.style.backgroundColor = screenColor.hex;
                input.style.color = '#fff';
                input.style.backgroundColor = 'transparent';
                
            },
            setDelay: function() {
                setTimeout(() => {
                    global.elements.input.style.opacity = 1;
                }, 1000)
            },
        },
        main: {
            setListener: function() {
                global.elements.input.addEventListener('input', global.functions.main.listen);
            },
            listen: function(event){
                if(event.target.value.toLowerCase() === 'start' && global.variables.gameOver !== false) {
                    global.variables.gameOver = false;
                    global.functions.main.keywordAnimation();
                    console.log('started');
                    
                }
                if(event.target.value.toLowerCase() === 'stop' && global.variables.gameOver !== true) {
                    global.variables.gameOver = true;
                    global.functions.main.keywordAnimation();
                    console.log('stopped');
                }
            },
            keywordAnimation: function() {
                global.elements.input.style.transition = 'opacity 450ms ease-in-out';
                setTimeout(() => {
                    global.elements.input.style.opacity = 0;
                    
                }, 0);
                setTimeout(() => {
                    global.elements.input.value = '';
                    
                }, 450);
                setTimeout(() => {
                    global.elements.input.style.opacity = 1;
                }, 900);
            }
        },
        setLightColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance >= 75 && color.luminance <= 100 ? global.variables.lightColor = color : this.setLightColor();
            
        },
        setDarkColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance <= 30 ? global.variables.darkColor = color : this.setDarkColor();
        },
        
    }

};

window.addEventListener('load', init);

function init() {
    run();
    
}