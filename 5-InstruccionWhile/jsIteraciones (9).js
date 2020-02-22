/*Al presionar el botón pedir números hasta que el usuario quiera
, mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	var contador = 0;
	var numero;
	var respuesta = true;
	var maximo;
	var minimo;

	while (respuesta == true) {
		numero = prompt("ingrese un numero:");
		numero = parseInt(numero);
		//respuesta.toLowerCase(respuesta);pasa todo a minusculas.
		//alert(respuesta);
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
		}
		else {
			if (numero > maximo) {
				maximo = numero;
			} else {
				if (numero < maximo) {
					minimo = numero;
				}
			}

		}
		contador++;
		respuesta = confirm("¿desea ingresar otro numero?");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;









	/*	var numero;
	var maximo;
	var minimo;
	var primeraVez = true;
	var respuesta = "si";

	while (respuesta=="si") {
		do {
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
			while (isNaN(numero));
			if (primeraVez) {
				primeraVez = false;
				minimo = numero
				maximo = numero
			}
			else {
				if (numero > maximo) {
					maximo = numero;
				}
				else {
					if (numero < minimo) {
						minimo = numero;
					}
				}
			}
			respuesta = prompt("ingrese si para ingresar otro numero");
		}

		


	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;*/
}//FIN DE LA FUNCIÓN