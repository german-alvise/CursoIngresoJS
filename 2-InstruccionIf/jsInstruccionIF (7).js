//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
//mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
function mostrar() {
  
  var edad; 
  var estadocivil;

  estadocivil=document.getElementById('estadoCivil').value
  edad = document.getElementById('edad').value; 
  edad=parseInt(edad);
  if(edad<18 && estadocivil!="soltero"){
    alert("es muy pequeño para no ser soltero");

  }
   
  
  //tomo la edad
 /* var edad;
  edad = document.getElementById("edad").value;

  var estCivil;
  estCivil = document.getElementById("estadoCivil").value;

  if (edad < 18 && estCivil != "Soltero") {
    alert("usted es muy pequeño para NO ser soltero");
  }*/

}//FIN DE LA FUNCIÓN

/*var edad;
  edad = document.getElementById("edad").value;
  if (edad < 18) {
    alert("es muy pequeño para no ser soltero");
  }*/
