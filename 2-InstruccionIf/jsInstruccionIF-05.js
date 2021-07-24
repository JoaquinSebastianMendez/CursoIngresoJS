function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	if (edadIngresada<13 || edadIngresada>18)
	{
		alert("No es adolescente");
	}
}

//FIN DE LA FUNCIÓN
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.
// txtIdEdad
// > <
// &&