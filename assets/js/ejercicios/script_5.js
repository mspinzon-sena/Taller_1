
/*let onces=['arepa','pan','tinto'];
onces[1];
onces.length;
let ultimo=onces.length -1;   */

let colores=['azul','rojo','amarillo','morado','blanco'];

console.log("El color #3 es: "+colores[2]);

console.log("El longitud del color es: "+colores.length);

console.log("El último color es: "+colores[colores.length-1]);

// añadir en el último color
colores.push('negro');


//agregar en la primera posición, aplicable para ambos métodos de impresión
colores.unshift('plateado');

//Eliminar la primera posición, aplicable para ambos métodos de impresión
colores.shift();

//elimina el último color
colores.pop();


//eliminar elementos en una parte intermedia, donde inicia a eliminar, posiciones de arrays a eliminar
colores.splice(1,3);






//Impresión en consola
console.log(colores);


//Impresión en consola mejorado
colores.forEach(function(elemento,index,array){
    console.log(`posición ${index} elemento ${elemento}`)
})



//con ciclo

let aprendices=[];
let seguir=true;

while(seguir==true){
    aprendices.push(window.prompt("Ingrese nombre aprendiz"));
    seguir=confirm("¿Desea seguir?");

}
window.alert(aprendices);

//filtrar para establecer un criterio,  encontrar todos los camilos, crea un array
let filtro=aprendices.filter(aprendices=>aprendices=="camilo");
window.alert("El filtro es:"+filtro);

//encontrar el primer dato que coincida con la variable , solo trae uno
let busqueda=aprendices.find(aprendices=>aprendices=="carlos");
window.alert("La busqueda es:"+busqueda);

//solamente genera un ordenamiento ascendente, ordena primero números y luego letras sort()
orden=aprendices.sort();
window.alert("Ordenados los datos es: "+orden);


// obtener 
let aprendicess=[
    {primernombre:"Camilo",primerapellido:"Basante"},
    {primernombre:"Maicol",primerapellido:"Pinzón"}
]


let nombrecompleto= aprendicess.map(function(elemento,index,array){
return `${elemento.primernombre} ${elemento.primerapellido}`

})

