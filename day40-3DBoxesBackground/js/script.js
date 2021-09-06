// Returns a function that as long as continues it's execution to be invoked, // this not will triggered immediately if user fire a handling event.
// The function will be called after being stops it's execution for 'n' milliseconds
function debounce( func, wait, immediate ) {
    let timer;
    return ( ...args ) => {
        let contetxt = this;
        args = arguments;
        let later = () => {
            timer = null;
            if( !immediate ) {
                func.apply( contetxt, args );
            }
        }

        let callNow = immediate && !timer;
        clearTimeout( timer );
        timer = setTimeout( later, wait );
        if( callNow ) {
            func.apply( later, wait );
        }
    }
}

function init() {
    const button = document.getElementById('magic');
    const boxContainer = document.getElementById('boxes');

    button.addEventListener('click', debounce(() => { boxContainer.classList.toggle('big')}, 1000 ));

    function createBoxes() {
        for( let i = 0; i < 4; i++ ){
            for( let j = 0; j < 4; j++ ) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.backgroundPosition = `${ -j * 125 }px ${ -i * 125 }px`;
                boxContainer.appendChild( box )
            }
        }
    }

    createBoxes()
}

init()