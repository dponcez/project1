// This function is fired when the document is ready
const init = () => {
    'use strict'

    const options = {
        toggleplay: 'fas fa-play play',
        togglepause: 'fas fa-pause play'
    }
    
    const {toggleplay, togglepause} = options;

    const controller = (played, audioPlayer) => {

        // Store references to each control
        let player = document.querySelector(played),
              audio = document.getElementById(audioPlayer),
              progress = document.querySelector('.slider--progress'),
              progressbar = document.querySelector('.progress'),
              volume = document.querySelector('input[type=range]'),
              output = document.querySelector('.value'),
              dur__time = document.querySelector('.dur--time'),
              cur__time = document.querySelector('.cur--time'),
              audiobox = document.querySelector('.audio--box'),
              forward = document.querySelector('.forward'),
              backward = document.querySelector('.backward'),next = document.querySelector('.next'),
              prev = document.querySelector('.prev');

        const hdlPlay = '<i class="' +  toggleplay + '"></i>';
        const hdlPause =  '<i class="' + togglepause + '"></i>';
        const dir = 'audio/';

        // stores the play list
        const playList = ['Rise', 'Private-Show', 'Real-Hip-Hop-3', 'Regulate', 'Real-Hip-Hop-4', 'Chained-To-The-Rhythm', 'Dejame-Ir', 'Gangsta-Nation', 'Mi-Corazon', 'My-All', 'Rap-Name', 'Up-To-You', 'Without-You', 'Young-Dumb-and-Broke'];

        let dursecs, durmins, cursecs, curmins, pCounter, box;
        let mousedown = false;
        let index = 0;
        let ext = '.mp3';
        let userAgent = navigator.userAgent.toLocaleLowerCase();

        // Compare the user agents
        if(userAgent.indexOf('firefox') !== -1 || userAgent.indexOf('opera') !== -1){
            ext = '.ogg';
        }

        // Audio Object
        function audioObject(){
            audio = new Audio();
            audio.src = dir + playList[0] + ext;
            audio.loop = false;
            box = document.createElement('div');
            box.className = 'track';
            box.innerHTML = `Track ${index + 1} - ${playList[index]}${ext}`;
            audiobox.appendChild(box);
        }

        audioObject()

        // Call the current function

        // plays the audio player
        function handlePlay(){
            if(audio.paused){
                audio.play();
                player.innerHTML = hdlPause
            }else{
                audio.pause();
                player.innerHTML = hdlPlay
            }
        }

        //  takes the control the time elapsed display
        function handleUpdate(){
            pCounter = audio.currentTime  / audio.duration * 100;
            progress.style.width = pCounter + '%';

            durmins = Math.floor(audio.duration / 60);
            dursecs = Math.floor(audio.duration - durmins * 60);

            curmins = Math.floor(audio.currentTime / 60);
            cursecs = Math.floor(audio.currentTime - curmins * 60);

            // if durmins & curmins are less than 10
            // add an empty string
            if(durmins < 10){
                durmins = '' + durmins
            }else if(curmins < 10){
                curmins = '' + curmins
            }

            // add zero (0) if the dursecs & cursecs are less than 10
            if(dursecs < 10){
                dursecs = '0' + dursecs
            }else if(cursecs < 10){
                cursecs = '0' + cursecs
            }

            // Add the value of the mins and secs to our span elements
            dur__time.innerHTML = `${durmins}:${dursecs}`;
            cur__time.innerHTML = `${curmins}:${cursecs}`;
        }

        // when the audio ends, automatically advance to the next one
        function switchTrack(){
            if(audio.paused){
                player.innerHTML = hdlPause;
                audio.currentTime = 0;
            }else if(index === (playList.length - 1)){
                index = 0
            }else {
                index++
            }

            box.innerHTML = `Track ${index + 1} - ${playList[index]}${ext}`;
            audio.src = dir + playList[index] + ext;
            audio.play()
        }

        // this function allows us to advance the progress bar
        function scrub(e){
            const scrubTime = (e.offsetX / progressbar.offsetWidth) * audio.duration;
            audio.currentTime = scrubTime;
            progressbar.style.cursor = 'w-resize';
        }

        // up and down the volume just sliding the input range
        output.textContent = volume.value
        function handleVolume(){
            audio.volume = volume.value / 100;
            output.textContent = this.value
        }

        // this function allows us subtract  3 seconds to the currentTime each time the button is clicked
        function handleBackward(){
            audio.currentTime -= 3
        }

        // this function add 3 seconds to the currentTime each time the button is clicked
        function handleForward(){
            audio.currentTime += 3;
            if(audio.currentTime >= audio.duration || audio.paused){
                audio.pause();
                audio.currentTime = 0;
                player.innerHTML = hdlPlay
            }
        }

        // it allows us to roll back a song each time the button is pressed
        function stepBackward(){
            if(index === 0){
                index = playList.length - 1
            }else{
                index--
            }

            box.innerHTML = `Track ${index + 1} - ${playList[index]}${ext}`;
            audio.src = dir + playList[index] + ext;
            audio.play()
        }

        // it allows us to advance a song every time the button is pressed
        function stepForward(){
            if(index === (playList.length - 1) ){
                index = 0
            }else{
                index++
            }
            box.innerHTML = `Track ${index + 1} - ${playList[index]}${ext}`;
            audio.src = dir + playList[index] + ext;
            audio.play()
        }

        //Event handling
        player.addEventListener('click', handlePlay);
        audio.addEventListener('timeupdate', handleUpdate);
        audio.addEventListener('ended', switchTrack);
        progressbar.addEventListener('click', scrub);
        progressbar.addEventListener('mousedown', (e) => scrub(e) && mousedown);
        progressbar.addEventListener('mouseup', () => mousedown = false);
        progressbar.addEventListener('mousedown', () => mousedown = true);
        volume.addEventListener('change', handleVolume);
        volume.addEventListener('mousemove', handleVolume);
        forward.addEventListener('click', handleForward);
        backward.addEventListener('click', handleBackward);
        next.addEventListener('click', stepForward);
        prev.addEventListener('click', stepBackward);
    }

    controller('.player', 'audio')
}

document.addEventListener('DOMContentLoaded', init)