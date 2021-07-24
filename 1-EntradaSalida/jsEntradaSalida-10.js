/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var importe;
	var porcentajeElegido
	var aumento;
	var importeTotal;	

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);
	porcentajeElegido = prompt ("Ingrese el porcentaje de aumento ");
	porcentajeElegido = parseInt(porcentajeElegido);
	aumento = importeTotal * (porcentajeElegido/100);
	importeTotal = importe + aumento;

	document.getElementById('txtIdResultado').value = importeTotal;






//txtIdImporte
//txtIdResultado
}
