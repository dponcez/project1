function debounce( func, timeout = 300 ) {
    let timer = undefined;

    return ( ...args ) => {
        if( !timer ) {
            func.apply( this, args )
        }

        clearInterval( timer );
        timer = setInterval( () => {
            timer = undefined;
        }, timeout)
    }
}

function init() {
    const container = document.getElementById('container');
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const counter = 500;

    function getSquares() {
        for( let i = 0; i < counter; i++ ) {
            const squares = document.createElement('div');
            squares.classList.add('square');

            squares.addEventListener('mouseenter', () => activedColor( ) );
            squares.addEventListener('mouseout', () => disabledColor( ) )

            const activedColor = debounce(() => getColor( squares ) );
            const disabledColor = debounce(() => removeColor( squares) )

            // Append the current element
            container.appendChild( squares )
        }
    }


    function getColor( element ) {
        const color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 0.125rem ${ color }, 0 0 0.625rem ${ color }`;
    }

    function removeColor( element ) {
        element.style.background = '#1d1d1d';
        element.style.boxShadow = '0 0 0.125rem #000'
    }

    function getRandomColor() {
        return colors[ Math.floor( Math.random() * colors.length) ]
    }

    getSquares()
}

init();