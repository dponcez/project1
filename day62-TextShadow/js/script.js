const hero = document.getElementById('hero');
const heading = document.getElementById('heading');
let steps = 100;

function createTextShadow( e ) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if( this !== e.target ) {
        x = x + e.target.offsetX;
        y = y + e.target.offsetY;
    }

    const moveX = Math.round( (x / width * steps) - ( steps / 2) );
    const moveY = Math.round( (y / height * steps ) - ( steps / 2 ));

    heading.style.textShadow = `
        ${ moveX }px ${ moveY }px rgba(255, 0, 0, 0.7),
        ${ moveX * -1 }px ${ moveY }px rgba(0, 255, 120, 0.5), ${ moveY * -1}px ${ moveX }px rgba(0, 125, 255, 0.5), ${ moveX }px ${ moveY }px rgba(255, 0, 255, 0.8), ${ moveY * -2}px ${ moveY }px rgba(120, 255, 125, 0.5), ${ moveX * -2 }px ${ moveX }px rgba(0, 125, 255, 0.8)
    `
}

hero.addEventListener('mousemove', createTextShadow );