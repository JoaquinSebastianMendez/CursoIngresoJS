function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada>17)
	{
		alert("Mayor de edad");	
	}
	else
	{
		if (edadIngresada>12)
		{
			alert("Adolescente");
		}
		else
		{	    
			alert("Niño");	
		}
	}	
}   
//FIN DE LA FUNCIÓN
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
//txtIdEdad
// > <
// &&