const cartIcon = '.cart-icon';

//*** HELPER ANIMATIONS
const lineAnimation = (elem, duration = 1500) => {
  anime({
    targets: `${elem} path`,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    direction: 'alternate',
    loop: false });

};


//*** ICONS ANIMATIONS
const cartIconAnimation = () => {
  lineAnimation(cartIcon);
};

//*** REPLAYS INIT
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', cartIconAnimation);

//*** ANIMATIONS ONLOAD
cartIconAnimation();