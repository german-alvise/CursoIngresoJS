/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
/*Mercurio.
Venus.
Tierra.
Marte.
Júpiter.
Saturno.
Urano.
Neptuno.*/
function mostrar() {
    var planetas;

    planetas = prompt("ingrese un planeta del sistema solar");
    switch (planetas) {
        case "mercurio":
            alert("acá hace más calor");
            break;
        case "venus":
            alert("acá hace más calor");
            break;
        case "tierra":
            alert("aca vivimos");
            break;
        case "marte":
            alert("acá hace más frio");
            break;
        case "jupiter":
            alert("acá hace más frio");
            break;
        case "saturno":
            alert("acá hace más frio");
            break;
        case "urano":
            alert("acá hace más frio");
            break;
        case "neptuno":
            alert("acá hace más frio");
            break;
        case
            alert("no es un planeta"):
            break;
    }

}
