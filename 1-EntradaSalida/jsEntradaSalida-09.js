/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importeSueldo;
	var porcentajeIngresado;
	var resultado;
	var aumento;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo)

	porcentajeIngresado = prompt ("Que porcentaje de aumento desea? ");
	porcentajeIngresado = parseInt(porcentajeIngresado);
	console.log(porcentajeIngresado)
	aumento=sueldo*porcentajeIngresado/100;

	resultado=sueldo + aumento;
	console.log(resultado);
	document,getElementById('txtIdResultado').value=resultado;



	//txtIdSueldo
	//txtIdResultado
	}

