var a, countOne = 0, countTwo, countThree = 0, audio, note, fromId = 0, fromLength, 
fromResult, sign = '+', num;

// Включаем музыку по нажатию на кнопку музыки, меняем значек на кнопке
function sound() {
    countOne++;

    if (countOne%2 == 1) {
    note = document.getElementById("music").innerHTML = "&#x25B6;"
    audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '../audio/zvuki_prirodi.mp3'; // Указываем путь к звуку "клика"
    audio.play(); // 3апускаем
    } else {
        audio.pause();
        document.getElementById("music").innerHTML = "&#119136;"
    }
}

// Функция добавляет нажатую цифру в результат, следит, чтобы в окне результата
// не было переполнения, если в окне ноль - удаляет его
function getNumber() {
	fromResult = document.getElementById('result').innerHTML;
    if (fromResult === "0") {
        document.getElementById('result').innerHTML = "";
    };
	
    fromLength = fromResult.length;
    countTwo = document.getElementById("result").innerHTML;
    countTwo = countTwo.length;
    if (countTwo > 15) {
        fail;
    };
    document.getElementById('result').innerHTML += fromId; 
    parseFloat(document.getElementById('result').innerHTML);  
}

// Нажатие кнопки 1
function getOne() {
    fromId = document.getElementById('one').innerHTML;
    getNumber();
}

// Нажатие кнопки 2
function getTwo() {
    fromId = document.getElementById('two').innerHTML;
    getNumber();
}

// Нажатие кнопки 3
function getThree() {
    fromId = document.getElementById('three').innerHTML;
    getNumber();
}

// Нажатие кнопки 4
function getFour() {
    fromId = document.getElementById('four').innerHTML;
    getNumber();
}

// Нажатие кнопки 5
function getFive() {
    fromId = document.getElementById('five').innerHTML;
    getNumber();
}

// Нажатие кнопки 6
function getSix() {
    fromId = document.getElementById('six').innerHTML;
    getNumber();
}

// Нажатие кнопки 7
function getSeven() {
    fromId = document.getElementById('seven').innerHTML;
    getNumber();
}

// Нажатие кнопки 8
function getEight() {
    fromId = document.getElementById('eight').innerHTML;
    getNumber();
}

// Нажатие кнопки 9
function getNine() {
    fromId = document.getElementById('nine').innerHTML;
    getNumber();
}

// Нажатие кнопки 0
function getZero() {
    fromId = document.getElementById('zero').innerHTML;
    getNumber();
}

// Нажатие кнопки "точка"
function getPoint() {
    countThree++;
    if (countThree > 1) {
        alert("Запятая может быть только одна");
        fail;
    }
    fromId = document.getElementById('point').innerHTML;
    getNumber();
}

// Общая функция для знаков, рассчитывающая число, попадающее в архив + обнуление счетчика запятой
 function getArchiv() {
    if (sign === "+") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(document.getElementById('archiv').innerHTML) + 
        parseFloat(document.getElementById('result').innerHTML);
    }

    if (sign === "-") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(document.getElementById('archiv').innerHTML) - 
        parseFloat(document.getElementById('result').innerHTML);
    }

    if (sign === "*") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(document.getElementById('archiv').innerHTML) * 
        parseFloat((document.getElementById('result').innerHTML).slice(1));
    }

    if (sign === "/") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(document.getElementById('archiv').innerHTML) / 
        parseFloat((document.getElementById('result').innerHTML).slice(1));
    }

    if (sign === "%") {
        document.getElementById('archiv').innerHTML = 
        parseFloat(document.getElementById('archiv').innerHTML) / 
        100 * parseFloat((document.getElementById('result').innerHTML).slice(1));
    }
    countThree = 0;
}

// Нажатие кнопки "плюс"
function getPlus() {
    getArchiv();
    sign = "+";
    document.getElementById('result').innerHTML = '+';
}

// Нажатие кнопки "минус"
function getMinus() {
    getArchiv();
    sign = "-";
    document.getElementById('result').innerHTML = '-';
}

// Нажатие кнопки "умножить"
function getMultiple() { 
    getArchiv();
    sign = "*";
    document.getElementById('result').innerHTML = '*';
}

// Нажатие кнопки "разделить"
function getDivide() {
    getArchiv();
    sign = "/";
    document.getElementById('result').innerHTML = '/';
}

// Нажатие кнопки "процент"
function getPercent() {
    getArchiv();
    sign = "%";
    document.getElementById('result').innerHTML = '%';
}

// Нажатие кнопки "плюс/минус"
function getPlusMinus() {
    num = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = 0 - num;
}

// Нажатие кнопки "сброс"
function getReset() {
    document.getElementById('result').innerHTML = "0";
    document.getElementById('archiv').innerHTML = '0';
}

// Нажатие кнопки "равно"
function getEqual() {
    getArchiv();
    document.getElementById('result').innerHTML = document.getElementById('archiv').innerHTML;	
    document.getElementById('archiv').innerHTML = '0';
}


// Нажатие на кнопку "удаление последнего символа"
function delLastSign() {
    var delLast = (document.getElementById('result').innerHTML - 
    document.getElementById('result').innerHTML % 10) / 10;
	document.getElementById('result').innerHTML = delLast;
}

// Обработка событий нажатия кнопок нампада
document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
	   getReset();
	};
	if (evt.keyCode === 13) {
	   getEqual();
	};
	if (evt.keyCode === 8) {
	   delLastSign();
	};
	if ((evt.keyCode === 49) || (evt.keyCode === 97)) {
	   getOne();
	};
	if ((evt.keyCode === 50) || (evt.keyCode === 98)) {
	   getTwo();
	};
	if ((evt.keyCode === 51) || (evt.keyCode === 99)) {
	   getThree();
	};
	if ((evt.keyCode === 52) || (evt.keyCode === 100)) {
	   getFour();
	};
	if ((evt.keyCode === 53) || (evt.keyCode === 101)) {
	   getFive();
	};
	if ((evt.keyCode === 54) || (evt.keyCode === 102)) {
	   getSix();
	};
	if ((evt.keyCode === 55) || (evt.keyCode === 103)) {
	   getSeven();
	};
	if ((evt.keyCode === 56) || (evt.keyCode === 104)) {
	   getEight();
	};
	if ((evt.keyCode === 57) || (evt.keyCode === 105)) {
	   getNine();
	};
	if ((evt.keyCode === 48) || (evt.keyCode === 96)) {
	   getZero();
	};
	if (evt.keyCode === 107) {
	   getPlus();
	};
	if (evt.keyCode === 109) {
	   getMinus();
	};
	if (evt.keyCode === 106) {
	   getMultiple();
	};
	if ((evt.keyCode === 111) || (evt.keyCode === 191)) {
	   getDivide();
    };
    if ((evt.keyCode === 110) || (evt.keyCode === 188) || (evt.keyCode === 190)) {
        getPoint();
    }
});
