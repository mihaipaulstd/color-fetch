function preventDefault() {
  global.form.addEventListener('submit', e => {
    e.preventDefault();
  });
}