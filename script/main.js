var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input'),
        colorSpan: document.getElementById('color-span')
    },
    variables: {
        gameOver: true,
        inputValue: new String(),
        targetColor: new String(),
        colors: new Array(),
        darkColor: new String(),
        lightColor: new String(),
        colorX: new Number(),
        colorY: new Number()
    },
    functions: {
        init: {
            setScreen: function() {
                global.functions.init.setElements();
                global.functions.init.setDelay();
                global.elements.colorSpan.innerHTML = '';
            },
            setElements: function() {
                global.functions.setInitialBackground();
    
                global.elements.screen.style.backgroundColor = global.variables.lightColor.hex;
                global.elements.input.style.color = '#fff';
                global.elements.input.style.backgroundColor = 'transparent';
                
                
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
                global.variables.inputValue = event.target.value;
                if(event.target.value.toLowerCase() === 'start' && global.variables.gameOver !== false) {
                    global.variables.gameOver = false;
                    global.functions.startAnimation();
                    global.functions.setTargetColor();
                    global.functions.setColor();
                    console.log('started');
                }

                

                if(event.target.value.toLowerCase() === 'stop' && global.variables.gameOver !== true) {
                    global.variables.gameOver = true;
                    global.functions.stopAnimation();
                    console.log('stopped');
                }
                
            },
            

        },
        setInitialBackground: function() {
            const color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance >= 75 && color.luminance <= 100 ? global.variables.lightColor = color : this.setInitialBackground();
        },
        setTargetColor: function() {
            global.variables.targetColor = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)]
        },
        setColor: function() {
            const index = global.variables.colors.map(color => color.name.toLowerCase()).indexOf(event.target.value.toLowerCase()) ;

            
            if(index != -1 && global.variables.targetColor.name.toLowerCase() == global.variables.colors[index].name.toLowerCase()){
                
                global.elements.screen.style.backgroundColor = global.variables.colors[index].hex;
                global.functions.setTargetColor();
            }
        },
        startAnimation: function() {
            global.elements.input.style.transition = 'opacity 750ms ease-in-out';
            setTimeout(() => {
                global.elements.input.setAttribute('readonly', 'readonly');

            }, 0);
            setTimeout(() => {
                global.elements.input.style.opacity = 0;
            }, 750);
            setTimeout(() => {
                global.elements.input.value = '';
                global.elements.input.style.opacity = 1;
                global.elements.input.removeAttribute('readonly', 'readonly'); 
            }, 1500);
        },
        stopAnimation: function() {
            global.elements.input.style.transition = 'opacity 750ms ease-in-out';
            setTimeout(() => {
                global.elements.input.setAttribute('readonly', 'readonly');

            }, 0);
            setTimeout(() => {
                global.elements.input.style.opacity = 0;
            }, 750);
            setTimeout(() => {
                global.elements.input.value = '';
                global.elements.input.style.opacity = 1;
                global.elements.input.removeAttribute('readonly', 'readonly');
            }, 1500);
        },
    }

};

window.addEventListener('load', init);

function init() {
    run();
    
}