//Esta es para numdoc y telefono ^\d{7,10}$
//Esta es para nombre y apellidos ^[a-zA-ZÁ-ÿ\s]{1,40}$
//Esta es para el correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//Esta es para el password ^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$
//Esta es para fechas ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$
const reglas={
    textos: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, //Solo letras
    numeros: /^\d{7,10}$/, //Solo numeros
    correo: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correos
    password: /^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, //Passwords
    fechas: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/ //Fechas
}

const inputs={
    numdoc: false,
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    password: false,
}

//Acceder al formulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");

//Agregar listener de evento submit al formulario que se envia
/*form.addEventListener('submit',e=>{
    e.preventDefault; //Evitar que se envie el formulario para realizar las validaciones 
    //alert("Se envio el formulario");
})*/

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
        inputs[grupo]=true;
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
        inputs[grupo]=false;
    }
}


const validarPassword2=() =>{ 
    const password = document.getElementById('password'); 
    const password2 = document.getElementById('password2'); 
    if(password.value !== password2.value){ 
        document.getElementById(`g-password2`).classList.add('error'); 
        document.getElementById(`g-password2`).classList.remove('success'); 
        document.querySelector(`#g-password2 i`).classList.remove('fa-check'); 
        document.querySelector(`#g-password2 i`).classList.add('fa-circle-exclamation'); 
        document.querySelector(`#g-password2 .msn-error`).classList.add('msn-error-visible'); 
        inputs['password']=false;
    }else{
        document.getElementById(`g-password2`).classList.remove('error'); 
        document.getElementById(`g-password2`).classList.add('success'); 
        document.querySelector(`#g-password2 i`).classList.add('fa-check'); 
        document.querySelector(`#g-password2 i`).classList.remove('fa-circle-exclamation'); 
        document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');
        inputs['password']=true;
    }
}


const validarCampos=(e)=>{
    console.log("Se genero un eveto sobre el input"+e.target.name)
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        /*case "nacimiento":
            validarInput(reglas.fechas,e.target,e.target.name);
        break;*/
        case "email":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name)
            validarPassword2()
        break;
        case "password2":
            validarPassword2()
        break;
        default:
            alert("No se ha recibido un evento sobre el input");
        break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos)
    campo.addEventListener('blur',validarCampos)
})

form.addEventListener('submit', e=>{
    e.preventDefault();
    const terminos = document.getElementById('terminos');
    if(inputs.numdoc && inputs.nombre && inputs.apellido && inputs.email && inputs.telefono && inputs.password && terminos.checked){

        form.reset();
        alert("Formulario enviado exitosamente")
        document.getElementById(`g-s`).classList.add('success'); 
        setTimeout(()=>{
            document.getElementById(`g-s`).classList.remove('success'); 
        }, 5000);
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('success')
        })
    }else{
        alert('Error: Por favor completar el fomulario')
        //document.getElementById('').classList('error')
    }
})




/**Modal 0, Detalle Cuadrado */
let btnmodalv=document.getElementById("abrirModal");
let venmodalv=document.getElementById("ventanaModal");
let cermodalv=document.querySelector(".cerrarModal");
btnmodalv.addEventListener('click', (e)=>{
    e.preventDefault();
    venmodalv.style.display="block"
})

cermodalv.addEventListener('click',()=>{
    venmodalv.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalv){
        venmodalv.style.display="none"
    }
})
