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

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font="25px Arial";
ctx.fillText("Hello world!",75,45);

document.getElementById("demo").innerHTML="&copy Знания создают ваше будущее!";

var cardsData = [
  {
    inStock: true,
    imgUrl: '../images/oranges.jpg',
    text: 'Апельсиновый фреш',
    price: 70,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: '../images/strawberry.jpg',
    text: 'Клубничное настроение',
    price: 65,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: '../images/kiwis.jpg',
    text: 'Киви с фруктозой',
    price: 100,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: '../images/mango.jpg',
    text: 'Манговый мусс',
    price: 150,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: '../images/cream.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: '../images/fruktoviy-muss.jpg',
    text: 'Фруктовый шейк',
    price: 50,
    isHit: false
  }
];

var makeCardElement = function (nameTag, nameClass, text) {
  var element = document.createElement(nameTag);
  element.classList.add(nameClass);
  
  if (text) {
   element.textContent = text; 
  };
  return element
}

var makeCard = function (product) {
  var card = makeCardElement('li', 'good');
  
  var title = makeCardElement('h2', 'good__description', product.text);
  card.appendChild(title);
  
  var picture = makeCardElement('img', 'good__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  card.appendChild(picture);
  
  var price = makeCardElement('p', 'good__price', (product.price + ' \u20B4/л'));
  card.appendChild(price);
  
  if (product.isHit) {
    card.classList.add('good--hit');
    var specialOffer = makeCardElement('p', 'good__special-offer', product.specialOffer);
    card.appendChild(specialOffer);
    }
    
  var availabilityClass = 'good--available';
  if (!product.inStock) {
    availabilityClass = 'good--unavailable';
  };
  card.classList.add(availabilityClass);
  return card
}

var list = document.querySelector('ul');

var renderCards = function (cardsData) {
  
  for ( var i = 0; i < cardsData.length; i++) {
    var goodCard = makeCard(cardsData[i]);
    list.appendChild(goodCard);
  }
  return goodCard
}

renderCards(cardsData);

