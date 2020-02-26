function mostrar() {/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

    var numeroIngresado1;
    var numeroIngresado2;
    var concatenados;
    var resto;
    var suma;

    numeroIngresado1 = prompt("ingrese un numero");
    numeroIngresado2 = prompt("ingrese un numero");



    if (numeroIngresado1 == numeroIngresado2) {
        concatenados = numeroIngresado1 + numeroIngresado2;
        console.log(concatenados);
    }
    else {
        numeroIngresado1 = parseInt(numeroIngresado1);
        numeroIngresado2 = parseInt(numeroIngresado2);
        if (numeroIngresado1 > numeroIngresado2) {
            resto = numeroIngresado1 - numeroIngresado2;
            console.log(resto);
        }
        else {

        }
        if (numeroIngresado2 > numeroIngresado1) {
            suma = numeroIngresado1 + numeroIngresado2;
            console.log(suma);
        }
        else {

        }
        if(suma>10){
            alert("la suma es "+suma+" y supero el 10 ")
        }
    }

}
