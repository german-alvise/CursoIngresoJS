/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
	var cantidadLamparas;
	var precioConDescuento;
	var precioBruto;
	var precioDeLamparas;
	var marcaDeLamparas;
	var descuento;
	var ingresosBrutos;


	precioDeLamparas = 35;
	cantidadLamparas = document.getElementById('Cantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	marcaDeLamparas = document.getElementById('Marca').value;
	precioBruto = precioDeLamparas * cantidadLamparas;
	descuento = 0;


	if (cantidadLamparas > 5) {
		descuento = 50;
	}
	else {
		if (cantidadLamparas == 5) {

		}
		else {
			if (marcaDeLamparas == "ArgentinaLuz") {
				descuento = 40;
			}
			else {
				descuento = 30;
			} if (cantidadLamparas == 4) {

			} 
			else {
				if (marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas") {
					descuento = 25;
				}
				else {
					descuento = 20;
				} 
				if (cantidadLamparas == 3) {

				} 
				else {
					if (marcaDeLamparas == "ArgentinaLuz") {
						descuento = 15;
					}
					else {
						if (marcaDeLamparas == "FelipeLamparas") {
							descuento = 10;
						} 
						else{
							descuento = 5;
						} 
						
					}
				}
			}
		}



	}
	

	precioConDescuento = (precioBruto - ((descuento * precioBruto) / 100));
	

	if (precioConDescuento > 120) {
		
		ingresosBrutos = precioConDescuento + precioConDescuento * 10 / 100;
		alert("usted pago " + ingresosBrutos + " de ingresos brutos ");
	} 
	else {
		precioConDescuento = (precioBruto - ((descuento * precioBruto) / 100));
		document.getElementById('precioDescuento').value = precioConDescuento
	}
	document.getElementById('precioDescuento').value = precioConDescuento;


	/*if(cantidadLamparas>5){
 
	   descuento=50;
	   
	}
	    
	if(cantidadLamparas==5)
	{
	    if(marcaDeLamparas =="ArgentinaLuz")        
	    {
		   //40
		   descuento=40;
	    }
	    else{
		   //30
		   descuento=30;
	    }
	    
	    
	    
 
 
 
	}
	if(cantidadLamparas==4)
	{
	    if(marcaDeLamparas =="ArgentinaLuz"||marcaDeLamparas == "FelipeLamparas")        
	    {
		   descuento=25;
		   
	    }
	    else{
		   descuento=20;
		  
	    }
	    
 
	}if(cantidadLamparas==3){
	    if(marcaDeLamparas=="ArgentinaLuz"){
		   descuento=15;
	    }else{
		   if(marcaDeLamparas=="FelipeLamparas"){
			  descuento=10;
		   }else{
			  descuento=5;
		   }
	    }
 
	    }if(precioConDescuento>120){
		   ingresosBrutos=precioConDescuento+precioConDescuento*10/100;
		   alert("usted pago " + ingresosBrutos);
	    }
 
	precioConDescuento=(precioBruto-((descuento*precioBruto)/100));
	document.getElementById('precioDescuento').value=precioConDescuento ;*/


}
/*precioBruto = precioDeLamparas*cantidadLamparas;
        precioConDescuento=(precioBruto-((50*precioBruto)/100));
        document.getElementById('precioDescuento').value=precioConDescuento ;*/