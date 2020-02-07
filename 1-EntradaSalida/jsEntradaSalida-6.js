/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	  var PrimerNumero;
  	var SegundoNumero;
  	var suma;

  			PrimerNumero=document.getElementById('numeroUno').value;
  			console.log(PrimerNumero);
  			SegundoNumero=document.getElementById('numeroDos').value;
  			console.log(SegundoNumero);
//PrimerNumero=prompt("ingrese un numero");//"6"
//SegundoNumero=prompt("ingrese un numero");//"6"

  			PrimerNumero=parseInt(PrimerNumero);//"6"
  			SegundoNumero=parseInt(SegundoNumero);
  			
  				suma=PrimerNumero+SegundoNumero;
  			
  		alert("la suma es = "+(suma));


}

