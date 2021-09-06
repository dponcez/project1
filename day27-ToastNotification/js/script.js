/* 
    Debounce function allow us waiting for the last click,
    but if we want to avoid this situation we can ignore the rest of clicking
    if  the timer variable is not active, if so we can call the func.apply(), and also we can set the timer variable  as an undefined value on setTimeout() 
*/
const debounce = ( func, timeout = 300 ) => {
    let timer;

    return ( ...args ) => {
        if( !timer ) { func.apply( this, args ) }

        clearTimeout( timer );
        timer = setTimeout(() => {
            timer = undefined;
        }, timeout);
    }
}

// call the init function when the window is loaded
const init = () => {
    // get HTML references
    const button = document.querySelector('button');
    const toast = document.getElementById('toast');

    const messages = [
        'message one',
        'message two',
        'message three',
        'message four'
    ];

    const types = [ 'info', 'success', 'error' ];

    button.addEventListener( 'click', () => createNotification() )

    // triggered the createNotification function to debounce function to prevent or mitigate the multiple clicking on button
    const createNotification = debounce( () =>  notification() )

    const notification = ( message = null, type = null ) => {
        const notif = document.createElement('div');
        notif.classList.add('toast');
        notif.classList.add( type ? type : getRandomType() );
        notif.textContent = message ? message : getRandomMessage();

        toast.appendChild( notif );

        setTimeout(() => {
            notif.remove();
        }, 3000);
    }

    const getRandomType = () => {
        return  types[ Math.floor( Math.random() * types.length )]
    }

    const getRandomMessage = () => {
        return messages[ Math.floor( Math.random() * messages.length )];
    }
}

window.onload = init