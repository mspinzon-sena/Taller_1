/*let resp=true;
marranito=0;
numveces=0;

while(resp==true){
    let dinero=window.prompt("Ingrese la cantidad a guardar");
     marranito=parseInt(marranito)+parseInt(dinero);
     window.alert("El dinero que tiene ahorrado es de: "+marranito+" $ pesos");
     resp=confirm("¿Desea continuar?");
     numveces=numveces+1;
};
window.alert("El número de veces que lo repitio fueron: "+numveces);
*/
// buscar número aleatorios con Math

let banco=10000;
let apuesta= 0;
let resp=true;
let eleccion=0;
let moneda=0;
let vecesrepetidas=0;

window.alert("Bienvenido, este es el juego de cara o sello.");

while(resp==true){


    
    window.alert("El dinero con el que cuenta usted actualmente es de: "+parseInt(banco)+"$");
     
    /*0=cara , 1=sello*/
     moneda= Math.round(Math.random()*1);

   apuesta= window.prompt("Ingrese la cantidad a apostar.");

   eleccion= window.prompt("Opción 0 para cara, Opción 1 para sello.");

    if(eleccion!=moneda){
    window.alert("Perdiste, se resta : "+apuesta+"$ a tu dinero actual.");
    banco= parseInt(banco)-parseInt(apuesta);
    window.alert("Su dinero actual es de: "+banco+"$");
   }

   else if (eleccion==moneda){
    window.alert("Ganaste , se duplica : "+apuesta+"$ y se añade a tu dinero actual.");
    banco= parseInt(banco)+(parseInt(apuesta)*2);
    window.alert("Su dinero actual es de: "+banco+"$");
   }
   
   else {
    window.alert("número no valido.");
   }

resp=window.confirm("¿Desea seguir jugando?");
apuesta=0;
eleccion=0;
vecesrepetidas=vecesrepetidas+1;
}
window.alert("Usted jugó un total de: "+vecesrepetidas+" veces.");

window.alert("Gracias por jugar.");