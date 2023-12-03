const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio');

document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (keyElement) {
    keyElement.classList.add('playing');
    const soundElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    soundElement.play();
  }
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.keyCode;
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (keyElement) {
    keyElement.classList.remove('playing');
  }
});