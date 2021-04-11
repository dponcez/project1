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
    
    const progress = document.querySelector('.progress')
    const progressBar = document.querySelector('.progress--bar');
    const progressSlider = document.querySelector('.progress__slider');

    const videoContainer = document.querySelector('.video--container');

    const playBtn = document.querySelector('#btn .player');
    const volumeSlider = document.getElementById('slide');
    const muteBtn = document.querySelector('.mute--btn');
    const counter = document.querySelector('.timer');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const status = document.querySelector('.status');

    // Create a new element
    const video = document.createElement('video');
    const para = document.createElement('p');

    let isPlay = false;
    let isMute = false;
    let mousedown = false;
    let durmins = null;
    let dursecs = null;
    let curmins = null;
    let cursecs = null;
    let index = 0;

    let dir = 'video/';
    let playlist = [
        'Another-You',
        '21-Questions',
        'Soldier',
        'Treading-Water'
    ];
    let ext = '.mp4';
    let userAgents = navigator.userAgent.toLowerCase();

    if( userAgents.indexOf('firefox') !== -1 || userAgents.indexOf('opera') !== -1 ) {
        ext = '.ogg'
    }else if( userAgents.indexOf('chrome') !== -1 || userAgents.indexOf('edge') !== -1 ) {
        ext = '.webm';
    }

    para.innerHTML = 'Your browser does not support video element'

    video.loop = false;
    video.src = `${ dir }${ playlist[ index ] }${ ext }`;
    status.innerHTML = `Track ${ ( index + 1 ) } - ${ playlist[ index ] }${ ext }`

    // Append elements
    video.appendChild( para );
    videoContainer.appendChild( video )
        
    playBtn.addEventListener('click', debounce(() => {
        getPlayVideo()
    }, 300 ) )

    muteBtn.addEventListener('click', debounce(() => {
        getMutedVideo()
    }, 300 ) )

    prevBtn.addEventListener('clcik', debounce(() => {
        getPreviousVideo()
    }, 300 ) )

    nextBtn.addEventListener('click', debounce(() => {
        getNextVideo();
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

    const getPreviousVideo = () => {
        if( index < 0 || index === 0 ){
            index = playlist.length - 1
        }else {
            index--
        }
        switchTrack()
    }

    const getNextVideo = () => {
        if ( index === playlist.length - 1 || ( !index  > playlist.length - 1 ) ) {
          index = 0
        } else {
            index++
        }
        switchTrack()
    }

    const switchTrack = () => {
        video.loop = false;
        video.src = `${ dir }${ playlist[ index ] }${ ext }`;
        status.innerHTML = `Track ${ ( index + 1 ) } - ${ playlist[ index ] }${ ext }`;
        video.play();
        playBtn.classList.add('active');
    }

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