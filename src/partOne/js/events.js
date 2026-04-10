import { changeStyles } from "./partOne.js";

// 1. Seleccionamos los elementos del DOM
const boton = document.getElementById('btn-cambio');
const textoColor = document.querySelector('.color'); // El <p> que dice "red"
const cuerpo = document.body; // Para cambiar el fondo de toda la página

// 2. Creamos la función
function alternarColor() {
    // Comprobamos el color actual del texto o del fondo
    if (textoColor.textContent === 'red') {
        cuerpo.style.backgroundColor = 'darkblue';
        textoColor.textContent = 'darkblue';
        textoColor.style.color = 'white';
    } else {
        cuerpo.style.backgroundColor = 'red';
        textoColor.textContent = 'red';
        textoColor.style.color = 'black';
    }
}

// 3. Asignamos el evento al botón (esto reemplaza al onclick del HTML)
boton.addEventListener('click', alternarColor);




