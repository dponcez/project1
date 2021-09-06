function debounce( func, wait, immediate ) {
    let timer = undefined;
    return ( ...args ) => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ) { func.apply( context, args ) }
        }

        clearTimeout( timer );
        timer = setTimeout( later , wait );

        const callNow = immediate && !timer;

        if( callNow ) { func.apply( context, args ) }
    }
}

function init() {
    
    const toggler = document.querySelector('.toggle');
    const menuItems = document.querySelectorAll('.item');
    const menuLinks = document.querySelectorAll('.link > span');

    let isOpen = false;

    toggler.addEventListener('click', debounce( ()=> {

        if( !isOpen ) {
            toggler.classList.toggle('open')

            if( toggler && menuItems ) {
                menuItems.forEach( items => {
                    if( items.classList.contains('active') ) {
                        items.classList.remove('active')
                        
                    }else {
                        items.classList.add('active')
                    }
                })

                menuLinks.forEach( links => {
                    links.classList.toggle('remove')
                })
            }
        }
    }) )
}

document.addEventListener('DOMContentLoaded', init )