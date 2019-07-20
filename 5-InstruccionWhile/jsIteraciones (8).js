/*Al presionar el botón pedir números hasta que el usuario quiera,
 sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var acumuladorPositivos = 0;
	var acumuladorNegativo = 1;
	var respuesta = true;
	var numero;
	while (respuesta) {
		numero = prompt("ingresar numero");
		numero = parseInt(numero);
		if (numero > 0) {
			acumuladorPositivos = numero + acumuladorPositivos;
		} else {
			if (numero < 0) {
				acumuladorNegativo = numero * acumuladorNegativo;

			}
		}
		respuesta = confirm("¿desea continuar?");
	}

	document.getElementById('suma').value = acumuladorPositivos;
	document.getElementById('producto').value = acumuladorNegativo;

}//FIN DE LA FUNCIÓN