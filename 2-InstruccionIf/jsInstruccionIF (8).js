//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
//pero si no es asi, y es soltero y no es menor,
//mostrar el siguiente mensaje: 'Es soltero y no es menor.'
function mostrar()
{
//tomo la edad
var edad;
  edad = document.getElementById("edad").value;
  if (edad < 18) {
    alert("es muy pequeño para no ser soltero");
  }
  edad = document.getElementById("edad").value;
  if(edad >18){
    alert("es soltero y no es menor");
  }



}//FIN DE LA FUNCIÓN
