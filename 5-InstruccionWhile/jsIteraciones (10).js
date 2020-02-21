function mostrar() {
	/*	Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos.
	 4-Cantidad de negativos.
	  5-Cantidad de ceros. 
	  6-Cantidad de números pares.
	   7-Promedio de positivos.
	 8-Promedios de negativos.
	  9-Diferencia entre positivos y negativos, (positvos-negativos).*/

	var numero;
	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promediosPositivos = 0;
	var promediosNegativos = 0;
	var respuesta = true;

	while (respuesta == true) {
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
	
		if (numero > 0) {
			contadorPositivos++;
			acumuladorPositivos+=numero;
		}
		else{

		}
			if(numero<0){
				contadorNegativos++;
				acumuladorNegativos+=numero;
			}
			else{
				contadorCeros++;
			}
				if(numero%2==0){
					contadorPares++;	
				}
	}	
		respuesta=confirm("desea ingresar otro numero");
	
				if (contadorPositivos != 0) {
					promediosPositivos = acumuladorPositivos / contadorPositivos;
				}
					else {
						promediosPositivos = "no se ingresaron numeros positivos";
					}
						if (contadorNegativos != 0) {
							promediosNegativos = acumuladorNegativos / contadorNegativos;
						}
							else {
								promediosNegativos = "no se ingresaron numeros negativos";
						}



	/*var numero;
	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promediosPositivos = 0;
	var promediosNegativos = 0;
	//declarar contadores y variables 

	var respuesta = true;

	while (respuesta == true) {
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		if (numero > 0) {
			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else {
			if (numero < 0) {
				contadorNegativos++;
				acumuladorNegativos += numero;
			}
			else {
				contadorCeros++;
			}
		}
		if (numero % 2 == 0) {
			contadorPares++;
		}


		respuesta = confirm("desea ingresar otro numero");
	}
	if (contadorPositivos != 0) {
		promediosPositivos = acumuladorPositivos / contadorPositivos;
	}
	else {
		promediosPositivos = "no se ingresaron numeros positivos";
	}
	if (contadorNegativos != 0) {
		promediosNegativos = acumuladorNegativos / contadorNegativos;
	}
	else {
		promediosNegativos = "no se ingresaron numeros negativos";
	}


	document.write("1.suma de positivos:" + acumuladorPositivos + "<br>");
	document.write("2.suma de negativos:" + acumuladorNegativos + "<br>");
	document.write("3.cantidad de positivos:" + contadorPositivos + "<br>");
	document.write("4.cantidad de negativos:" + contadorNegativos + "<br>");
	document.write("5.cantidad de ceros:" + contadorCeros + "<br>");
	document.write("6.cantidad de pares:" + contadorPares + "<br>");
	document.write("7.promedio positivos:" + promediosPositivos + "<br>");
	document.write("8.promedios negativos:" + promediosNegativos + "<br>");*/
}//FIN DE LA FUNCIÓN