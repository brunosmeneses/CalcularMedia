function teste() {

	var n1 = parseFloat(document.getElementById('nota1').value);
	var n2 = parseFloat(document.getElementById('nota2').value);
	var n3 = parseFloat(document.getElementById('nota3').value);
	var n4 = parseFloat(document.getElementById('nota4').value);

	var media = parseFloat((n1 + n2 + n3 + n4) / 4);

	// document.getElementById('show').innerHTML = media;

	if (media >= 7) {
		document.getElementById('show').innerHTML =  "APROVADO: MÉDIA " + media;
		show.classList.add('aprovado');
	}
	else if (media >= 5 && media < 7) {
		document.getElementById('show').innerHTML =  "RECUPERAÇÃO: MÉDIA " + media;
		show.classList.add('recuperacao');
	}
	else {
		document.getElementById('show').innerHTML =  "REPROVADO: MÉDIA " + media;
		show.classList.add('reprovado');
	}


}
