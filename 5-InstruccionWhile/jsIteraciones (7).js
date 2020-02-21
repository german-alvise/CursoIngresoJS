function mostrar() {
  var contador = 0;
  var acumulador = 0;
  var respuesta;//respuesta es True hasta que se ingrese lo contrario en el confirm
  var numeroIngresado;
    respuesta="si";

  while (respuesta == "si") 
  { contador = contador + 1;
    numeroIngresado = prompt("ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    while(isNaN(numeroIngresado)){
      numeroIngresado = prompt("error ingrese solo numeros");
      numeroIngresado = parseInt(numeroIngresado);
    }

    acumulador = acumulador + numeroIngresado;
    respuesta = prompt("ingrese si para ingresar otro numero");
  }
  document.getElementById('suma').value = acumulador;
  document.getElementById('promedio').value = acumulador / contador;









  /*while (respuesta=="si") {
    do {
      numeroIngresado = prompt("ingrese un numero");
      numeroIngresado = parseInt(numeroIngresado);
    } while (isNaN(numeroIngresado));
    contador++
    acumulador = acumulador + numeroIngresado;
    respuesta = confirm("¿desea continuar?");
  }
  document.getElementById('suma').value = acumulador;
  document.getElementById('promedio').value = acumulador / contador;*/


}//FIN DE LA FUNCIÓN
