function mostrar(){

var numero;
  numero = prompt("ingrese un número entre 0 y 9.");
do{
  numero = prompt("ingrese un número entre 0 y 9.");
    numero = parseInt(numero);

}while (numero < 0 || numero > 9 || isNaN(numero));




document.getElementById("Numero").value = numero;
}
//FIN DE LA FUNCIÓ









  /*var numero;
  numero = prompt("ingrese un número entre 0 y 9.");

  while (numero < 0 || numero > 9 || isNaN(numero)) {
    numero = prompt("ingrese un número entre 0 y 9.");
    numero = parseInt(numero);



  }
document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN*/
