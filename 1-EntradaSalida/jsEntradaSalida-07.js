/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroIngresado1;
	var NumeroIngresado2;
	var Resultado;

	NumeroIngresado1 = document.getElementById('txtIdNumeroUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	NumeroIngresado2 = document.getElementById('txtIdNumeroDos').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	Resultado = NumeroIngresado1 + NumeroIngresado2

	alert("El resultado de la suma es: " + Resultado );

}

function restar()
{
	var NumeroIngresado1;
	var NumeroIngresado2;
	var Resultado;

	NumeroIngresado1 = document.getElementById('txtIdNumeroUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);	
	NumeroIngresado2 = document.getElementById('txtIdNumeroDos').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	Resultado = NumeroIngresado1 - NumeroIngresado2

	alert("El resultado de la resta es: "+ Resultado);
	
}

function multiplicar()
{ 
	var NumeroIngresado1;
	var NumeroIngresado2;
	var Resultado;

	NumeroIngresado1 = document.getElementById('txtIdNumeroUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	NumeroIngresado2 = document.getElementById('txtIdNumeroDos').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	Resultado = NumeroIngresado1 * NumeroIngresado2

	alert("El resultado de la multiplicacion es: " + Resultado);
	
}

function dividir()
{
	var NumeroIngresado1
	var NumeroIngresado2
	var Resultado
	NumeroIngresado1 = document.getElementById('txtIdNumeroUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	NumeroIngresado2 = document.getElementById('txtIdNumeroDos').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	Resultado = NumeroIngresado1 / NumeroIngresado2;

	alert("El resultado de la división es: " + Resultado );
	
}

//txtIdNumeroUno
//txtIdNumeroDos