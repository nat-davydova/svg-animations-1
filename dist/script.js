const cartIcon = '.cart-icon';

//*** ICONS ANIMATIONS

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



//*** REPLAYS INIT
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', function () {
  cartBounceAnimation.pause();
  cartIconAnimation.restart();
});