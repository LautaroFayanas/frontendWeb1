const formulario = document.querySelector('#enviar-form')
const email = document.querySelector('#inputEmail4');
const inputTelefono = document.querySelector('#inputTelefono');
const inputAddres = document.querySelector('#inputAddress');
const inputLocadidad = document.querySelector('#inputAddress2');
const inputCity = document.querySelector('#inputCity');
const nombreTarjeta = document.querySelector('#nombreTarjeta');
const numeroTarjeta = document.querySelector('#numeroTarjeta');
const codigoTarjeta = document.querySelector('#codigoTarjeta');
const fechaExpiracion = document.querySelector('#fechaExpiracion');

const btnEnviar = document.querySelector('#enviar')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


eventListener()

//Funciones
function eventListener() {
    //Cuando arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario)       //Blur = desenfoque. (Cuando salimos del form)
    inputTelefono.addEventListener('blur', validarFormulario)
    inputAddres.addEventListener('blur', validarFormulario)
    inputLocadidad.addEventListener('blur', validarFormulario)
    inputCity.addEventListener('blur', validarFormulario)
    nombreTarjeta.addEventListener('blur', validarFormulario)
    numeroTarjeta.addEventListener('blur', validarFormulario)
    codigoTarjeta.addEventListener('blur', validarFormulario)
    fechaExpiracion.addEventListener('blur', validarFormulario)

    formulario.addEventListener('submit', enviarForm)

}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50')
}

//Validar el form
function validarFormulario(e) {

    if (e.target.value.length > 0) {

        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('alert', 'h5', 'alert-danger');
        e.target.classList.add('alert', 'h5', 'alert-success');
    } else {
        e.target.classList.remove('alert', 'h5', 'alert-success');
        e.target.classList.add('alert', 'h5', 'alert-danger')
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('alert' , 'h5',  'alert-danger');
            e.target.classList.add('alert', 'h5', 'alert-success');
        } else {
            e.target.classList.remove('alert', 'h5', 'alert-success');
            e.target.classList.add('alert', 'h5', 'alert-danger')
            mostrarError('Email no valido')
        }
    }

    if (er.test(email.value) !== '' && inputTelefono.value !== '' && inputAddres.value !== ''
    && inputLocadidad.value !== '' && inputCity.value !== '' && nombreTarjeta.value !== ''
    && numeroTarjeta.value !== '' && codigoTarjeta.value !== '' && fechaExpiracion.value !== '') { 
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
    }

}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert-success', 'rounded-5', 'h4' , 'bg-dark' ,'text-danger', 'p-2', 'mt-5', 'text-center', 'error')

    //Si tengo una clase con el nombre error , entonces no quiero que se ejecute mas el mensaje.
    //QuerySelectorAll nos retorna una coleccion de elementos y tenemos acceso a .length
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)
    }
}

// Enviar email
function enviarForm(e){
    e.preventDefault();
    
    //Mostrar spinner escondido con css
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display= 'none';
    
        setTimeout(() => {
            
            resetearForm();
            parrafo.remove();
        }, 4000);
        

        //Mostrar mensaje
        const parrafo = document.createElement('p');
        parrafo.textContent = `Realizado con existo te llegara un email a ${email.value}`;
        parrafo.classList.add('alert-success', 'rounded-5', 'bg-dark' , 'mt-5', 'h5' , 'p-5' , 'text-center' ,'text-success');

        // Inserto el parrafo antes del spinner
        formulario.appendChild(parrafo,spinner);
        

    }, 3000);
    
}


//Funcion para resetear el formulario
function resetearForm(){
    formulario.reset();
    iniciarApp();
}
