

function encriptador(){
	let textscrip  = document.getElementById("textoint").value.toLowerCase();
	textscrip = textscrip.replace(/e/g,"enter",);
	textscrip = textscrip.replace(/o/g,"ober");
	textscrip = textscrip.replace(/i/g,"imes");
	textscrip = textscrip.replace(/a/g,"ai");
	textscrip = textscrip.replace(/u/g,"ufat");
		document.getElementById("find").style.display = "block";
	document.getElementById("search").style.display = "none";
	document.getElementById("textsalida").innerHTML = textscrip;
}
function desencriptador(){
	let textscrip = document.getElementById("textoint").value.toLowerCase();
	textscrip = textscrip.replace(/enter/g,"e");
	textscrip = textscrip.replace(/ober/g,"o");
	textscrip = textscrip.replace(/imes/g,"i");
	textscrip = textscrip.replace(/ai/g,"a");
	textscrip = textscrip.replace(/ufat/g,"u");
	document.getElementById("find").style.display = "block";
	document.getElementById("search").style.display = "none";
	document.getElementById("textsalida").innerHTML = textscrip;
}
function cut(){
	var cut = document.querySelector("#textsalida");
	cut.select();
	navigator.clipboard("cut");
}