function mostrar() {
    var numeroIngresado;
    var numeroAnterior;
    var flag;
    flag = 0;
    numeroIngresado = prompt("ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    //validar
    for (numeroAnterior = 2; numeroAnterior < numeroIngresado; numeroAnterior++) {
        if (numeroIngresado % numeroAnterior == 0) {
            // alert("no es primo");
            flag = 1;
            alert("no es primo el " + numeroIngresado);
            break;
        }
    }
    if (flag != 1) {
        alert("es primo el " + numeroIngresado);
    }


    /* var contador;
       contador = 0
       var edad;
   
       do {
           edad = prompt("ingrese la edad");
           edad = parseInt(edad);
          
           
       } while (edad<0||edad>110);
   
   
       console.log(edad);*/
}//FIN DE LA FUNCIÓN