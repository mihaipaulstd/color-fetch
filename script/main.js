var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input'),
        time: document.getElementById('time-left')
    },
    variables: {
        colors: new Array()
    }

};

window.addEventListener('load', init);

function init() {
    setup();
    
}