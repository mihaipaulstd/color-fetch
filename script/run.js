function run() {
    console.log('running');
    
    fetch('http://color-names.herokuapp.com/v1/')
        .then(res => res.json())
        .then(obj => obj.colors)
        .then(colors => {
            colors.forEach(color => {
                global.variables.colors.push(color);
            });
            
        });
        
        

}