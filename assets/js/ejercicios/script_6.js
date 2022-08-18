//Funciones
    /*
    //Declarar la funcion por declaracion - Funciones por declaracion
    function lanzarmoneda() {
        let moneda = Math.floor((Math.random()*2)+1);
        console.log(`El lanzamiento fue ${moneda}`);
    }
    //Invocar la función
    lanzarmoneda();

    //Funcion con valor de retorno
    function lanzarmoneda() {
        let moneda = Math.floor((Math.random()*2)+1);
        return moneda;
    }
    //Invocar la funcion con valor de retorno
    console.log(`El lanzamiento fue ${lanzarmoneda()}`);
    let lanzamiento=lanzarmoneda();
    console.log(`El lanzamiento fue ${lanzamiento}`);

    
    //Funcion con parámetros
    function ganar(saldo,apuesta){
        saldo=saldo+(apuesta*2);
        return saldo;
    }
    function perder(saldo,apuesta){
        saldo=saldo-apuesta;
        return saldo;
    }
    

    
    //Invocar
    ganar(saldo,apuesta);
    perder(saldo,apuesta);
    

//JUEGO
/*
function lanzar() {
    let moneda = Math.floor((Math.random()*2)+1);
}
*/
    //Funcion con parametros
    let lanzar=function lanzarmoneda(){
        let moneda = Math.floor((Math.random()*2)+1);
        return moneda;
    }
    /*
    //Funcion Anonima
        //Funcion con parámetros
        let ganar=function(saldo,apuesta){
            saldo=saldo+(apuesta*2);
            return saldo
        }
        //Invocar la función
        ganar(saldo,apuesta);
    */
      /*  
    //Funcion Flecha (Row)
        //Funcion con parametros
        let perder=(saldo,apuesta)=>{
            saldo=saldo-apuesta;
            return saldo;
        }
        */
       
let seguir=true;
let saldo=0;

let jugador=prompt("Ingrese el nombre del jugador");
saldo=parseInt(prompt("¿Cuanto desea recargar para jugar?"));

let ganar=function(saldo,apuesta){
    saldo=saldo+(apuesta*2);
    return saldo
}

function perder(saldo,apuesta){
    saldo=saldo-apuesta;
    return saldo;
}

while (seguir==true) {
    let eleccion=prompt(`${jugador} elije entre las dos opciones 1.Cara 2.Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar? ${jugador}`));
    let lanzamiento=lanzar();

    if (lanzamiento==1 && eleccion==1) {
        saldo=ganar(saldo,apuesta);
        alert(`El lanzamiento fue Cara , Escogiste Cara , Tu ganas!, tu nuevo saldo es ${saldo}`);
    } 
    else if (lanzamiento==2 && eleccion==2) {
        saldo=ganar(saldo,apuesta);
       alert(`El lanzamiento fue Sello , Escogiste Sello , Tu ganas!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento==1 && eleccion==2) {
        saldo=perder(saldo,apuesta);
        alert(`El lanzamiento fue Cara , Escogiste Sello , Perdiste :(!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento==2 && eleccion==1) {
        saldo=perder(saldo,apuesta);
        alert(`El lanzamiento fue Sello , Escogiste Cara , Perdiste :(!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm(`¿Deseas jugar de nuevo ${jugador}?`);
}

//OBJETOS JS    
    /*
    //Creacion del objeto animal, con 3 propiedades y 1 metodo
    const animal{
        nombre:"Felix";
        tipo:"Gato";
        edad:"4";
        
        comer(){
            //Acceder a las propiedades de un objeto
            console.log(`${animal.nombre} esta comiendo`);
            //Usando la palabra reservada This
            console.log(`${this.nombre} esta comiendo`);
        }
    }
    */