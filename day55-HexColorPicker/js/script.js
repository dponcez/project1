// Returns a function that as long as continues it's execution to be invoked.
// This function will be called after being stops it's execution for 'n' milliseconds, 
// preventing immediately a fire handling events by the  user
function debounce( func, wait, immediate ) {
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

    function changeHexColor( ) {
        let hexColorText = '#';
        const hexColor = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        
        hexColor.forEach( ( random, index ) => {
            if( index < 6 ) {
                random = Math.floor( Math.random() * hexColor.length );
                hexColorText += hexColor[ random ]
            }
        })

        output.innerHTML = hexColorText;
        body.style.backgroundColor = hexColorText;
        button.style.color = hexColorText;
    }

    // Execute the handler event to call the changeHexColor function
    button.addEventListener('click', debounce( () => {
        // This function will be call after pressing the button
        changeHexColor();

    }, 300 ))
})()