var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input'),
        colorSpan: document.getElementById('color-span')
    },
    variables: {
        gameOver: true,
        inputValue: new String(),
        colors: new Array(),
        randomColor: new String(),
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
                global.functions.setDarkColor();
                global.functions.setLightColor();
    
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
            start: {
                start: function() {
                    global.functions.main.start.startAnimation();
                    global.functions.setRandomColor();
                    
                  
                },
                startAnimation: function() {
                    
                }
            },
            running: {
                colorAnimation: function() {
                    global.elements.input.style.transition = 'opacity 750ms ease-in-out';
                    setTimeout(() => {
                        
                    }, 0);
                    setTimeout(() => {
                       
                    }, 750);
                    setTimeout(() => {
                        
                    }, 1500);
                    
                },
            },
            stop: {
                stop: function() {
                    global.functions.main.stop.stopAnimation();
                
                },
                stopAnimation: function(){
                    setTimeout(() => {
                        
                        
                    }, 0);
                    setTimeout(() => {
                        
                    }, 750);
                    setTimeout(() => {
                        
                    }, 1500);
                },
            },
            setListener: function() {
                global.elements.input.addEventListener('input', global.functions.main.listen);
            },
            listen: function(event){
                if(event.target.value.toLowerCase() === 'start' && global.variables.gameOver !== false) {
                    global.variables.gameOver = false;
                    global.functions.main.start.start();
                    console.log('started');
                }
                if(event.target.value.toLowerCase() === 'stop' && global.variables.gameOver !== true) {
                    global.variables.gameOver = true;
                    global.functions.main.stop.stop();
                    console.log('stopped');
                }
                
            },
            
            
            
            
            
            

        },
        setLightColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance >= 75 && color.luminance <= 100 ? global.variables.lightColor = color : this.setLightColor();
        },
        setDarkColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance <= 30 ? global.variables.darkColor = color : this.setDarkColor();
        },
        setRandomColor: function() {
            global.variables.randomColor = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)]
        }
        
    }

};

window.addEventListener('load', init);

function init() {
    run();
    
}