var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input'),
        time: document.getElementById('time-left')
    },
    variables: {
        colors: new Array(),
        darkColor: new String(),
        lightColor: new String()
    },
    functions: {
        setDarkColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance <= 50 ? global.variables.darkColor = color : this.setDarkColor();
        },
        setLightColor: function() {
            let color = global.variables.colors[Math.floor(Math.random() * global.variables.colors.length)];
            color.luminance >= 100 ? global.variables.lightColor = color : this.setLightColor();
        }
    }

};

window.addEventListener('load', init);

function init() {
    run();
    
    
}