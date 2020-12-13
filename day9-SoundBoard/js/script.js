const init = () => {
    'use strict';
    
    const container = document.getElementById('sound--box')
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    sounds.forEach(sound => {
        const sound__btn = document.createElement('button');
        sound__btn.classList.add('sound--btn');
        sound__btn.innerText = sound;

        sound__btn.addEventListener('click', () => {
            stopSound();

            document.getElementById(sound).play();
        })

        container.appendChild(sound__btn);
    });

    function stopSound( ) {
        sounds.forEach(sound => {
            const song = document.getElementById(sound);

            song.pause();
            song.currentTime = 0;
        })
    }
}

document.addEventListener('DOMContentLoaded', init);