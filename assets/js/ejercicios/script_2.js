let nombre=window.prompt("Escriba su nombre");
let apellido=window.prompt("Escriba su apellido");

let primeraletra= nombre.slice(0,1);
window.alert("Nombre en mayuscula: "+ nombre.toUpperCase() +" y la cantidad de caracteres es: "+nombre.length);
window.alert("Apellido en minuscula: "+ apellido.toLowerCase() +" y la cantidad de caracteres es: "+apellido.length);
window.alert("La primera letra del nombre es: "+primeraletra);
window.alert("Este es su usuario: "+primeraletra+apellido);