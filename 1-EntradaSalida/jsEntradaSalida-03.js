/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensajeSalida
	//nombreIngresado=txtIdNombre.value;
	//1er error no escribir el .value--nombreIngresado=document.getElementById('txtIdNombre')
	//2do error escribir mal el id--nombreIngresado=document.getElementById('txtidNombre').value
	nombreIngresado=document.getElementById('txtIdNombre').value;
	mensajeSalida="su nombre es "+nombreIngresado
	alert(nombreIngresado);

}


