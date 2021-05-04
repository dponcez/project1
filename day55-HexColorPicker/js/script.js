function denounce( func, wait, immediate ) {
    let timer = null;
    return ( ...args ) => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ) { func.apply( context, args ) }
        }

        clearTimeout( timer )
        timer = setTimeout( later, wait );

        const callNow = immediate && !timer;
        if( callNow ) { func.apply( context, args ) }
    }
}

( function () {

    // HTML references
    const output = document.querySelector('.output')
    const button = document.querySelector('.btn');
    const body = document.body;

    button.addEventListener('click', debounce( () => {
        
    }, 300 ))
})()