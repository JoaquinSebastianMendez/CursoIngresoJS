/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
		var name
		var mensajeSalida;
		name= prompt("Please enter your name", "Harry Potter");
		


		mensajeSalida="Su nombre es "+name;
		alert(mensajeSalida);


}