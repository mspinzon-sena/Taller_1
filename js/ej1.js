const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click', (e)=>{
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let seleccion=document.getElementById("seleccion").value;
    if(seleccion==1){
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        Su nombre es ${nombre.toUpperCase()}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "80px");
    }else if(seleccion==2){
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        La longitud de su nombre es ${nombre.length}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "35px");
    }else if(seleccion==3){
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        De su nombre es ${nombre.charAt(0)}<br>
        De su apellido es ${apellido.charAt(0)}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "100px");
    }else if(seleccion==4){
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        Su apellido es ${apellido.toLowerCase()}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "59px");
    }else if(seleccion==5){
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        La longitud de su apellido es ${apellido.length}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "35px");
    }else if(seleccion==6){
        e.preventDefault();
        let texto=`
        <p class="prueba2">
        <p class="prueba">
        Su nombre de usuario es ${nombre.charAt(0).toUpperCase()}${nombre.charAt(1).toLowerCase()}${nombre.charAt(2).toLowerCase()}${nombre.charAt(3).toLowerCase()}${apellido.charAt(0).toLowerCase()}${apellido.charAt(1).toLowerCase()}${apellido.charAt(2).toLowerCase()}${apellido.charAt(3).toLowerCase()}</p>
        </p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "15px");
    }else{
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        Opcion Invalida</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "118px");
    }

})
