function pulse() {
    const pulse = document.querySelector('.car');
    const times = document.getElementById('times');
    
    let clickTimes = 0;
    let timesClicked = 0;

    pulse.addEventListener('click', ( e ) => {

        if( clickTimes === 0 ){
            clickTimes = new Date().getTime();
        }else {
            if( (new Date().getTime() - clickTimes ) < 800 ) {
                createHeart( e );
                clickTimes = 0
            }else {
                clickTimes = new Date().getTime()
            }
        }
    })

    function createHeart( e ) {
        const heart = document.createElement('i');
        heart.classList.add('fas');
        heart.classList.add('fa-heart');

        let x = e.clientX;
        let y = e.clientY;

        const offsetX = e.target.offsetLeft;
        const offsetY = e.target.offsetTop;

        const insetX = x - offsetX;
        const insetY = y - offsetY;

        heart.style.left = `${insetX}px`;
        heart.style.top = `${insetY}px`;

        pulse.appendChild(heart);

        times.innerHTML = ++timesClicked;

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

pulse()