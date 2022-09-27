const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click',(e)=>{
    let lado1=parseInt(document.getElementById("lado1").value);
    let lado2=parseInt(document.getElementById("lado2").value);
    let lado3=parseInt(document.getElementById("lado3").value);
    if(lado1 == lado2 && lado1 == lado3){
        e.preventDefault();
        let texto=`<p class="prueba">Es Triángulo Equilátero</p>`
      d.innerHTML=texto; 

    }else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        e.preventDefault();
        let texto=`<p class="prueba">EsTriángulo Escaleno</p>`
      d.innerHTML=texto; 

    }else{
        e.preventDefault();
        let texto=`<p class="prueba">Es Triángulo Isóceles</p>`
      d.innerHTML=texto; 
    }
});