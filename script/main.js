var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input')
    },
    variables: {
        colors: new Array(),
        randomColor: new String()
    }

};

window.addEventListener('load', init);

function init() {
    setup();
    
}