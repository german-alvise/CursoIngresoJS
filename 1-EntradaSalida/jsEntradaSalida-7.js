/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{	
  var PrimerNumero;
  var SegundoNumero;
  var suma;

      PrimerNumero=document.getElementById("numeroUno").value;
      console.log(PrimerNumero);
      
      SegundoNumero=document.getElementById("numeroDos").value;
      console.log(SegundoNumero);

       PrimerNumero=parseInt(PrimerNumero);
       SegundoNumero=parseInt(SegundoNumero);

         suma=PrimerNumero+SegundoNumero;

            alert("la suma es ="+(suma));

}

function restar()
{
  var PrimerNumero;
  var SegundoNumero;
  var resta;

      PrimerNumero=document.getElementById("numeroUno").value;
      console.log(PrimerNumero);
     
      SegundoNumero=document.getElementById("numeroDos").value;
      console.log(SegundoNumero);

        PrimerNumero=parseInt(PrimerNumero);
        SegundoNumero=parseInt(SegundoNumero);

        resta=PrimerNumero-SegundoNumero;

          alert("la resta es ="+(resta));

}

function multiplicar()
{ 
  var PrimerNumero;
  var SegundoNumero;
  var multiplicacion;

    PrimerNumero=document.getElementById("numeroUno").value;
    console.log(PrimerNumero);
    
    SegundoNumero=document.getElementById("numeroDos").value;
    console.log(SegundoNumero);
    
      PrimerNumero=parseInt(PrimerNumero);
      SegundoNumero=parseInt(SegundoNumero);

      multiplicacion=PrimerNumero*SegundoNumero

        alert("el resultado es= "+(multiplicacion));

}

function dividir()
{
  var PrimerNumero;
  var SegundoNumero;
  var division;

    PrimerNumero=document.getElementById("numeroUno").value;
    console.log(PrimerNumero);
  
    SegundoNumero=document.getElementById("numeroDos").value;
    console.log(SegundoNumero);

      PrimerNumero=parseInt(PrimerNumero);
      SegundoNumero=parseInt(SegundoNumero);

       division=PrimerNumero/SegundoNumero;

          alert("el resto es="+(division));

}

