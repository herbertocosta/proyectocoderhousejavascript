let form;
let formNombre;
let formApellido;
let formEmail;
let formTelefono;
let formMensaje;
let formRecibirNovedades;
let formNroSocio;
let mensajeError;
let mailTo;

function validarFormulario() {
    let resultado = true;

    if(formNombre === '') {
        mensajeError += `EL NOMBRE ES OBLIGATORIO \n`
        resultado = false;
    }
    if(formApellido === '') {
        mensajeError += `EL APELLIDO ES OBLIGATORIO \n`
        resultado = false;
    }
    if(formEmail === '' && formTelefono === '') {
        mensajeError += `EL CORREO ELECTRÓNICO O SU TELÉFONO SON NECESARIOS (¡NO PODRÍAMOS RESPONDERLE!) \n`
        resultado = false;
    }
    
    if(formMensaje === '') {
        mensajeError += `¡EL MENSAJE ES IMPORTANTISIMO PARA NOSOTROS! ¡NO LO OLVIDES, POR FAVOR! \n`
        resultado = false;
    }
   return resultado; 
}

function enviarFormulario() {
    let socio = (formNroSocio === '' ? '' : `NRO DE SOCIO ${formNroSocio}`);
    let bodyMail = `mailto:herbertocosta@gmail.com?subject=MENSAJE DE: ${formApellido}, ${formNombre} ${socio} \n &body=${formMensaje}\n COMUNICARSE AL ${formTelefono} O POR MAIL A ${formEmail}`;
    console.log(bodyMail);
    alert(bodyMail);
}


    do {
        formNombre = prompt('INGRESE SU NOMBRE');
        formApellido = prompt('INGRESE SU APELLIDO');
        formEmail = prompt('INGRESE SU DIRECCIÓN DE CORREO');
        formTelefono = prompt('INGRESE SU TELÉFONO DE CONTACTO');
        formMensaje = prompt('INGRESE EL MENSAJE, COMENTARIO o QUEJA');
        formRecibirNovedades = prompt('¿QUIERE QUE LE ENVIEMOS INFO DE INTERÉS?');
        formNroSocio = prompt('SI ES SOCIO, INGRESE SU NRO DE ASOCIADO');    
        
        if(validarFormulario()){
            enviarFormulario();
            break;
        }else{
            console.log(mensajeError);
            alert(mensajeError)
        }
    } while (true);

