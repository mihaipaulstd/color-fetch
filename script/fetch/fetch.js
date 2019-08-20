async function fetchColors() {
  await fetch("http://color-names.herokuapp.com/v1/")
    .then(res => res.json())
    .then(obj => obj.colors)
    .then(colors => {
      colors.forEach(color => {
        global.colors.push(color);
      });
    });
  return this;
}
