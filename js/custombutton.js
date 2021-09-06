const init = () => {

    const play = document.querySelector('.play');
    const indicator = document.querySelector('.indicator');
    const progress = document.querySelector('input[type=checkbox');

    function handlePlay(e){
        if(e.target.checked){
            play.style.left = '63%';
            indicator.style.color = '#2ecc71';
            indicator.style.textShadow = '0 0 4px #2ecc71';
            indicator.textContent = 'on';
        }else{
            play.style.left = '4%';
            indicator.style.color = '#ecf0f1';
            indicator.style.textShadow = 'none'
            indicator.textContent = 'off'
        }
    }

    progress.addEventListener('input', handlePlay);

}

document.addEventListener('DOMContentLoaded', init);