var global = {
    screen: document.getElementById('screen'),
    input: document.getElementById('input'),
    colorSpan: document.getElementById('color-span'),

    gameOver: true,
    inputValue: new String(),
    targetColor: new String(),
    intervalColor: new String(),
    colors: new Array(),
    colorX: new Number(),
    colorY: new Number(),
};

window.addEventListener('load', init);

function init() {
    console.log('running');
    fetchColors()
        .then(() => {
            setup();

        })
}