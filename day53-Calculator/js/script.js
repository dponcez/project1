// Returns a function that as long as continues it's execution to be invoked, 
// this not will triggered immediately if user fire a handling event.
// The function will be called after being stops it's execution for 'n' milliseconds
function debounce( func, wait, immediate ) {
    let timeout = undefined;
    return ( ...args  ) => {
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

( function() {
    // HTML references
    const buttons = document.querySelectorAll('.btn > .front');
    const screen = document.getElementById('display');
    const equal = document.querySelector('.equal');
    const clear = document.getElementById('clean');

    // Retrieve data's number when some button is clicked
    buttons.forEach( ( button ) => {
        button.addEventListener('click', ( e ) => {
            try {
                const value = e.target.dataset.num;
                screen.value += value;
            }catch( error ) {
                console.log(`An error occur when we try to display the output ${ error }`)
            }
        } )
    }) 

    // Display the total value on screen
    equal.addEventListener('click', debounce( ()  => {
        if( screen.value === ' ' ) {
            screen.value = 'No input value'
        }else {
            try {
                let display = eval( screen.value )
                screen.value = display;
            }catch( error ) {
                console.log( `There is an output error ${ error }`)
            }
        }
    } ))

    // Clear all data from screen
    clear.addEventListener('click', debounce(() => {
        screen.value = ''
    } ))
})()
