function debounce( func, wait = 4000, immediate ) {
    let timer = undefined;
    return ( ...args ) => {
        args = arguments;
        let context = this;
        let later = () => {
            if( !immediate ) { func.apply( context, args ) }
        }

        clearTimeout( timer );
        timer = setTimeout( later, wait );

        const callNow = immediate && !timer;

        if( callNow ) { func.apply( context, args ) }
    }
}

function init () {

    const loadBanner = () => {

        const container = document.querySelector('.container');
        const banner = document.createElement('div');
        let timeout = 3900;

        banner.className = 'banner--container';
        banner.innerHTML = `
                <main class="content">
                    <h1 class="description">please wait, image is loading!</h1>
                </main>
            `
        container.appendChild( banner );

        setTimeout(() => {
            banner.remove();
            if( banner.remove ) {
                banner.classList.remove('disabled')
            }
        }, timeout);
    }
    
    const loadImage = () => {
        const image = document.querySelector('.image');
        const point = document.querySelector('.point');
        const data = {
            element: 'header',
            ext: 'jpg'
        }

        const { element, ext } = data;

        if( image.classList.contains('open--image') ) {
            image.classList.remove('open--image');
            point.classList.remove('hide');

        }else {
            image.classList.add('open--image');
            point.classList.add('hide');
            image.setAttribute('src', `image/${element}.${ext}`);

            loadBanner()
        }

    }
    
    window.addEventListener('load', debounce(() => loadImage()));
}

document.addEventListener('DOMContentLoaded', init )