let id=document.getElementById("features");
console.log(document.getElementById("features"));
console.log(document.querySelector("h1"));
console.log(document.querySelectorAll("p"));//Crea un NodeList
console.log(document.querySelectorAll("p")[1]); //Seleccionar un elemento de la lista
console.log(document.querySelector("a").getAttribute("href"));//Si deseamos acceder a un atributo de un elemento HTML podemos usar
document.querySelector("a").setAttribute("href","http://www.google.com");//Si deseamos cambiar el valor del atributo

//Es como si agregara estas propiedades al id , agrega estilos
const $mi=document.querySelector("#features");
    $mi.style.setProperty("color","#FF0000");
    $mi.style.setProperty("background-color","lightblue");
    $mi.style.setProperty("width","500px")
//
const $mic=document.querySelector(".miclase");
let text=`<p> El dom es bla bla</p> <p>Se puede accerder y modificar</p>`
$mic.textContent=text //Usarlo cuando solo  quiere agregar una cadena de texto sencilla
$mic.innerHTML=text //Usarlo cuando se desee agregar etiquetas HTML

//Seleccionar Elementos
const img= document.createElement("img");
img.src="https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
document.body.appendChild(img);

//Seleccionar elementos
const $caja=document.createElement("div");
$caja=innerHTML="<img src='../img/1.jpg'>";

$mic.appendChild($caja);