// Returns a function that as long as continues it's execution to be invoked, // this not will triggered immediately if user fire a handling event.
// The function will be called after being stops it's execution for 'n' milliseconds
function debounce( func, wait, immediate ) {
    let timer = null;
    
    return ( ...args ) => {
        args = arguments;
        let context = this,
            later = () => {
                if( !immediate ) { func.apply( context, args ) }
            }

        clearTimeout( timer );
        timer = setTimeout( later, wait );

        let callNow = immediate && !timer;

        if( callNow ) { func.apply( context, args ) }
    }
}

function init() {
    // HTML references
    const audio = document.getElementById('audio');
    const progressBox = document.getElementById('box');
    const progress = document.getElementById('progress');
    const cover = document.getElementById('cover');
    const info = document.getElementById('info');
    const musicContainer = document.getElementById('music');

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const playBtn = document.getElementById('player');
    const volumeSlider = document.getElementById('slider');

    let index = 0;
    let isPlaying = false;
    let playlist;

    const request = new XMLHttpRequest();
    const requestURL = './js/index.json';
    request.open( 'get', requestURL );
    request.onload = function()  {

        if( this.readyState === 4 && this.status === 200 ){
            const options = request.responseText;
            playlist = JSON.parse( options )
            playSong( playlist[ index ] );
        }
        
    }


    function playSong( songs ) {
        try {
            audio.src = `${ songs.song }.mp3`;
            cover.src = `${ songs.cover }.jpg`;
        
            info.innerHTML = `
                <p><span>artist:</span> ${ songs.artist }</p>
                <p><span>title:</span> ${ songs.title }</p>
            `;
        } catch( error ) {
            console.log(`An error occured while we trying to get response: ${ error }`)
        }
    }

    function addClassElement() {
      musicContainer.classList.add("play");
      playBtn.classList.add("active");
      progressBox.classList.add("active");
      info.classList.add("active");
    }

    function removeClassElement() {
      musicContainer.classList.remove("play");
      playBtn.classList.remove("active");
      progressBox.classList.remove("active");
      info.classList.remove("active");
    }

    function prevSong() {
      index--;
      if (index < 0) {
        index = playlist.length - 1;
      }
      playSong(playlist[index]);
      audio.play();
    }

    function nextSong() {
      index++;
      if (index > playlist.length - 1) {
        index = 0;
      }
      playSong(playlist[index]);
      audio.play()
    }

    function updateProgressBar() {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const pCounter = (currentTime / duration) * 100;

      progress.style.width = `${pCounter}%`;
    }

    function getUpdateProgressBar(e) {
      const width = this.offsetWidth;
      const offsetX = e.offsetX;
      const duration = audio.duration;

      audio.currentTime = (offsetX / width) * duration;
    }

    function rangeVolumeSlider() {
      audio.volume = volumeSlider.value / 100;
    }

    // Event handlers
    playBtn.addEventListener(
      "click",
      debounce(() => {
        if (!isPlaying) {
          isPlaying = true;

          addClassElement();
          playSong(playlist[index]);
          audio.play();
        } else {
          isPlaying = false;

          removeClassElement();
          audio.pause();
        }
      }, 300)
    );

    prevBtn.addEventListener("click", debounce(() => prevSong() ) );
    nextBtn.addEventListener("click", debounce(() => nextSong() ) );
    volumeSlider.addEventListener("change", debounce(() => rangeVolumeSlider() ) );
    volumeSlider.addEventListener('mousemove', debounce(() => rangeVolumeSlider() ) );
    progress.addEventListener("click", getUpdateProgressBar);
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", debounce(() => nextSong() ) );

    request.send()
}

document.addEventListener('DOMContentLoaded', init)