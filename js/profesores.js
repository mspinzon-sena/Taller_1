const listar=document.getElementById("submit")
const rta=document.getElementById("form")
listar.addEventListener('click', (e)=>{
    let op=document.getElementById("nombre").value;
    let op2=document.getElementById("apellido").value;
    let op3=document.getElementById("actividad").value;
    if(op==op2 && op==op3){
        e.preventDefault();
      let texto=`<p class="prueba"><i class="fa-solid fa-check"> La respuesta es correcta</i></p>`
      rta.innerHTML=texto; 
      rta.style.setProperty('color', "green");
      rta.style.setProperty('font-size', ".5rem");
    
    }else if(op!=0 && op!=op2 ||op2!=0 && op2!=op3 ||op3!=0 && op3!=op ){
      e.preventDefault();//Las opciones elegidas son ${op}, ${op2} y ${op3}
      let texto=`<p class="prueba"><i class="fa-solid fa-circle-exclamation"> La respuesta es incorrecta o no se selecciono una/s opcion/es.</i></p>`
      rta.innerHTML=texto; 
      rta.style.setProperty('color', "red");
      rta.style.setProperty('font-size', ".4rem");
  }
})