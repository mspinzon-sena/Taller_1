/*
//Estructura basica - Es decir , la consola.
console.log("Hola Mundo");

//Dato almacenado - Variable almacenada
let number=25;
//Primera forma de trabajo
console.log("El numero es ",number);
//Segunda forma - Es mas usual verla
console.log(`El numero es ${number}`);

////////////////////////////////////////////

//Dato almacenado - Variable almacenada
let name="Michael";
//Ver contenido con la segunda forma
console.log(`El nombre es ${name}`);

/////////////////////////////////////////////

//Dato almacenado - Variables almacenadas , una definida y otra no
let datoboolean= new Boolean(true);
let datobooleanvacia= new Boolean();
//Ver contenido
console.log(`El dato es ${datoboolean}`);
console.log(`El dato es ${datobooleanvacia}`);

/////////////////////////////////////////////

//Dato almacenado - Variable almacenada

let res=number+5
//Ver contenido 
console.log(`El resultado es ${number+5}`); //O tambien ${res} , que es lo más recomendado. 
*/
/*
/////////////////////////////////////////////

//Alerta - Simple
//  window.alert("Esto es una alerta")

/////////////////////////////////////////////

//Alerta - 2

let estado= window.confirm("Estás seguro de que ....");
console.log(`La ventana arrojó ${estado}`);

//////////////////////////////////////////////

//Alerta - Tipo de ventana para capturar un dato

    let num1=window.prompt("Digite el primer número"); Omitido por el Ejercicio 1
//Variable
    //let res=number+num1; Esta opcion toma a los dos datos como string y no hace una suma correcta
    let res=number+parseInt(num1);
//Ver contenido
console.log(`El resultado es ${res}`);
*/
/////////////////////////////////////////////

/*
//Ejercicio 1 - Dos ventanas y hacer suma
let sum1=window.prompt("Digite el primer número");
let sum2=window.prompt("Digite el segundo número");
//Variable
let total=parseInt(sum1)+parseInt(sum2);
//Ver contenido
window.alert("El resultado es "+total);
*/

/////////////////////////////////////////////

//Ejercicio 2 - If/Else
/*
let num1=window.prompt("Digite el primer número");
let num2=window.prompt("Digite el segundo número");
//Variable
if (num1>num2) {
    window.alert(num1 +" es > que "+num2);
} else {
    if (num1==num2) {
        window.alert(num1 +" es = que "+num2);
    } else {
        window.alert(num1 +" es < que "+num2);
    }
}
*/
//Operador ternario - Se utiliza para evaluar cosas sencillas
/*
let num1=window.prompt("Digite el primer número");
let num2=window.prompt("Digite el segundo número");
let nummayor=(num1>num2)
? "El número mayor es el primero"
: "El número mayor es el segundo"
window.alert(nummayor);
*/

//Condicionales con Condicion compuesta
/*
let user=window.prompt("Digite el Usuario");
let password=window.prompt("Digite la Contraseña");

if (user=="Michael" && password=="qwerty") {
    window.alert("Bienvenido");
} else {
    if (user=="Michael"&&password!="qwerty") {
        window.alert("Verifique su password!");
    } else if (user!="Michael"&&password=="qwerty"){
        window.alert("Verifique su usuario!");
    } else {
        window.alert("Credenciales de acceso incorrectos");
    }
}
*/
//Switch
/*
let num1=parseInt(prompt("Escriba el número 1"));
let num2=parseInt(prompt("Escriba el número 2"));
let opcion=parseInt(prompt("Digite la opción : 1-Suma 2-Resta 3-Multiplicación 4-División"));

switch(opcion) {
    case 1:
        let totalsum=num1+num2;
        window.alert("El resultado de la "+opcion +" Es "+totalsum);
    break;
    case 2:
        let totalres=parseInt(num1)-parseInt(num2);
        window.alert("El resultado de la "+opcion +" Es "+totalres);
    break;
    case 3:
        let totalmult=parseInt(num1)*parseInt(num2);
        window.alert("El resultado de la "+opcion +" Es "+totalmult);
    break;
    case 4:
        let totaldiv=parseInt(num1)/parseInt(num2);
        window.alert("El resultado de la "+opcion +" Es "+totaldiv);

    break;
    default:
       window.alert("Escriba la opcion correcta por favor");
    break;
}
*/

////////////////////////////////////////////////////////////////
//Ejercicios de Condicionales - FINAL
let opcion=parseInt(prompt("Digite la opción : 1-Suma 2-Resta 3-Multiplicación 4-División 5-Potencia 6-Raiz"));
if (opcion==5 || opcion==6) {
    switch(opcion) {
        case 5: //Potencia
            let base=parseFloat(prompt("Escriba la base"));
            let exponent=parseFloat(prompt("Escriba el exponente"));
            window.alert("El resultado es "+Math.pow(base, exponent));
        break;
        case 6: //Raiz
            let raiz=parseFloat(prompt("Escriba el número de la raiz"));
            window.alert("El resultado es "+Math.sqrt(raiz).toPrecision(3)); //.toPrecision(...) es para saber cuantas cifras quiere mostrar
        break;
    }
} else {
    let num1=parseInt(prompt("Escriba el número 1"));
    let num2=parseInt(prompt("Escriba el número 2"));
switch(opcion) {
    case 1: //Suma
        let totalsum=num1+num2;
        window.alert("El resultado de la "+opcion +" Es "+totalsum);
    break;
    case 2: //Resta
        let totalres=num1-num2;
        window.alert("El resultado de la "+opcion +" Es "+totalres);
    break;
    case 3: //Multiplicación
        let totalmult=num1*num2;
        window.alert("El resultado de la "+opcion +" Es "+totalmult);
    break;
    case 4: //División
        let totaldiv=num1/num2;
        window.alert("El resultado de la "+opcion +" Es "+totaldiv);
    break;

    default:
       window.alert("Escriba la opcion correcta por favor");
    break;
}
}
