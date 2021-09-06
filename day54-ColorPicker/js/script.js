function debounce( func, wait, immediate ) {
    let timer = null;
    return ( ...args )  => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ) { func.apply( context, args ) }
        }

        clearTimeout( timer );
        timer = setTimeout( later, wait );

        const callNow = immediate && !timer;
        if( callNow ) { func.apply( context, args  ) }
    }
}

( function () {
    const button = document.querySelector('.btn');
    const body = document.body;

    function randomColor( number, min = 1 ) {
        const random = Math.floor( Math.random( ) * number  + min );
        return random;
    }

    function getRandomColor() {
        let rgbColor = `rgb(${ randomColor( 255 )}, ${randomColor( 255 )},  ${randomColor( 255 )} )`;

        body.style.backgroundColor = rgbColor;
        button.style.backgroundColor = rgbColor;
    }

    button.addEventListener('click', debounce( () => {
        getRandomColor()
    }, 300 ));

})()