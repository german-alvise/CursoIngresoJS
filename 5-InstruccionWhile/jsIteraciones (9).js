/*Al presionar el botón pedir números hasta que el usuario quiera
, mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	var numero;
	var maximo;
	var minimo;
	var primeraVez = true;
	var respuesta = true;

	while (respuesta) {
		do {
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
			while (isNaN(numero));
			if (primeraVez) {
				primeraVez = false;
				minimo = numero
				maximo = numero
			} else {
				if (numero > maximo) {
					maximo = numero;
				} else {
					if (numero < minimo) {
						minimo = numero;
					}
				}
			}
			respuesta = confirm("¿desea continuar?");
		}

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


	}
}//FIN DE LA FUNCIÓN