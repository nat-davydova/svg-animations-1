const cartIcon = '.cart-icon';
const signalIcon = '.signal-icon';

//*** ICONS ANIMATIONS

// cart animation
let cartBounceAnimation;

const cartIconAnimation = anime({
  targets: `${cartIcon} path`,

  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate' },


  fill: {
    value: '#000',
    easing: 'linear',
    duration: 400,
    delay: 1000 },


  complete: function () {

    cartBounceAnimation = anime({
      targets: `${cartIcon} .arrow`,
      translateY: [-30, 0],
      duration: 700,
      easing: 'easeOutElastic',
      direction: 'alternate',
      loop: true });


  } });



//signal animation

let signalOpacityAnimation;

const signalIconAnimation = anime({
  targets: `${signalIcon} path`,

  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate' },


  fill: {
    value: '#000',
    easing: 'linear',
    duration: 400,
    delay: 1000 },


  complete: function () {

    signalOpacityAnimation = anime({
      targets: `${signalIcon} .signal`,
      opacity: [0, 1],
      duration: 700,
      delay: anime.stagger(150),
      easing: 'linear',
      direction: 'normal',
      loop: true });


  } });



//*** REPLAYS INIT

//cart replay init
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', function () {
  cartBounceAnimation.pause();
  cartIconAnimation.restart();
});

//signal replay init
const signalReplay = document.querySelector('.signal-icon').nextElementSibling;

signalReplay.addEventListener('click', function () {

  anime.set(`${signalIcon} .signal`, { opacity: 1 });

  signalOpacityAnimation.pause();
  signalIconAnimation.restart();
});