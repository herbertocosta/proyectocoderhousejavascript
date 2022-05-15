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
const arrayContactos = [];

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
validarDato = (param) => {
    return param.value || "Falsy";
}

validarError = (param, param1) => {
    if(validarDato(param)==="Falsy"){
        param.className = "form-control cuerpo__vacio";
        param1.className = "formmail__input-error-activo";
        return true
    }else{
        param.className = "form-control cuerpo__valido";
        param1.className = "formmail__input-error";
    }
}

validarFormulario = () =>  {
    let mensajeError = false;

    mensajeError = validarError(nombre, nombreError)
    mensajeError = validarError(apellido, apellidoError)
    mensajeError = validarError(email, emailError)
    mensajeError = validarError(comentario, commentError);
    
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


//OPRIMIR  EL BOTON ACEPTAR VALIDAR LA INFO , GUARDAR LA INFO Y ENVIAR EL MAIL
btnaceptar.onclick = (e) =>  {
    e.preventDefault();
    errores = validarFormulario();
    if (!errores){
        const nuevoContacto = new Contacto(nombre.value, apellido.value, email.value, telefono.value, comentario.value, (info.checked==true ? true : false), socio.value);
        arrayContactos.push(nuevoContacto);
        //localStorage.removeItem("mensaje");
        localStorage.setItem("mensaje",JSON.stringify(arrayContactos));
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

