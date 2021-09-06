function debounce( func, wait, immediate ){
    let timer;
    return ( ...args ) => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ){
                func.apply( context, args )
            }
        }

        clearTimeout( timer );
        timer = setTimeout( later, wait )

        let callNow = immediate && !timer;

        if( callNow ){ func.apply(context, args ) }
    }
}

function init() {
    const openBtn = document.querySelector('.open--btn');
    const closeBtn = document.querySelector('.close--btn');

    const nav = document.querySelectorAll('.nav');

    openBtn.addEventListener('click', debounce(() => {
        nav.forEach( list => list.classList.add('visible'))
    }, 300 ))

    closeBtn.addEventListener('click', debounce(() => {
        nav.forEach( list => list.classList.remove('visible'))
    }, 300 ))
}

document.addEventListener('DOMContentLoaded', init);