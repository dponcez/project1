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

    let index = 0;

    const http = new XMLHttpRequest();
    const URL = './js/index.json';
    http.open( 'get', URL );
    http.onload = function()  {

        if( this.readyState === 4 && this.status === 200 ){
            const options = http.responseText;
            const playlist = JSON.stringify( options )
            playSong( playlist[index] );
        }
        
    }


    function playSong(songs) {
        try {
            audio.src = songs.song;
            cover.src = songs.cover;
      
            info.innerHTML = `
                          <p><span>author:</span> ${songs.artist}</p>
                          <p><span>title:</span> ${songs.title}</p>
                      `;
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
                  
                      playBtn.addEventListener("click", () => {
                        const isPlaying = musicContainer.classList.contains("play");
                  
                        if (isPlaying) {
                          addClassElement();
                          playSong(playlist[index]);
                          audio.play();
                        } else {
                          removeClassElement();
                          audio.pause();
                        }
                      });
        } catch( error ) {
            console.log('Something error went occur')
        }
    }

    http.send()
}

document.addEventListener('DOMContentLoaded', init)