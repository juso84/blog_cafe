//DECLARACION DE VARIABLES
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const barraMsj = document.createElement('p');
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
//EVENT LISTENERS
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evt){
    evt.preventDefault();
    const { nombre, email, mensaje } = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mandarMensaje('Todos Los Campos Son Obligatorios');
    }else{
        mandarMensaje('Mensaje enviado correctamente!', true);
        imprimir();
        limpiarFormulario();
    }
});
//FUNCIONES
function leerTexto(e){
    borrarMensaje();
    datos[e.target.id] = e.target.value;    
}
function imprimir(){
    console.log(datos);
}
function mandarMensaje(msj, opc = null){    
    barraMsj.classList.add('barra__mensaje');
    barraMsj.textContent = msj;
    if(opc){
        barraMsj.classList.add('barra__mensaje--exito');
    }else{
        barraMsj.classList.add('barra__mensaje--error');
    }
    formulario.appendChild(barraMsj);

    setTimeout(() => {
        barraMsj.remove();
    },3000);
}
function borrarMensaje(){
    if(document.querySelector('.error')){
        
    }    
}
function limpiarFormulario(){
    nombre.textContent = '';
    email.textContent = '';
    mensaje.textContent = '';
}

