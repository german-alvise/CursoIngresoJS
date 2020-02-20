//al seleccionar un mes informar.
//si es Febrero: " Este mes no tiene más de 29 días."
//si NO es Febrero: "Este mes tiene 30 o más días"
function mostrar() {//alert (mesDelAño);
  //tomo la edad
  var Mes;
  Mes = document.getElementById('mes').value;
  switch (mes) {
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      alert("este mes tiene 30 o mas dias");
      break;
    case "Febrero":
      alert("Este mes no tiene más de 29 días");
      break;
    default:
      break;

  }




}//FIN DE LA FUNCIÓN
