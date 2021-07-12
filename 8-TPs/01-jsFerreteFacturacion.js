/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var NumeroIngresado1;
	var NumeroIngresado2;
	var NumeroIngresado3;
	var mensajeSalida;
	var Suma;

	NumeroIngresado1 = document.getElementById('txtIdPrecioUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	
	NumeroIngresado2 = document.getElementById('txtIdPrecioDos').value;
	NumeroIngresado2 = parseInt (NumeroIngresado2);
	
	NumeroIngresado3 = document.getElementById('txtIdPrecioTres').value;
	NumeroIngresado3 = parseInt(NumeroIngresado3);
	
	Suma = NumeroIngresado1 + NumeroIngresado2 + NumeroIngresado3;

	alert(Suma);	


	
}
function Promedio () 
{
	var NumeroIngresado1;
	var NumeroIngresado2;
	var NumeroIngresado3;
	var Promedio;

	NumeroIngresado1 = document.getElementById('txtIdPrecioUno').value;
	NumeroIngresado1 = parseInt(NumeroIngresado1);
	
	NumeroIngresado2 = document.getElementById('txtIdPrecioDos').value;
	NumeroIngresado2 = parseInt(NumeroIngresado2);
	
	NumeroIngresado3 = document.getElementById('txtIdPrecioTres').value;
	NumeroIngresado3 = parseInt(NumeroIngresado3);

	Promedio = NumeroIngresado1 % NumeroIngresado2 % NumeroIngresado3;

	alert(Promedio);

	
}
function PrecioFinal () 
{
	var NumeroIngresado1;
	var NumeroIngresado2;
	var NumeroIngresado3;
	var Suma;
	var Iva1;
	var Iva2;
	

		NumeroIngresado1 = document.getElementById('txtIdPrecioUno').value;
		NumeroIngresado1 = parseInt(NumeroIngresado1);

		NumeroIngresado2 = document.getElementById('txtIdPrecioDos').value;
		NumeroIngresado2 = parseInt(NumeroIngresado2);

		NumeroIngresado3 = document.getElementById('txtIdPrecioTres').value;
		NumeroIngresado3 = parseInt(NumeroIngresado3);

		Suma = NumeroIngresado1 + NumeroIngresado2 + NumeroIngresado3;

		Iva1 = (Suma * 21) / 100;

		Iva2 = Suma + Iva1

		alert(Iva2);

	







}


	//txtIdPrecioUno
	//txtIdPrecioDos
	//txtIdPrecioTres