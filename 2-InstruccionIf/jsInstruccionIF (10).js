function mostrar() {
  //Genero el número RANDOM entre 1 y 10

  var notaRandom;
  notaRandom = Math.floor(Math.random() * (10) + 1);

  alert("su nota es " + notaRandom);

  if (notaRandom > 8) {
    alert("EXCELENTE");
  }else{
    if(notaRandom<4){

      alert("vamos la proxima se puede");

    }else{

      alert("aprobado");
    }


  }
 
   /* var notaRandom;
  notaRandom = Math.floor(Math.random() * (10) + 1);

  alert("su nota es " + notaRandom);

  if (notaRandom > 8) {
    alert("EXCELENTE");
  }
   else {
    if (notaRandom > 3) {
      alert("Aprobado")
    } else {
      alert("Vamos, la próxima se puede")
    }
  }*/

}//FIN DE LA FUNCIÓN
