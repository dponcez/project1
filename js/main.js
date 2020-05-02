const init = () => {
    // Variables
    // getting the current HTML element
    const audio = document.querySelector('.audio');
    const progress__bar = document.querySelector('.progress--bar');
    const progress = document.querySelector('.progress');
    const player = document.querySelector('.player');
    const muted = document.querySelector('.muted');
    const slide__control = document.querySelector('input[type=range');
    let current__text, duration__tex;
    let paused = '<i class="fas fa-pause lg-play"></i>';
    let played = '<i class="fas fa-play lg-play"></i>'

    // Functions
    const playPause = () => {
        if(audio.paused){
            audio.play();
            player.innerHTML = paused
        }else{
            audio.pause();
            player.innerHTML = played;
        }
    }

    // Event handler
    player.addEventListener('click', playPause);
}

window.addEventListener('load', init);