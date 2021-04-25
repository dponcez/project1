function debounce( func, wait = 3000, immediate ) {
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

    const container = document.querySelector('.container');
    const loadBanner = () => {
        const banner = document.createElement('div');
        banner.className = 'banner--container';
        banner.innerHTML = `
            <h1 class="heading">broken image</h1>
            <main class="content">
                <p class="description">when the image no load for any reason or may be the URL is broken, this has a default style, so in this example, we gave our styles to show something defferent in a broken image.</p>
                <h2 class="description">the image is broken? Wait a few seconds until to load the image</h2>
            </main>
            <!--button class="close">x</!--button-->
        `;
        const button = document.createElement('button');
        button.className = 'close';
        button.textContent = 'x'
        button.addEventListener('click', () => {
            console.log('clicked')
        })
        banner.appendChild(button)
        container.appendChild( banner )
    }

    loadBanner()
    
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
            point.classList.remove('hide')

        }else {
            image.classList.add('open--image');
            point.classList.add('hide');
            image.setAttribute('src', `image/${element}.${ext}`);
        }

    }
    
    window.addEventListener('load', debounce(() => loadImage()));
}

document.addEventListener('DOMContentLoaded', init )