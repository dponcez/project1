// Returns a function that as long as continues it's execution to be invoked, 
// this not will triggered immediately if user fire a handling event.
// The function will be called after being stops it's execution for 'n' milliseconds
function debounce( func, wait, immediate ) {
    let timeout = undefined;
    return ( [ ...args ] ) => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ) { func.apply( context, args ) }
        }

        clearTimeout( timeout );
        timeout = setTimeout( later, wait );

        const callNow = immediate && !timeout;
        if( callNow ) { func.apply( context, args ) }
    }
}

const init = () => {
    // HTML references
    const n_7 = document.getElementById('n-7')
    const n_8 = document.getElementById("n-8");
    const n_9 = document.getElementById('n-9')
    const n_4 = document.getElementById("n-4");
    const n_5 = document.getElementById("n-5");
    const n_6 = document.getElementById("n-6");
    const n_1 = document.getElementById('n-1')
    const n_2 = document.getElementById('n-2')
    const n_3 = document.getElementById('n-3')
    const n_0 = document.getElementById("n-0");

    const multiply = document.getElementById("multiply");
    const division = document.getElementById('division');
    const plus = document.getElementById('add');
    const minus = document.getElementById("minus");
    const equal = document.getElementById("equal");
    const point = document.getElementById('point');
    const clean = document.getElementById("clean");

    function calculate( e ) {
        try {
            const display = document.getElementById('display').value;
            const value = eval( display );
    
            document.getElementById('display').value = value;
        }catch( error ) {
            console.log(`There is an input error, we cannot display your result: ${error}`);
        }
    }

    function clickableButton( val ) {
        display.value += val;
    }

    function clearInputText() {
        display.value = ''
    }

    const getCalculus = debounce(() => clickableButton( ) );
    const clearDisplay = debounce(() => clearInputText() )

    // Event handler
    n_7.addEventListener('click', () => clickableButton( 7 ) );
    n_8.addEventListener('click', () => clickableButton( 8 ) );
    n_9.addEventListener('click', () => clickableButton( 9 ) );
    n_4.addEventListener('click', () => clickableButton( 4 ) );
    n_5.addEventListener("click", () => clickableButton( 5 ));
    n_6.addEventListener('click', () => clickableButton( 6 ) );
    n_1.addEventListener('click', () => clickableButton( 1 ) );
    n_2.addEventListener("click", () => clickableButton( 2 ) );
    n_3.addEventListener("click", () => clickableButton( 3 ) );
    n_0.addEventListener("click", () => clickableButton( 0 ) );

    multiply.addEventListener('click', () => clickableButton('*') );
    division.addEventListener('click', () => clickableButton('/') );
    plus.addEventListener('click', () => clickableButton('+') );
    minus.addEventListener('click', () => clickableButton('-') );
    point.addEventListener('click', () => clickableButton('.') );
    clean.addEventListener('click', () => clearInputText('c') );

    equal.addEventListener('click', calculate );
}

document.addEventListener('DOMContentLoaded', init )