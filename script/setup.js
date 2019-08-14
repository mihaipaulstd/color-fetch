function setup() {
    fetchColors();
    async function fetchColors() {
        await fetch('https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json')
        .then(res => res.json())
        .then(obj => Object.keys(obj))
        .then(keys => {
            keys.forEach(key => {
                global.variables.colors.push(key);
            })
        });
    }
}