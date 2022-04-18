const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const telefono  = document.querySelector("#telefono");
const comentario = document.querySelector("#comentario");
const info = document.querySelector("#info");
const socio = document.querySelector("#socio");
const btnaceptar = document.querySelector("#aceptar");
const btncancelar = document.querySelector("#cancelar");

class Contacto {
    constructor(formNombre, formApellido, formEmail, formTelefono, formMensaje, formRecibirNovedades, formNroSocio) {
        this.formNombre = formNombre;
        this.formApellido = formApellido;
        this.formEmail = formEmail;
        this.formTelefono = formTelefono;
        this.formMensaje = formMensaje;
        this.formRecibirNovedades = formRecibirNovedades;
        this.formNroSocio = formNroSocio;
    }
    
    limpiarContacto = () =>{
        this.formNombre = null;
        this.formApellido = null;
        this.formEmail = null;
        this.formTelefono = null;
        this.formMensaje = null;
        this.formRecibirNovedades = null;
        this.formNroSocio = null;
    }
}

validarFormulario = () =>  {
    let mensajeError = '';

    if(nombre.value === '') {
        mensajeError += `EL NOMBRE ES OBLIGATORIO \n`
        nombre.className = "form-control cuerpo__vacio";
    }else{
        nombre.className = "form-control cuerpo__valido";
    }
    if (apellido.value === "") {
        mensajeError += `EL APELLIDO ES OBLIGATORIO \n`;
        apellido.className = "form-control cuerpo__vacio";
    } else {
        apellido.className = "form-control cuerpo__valido";
    }
    if (email.value === "" && telefono.value === "") {
        mensajeError += `EL CORREO ELECTRÓNICO O SU TELÉFONO SON NECESARIOS (¡NO PODRÍAMOS RESPONDERLE!) \n`;
        email.className = "form-control cuerpo__vacio";
        telefono.className = "form-control cuerpo__vacio";
    } else {
        email.className = "form-control cuerpo__valido";
        telefono.className = "form-control cuerpo__valido";
    }
    if (comentario.value === "") {
        mensajeError += `¡EL MENSAJE ES IMPORTANTISIMO PARA NOSOTROS! ¡NO LO OLVIDES, POR FAVOR! \n`;
        comentario.className = "form-control cuerpo__vacio";
    } else {
        comentario.className = "form-control cuerpo__valido";
    }
    return mensajeError;
}

enviarFormulario = (contacto) => {
    let activarSocio = (contacto.formNroSocio === "" ? 'NO ES SOCIO' : `NRO DE SOCIO ${contacto.formNroSocio}`);
    let activarMensajes = (contacto.formRecibirNovedades !== true  ? 'NO QUIERO RECIBIR INFORMACIÓN ' : 'ENVIAR INFORMACIÓN SOBRE LAS ACTIVIDADES DEL CLUB ');
    let bodyMail = `mailto:herbertocosta@gmail.com?subject=MENSAJE DE: ${contacto.formApellido.toUpperCase()}, ${contacto.formNombre.toUpperCase()} ${activarSocio} \n &body=${contacto.formMensaje} \n ${activarMensajes}`
    bodyMail +=  (contacto.formTelefono === "" ? `COMUNICARSE  POR MAIL A ${contacto.formEmail}`  : `COMUNICARSE AL ${contacto.formTelefono} y/o POR MAIL A ${contacto.formEmail}`);
    console.log(bodyMail);
    alert(bodyMail);
}

//PONGO FOCO EN EL PRIMER INPUT
nombre.focus();
//CONSTRUYO EL ARRAY QUE SERÁ MI BD
const arrayContactos = [];
//OPRIMIR  EL BOTON ACEPTAR VALIDAR LA INFO , GUARDAR LA INFO Y ENVIAR EL MAIL
btnaceptar.onclick = (e) =>  {
    e.preventDefault();
    errores = validarFormulario();
    if (errores === ""){
        const nuevoContacto = new Contacto(nombre.value, apellido.value, email.value, telefono.value, comentario.value, (info.checked==true ? true : false), socio.value);
        enviarFormulario(nuevoContacto);
        arrayContactos.push(nuevoContacto);
    }else{
        alert(errores);
    }
}

btncancelar.onclick = (e) => {
    e.preventDefault();
    document.getElementById("formMail").reset();
}

