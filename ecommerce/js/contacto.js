class Contacto{
    
    constructor(){
        this.formNombre;
        this.formApellido;
        this.formEmail;
        this.formTelefono;
        this.formMensaje;
        this.formRecibirNovedades;
        this.formNroSocio;
        this.mensajeError;
    }

    cargarFormulario = () => {
        this.formNombre = prompt("INGRESE SU NOMBRE");
        if (this.formNombre === null){
            return false;
        };
        this.formApellido = prompt("INGRESE SU APELLIDO");
        if (this.formApellido === null){
            return false;
        } ;
        this.formEmail = prompt("INGRESE SU DIRECCIÓN DE CORREO");
        if (this.formEmail === null) {
            return false;
        };
        this.formTelefono = prompt("INGRESE SU TELÉFONO DE CONTACTO");
        if (this.formTelefono === null){
            return false;
        };
        this.formMensaje = prompt("INGRESE EL MENSAJE, COMENTARIO o QUEJA");
        if (this.formMensaje === null){
            return false;
        };
        if (confirm("¿QUIERE QUE LE ENVIEMOS INFO DE INTERÉS?")) {
            this.formRecibirNovedades = true;
        } else {
            this.formRecibirNovedades = false;
        };
        if (confirm("¿ES UD. SOCIO?")) {
            this.formNroSocio = prompt("INGRESE SU NRO DE ASOCIADO");
            if(this.formNroSocio === null){
                this.formNroSocio = 'DICE SER SOCIO PERO NO LO PUSO';
            };
        }
        return true;  
    }

    validarFormulario = () =>  {
        this.mensajeError = '';
    
        if(this.formNombre === '') {
            this.mensajeError += `EL NOMBRE ES OBLIGATORIO \n`
        }
        if(this.formApellido === '') {
            this.mensajeError += `EL APELLIDO ES OBLIGATORIO \n`
        }
        if(this.formEmail === '' && this.formTelefono === '') {
            this.mensajeError += `EL CORREO ELECTRÓNICO O SU TELÉFONO SON NECESARIOS (¡NO PODRÍAMOS RESPONDERLE!) \n`
        }
        if(this.formMensaje === '') {
            this.mensajeError += `¡EL MENSAJE ES IMPORTANTISIMO PARA NOSOTROS! ¡NO LO OLVIDES, POR FAVOR! \n`
        }
    }

    enviarFormulario = () => {
        let activarSocio = (this.formNroSocio === null ? '' : `NRO DE SOCIO ${this.formNroSocio}`);
        let activarMensajes = (this.formRecibirNovedades === false ? 'NO QUIERO RECIBIR INFORMACIÓN' : `ENVIAR INFORMACIÓN SOBRE LAS ACTIVIDADES DEL CLUB`);
        let bodyMail = `mailto:herbertocosta@gmail.com?subject=MENSAJE DE: ${this.formApellido.toUpperCase}, ${this.formNombre.toUpperCase} ${activarSocio} \n &body=${this.formMensaje} \n ${activarMensajes} COMUNICARSE AL ${this.formTelefono} O POR MAIL A ${this.formEmail}`;
        console.log(bodyMail);
        alert(bodyMail);
    }
    
}

    //Creo un objeto para el nuevo contacto
    const nuevoContacto = new Contacto();
    //Loopeo por si se equivocó  durante el proceso y quiere enviar un mensaje
    do {
        if(nuevoContacto.cargarFormulario()){
            nuevoContacto.validarFormulario()
            if(nuevoContacto.mensajeError.length == 0) {
                nuevoContacto.enviarFormulario();
            }else{
                console.log(nuevoContacto.mensajeError);
                alert(nuevoContacto.mensajeError);
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
                continue;
            }
        }; 
        break;
    } while (true);
//}

