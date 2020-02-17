const cartIcon = '.cart-icon';
const signalIcon = '.signal-icon';
const progressIcon = '.progress-icon';
const rocketIcon = '.rocket-icon';
const chatIcon = '.chat-icon';

//*** ICONS ANIMATIONS

//stroke animation
const strokeAnim = {
  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate' } };



//fill animation
const fillAnim = {
  fill: {
    value: '#000',
    easing: 'linear',
    duration: 400,
    delay: 1000 } };



//common animations
const baseAnims = {
  ...strokeAnim,
  ...fillAnim };


// cart animation
let cartBounceAnimation;

const cartIconAnimation = anime({
  targets: `${cartIcon} path`,

  ...baseAnims,

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

  ...baseAnims,

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

  ...baseAnims,

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

  ...baseAnims,

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

  ...baseAnims,

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

//common replay function
const replay = ({ initTarget, initValues }, cbPause, cbRestart) => {

  anime.set(initTarget, { ...initValues });

  cbPause.pause();
  cbRestart.restart();
};

//cart replay init
const cartReplay = document.querySelector('.cart-icon').nextElementSibling;

cartReplay.addEventListener('click', function () {

  replay(
  {
    initTarget: `${cartIcon} .arrow`,
    initValues: { translateY: 0 } },

  cartBounceAnimation,
  cartIconAnimation);


});

//signal replay init
const signalReplay = document.querySelector('.signal-icon').nextElementSibling;

signalReplay.addEventListener('click', function () {

  replay(
  {
    initTarget: `${signalIcon} .signal`,
    initValues: { opacity: 1 } },

  signalOpacityAnimation,
  signalIconAnimation);


});

//progress replay init
const progressReplay = document.querySelector('.progress-icon').nextElementSibling;

progressReplay.addEventListener('click', function () {

  replay(
  {
    initTarget: `${progressIcon} .progress-arrow`,
    initValues: {
      translateX: 0,
      translateY: 0 } },


  arrowMoveAnimation,
  progressIconAnimation);


});

//rocket icon replay init
const rocketReplay = document.querySelector('.rocket-icon').nextElementSibling;

rocketReplay.addEventListener('click', function () {

  replay(
  {
    initTarget: `${rocketIcon} .rocket-smoke`,
    initValues: {
      translateX: 0,
      translateY: 0,
      opacity: 1 } },


  rocketSmokeAnimation,
  rocketIconAnimation);

});

//chat icon replay init
const chatReplay = document.querySelector('.chat-icon').nextElementSibling;

chatReplay.addEventListener('click', function () {

  replay(
  {
    initTarget: `${chatIcon} .chat-dot`,
    initValues: { opacity: 1 } },

  chatDotsAnimation,
  chatIconAnimation);


});