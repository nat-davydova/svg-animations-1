const cartIcon = '.cart-icon';

//*** ICONS ANIMATIONS
const cartIconAnimation = anime({
  targets: `${cartIcon} path`,

  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    direction: 'alternate' },


  fill: {
    value: '#000',
    easing: 'linear',
    duration: 400,
    delay: 1500 },


  loop: false });


//*** REPLAYS INIT
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', cartIconAnimation.restart);