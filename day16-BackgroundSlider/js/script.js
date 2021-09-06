const body = document.querySelector('body');
const slideImages = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex--;

    if( currentIndex < 0 ) {
        currentIndex = slideImages.length - 1;
    }

    setBackgroundBody()
    setActiveImage()
})

nextBtn.addEventListener('click', () => {
    currentIndex++;

    if( currentIndex > slideImages.length -1 ) {
        currentIndex = 0;
    }

    setBackgroundBody()
    setActiveImage()
})

setBackgroundBody();

function setBackgroundBody() {
    body.style.backgroundImage = slideImages[currentIndex].style.backgroundImage;
}

const setActiveImage = () => {
    slideImages.forEach( slide => slide.classList.remove('active') );

    slideImages[ currentIndex ].classList.add('active')
}