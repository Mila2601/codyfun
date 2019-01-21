var popup = document.querySelector('.popup');
var openPopupButton = document.querySelector('.popup--open');
var cardButtonHide = document.querySelector('.button-hide');


openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--open')
});

cardButtonHide.addEventListener('click', function () {
  popup.classList.remove('popup--open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
   popup.classList.remove('popup--open')
  }  
});

document.getElementById("demo").innerHTML="Знания создают ваше будущее!";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font="25px Arial";
ctx.fillText("Hello world!",75,45);