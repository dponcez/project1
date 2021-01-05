function init() {
    const buttons = document.querySelectorAll('.ripple');

    buttons.forEach( button => {
        button.addEventListener('click', ( e ) => {
            const topY = e.clientY;
            const leftX = e.clientX;

            const offsetY = e.target.offsetTop;
            const offsetX = e.target.offsetLeft;

            const innerY = topY - offsetY;
            const innerX = leftX - offsetX;

            const circle = document.createElement('span');
            circle.classList.add('circle');
            circle.style.top = innerY + 'px';
            circle.style.left = innerX + 'px';

            button.appendChild(circle);

            setTimeout(() => circle.remove(), 500)
        })
    })
}

init()