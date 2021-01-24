function getSpeedText() {
    const heading = document.getElementById('text');
    const speed = document.getElementById('speed');
    const text = 'we love programing!';

    let idx = 1;
    let speedy = 300 / speed.value;

    createTextEffect();

    function createTextEffect( ) {
        heading.innerHTML = text.slice( 0, idx );

        idx++
        if( idx > text.length ){
            idx = 1
        }

        setTimeout( createTextEffect, speedy )
    }

    speed.addEventListener('input', ( e ) => speedy = 300 / e.target.value )
}

getSpeedText()