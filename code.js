const pre = document.querySelector('pre');
const angle = 30;

document.addEventListener('mousemove', (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    // get mause position
    const x = event.clientX;
    const y = event.clientY;

    // middle window
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    //offset from middle
    const offsetX = (((x - middleX) / middleX) * angle).toFixed();
    const offsetY = (((y - middleY) / middleY) * angle).toFixed();

    element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
    element.style.setProperty('--rotateY', offsetX + 'deg');
}