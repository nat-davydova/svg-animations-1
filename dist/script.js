const cartIcon = '.cart-icon';
const signalIcon = '.signal-icon';
const progressIcon = '.progress-icon';
const rocketIcon = '.rocket-icon';
const chatIcon = '.chat-icon';

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



//progress animation
let arrowMoveAnimation;

const progressIconAnimation = anime({
  targets: `${progressIcon} path`,

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

    arrowMoveAnimation = anime({
      targets: `${progressIcon} .progress-arrow`,
      translateY: [120, 0],
      translateX: [120, 0],
      duration: 1100,
      easing: 'easeOutElastic',
      direction: 'normal',
      loop: true });


  } });


//rocket animation
let rocketSmokeAnimation;

const rocketIconAnimation = anime({
  targets: `${rocketIcon} path`,

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

    rocketSmokeAnimation = anime({
      targets: `${rocketIcon} .rocket-smoke`,
      translateY: [0, 20],
      translateX: [0, -20],
      opacity: [1, 0],
      duration: 250,
      delay: anime.stagger(150),
      easing: 'linear',
      direction: 'normal',
      loop: true });


  } });



//chat animation
let chatDotsAnimation;

const chatIconAnimation = anime({
  targets: `${chatIcon} path`,

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

    chatDotsAnimation = anime({
      targets: `${chatIcon} .chat-dot`,
      opacity: [1, 0],
      duration: 450,
      delay: anime.stagger(150),
      easing: 'linear',
      direction: 'alternate',
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

//progress replay init
const progressReplay = document.querySelector('.progress-icon').nextElementSibling;

progressReplay.addEventListener('click', function () {

  anime.set(`${progressIcon} .progress-arrow`, {
    translateX: 0,
    translateY: 0 });


  arrowMoveAnimation.pause();
  progressIconAnimation.restart();
});

//rocket icon replay init
const rocketReplay = document.querySelector('.rocket-icon').nextElementSibling;

rocketReplay.addEventListener('click', function () {
  anime.set(`${rocketIcon} .rocket-smoke`, {
    translateX: 0,
    translateY: 0,
    opacity: 1 });


  rocketSmokeAnimation.pause();
  rocketIconAnimation.restart();
});

//chat icon replay init
const chatReplay = document.querySelector('.chat-icon').nextElementSibling;

chatReplay.addEventListener('click', function () {
  anime.set(`${chatIcon} .chat-dot`, { opacity: 1 });

  chatDotsAnimation.pause();
  chatIconAnimation.restart();
});