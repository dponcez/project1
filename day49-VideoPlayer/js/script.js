function debounce( fnc, wait, immediate ) {
    let timer = null;
    return ( ...args ) => {
        args = arguments;
        let context = this,
            later = () => {
                if( !immediate ) { fnc.apply( context, args ) }
            }

            clearTimeout( timer )
            timer = setTimeout( later, wait );

            let callNow = immediate && !timer;
            if( callNow ) { fnc.apply( context, args ) }
    }
}

function init( ) {
    // Get HTML references
    const video = document.querySelector('video');
    const progress = document.querySelector('.progress')
    const progressBar = document.querySelector('.progress--bar');
    const progressSlider = document.querySelector('.progress__slider');

    const playBtn = document.getElementById('btn');
    const volumeSlider = document.getElementById('slider');
    const muteBtn = document.querySelector('.mute--btn');
    const counter = document.querySelector('.timer');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
}

document.addEventListener('DOMContentLoaded', init )