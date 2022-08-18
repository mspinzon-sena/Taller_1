console.log("Hola mundo");

/*
let numero= 25;
console.log("El número es: ",numero);   //forma noob
console.log(`el numero es ${numero}`);  //forma pro

let nombre="Camilo";

console.log(`el nombre es ${nombre}`); 

*/
/*let res=numero+5; */


/*Alerta*/
// window.alert("AMONGUS!!!!");
/*Confirmación*/

//let estado=window.confirm("¿Seguro de que eres heterosexual?");
//console.log(`La venta arrojo ${estado}`);

/*Alerta que captura un dato */
//let num1=window.prompt("Cuantos años tiene cars");

/*concatenación de valores, parseInt lo evita*/
//let res=numero+parseInt(num1);
//console.log(`el resultado es ${res}`);


/*Ejercicio suma */
//let sum1=window.prompt("digite primer número");
//let sum2=window.prompt("digite segundo número");

/*let total=parseInt(sum1)+parseInt(sum2);
window.alert("el resultado es: "+total);
*/

//if(sum1>sum2){
//     window.alert("el número mayor es: "+sum1);
//}
//else{
//    if (sum1===sum2){
//     window.alert("los números son iguales");
//    }

//    else{
//        window.alert("el número mayor es : "+sum2);
//    }
//}

/*Operador ternario*/
/*
let nummayor=(num1>num2)
?"El número mayor es el primero"
: "El número mayor es el segundo"

console.log(nummayor);
*/

/*Con dicondicionales con condición compuesta*/
/*
let usuario=window.prompt("digite usuario");
let contraseña=window.prompt("digite la contraseña");

if(usuario=="camilobte" && contraseña=="adsi"){
    window.alert("Bienvenido crack");
}

else{
    if(usuario!="camilobte" && contraseña=="adsi"){
        window.alert("usuario incorrecto");
    }
    else if(usuario=="camilobte" && contraseña!="adsi"){
        window.alert("contraseña incorrecto");
    }

    else{
        window.alert("se equivoco en todo gay");
    }
    
}
*/


let operacion=window.prompt("que operación desea usar:");
let num1=window.prompt("digite primer número");
let num2=window.prompt("digite segundo número");

switch(operacion){
    case "multiplicación":
        total=parseInt(num1)*parseInt(num2);
        window.alert("resultado: "+total);
    break;
    case "división":
        total=parseInt(num1)/parseInt(num2);
        window.alert("resultado: "+total.toFixed(2));
    break;
    case "suma":
        total=parseInt(num1)+parseInt(num2);
        window.alert("resultado: "+total);
    break;
    case "resta":
        total=parseInt(num1)-parseInt(num2);
        window.alert("resultado: "+total);
    break;
    case "potencia":
        total=Math.pow(parseInt(num1),parseInt(num2));
        window.alert("resultado: "+total);
    break;
    case "raíz":
        window.alert("la raíz del primer número es: "+Math.sqrt(num1)+"y la segunda raíz es: "+Math.sqrt(num2));
    break;
    default:
        window.alert("Error en los datos");
    break;

}
