let load = 0;
const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading--text');

let init = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 99){
        clearInterval(init);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}