let dinero,apuesta=0,count=0,select,actual;



let resp=confirm ("Bienvenido a Carisellaso , desea continuar?");

while (resp==true) {
    dinero = parseInt(prompt ("Bienvenido, Ingrese la cantidad a apostar"));
    select = parseInt(prompt ("¿Que opcion elije? 1-Cara 2-Sello"));

    apuesta = apuesta + dinero;
    count=count+1;

    let x = Math.floor((Math.random() * 2) + 1);

    switch (x) {
        case 1:
            window.alert("La maquina elijio "+x+" es Cara");
            break;
            case 2:
                window.alert("La maquina elijio "+x+" es Sello");
                break;
        default:
            window.alert("Elije un numero bien");
            break;
    }

        let gano=apuesta+apuesta;
        let perdio=apuesta-apuesta;
    switch (x) {
        
        case 1:

            if (select==x) {
                actual = gano;
                window.alert("Usted ha ganado , se duplico su apuesta a "+actual);
            } else {
                actual = perdio;
                window.alert("Usted ha perdido , se resto a su apuesta y queda con "+actual);
            }
        break;
        case 2:

            if (select==x) {
                actual == gano;
                window.alert("Usted ha ganado , se duplico su apuesta a "+actual);
            } else {
                actual == perdio;
                window.alert("Usted ha perdido , se resto a su apuesta y queda con "+actual);
            }
        break;
    
        default:
            break;
    }

resp=confirm("¿Desea continuar?");

}
window.alert("Se guardo en total de "+actual+"$"+" y se aposto un total de "+count+" veces")
