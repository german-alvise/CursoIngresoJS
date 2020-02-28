function mostrar() {
    var nombre;
    var edad;
    var sexo;
    var temperatura;
    var respuesta;
    respuesta = "true"


    do {

    } while (respuesta == true);
    nombre = prompt("ingrese su nombre");
    edad = prompt("ingrese su edad");
    edad = parseInt(edad);
    sexo = prompt("ingrese su sexo");
    temperatura = prompt("ingrese la temperatura");

    do {

    } while (!isNaN(nombre));


    if (edad > 0 && edad < 38) {
        alert("es un niño");

    }
    else {

    }
    if (edad > 38 && edad < 60) {
        alert("es adulto");
    }
    else {

    }
    if(edad>60&&edad<110){
        alert("esta en la tercera edad")
    }




    respuesta = confirm("¿desea continuar?");
}
