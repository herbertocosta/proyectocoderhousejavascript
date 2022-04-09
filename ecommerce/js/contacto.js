class Contacto{
    
    constructor(formNombre, formApellido, formEmail, formTelefono, formMensaje, formRecibirNovedades, formNroSocio){
        this.formNombre=formNombre;
        this.formApellido=formApellido;
        this.formEmail=formEmail;
        this.formTelefono=formTelefono;
        this.formMensaje=formMensaje;
        this.formRecibirNovedades=formRecibirNovedades;
        this.formNroSocio=formNroSocio;
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

cargarFormulario = (contacto) => {
        contacto.formNombre = prompt("INGRESE SU NOMBRE");
        if (contacto.formNombre === null){
            return false;
        };
        contacto.formApellido = prompt("INGRESE SU APELLIDO");
        if (contacto.formApellido === null){
            return false;
        } ;
        contacto.formEmail = prompt("INGRESE SU DIRECCIÓN DE CORREO");
        if (contacto.formEmail === null) {
            return false;
        };
        contacto.formTelefono = prompt("INGRESE SU TELÉFONO DE CONTACTO");
        if (contacto.formTelefono === null){
            return false;
        };
        contacto.formMensaje = prompt("INGRESE EL MENSAJE, COMENTARIO o QUEJA");
        if (contacto.formMensaje === null){
            return false;
        };
        if (confirm("¿QUIERE QUE LE ENVIEMOS INFO DE INTERÉS?")) {
            contacto.formRecibirNovedades = true;
        } else {
            contacto.formRecibirNovedades = false;
        };
        if (confirm("¿ES UD. SOCIO?")) {
            contacto.formNroSocio = prompt("INGRESE SU NRO DE ASOCIADO");
            if(contacto.formNroSocio === null){
                contacto.formNroSocio = 'DICE SER SOCIO PERO NO LO PUSO';
            };
        }
        return true;  
    }
    
validarFormulario = (contacto) =>  {
    let mensajeError = '';

    if(contacto.formNombre === '') {
        mensajeError += `EL NOMBRE ES OBLIGATORIO \n`
    }
    if(contacto.formApellido === '') {
        mensajeError += `EL APELLIDO ES OBLIGATORIO \n`
    }
    if(contacto.formEmail === '' && contacto.formTelefono === '') {
        mensajeError += `EL CORREO ELECTRÓNICO O SU TELÉFONO SON NECESARIOS (¡NO PODRÍAMOS RESPONDERLE!) \n`
    }
    if(contacto.formMensaje === '') {
        mensajeError += `¡EL MENSAJE ES IMPORTANTISIMO PARA NOSOTROS! ¡NO LO OLVIDES, POR FAVOR! \n`
    }
    return mensajeError;
}

enviarFormulario = (contacto) => {
    let activarSocio = (contacto.formNroSocio === null ? '' : `NRO DE SOCIO ${contacto.formNroSocio}`);
    let activarMensajes = (contacto.formRecibirNovedades === false ? 'NO QUIERO RECIBIR INFORMACIÓN' : `ENVIAR INFORMACIÓN SOBRE LAS ACTIVIDADES DEL CLUB`);
    let bodyMail = `mailto:herbertocosta@gmail.com?subject=MENSAJE DE: ${contacto.formApellido.toUpperCase}, ${contacto.formNombre.toUpperCase} ${activarSocio} \n &body=${contacto.formMensaje} \n ${activarMensajes} COMUNICARSE AL ${contacto.formTelefono} O POR MAIL A ${contacto.formEmail}`;
    console.log(bodyMail);
    alert(bodyMail);
}
    

//Creo un objeto para el nuevo contacto
const nuevoContacto = new Contacto(null,null,null,null,null,null,null);
const arrayContactos = [];
//Loopeo por si se equivocó  durante el proceso y quiere enviar un mensaje
do {
    if(cargarFormulario(nuevoContacto)){
        if(validarFormulario(nuevoContacto).length == 0) {
            enviarFormulario(nuevoContacto);
        }else{
            console.log(validarFormulario(nuevoContacto));
            alert(validarFormulario(nuevoContacto));
            if (confirm("¿QUIERE VOLVER A INTENTARLO?")) {
                continue;
            }else{
                break;
            }
        }
    }else{
        if (confirm("¿QUIERE CANCELAR EL MENSAJE?")) {
            break;
        }else{
            arrayContactos.push(nuevoContacto);
            nuevoContacto.limpiarContacto();
            continue;
        }
    }; 
    break;
} while (true);
//}

