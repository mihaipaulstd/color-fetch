var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input'),
        time: document.getElementById('time-left')
    },
    variables: {
        colors: new Array(),
        initialColor: new String()
    }

};

window.addEventListener('load', init);

function init() {
    setup();
    console.log();
    
    
}