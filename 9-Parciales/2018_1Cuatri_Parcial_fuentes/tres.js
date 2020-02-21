function mostrar() {
    var precioBruto;
    var descuento;
    var precioFinal;

    precioBruto=prompt("ingrese el precio del producto");
    descuento=prompt("ingrese el descuento a realizar");

    precioBruto=parseInt(precioBruto);
    descuento=parseInt(descuento);


    precioFinal=(precioBruto-((descuento*precioBruto)/100));

    precioFinal=parseInt(precioFinal);

    document.getElementById('elPrecioFinal').value=precioFinal;
    console.log(precioFinal);
}
