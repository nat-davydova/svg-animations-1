const cartIcon = '.cart-icon';

//*** ICONS ANIMATIONS
const cartIconAnimation = anime({
  targets: `${cartIcon} path`,

  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    direction: 'alternate',
    loop: false },


  fill: {
    value: '#000',
    easing: 'linear',
    duration: 400,
    delay: 1500,
    loop: false },


  complete: () => {

    anime.set(`${cartIcon} .arrow`, {
      translateY: 0 });


    const arrowAnimation = anime({

      targets: `${cartIcon} .arrow`,
      translateY: -30,
      duration: 1000,
      easing: 'easeOutElastic',
      loop: true });



  } });



//*** REPLAYS INIT
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', cartIconAnimation.restart);