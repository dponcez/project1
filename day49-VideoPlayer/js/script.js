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
    const volumeSlider = document.getElementById('slide');
    const muteBtn = document.querySelector('.mute--btn');
    const counter = document.querySelector('.timer');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let isPlay = false,
        isMute = false,
        mousedown = false,
        durmins = null,
        dursecs = null,
        curmins = null,
        cursecs = null,
        index = 0;
        
    playBtn.addEventListener('click', debounce(() => {
        getPlayVideo()
    }, 300 ) )

    muteBtn.addEventListener('click', debounce(() => {
        getMutedVideo()
    }, 300 ) )

    const getPlayVideo = () => {
        const isPlayer = video.paused ? video.play() : video.pause()

        if( !isPlay ) {
            playBtn.classList.add('active')
            isPlay = true
        }else {
            playBtn.classList.remove('active')
            isPlay = false;
        }
    }

    const getMutedVideo = () => {
        const isMuted = video.muted ? video.muted = false : video.muted = true;

        if( !isMute ) {
            muteBtn.classList.add('muted');
            isMute = true 
        }else {
            muteBtn.classList.remove('muted');
            isMute = false
        }
    }

    
    const getVideoEnded = () => {
        if( video.ended ) {
            video.currentTime = 0;
            playBtn.classList.remove('active');
        }
    }
    
    // getVideoEnded();

    const seekTimeUpdate = () => {
        const pCounter = video.currentTime / video.duration * 100;
        progressBar.style.width = pCounter + '%';

        durmins = Math.floor( video.duration / 60 );
        dursecs = Math.floor( video.duration - durmins * 60 );

        curmins = Math.floor( video.currentTime / 60 );
        cursecs = Math.floor( video.currentTime - curmins * 60 );

        const isDurmis = durmins < 10 ? '' + durmins : durmins
        const isDursecs = dursecs < 10 ? '0' + dursecs : dursecs;

        const isCurmins = curmins < 10 ? '' + curmins : curmins;
        const isCursecs =  cursecs < 10 ? '0' + cursecs : cursecs;

        counter.innerHTML = `${isDurmis}:${isDursecs}/${isCurmins}:${isCursecs}`
    }

    const scrub = ( e ) => {
        const slideScrub = ( e.pageX / progress.offsetWidth ) * video.duration;
        video.currentTime = slideScrub;
    }

    const rangeSlider = () => {
        video.volume = volumeSlider.value / 100;
    }

    // Handler Events Section
    video.addEventListener('timeupdate', seekTimeUpdate );
    video.addEventListener('ended', getVideoEnded );

    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', ( e ) => mousedown && scrub( e ) );
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);

    volumeSlider.addEventListener('mousemove', rangeSlider );
    volumeSlider.addEventListener('change', rangeSlider );
}

document.addEventListener('DOMContentLoaded', init )