//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
//mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
function mostrar() {
  //tomo la edad
  var edad;
  edad = document.getElementById("edad").value;
  if (edad < 18) {
    alert("es muy pequeño para no ser soltero");
  }

}//FIN DE LA FUNCIÓN
