var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');


openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--open')
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
   popup.classList.remove('popup--open')
  }  
});