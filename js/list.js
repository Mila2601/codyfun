var list = [];
	

function addItem() {
var	product = document.getElementById("product").value,
	nmbr = 	document.getElementById("nmbr").value,
	price = document.getElementById("price").value;
	
	if (isFinite(nmbr) && isFinite(price)
		&& product != "" && nmbr != "" && price != "") {
	list.push([product, nmbr, price]);
	showList();
	document.getElementById("product").value = "";
	document.getElementById("nmbr").value = "";
	document.getElementById("price").value = "";
	document.getElementById('product').focus();
	} else {
		alert('Введите корректное значение (число)');
	}
}

function showList() {
	var content = document.getElementById("table");
	var rez = "<table>", total = 0;
	
	for (var i = 0; i < list.length; i++) {
		rez += "<tr>";
		for (var j = 0; j < list[i].length; j++) {
			rez += "<td>" + list[i][j] + "</td>";
		}
	rez +='<td><span class="delete" onclick="deleteItem('+i+');" style="cursor: pointer;">&times;</span></td></tr>';
	total += list[i][1]*list[i][2];
	}
	document.getElementById("total").innerHTML = total;
	rez += "</table>";
	content.innerHTML = rez;
}

function deleteItem(row) {
	list.splice(row, 1);
	showList();
}


function setFocusNmbr(event) {
	
	if (event.which === 13) {
		event.preventDefault();
		document.getElementById('nmbr').focus();
	} 
}

function setFocusPrice(event) {
	
	if (event.which === 13) {
		event.preventDefault();
		document.getElementById('price').focus();
	} else if (event.which === 37) {
		event.preventDefault();
		document.getElementById('product').focus();
	}
}

function clickButton(event) {
	if (event.which === 13) {
		document.querySelector('.btn_frm').click();
	} else if (event.which === 37) {
		event.preventDefault();
		document.getElementById('nmbr').focus();
	}
}
