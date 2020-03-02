var audio,
    note,
    num,
    fromLength, 
    fromResult,
    counterFirst = 0,
    counterThird = 0,
    fromId = 0,
    sign = '+',
    musicOn = false;
    one = document.querySelector("button#one");
    two = document.querySelector("button#two");
    three = document.querySelector("button#three");
    four = document.querySelector("button#four");
    five = document.querySelector("button#five");
    six = document.querySelector("button#six");
    seven = document.querySelector("button#seven");
    eight = document.querySelector("button#eight");
    nine = document.querySelector("button#nine");
    zero = document.querySelector("button#zero");
    plus = document.querySelector("button#plus");
    minus = document.querySelector("button#minus");
    multiple = document.querySelector("button#multiple");
    divide = document.querySelector("button#divide");
    percent = document.querySelector("button#percent");
    music = document.querySelector("button#music");
    plusMinus = document.querySelector("button#plus-minus");
    delLastSign = document.querySelector("button#del-last-sign");
    c = document.querySelector("button#C");
    equal = document.querySelector("button#equal");
    point = document.querySelector("button#point");

// Функция воспроизведения музыки
function musicOnOffHandler() {
    if (!musicOn) {
    note = document.getElementById("music").innerHTML = "&#x25B6;";
    audio = new Audio(); 
    audio.src = '../audio/zvuki_prirodi.mp3'; 
    audio.play(); 
    musicOn = true;
    } else {
        audio.pause();
        document.getElementById("music").innerHTML = "&#119136;";
        musicOn = false;
    }
};

// Функция добавляет нажатую цифру в результат, следит, 
//чтобы в окне результата не было переполнения, если в окне ноль 
//- удаляет его
function addNumber() {
	fromResult = document.getElementById('result').innerHTML;
    if (fromResult === "0") {
        document.getElementById('result').innerHTML = "";
    };
	
    fromLength = fromResult.length;
    counterSecond = document.getElementById("result").innerHTML;
    counterSecond = counterSecond.length;
    if (counterSecond > 15) {
        fail;
    };
    document.getElementById('result').innerHTML += fromId; 
    parseFloat(document.getElementById('result').innerHTML);  
};

// Функция работы кнопки "один"
function pressButtonOne() {
    fromId = document.getElementById('one').innerHTML;
    addNumber();
};

// Функция работы кнопки "два"
function pressButtonTwo() {
    fromId = document.getElementById('two').innerHTML;
    addNumber();
};

// Функция работы кнопки "три"
function pressButtonThree() {
    fromId = document.getElementById('three').innerHTML;
    addNumber();
};

// Функция работы кнопки "четыре"
function pressButtonFour() {
    fromId = document.getElementById('four').innerHTML;
    addNumber();
};

// Функция работы кнопки "пять"
function pressButtonFive() {
    fromId = document.getElementById('five').innerHTML;
    addNumber();
};

// Функция работы кнопки "шесть"
function pressButtonSix() {
    fromId = document.getElementById('six').innerHTML;
    addNumber();
};

// Функция работы кнопки "семь"
function pressButtonSeven() {
    fromId = document.getElementById('seven').innerHTML;
    addNumber();
};

// Функция работы кнопки "восемь"
function pressButtonEight() {
    fromId = document.getElementById('eight').innerHTML;
    addNumber();
};

// Функция работы кнопки "девять"
function pressButtonNine() {
    fromId = document.getElementById('nine').innerHTML;
    addNumber();
};

// Функция работы кнопки "ноль"
function pressButtonZero() {
    fromId = document.getElementById('zero').innerHTML;
    addNumber();
};

// Функция работы кнопки ""
function pressButtonPoint() {
    counterThird++;
    if (counterThird > 1) {
        alert("Запятая может быть только одна");
        fail;
    }
    fromId = document.getElementById('point').innerHTML;
    addNumber();
};

// Общая функция для знаков, рассчитывающая число, 
//попадающее в архив + обнуление счетчика запятой
 function archivCalculation() {
    number1 = document.getElementById('result').innerHTML;
    number2 = document.getElementById('archiv').innerHTML;
        
    if (sign === "+") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(number2) + parseFloat(number1);        
    }

    if (sign === "-") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(number2) - parseFloat(number1);
    }

    if (sign === "*") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(number2) * parseFloat(number1);
    }

    if (sign === "/") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(number2) / parseFloat(number1);
    }

    if (sign === "%") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(number2) / 100 * parseFloat(number1);
    }
    document.getElementById('result').innerHTML = "";
    counterThird = 0;
};

// Функция работы кнопки "плюс"
function pressButtonPlus() {
    archivCalculation();
    sign = "+";
};

// Функция работы кнопки "минус"
function pressButtonMinus() {
    archivCalculation();
    sign = "-";
};

// Функция работы кнопки "умножить"
function pressButtonMultiple() { 
    archivCalculation();
    sign = "*";
};

// Функция работы кнопки "разделить"
function pressButtonDivide() {
    archivCalculation();
    sign = "/";
};

// Функция работы кнопки "процент"
function pressButtonPercent() {
    var previousSign = sign;
    var previousArchive = document.getElementById('archiv').innerHTML;
    sign = "%";
    archivCalculation();
    sign = previousSign;
    document.getElementById('result').innerHTML = document.getElementById('archiv').innerHTML;
    document.getElementById('archiv').innerHTML = previousArchive;
};

// Функция работы кнопки "плюс/минус"
function pressButtonPlusMinus() {
    num = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = 0 - num;
};

// Функция работы кнопки "сброс"
function pressButtonReset() {
    document.getElementById('result').innerHTML = "0";
    document.getElementById('archiv').innerHTML = '0';
    sign = "+";
};

// Функция работы кнопки "равно"
function pressButtonEqual() {
    archivCalculation();
    document.getElementById('result').innerHTML = 
    document.getElementById('archiv').innerHTML;	
    document.getElementById('archiv').innerHTML = "0";
    sign = "+";
};

// Включаем музыку по нажатию на кнопку музыки, меняем значек на кнопке
music.addEventListener('click', musicOnOffHandler);

// Нажатие кнопки 1
one.addEventListener('click', pressButtonOne);

// Нажатие кнопки 2
two.addEventListener('click', pressButtonTwo);

// Нажатие кнопки 3
three.addEventListener('click', pressButtonThree);

// Нажатие кнопки 4
four.addEventListener('click', pressButtonFour);

// Нажатие кнопки 5
five.addEventListener('click', pressButtonFive);

// Нажатие кнопки 6
six.addEventListener('click', pressButtonSix);

// Нажатие кнопки 7
seven.addEventListener('click', pressButtonSeven);

// Нажатие кнопки 8
eight.addEventListener('click', pressButtonEight);

// Нажатие кнопки 9
nine.addEventListener('click', pressButtonNine);

// Нажатие кнопки 0
zero.addEventListener('click', pressButtonZero);

// Нажатие кнопки "точка"
point.addEventListener('click', pressButtonPoint);

// Нажатие кнопки "плюс"
plus.addEventListener('click', pressButtonPlus);

// Нажатие кнопки "минус"
minus.addEventListener('click', pressButtonMinus);

// Нажатие кнопки "умножить"
multiple.addEventListener('click', pressButtonMultiple);

// Нажатие кнопки "разделить"
divide.addEventListener('click', pressButtonDivide);

// Нажатие кнопки "процент"
percent.addEventListener('click', pressButtonPercent);

// Нажатие кнопки "плюс/минус"
plusMinus.addEventListener('click', pressButtonPlusMinus);

// Нажатие кнопки "сброс"
c.addEventListener('click', pressButtonReset);

// Нажатие кнопки "равно"
equal.addEventListener('click', pressButtonEqual);

// Нажатие на кнопку "удаление последнего символа"
delLastSign.addEventListener('click', function delLastSign() {
    var delLast = (document.getElementById('result').innerHTML - 
    document.getElementById('result').innerHTML % 10) / 10;
	document.getElementById('result').innerHTML = delLast;
});

// Обработка событий нажатия кнопок нампада или клавиатуры
document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
        pressButtonReset();
	};
	if (evt.keyCode === 13) {
        pressButtonEqual();
	};
	if (evt.keyCode === 8) {
	   delLastSign();
	};
	if ((evt.keyCode === 49) || (evt.keyCode === 97)) {
        pressButtonOne();
	};
	if ((evt.keyCode === 50) || (evt.keyCode === 98)) {
        pressButtonTwo();
	};
	if ((evt.keyCode === 51) || (evt.keyCode === 99)) {
        pressButtonThree();
	};
	if ((evt.keyCode === 52) || (evt.keyCode === 100)) {
        pressButtonFour();
	};
	if ((evt.keyCode === 53) || (evt.keyCode === 101)) {
        pressButtonFive();
	};
	if ((evt.keyCode === 54) || (evt.keyCode === 102)) {
        pressButtonSix();
	};
	if ((evt.keyCode === 55) || (evt.keyCode === 103)) {
        pressButtonSeven();
	};
	if ((evt.keyCode === 56) || (evt.keyCode === 104)) {
        pressButtonEight();
	};
	if ((evt.keyCode === 57) || (evt.keyCode === 105)) {
        pressButtonNine();
	};
	if ((evt.keyCode === 48) || (evt.keyCode === 96)) {
        pressButtonZero();
	};
	if (evt.keyCode === 107) {
        pressButtonPlus();
	};
	if (evt.keyCode === 109) {
        pressButtonMinus();
	};
	if (evt.keyCode === 106) {
        pressButtonMultiple();
	};
	if ((evt.keyCode === 111) || (evt.keyCode === 191)) {
        pressButtonDivide();
    };
    if ((evt.keyCode === 110) || (evt.keyCode === 188) || 
    (evt.keyCode === 190)) {
        pressButtonPoint();
    }
});