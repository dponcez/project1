function debounce( func, interval = 300 ){
    let timer = undefined;
    return ( ...args ) => {
        if( timer ){
            clearTimeout( timer )
        }else{
            timer = setTimeout(() => {
                func.apply( this, args );
                timer = undefined
            }, interval )
        }
    }
}

function init() {
    const imgContent = document.querySelectorAll('.content');
    const items = document.querySelectorAll('nav ul li');

    items.forEach(( item, index ) => {
        item.addEventListener('click', debounce( () => { 
            hideItems();
            hideContent();
            
            item.classList.add('active');
            imgContent[index].classList.add('show');

        }))
    })

    function hideItems() {
        items.forEach( item => item.classList.remove('active') ) 
    }

    function hideContent() {
        imgContent.forEach( content => content.classList.remove('show') )
    }
}

window.onload = init;