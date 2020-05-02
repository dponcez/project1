const init = () => {
    // Variables
    // getting the current HTML element
    const audio = document.querySelector('.audio');
    const progress__bar = document.querySelector('.progress--bar');
    const progress = document.querySelector('.progress');
    const player = document.querySelector('.player');
    const muted = document.querySelector('.muted');
    const slide__control = document.querySelector('input[type=range');
    let current__text = document.querySelector('.current--text'), 
        duration__text = document.querySelector('.duration--text'), 
        cursecs, curmins, dursecs, durmins;

    let paused = '<i class="fas fa-pause lg-play"></i>';
    let played = '<i class="fas fa-play lg-play"></i>'

    // Functions
    const progressLoop = () => {
        let pCounter = (audio.currentTime / audio.duration) * 100;
        progress.style.width = pCounter + '%';

        // get the currentTime and duration of the audio
        durmins = Math.floor(audio.duration  / 60);
        curmins = Math.floor(audio.currentTime / 60);

        dursecs = Math.floor(audio.duration - durmins * 60);
        cursecs = Math.floor(audio.currentTime - curmins * 60);

        // this help us to know what is the current time
        if(durmins < 10){
            durmins = '0' + durmins
        }
        
        if(dursecs < 10){
            dursecs = '0' + dursecs
        }
        
        if(curmins < 10){
            curmins = '0' + curmins
        }
        
        if(cursecs < 10){
            cursecs = '0' + cursecs
        }

        current__text.innerHTML = `${curmins} : ${cursecs}`;
        duration__text.innerHTML = `${durmins} : ${dursecs}`;
    }

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
    audio.addEventListener('timeupdate', progressLoop);
}

window.addEventListener('load', init);