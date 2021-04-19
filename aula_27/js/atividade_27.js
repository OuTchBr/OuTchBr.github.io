function contar (){
	var n = getNumber();
	var text ='';
	for(var i=1; i<=n; i++){
		text = text + i + ' ';
	}
	document.getElementById('contador').innerHTML = text;
}

function getNumber(){
	var n = prompt('Digite um número inteiro positivo');
	return n;
}