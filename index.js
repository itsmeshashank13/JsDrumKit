
// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if(!audio) return;

//   audio.currentTime = 0; 
//   audio.play();

//   key.classList.add('playing');
// }

// function removeTransition(e) {
//   if(e.propertyName !== 'transform') return;
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => {
//   key.addEventListener('transitionend', removeTransition);

//   const kbd = key.querySelector('kbd');
//   const sound = key.querySelector('.sound');
//   kbd.addEventListener('transitionend', removeTransition);
//   sound.addEventListener('transitionend', removeTransition);
// });

// window.addEventListener('keydown', playSound);


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
