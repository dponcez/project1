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

    const playBtn = document.querySelector('#btn .player');
    const volumeSlider = document.getElementById('slider');
    const muteBtn = document.querySelector('.mute--btn');
    const counter = document.querySelector('.timer');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let isPlay = false;

    function getPlayVideo() {
        const isPlayer = video.paused ? video.play() : video.pause()

        if( !isPlay ) {
            playBtn.classList.add('active')
            isPlay = true
        }else {
            playBtn.classList.remove('active')
            isPlay = false;
        }
    }

    playBtn.addEventListener('click', debounce(() => {
        getPlayVideo()
    }, 300 ))
}

document.addEventListener('DOMContentLoaded', init )