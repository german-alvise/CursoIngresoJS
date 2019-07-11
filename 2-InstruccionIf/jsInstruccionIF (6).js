//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
//o adolescente (entre 13 y 17 años) o niño (menor a 13 años).//

function mostrar()
{
//tomo la edad
var edad;
edad=document.getElementById("edad").value;
if(edad>=18){
  alert("es mayor");
}
if(edad>=13||edad>=17){
  alert("es adolescente");

}





}//FIN DE LA FUNCIÓN
