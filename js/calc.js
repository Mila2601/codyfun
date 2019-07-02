var countOne = 0,
    countThree = 0,
    fromId = 0,
    audio,
    note,
    num,
    fromLength, 
    fromResult,
    sign = '+',
    musicOn = false;

// Включаем музыку по нажатию на кнопку музыки, меняем значек на кнопке
function musicOnOffHandler() {
    if (!musicOn) {
    note = document.getElementById("music").innerHTML = "&#x25B6;";
    audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '../audio/zvuki_prirodi.mp3'; // Указываем путь к звуку "клика"
    audio.play(); // 3апускаем
    musicOn = true;
    } else {
        audio.pause();
        document.getElementById("music").innerHTML = "&#119136;";
        musicOn = false;
    }
}

// Функция добавляет нажатую цифру в результат, следит, чтобы в окне результата
// не было переполнения, если в окне ноль - удаляет его
function addNumber() {
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
function pressButtonOne() {
    fromId = document.getElementById('one').innerHTML;
    addNumber();
}

// Нажатие кнопки 2
function pressButtonTwo() {
    fromId = document.getElementById('two').innerHTML;
    addNumber();
}

// Нажатие кнопки 3
function pressButtonThree() {
    fromId = document.getElementById('three').innerHTML;
    addNumber();
}

// Нажатие кнопки 4
function pressButtonFour() {
    fromId = document.getElementById('four').innerHTML;
    addNumber();
}

// Нажатие кнопки 5
function pressButtonFive() {
    fromId = document.getElementById('five').innerHTML;
    addNumber();
}

// Нажатие кнопки 6
function pressButtonSix() {
    fromId = document.getElementById('six').innerHTML;
    addNumber();
}

// Нажатие кнопки 7
function pressButtonSeven() {
    fromId = document.getElementById('seven').innerHTML;
    addNumber();
}

// Нажатие кнопки 8
function pressButtonEight() {
    fromId = document.getElementById('eight').innerHTML;
    addNumber();
}

// Нажатие кнопки 9
function pressButtonNine() {
    fromId = document.getElementById('nine').innerHTML;
    addNumber();
}

// Нажатие кнопки 0
function pressButtonZero() {
    fromId = document.getElementById('zero').innerHTML;
    addNumber();
}

// Нажатие кнопки "точка"
function pressButtonPoint() {
    countThree++;
    if (countThree > 1) {
        alert("Запятая может быть только одна");
        fail;
    }
    fromId = document.getElementById('point').innerHTML;
    addNumber();
}

// Общая функция для знаков, рассчитывающая число, попадающее в архив + обнуление счетчика запятой
 function archivCalculation() {
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
function pressButtonPlus() {
    archivCalculation();
    sign = "+";
    document.getElementById('result').innerHTML = '+';
}

// Нажатие кнопки "минус"
function pressButtonMinus() {
    archivCalculation();
    sign = "-";
    document.getElementById('result').innerHTML = '-';
}

// Нажатие кнопки "умножить"
function pressButtonMultiple() { 
    archivCalculation();
    sign = "*";
    document.getElementById('result').innerHTML = '*';
}

// Нажатие кнопки "разделить"
function pressButtonDivide() {
    archivCalculation();
    sign = "/";
    document.getElementById('result').innerHTML = '/';
}

// Нажатие кнопки "процент"
function pressButtonPercent() {
    archivCalculation();
    sign = "%";
    document.getElementById('result').innerHTML = '%';
}

// Нажатие кнопки "плюс/минус"
function pressButtonPlusMinus() {
    num = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = 0 - num;
}

// Нажатие кнопки "сброс"
function pressButtonReset() {
    document.getElementById('result').innerHTML = "0";
    document.getElementById('archiv').innerHTML = '0';
}

// Нажатие кнопки "равно"
function pressButtonEqual() {
    archivCalculation();
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
    if ((evt.keyCode === 110) || (evt.keyCode === 188) || (evt.keyCode === 190)) {
        pressButtonPoint();
    }
});
