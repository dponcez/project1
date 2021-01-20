function init(){
    const button = document.querySelector('button');
    const toasts = document.querySelector('#toast');

    const messages = [
        'message one',
        'message two',
        'message three',
        'message four'
    ];

    const types = [ 'info', 'success', 'error' ];
    let timeout = 3000;

    button.addEventListener('click', () => createNotification());

    function createNotification( message = null, type = null ){
        const notif = document.createElement('div');
        notif.classList.add('toast');
        notif.classList.add( type ? type : getRandomType() );

        notif.innerText = message ? message : getRandomMessage();

        toasts.appendChild( notif );

        setTimeout(() => {
            notif.remove()
        }, timeout);
    }

    function getRandomType() {
        return types[ Math.floor( Math.random() * types.length ) ]
    }

    function getRandomMessage(){
        return messages[ Math.floor( Math.random() * messages.length ) ]
    }
}

init()