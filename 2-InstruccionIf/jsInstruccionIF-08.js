function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	var mensajeSalida;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById('estadoCivil').value;
	mensajeSalida = 'Es soltero y no es menor.'

	if (edadIngresada>18 && estadoCivil != "Soltero")
	{
		alert(mensajeSalida);
	}
}
//FIN DE LA FUNCIÓN
// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
// > <
// &&