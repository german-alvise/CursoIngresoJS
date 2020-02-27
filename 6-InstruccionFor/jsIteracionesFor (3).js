/*al presionar el botón pedir la cantidad de
 veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar() {
    var repeticiones;
    var contador;
    repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones = parseInt(repeticiones);
    contador=0;
    for (repeticiones = repeticiones + contador;contador==repeticiones;contador++) {
        document.write(contador+"<br>");
    }

}//FIN DE LA FUNCIÓN