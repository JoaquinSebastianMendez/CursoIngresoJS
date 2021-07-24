function mostrar()
{
	var numeroRandom;
	var mensajeSalida;
	numeroRandom = Math.floor(Math.random() * 11);
	mensajeSalida = numeroRandom;

	if(numeroRandom >= 9)
	{
		alert(mensajeSalida + " EXCELENTE");
	}
	else
	{
		if(numeroRandom >=4 )
		{
			alert(mensajeSalida + " APROBÓ");
		}
		else
		{
			alert(mensajeSalida + " Vamos, la proxima se puede");	
		}
	}
}
// > <
// &&
//FIN DE LA FUNCIÓN
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
 "EXCELENTE" para notas igual a 9 o 10,
 "APROBÓ" para notas mayores a 4,
 "Vamos, la proxima se puede" para notas menores a 4
*/