//Inicializando variables con sus respectivos id's
const foto = document.querySelector('#foto');
const nombreCompleto = document.querySelector('#nombreCompleto');
const correoElectronico = document.querySelector('#correoElectronico');
const telefono = document.querySelector('#telefono');
const boton = document.querySelector('#boton');

//Creando funcion de generador de usuario
const showUser = async () => {
    const url = 'https://randomuser.me/api/'; //API = https://randomuser.me/
    const response = await fetch(url);
    const {results} = await response.json();
    const data = results[0];

    //Agregando datos de JSON en el HTML
    foto.src = data.picture.large;
    nombreCompleto.textContent = data.name.first + ' ' + data.name.last;
    correoElectronico.textContent = data.email;
    telefono.textContent = data.phone;
}

//Funcion de evento 'click' + demostracion de api al recargar pagina
boton.addEventListener('click', showUser);
document.addEventListener('DOMContentLoaded', showUser);