/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var	NumeroIngresado1;
	var	NumeroIngresado2;
	var Resultado;

	NumeroIngresado1 = document.getElementById('txtIdNumeroDividendo').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	NumeroIngresado2 = document.getElementById('txtIdNumeroDivisor').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	Resultado = NumeroIngresado1 % NumeroIngresado2

	alert("El resto es igual a : " + Resultado);
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor
}
