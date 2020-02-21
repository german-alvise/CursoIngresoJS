/*Al presionar el botón pedir números hasta que el usuario quiera,
 sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	/*var positivos = 0;
	var negativos = 0;
	var contador = 0;
	var respuesta;//respuesta es True hasta que se ingrese lo contrario en el confirm
	var numeroIngresado;
	respuesta = "si";

	while (respuesta == "si") {
		contador = contador + 1;
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0) {
			positivos = numeroIngresado + numeroIngresado;
		}
		else {
			if (numeroIngresado < 0) {
				negativos = negativos * numeroIngresado;
			}

		}
		respuesta = prompt("ingrese si para ingresar otro numero");
	}
	document.getElementById('suma').value = positivos;
	document.getElementById('producto').value = negativos;*/

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