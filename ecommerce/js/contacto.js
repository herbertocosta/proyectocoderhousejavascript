/**
 *      DEFINIR VARIABLES DEL DOM
 */
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const comentario = document.getElementById("comentario");
const info = document.getElementById("info");
const socio = document.getElementById("socio");
const btnaceptar = document.querySelector("#aceptar");
const btncancelar = document.querySelector("#cancelar");
const formMail = document.getElementById("formMail");
const nombreError = document.getElementById("nombreError");
const apellidoError = document.getElementById("apellidoError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const commentError = document.getElementById("commentError");
const asunto = document.getElementsByName("_subject");

/**
 *      DEFINIR CLASES
 */
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

/**
 *      DEFINIR FUNCIONES 
 */

validarFormulario = () =>  {
    let mensajeError = false;

    if(nombre.value === '') {
        mensajeError = true;
        nombre.className = "form-control cuerpo__vacio";
        nombreError.className = "formmail__input-error-activo";
    }else{
        nombre.className = "form-control cuerpo__valido";
        nombreError.className = "formmail__input-error";

    }
    if (apellido.value === "") {
        mensajeError = true;
        apellido.className = "form-control cuerpo__vacio";
        apellidoError.className = "formmail__input-error-activo";
    } else {
        apellidoError.className = "formmail__input-error";
        apellido.className = "form-control cuerpo__valido";
    }
    if (email.value === "" && telefono.value === "") {
        mensajeError = true;
        email.className = "form-control cuerpo__vacio";
        emailError.className = "formmail__input-error-activo";
        
    } else {
        email.className = "form-control cuerpo__valido";
        emailError.className = "formmail__input-error";
    }
    if (comentario.value === "") {
        mensajeError = true;
        comentario.className = "form-control cuerpo__vacio";
        commentError.className = "formmail__input-error-activo";
    } else {
        comentario.className = "form-control cuerpo__valido";
        commentError.className = "formmail__input-error";
    }
    return mensajeError;
}



//RESETEO ERRORES
resetearErrores  = () =>{
    nombreError.className="formmail__input-error";
    apellidoError.className="formmail__input-error";
    emailError.className="formmail__input-error";
    phoneError.className="formmail__input-error";
    commentError.className="formmail__input-error";
}

//PONGO FOCO EN EL PRIMER INPUT
nombre.focus();
resetearErrores();
//CONSTRUYO EL ARRAY QUE SERÁ MI BD
const arrayContactos = [];
//OPRIMIR  EL BOTON ACEPTAR VALIDAR LA INFO , GUARDAR LA INFO Y ENVIAR EL MAIL
btnaceptar.onclick = (e) =>  {
    e.preventDefault();
    errores = validarFormulario();
    if (!errores){
        const nuevoContacto = new Contacto(nombre.value, apellido.value, email.value, telefono.value, comentario.value, (info.checked==true ? true : false), socio.value);
        arrayContactos.push(nuevoContacto);
        localStorage.setItem("mensaje",JSON.stringify(nuevoContacto));
        Swal.fire({
           title: "¡GRACIAS!",
           text: "!SU MENSAJE FUÉ ENVIADO PRONTO RECIBIRÁ NUESTRA RESPUESTA!",
           icon: "success",
           timer: 100000
        });
        formMail.submit();
    }else{
        Swal.fire({
            title: "¡UPS!",
            text: "No podemos enviar su Mensaje, parece estar incompleto, Verifíquelo por Favor",
            icon: "error",
            confirmButtonText: "OK!",
            timer: 10000,
        });

    }
}

btncancelar.onclick = (e) => {
    e.preventDefault();
    document.getElementById("formMail").reset();
    Swal.fire({
        title: "¡GRACIAS!",
        text: "SU MENSAJE FUÉ CANCELADO",
        icon: "success",
        confirmButtonText: "OK!",
        timer: 10000
    });
}

