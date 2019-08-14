var global = {
    elements: {
        screen: document.getElementById('screen'),
        input: document.getElementById('input')
    },
    variables: {
        colors: []
    }

};

window.addEventListener('load', init);

function init() {
    setup();
    
}