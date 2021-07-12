/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroIngresado1;
	var NumeroIngresado2;
	var Resultado;
	NumeroIngresado1=document.getElementById('txtIdNumeroUno').value;
	NumeroIngresado1=parseInt(NumeroIngresado1);
	NumeroIngresado2=document.getElementById('txtIdNumeroDos').value;
	NumeroIngresado2=parseInt(NumeroIngresado2);
	Resultado=NumeroIngresado1+NumeroIngresado2;

	alert("Su resultado es: " + Resultado);
}

