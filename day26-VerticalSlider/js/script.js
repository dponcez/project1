function init(){
    const sliderContainer = document.querySelector('.slider--container');
    const leftSlider = document.querySelector('.left--slide');
    const rightSlider = document.querySelector('.right--slide');
    const upBtn = document.querySelector('.up--btn');
    const downBtn = document.querySelector('.down--btn');
    const slidesLength = rightSlider.querySelectorAll('div').length;

    let slideIndex = 0;

    leftSlider.style.top = `-${ ( slidesLength - 1 ) * 100}vh`;

    // Event handler
    upBtn.addEventListener('click', () => changeSlide('up'));
    downBtn.addEventListener('click', () => changeSlide('down'));

    const changeSlide = ( direction )   =>  {
        const slideHeight = sliderContainer.clientHeight;
        if( direction === 'up' ){
            slideIndex++;
            if( slideIndex > slidesLength - 1 ){
                slideIndex = 0
            }
        }else if( direction === 'down' ){
            slideIndex--;
            if( slideIndex < 0 ){
                slideIndex = slidesLength - 1;
            }
        }

        rightSlider.style.transform = `translateY(-${ slideIndex * slideHeight }px)`;
        leftSlider.style.transform = `translateY(${ slideIndex * slideHeight }px)`;
    }

}

init()