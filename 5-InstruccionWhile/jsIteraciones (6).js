function mostrar() {
  var cont = 0;
  var numero;
  var suma = 0;

  while (cont < 5 || isNaN(numero)) {
    cont++;
    numero = prompt("ingrese un numero");
    numero = parseInt(numero);
    suma = suma + numero;

  }
  document.getElementById('suma').value = suma;
  document.getElementById('promedio').value = suma / 5;

}//FIN DE LA FUNCIÓN
