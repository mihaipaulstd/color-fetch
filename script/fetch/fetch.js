async function fetchColors() {
  await fetch("http://color-names.herokuapp.com/v1/")
    .then(res => res.json())
    .then(obj => obj.colors)
    .then(colors => {
      colors.forEach(color => {
        if (
          color.name.length <= 20 &&
          color.name
            .split(" ")
            .join()
            .split("")
            .every(letter => letter.match(/^[0-9a-zA-Z]+$/))
        )
          global.colors.push(color);
      });
    });
  return this;
}
