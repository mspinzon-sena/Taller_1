//PERIMETRO DEL CUADRADO
const btn=document.getElementById("submit");
const form=document.getElementById("form");
btn.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadrado").value);
    let perCua=lado*4;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El perímetro es ${perCua}</p>`
    form.innerHTML=texto;
    form.style.setProperty('position', "relative");
    form.style.setProperty('display', "flex");
    form.style.setProperty('left', "270px");
})

//AREA DEL CUADRADO
const formA=document.getElementById("formA");
const btnA=document.getElementById("submitA");
btnA.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadradoA").value);
    let perCua=lado*2;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El area es ${perCua}</p>`
    formA.innerHTML=texto;
    formA.style.setProperty('position', "relative");
    formA.style.setProperty('display', "flex");
    formA.style.setProperty('left', "270px");
})

//PERIMETRO DEL TRIANGULO
const formT=document.getElementById("formT");
const btnT=document.getElementById("submitT");
btnT.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadradoT").value);
    let lado2=parseInt(document.getElementById("ladoCuadradoT2").value);
    let lado3=parseInt(document.getElementById("ladoCuadradoT3").value);
    let perTri=lado+lado2+lado3;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El perimetro es ${perTri}</p>`
    formT.innerHTML=texto;
    formT.style.setProperty('position', "relative");
    formT.style.setProperty('display', "flex");
    formT.style.setProperty('left', "270px");
})

//AREA DEL TRIANGULO
const formTR=document.getElementById("formTR");
const btnTR=document.getElementById("submitTR");
btnTR.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadradoTR").value);
    let lado2=parseInt(document.getElementById("ladoCuadradoTR2").value);
    let perTri=lado*lado2/2;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El area es ${perTri}</p>`
    formTR.innerHTML=texto;
    formTR.style.setProperty('position', "relative");
    formTR.style.setProperty('display', "flex");
    formTR.style.setProperty('left', "270px");
})

//PERIMETRO DEL CIRCULO
const formC=document.getElementById("formC");
const btnC=document.getElementById("submitC");
btnC.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadradoC").value);
    let perCir=2*(3,14)*lado;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El area es ${perCir}</p>`
    formC.innerHTML=texto;
    formC.style.setProperty('position', "relative");
    formC.style.setProperty('display', "flex");
    formC.style.setProperty('left', "270px");
})

//AREA DEL CIRCULO
const formCA=document.getElementById("formCA");
const btnCA=document.getElementById("submitCA");
btnCA.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoCuadradoCA").value);
    let perCir=(3,14)*lado*2;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El area es ${perCir}</p>`
    formCA.innerHTML=texto;
    formCA.style.setProperty('position', "relative");
    formCA.style.setProperty('display', "flex");
    formCA.style.setProperty('left', "270px");
})

//PERIMETRO DEL RECTANGULO
const formR=document.getElementById("formR");
const btnR=document.getElementById("submitR");
btnR.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoRectangulo").value);
    let lado2=parseInt(document.getElementById("ladoRectangulo2").value);
    let perRec=lado*2+2*lado2;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El perímetro es ${perRec}</p>`
    formR.innerHTML=texto;
    formR.style.setProperty('position', "relative");
    formR.style.setProperty('display', "flex");
    formR.style.setProperty('left', "270px");
})

//AREA DEL RECTANGULO
const formRA=document.getElementById("formRA");
const btnRA=document.getElementById("submitRA");
btnRA.addEventListener('click',(e)=>{
    let lado=parseInt(document.getElementById("ladoRectanguloA").value);
    let lado2=parseInt(document.getElementById("ladoRectanguloA2").value);
    let perRec=lado*lado2;
    e.preventDefault();
    let texto=`
    <p class="prueba">
    El area es ${perRec}</p>`
    formRA.innerHTML=texto;
    formRA.style.setProperty('position', "relative");
    formRA.style.setProperty('display', "flex");
    formRA.style.setProperty('left', "270px");
})
/**Acceder al boton para abrir el modal */
let btnmodal=document.getElementById("abrirModal");

/**Acceder a la ventana modal */
let venmodal=document.getElementById("ventanaModal");

/**Acceder al boton cerrar de la ventana modal */
/**Perimetro del cuadrado*/ 
let cermodal=document.querySelector(".cerrarModal");
btnmodal.addEventListener('click',()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener('click',()=>{
    venmodal.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodal){
        venmodal.style.display="none"
    }
})

/**Modal 2, Area Cuadrado */
let btnmodal2=document.getElementById("abrirModal2");
let venmodal2=document.getElementById("ventanaModal2");
let cermodal2=document.querySelector(".cerrarModal2");
btnmodal2.addEventListener('click',()=>{
    venmodal2.style.display="block"
})

cermodal2.addEventListener('click',()=>{
    venmodal2.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodal2){
        venmodal2.style.display="none"
    }
})

/**Modal 0, Detalle Cuadrado */
let btnmodald=document.getElementById("abrirModalD");
let venmodald=document.getElementById("ventanaModalD");
let cermodald=document.querySelector(".cerrarModalD");
btnmodald.addEventListener('click',()=>{
    venmodald.style.display="block"
})

cermodald.addEventListener('click',()=>{
    venmodald.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodald){
        venmodald.style.display="none"
    }
})

/**Modal 3, Perimetro Triangulo */
let btnmodalt=document.getElementById("abrirModalT");
let venmodalt=document.getElementById("ventanaModalT");
let cermodalt=document.querySelector(".cerrarModalT");
btnmodalt.addEventListener('click',()=>{
    venmodalt.style.display="block"
})

cermodalt.addEventListener('click',()=>{
    venmodalt.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalt){
        venmodalt.style.display="none"
    }
})

/**Modal 4, Area Triangulo */
let btnmodalta=document.getElementById("abrirModalT");
let venmodalta=document.getElementById("ventanaModalT");
let cermodalta=document.querySelector(".cerrarModalT");
btnmodalta.addEventListener('click',()=>{
    venmodalta.style.display="block";
})

cermodalta.addEventListener('click',()=>{
    venmodalta.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalta){
        venmodalta.style.display="none"
    }
})

/**Modal 4, Perimetro Triangulo */
let btnmodaltr=document.getElementById("abrirModalTR");
let venmodaltr=document.getElementById("ventanaModalTR");
let cermodaltr=document.querySelector(".cerrarModalTR");
btnmodaltr.addEventListener('click',()=>{
    venmodaltr.style.display="block"
})

cermodaltr.addEventListener('click',()=>{
    venmodaltr.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodaltr){
        venmodaltr.style.display="none"
    }
})

/**Modal 4, Detalles Triangulo */
let btnmodaltd=document.getElementById("abrirModalTD");
let venmodaltd=document.getElementById("ventanaModalTD");
let cermodaltd=document.querySelector(".cerrarModalTD");
btnmodaltd.addEventListener('click',()=>{
    venmodaltd.style.display="block"
})

cermodaltd.addEventListener('click',()=>{
    venmodaltd.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodaltd){
        venmodaltd.style.display="none"
    }
})

/**Modal 5, Perimetro Circulo */
let btnmodalc=document.getElementById("abrirModalC");
let venmodalc=document.getElementById("ventanaModalC");
let cermodalc=document.querySelector(".cerrarModalC");
btnmodalc.addEventListener('click',()=>{
    venmodalc.style.display="block";
})

cermodalc.addEventListener('click',()=>{
    venmodalc.style.display="none";
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalc){
        venmodalc.style.display="none"
    }
})

/**Modal 5, Area Circulo */
let btnmodalca=document.getElementById("abrirModalCA");
let venmodalca=document.getElementById("ventanaModalCA");
let cermodalca=document.querySelector(".cerrarModalCA");
btnmodalca.addEventListener('click',()=>{
    venmodalca.style.display="block";
})

cermodalca.addEventListener('click',()=>{
    venmodalca.style.display="none";
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalca){
        venmodalca.style.display="none"
    }
})

/**Modal 5, Detalles Circulo */
let btnmodalcd=document.getElementById("abrirModalCD");
let venmodalcd=document.getElementById("ventanaModalCD");
let cermodalcd=document.querySelector(".cerrarModalCD");
btnmodalcd.addEventListener('click',()=>{
    venmodalcd.style.display="block";
})

cermodalcd.addEventListener('click',()=>{
    venmodalcd.style.display="none";
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalcd){
        venmodalcd.style.display="none"
    }
})


/**Modal 5, Perimetro Rectangulo */
let btnmodalr=document.getElementById("abrirModalR");
let venmodalr=document.getElementById("ventanaModalR");
let cermodalr=document.querySelector(".cerrarModalR");
btnmodalr.addEventListener('click',()=>{
    venmodalr.style.display="block";
})

cermodalr.addEventListener('click',()=>{
    venmodalr.style.display="none";
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalr){
        venmodalr.style.display="none"
    }
})

/**Modal 6, Area Rectangulo */
let btnmodalra=document.getElementById("abrirModalRA");
let venmodalra=document.getElementById("ventanaModalRA");
let cermodalra=document.querySelector(".cerrarModalRA");
btnmodalra.addEventListener('click',()=>{
    venmodalra.style.display="block";
})

cermodalra.addEventListener('click',()=>{
    venmodalra.style.display="none";
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalra){
        venmodalra.style.display="none"
    }
})

/**Modal 0, Detalle Cuadrado */
let btnmodalrd=document.getElementById("abrirModalRD");
let venmodalrd=document.getElementById("ventanaModalRD");
let cermodalrd=document.querySelector(".cerrarModalRD");
btnmodalrd.addEventListener('click',()=>{
    venmodalrd.style.display="block"
})

cermodalrd.addEventListener('click',()=>{
    venmodalrd.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalrd){
        venmodalrd.style.display="none"
    }
})