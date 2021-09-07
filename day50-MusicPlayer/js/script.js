<<<<<<< HEAD
// Songs and covers that are saved on the audio and image folder, are all right reserved at his author.
// The songs were found on http://dl2.djring.com and https://mus6.djxd.tk
// The covers were found on https://th.bing.com, https://i2.wp.com, https://stafaband-76.com and https://www.nieuweplaat.nl
// The music content in the audio folder are only for the creation of the AUDIO PLAYER and NOT to commercial use

=======
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
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
<<<<<<< HEAD
    const arm = document.querySelector('.arm');
    const body = document.body;
=======
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const playBtn = document.getElementById('player');
    const volumeSlider = document.getElementById('slider');

    let index = 0;
    let isPlaying = false;
    let playlist;

    const request = new XMLHttpRequest();
<<<<<<< HEAD
    const requestURL = './json/index.json';
=======
    const requestURL = './js/index.json';
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    request.open( 'get', requestURL );
    request.onload = function()  {

        if( this.readyState === 4 && this.status === 200 ){
<<<<<<< HEAD
            const response = request.responseText;
            playlist = JSON.parse( response )
            loadSong( playlist[ index ] );
=======
            const options = request.responseText;
            playlist = JSON.parse( options )
            playSong( playlist[ index ] );
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
        }
        
    }


<<<<<<< HEAD
    function loadSong( songs ) {
        try {
            audio.src = `${ songs.song }.mp3`;
            cover.src = `${ songs.cover }.jpg`;
            body.style.backgroundImage = `url(${songs.cover}.jpg)`
        
            info.innerHTML = `
                <p>
                  <span>artist:</span> ${ songs.artist }
                </p>
                <p>
                  <span>title:</span> ${ songs.title }
                </p>
=======
    function playSong( songs ) {
        try {
            audio.src = `${ songs.song }.mp3`;
            cover.src = `${ songs.cover }.jpg`;
        
            info.innerHTML = `
                <p><span>artist:</span> ${ songs.artist }</p>
                <p><span>title:</span> ${ songs.title }</p>
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
            `;
        } catch( error ) {
            console.log(`An error occured while we trying to get response: ${ error }`)
        }
    }

<<<<<<< HEAD
    // Add all HTML classes
    function playSong() {
=======
    function addClassElement() {
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
      musicContainer.classList.add("play");
      playBtn.classList.add("active");
      progressBox.classList.add("active");
      info.classList.add("active");
<<<<<<< HEAD
      arm.classList.add('rotate--arm')

      loadSong( playlist[ index ] );
      audio.play()
    }

    // Remove all HTML classes
    function pauseSong() {
=======
    }

    function removeClassElement() {
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
      musicContainer.classList.remove("play");
      playBtn.classList.remove("active");
      progressBox.classList.remove("active");
      info.classList.remove("active");
<<<<<<< HEAD
      arm.classList.remove('rotate--arm')

      audio.pause();
=======
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    }

    function prevSong() {
      index--;
<<<<<<< HEAD
      if ( index < 0 ) {
        index = playlist.length - 1
      }
      loadSong( playlist[ index ] );
      playSong();
=======
      if (index < 0) {
        index = playlist.length - 1;
      }
      playSong(playlist[index]);
      audio.play();
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    }

    function nextSong() {
      index++;
<<<<<<< HEAD
      if ( index > playlist.length - 1 ) {
        index = 0;
      }

      audio.currentTime = 0;
      progress.style.width = 0;
      loadSong( playlist[ index ] );
      playSong();
    }

    function updateProgressBar( e ) {
      const { duration, currentTime } = e.srcElement;
      const percent = (currentTime / duration) * 100;

      progress.style.width = `${ percent }%`;
    }

    function getUpdateProgressBar( e ) {
=======
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
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
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
<<<<<<< HEAD
          playSong();

        } else {
          isPlaying = false;
          pauseSong();
=======

          addClassElement();
          playSong(playlist[index]);
          audio.play();
        } else {
          isPlaying = false;

          removeClassElement();
          audio.pause();
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
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