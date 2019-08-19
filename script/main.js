var global = {
    screen: document.getElementById('screen'),
    input: document.getElementById('input'),
    colorSpan: document.getElementById('color-span'),

    gameOver: true,
    inputValue: new String(),
    targetColor: new String(),
    colors: new Array(),
    darkColor: new String(),
    lightColor: new String(),
    colorX: new Number(),
    colorY: new Number(),
};

window.addEventListener('load', init);

function init() {
    fetchColors()
        .then(() => {
            setup();

        })
}