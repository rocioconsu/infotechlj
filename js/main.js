const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.querySelector('body'); // Necesitamos seleccionar el body

console.log("Archivo JS cargado correctamente");

// Evento para abrir/cerrar al pulsar el botón
if (menuBtn && body) {
    menuBtn.addEventListener('click', () => {
        console.log("Clic detectado en el botón");

        // Toggles según el ejercicio 43
        menuBtn.classList.toggle('is-active');
        body.classList.toggle('menu-open');
    });
} else {
    console.error("No se encontró el botón o el body en el HTML");
}

// Cerrar al clicar fuera
document.addEventListener("click", (event) => {
    if (body.classList.contains('menu-open')) {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBtn.classList.remove('is-active');
            body.classList.remove('menu-open');
        }
    }
});

const modal = document.getElementById('chatModal');
const openBtn = document.getElementById('openChat');
const closeBtn = document.getElementById('closeChat');

// Abrir
openBtn.onclick = () => modal.classList.add('active');

// Cerrar con botón
closeBtn.onclick = () => modal.classList.remove('active');

// Cerrar al hacer click fuera (overlay)
window.onclick = (event) => {
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}