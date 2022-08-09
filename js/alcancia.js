let dinero,marranito=0,count=0

let resp=true;

while (resp==true) {
    dinero = parseInt(prompt ("Ingrese la cantidad a guardar"));

    marranito = marranito + dinero;

    count=count+1;

resp=confirm("Desea continuar")

}
window.alert("Se guardo en total de "+marranito+"$"+" y se agrego un total de "+count+" veces")

