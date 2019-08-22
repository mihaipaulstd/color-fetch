function preventDefaultSubmit() {
  global.form.addEventListener('submit', e => {
    e.preventDefault();
  });
}