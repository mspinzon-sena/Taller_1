//Ejercicio 1 - Capturar nombre
let nombre=window.prompt("Digite su nombre");
let apellido=window.prompt("Digite su apellido");	
//Variable
let nameMayus= nombre.toUpperCase();
let nameLength=nombre.length;

let apellidoMinus= apellido.toLowerCase();
let apellidoLength=apellido.length;

let firstName= nombre.charAt(0);




//Ver contenido

console.log("El nombre "+nombre+ " en mayúsculas es "+nameMayus+" Y tiene "+nameLength+" letras" );
console.log("El apellido "+apellido+ " en minusculas es "+apellidoMinus+" Y tiene "+apellidoLength+" letras" );
console.log("La primera letra del nombre "+nombre+" es la letra "+firstName);
console.log(firstName+apellido+" = Es su usuario actual ");
