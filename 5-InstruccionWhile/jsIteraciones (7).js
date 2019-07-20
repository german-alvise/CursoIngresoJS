function mostrar() {
  var cont = 0;
  var suma = 0;
  var respuesta = true;//respuesta es True hasta que se ingrese lo contrario en el confirm
  var numero;
  while (respuesta) {
    do {
      numero = prompt("ingrese un numero");
      numero = parseInt(numero);
    } while (isNaN(numero));
    cont++
    suma = suma + numero;
    respuesta = confirm("¿desea continuar?");
  }
  document.getElementById('suma').value = suma;
  document.getElementById('promedio').value = suma / cont;


}//FIN DE LA FUNCIÓN
