function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	var soltero;
	var casado;
	var Divorciado; 
	var mensajeSalida;
	
	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById('estadoCivil').value;
	mensajeSalida = "Es muy pequeño para NO ser soltero.";

		if (edadIngresada<18 && estadoCivil != "Soltero")
		{
			alert(mensajeSalida);
		}


}//FIN DE LA FUNCIÓN
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
//txtIdEdad
//estadoCivil
// > <
// &&
// != = No