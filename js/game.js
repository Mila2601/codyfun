var nr = 0;
restart(nr);

function takeNumber() {
	var message = "";
	var result = document.getElementById('nr').value;
	message = ((result >= nr - 10) && (result <= nr + 10))?"Тепло":"Холодно";
	
	if (result == nr) {
		message = "<span class='win'>Это оно!</span>";
	}
	document.getElementById('rezult1').innerHTML = message;
	document.getElementById('gen').innerHTML = result;
}

function getNumber() {
	var result = document.getElementById('txt').value;
	var template = /^[0-9]{1,2}$/;
	var message = '';
	
	if (!(template.test(result))) {
		message = 'Введите целое число из одной или двух цифр';
	} else if (!(result == nr)) {
		message = 'Попробуй еще раз!';
	} else {
		message = 'Браво! Вы угадали число!';
	}
	
	document.getElementById('rezult2').innerHTML = message;
}

function restart() {
	nr = Math.floor(Math.random(nr)*78);
	document.getElementById('rezult1').innerHTML = '';
	document.getElementById('rezult2').innerHTML = '';
	document.getElementById('txt').value = '';
	document.getElementById('nr').value = '';
	document.getElementById('gen').innerHTML = '';
}