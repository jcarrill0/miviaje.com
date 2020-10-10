document.addEventListener('DOMContentLoaded', () => {

    // heroAnimate();

    botonFlotante();

})

function heroAnimate () {
    // Obtener la imagen del hero
    const imagenHero = document.querySelector('.hero'); 

    // Inicializar las variables
    let i = 0;
    let tiempo = 0;

    // Array con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval( () => {
        imagenHero.style.backgroundPositionY = `-${tiempo}px`;

        if (tiempo > 40) {
            tiempo = 0;
            imagenHero.style.backgroundImage = `url('../img/${imagenes[i]}')`;
            
            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }

        } else {
            tiempo++;
        }
    }, 100);
}

function botonFlotante () {
    // Boton flotante en el footer

    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        // Prevenimos default pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');

        // Comprobar si el footer tiene X clase
        if(footer.classList.contains('activo')) {
            // si lo contiene ejecuta este codigo
            footer.classList.remove('activo'); 
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
        } else {
            // si no lo contiene ejecuta este codigo
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    })
}
