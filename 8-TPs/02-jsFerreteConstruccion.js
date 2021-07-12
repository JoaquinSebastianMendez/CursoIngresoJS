/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var LargodelTerreno;
	var AnchodelTerreno;
	
	var Rectangulo;

	LargodelTerreno = document.getElementById('txtIdLargo').value;
	LargodelTerreno = parseFloat(LargodelTerreno);

	AnchodelTerreno = document.getElementById('txtIdAncho').value;
	AnchodelTerreno = parseFloat(AnchodelTerreno);

	Rectangulo = ((AnchodelTerreno * 2 ) + (LargodelTerreno * 2))*3;

	alert(" Los metros necesarios para hacer el perimetro del terreno son" ) +Rectangulo;

}
function Circulo () 
{
	var radio;
	var resultado;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseFloat(radio);

	resultado = (2 * 3.14 * radio) * 3;

	alert("La cantidad de alambre a comprar es:" + resultado);
}


function Materiales () 
{
	var LargodelTerreno;
	var AnchodelTerreno;
	var areadelTerreno;
	var resultadoCemento;
	var resultadoCal;

	LargodelTerreno = document.getElementById('txtIdLargo').value;
	LargodelTerreno = parseFloat(LargodelTerreno);
	AnchodelTerreno = document.getElementById('txtIdAncho').value;
	AnchodelTerreno = parseInt(AnchodelTerreno);
	areadelTerreno = AnchodelTerreno * LargodelTerreno;

	resultadoCemento = areadelTerreno * 2;
	resultadoCal = areadelTerreno * 3;

	alert(resultadoCemento + " Y " + resultadoCal);
}


//txtIdLargo
//txtIdAncho
//txtIdRadio