const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click', (e)=>{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
        let sum=num1+num2;
        e.preventDefault();
        let texto=`<p class="prueba"> El resultado es de la suma es: ${sum}</p>`
      d.innerHTML=texto; 

      
    }else if(op==2){
      let res=num1-num2;
      e.preventDefault();
      let texto=`<p class="prueba"> El resultado es: ${res}</p>`
    d.innerHTML=texto; 
   
    }else if(op==3){
      let mult=num1*num2;
      e.preventDefault();
      let texto=`<p class="prueba"> El resultado es: ${mult}</p>`
    d.innerHTML=texto; 
   
    }else if(op==4){
      let div=num1/num2;
      e.preventDefault();
      let texto=`<p class="prueba"> El resultado es: ${div.toFixed(2)}</p>`
    d.innerHTML=texto; 
    
    }else{
      e.preventDefault();
      let texto=`
      <p class="prueba">Por favor selecciona una operación</p>`
    d.innerHTML=texto; 
    d.style.setProperty('color', "rgba(220, 53, 69)");
    
    }
});

