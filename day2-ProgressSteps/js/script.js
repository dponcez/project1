document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress');
    const circles = document.querySelectorAll('.circle');
    prevButton = document.getElementById('prev');
    nextButton = document.getElementById('next');

    let currentIndex = 1;

    const prevProgress = () =>  {
        currentIndex--;
        if(currentIndex < 1) {
            currentIndex = 1;
        }

        updateProgress()
    }

    const nextProgress = () => {
        currentIndex++;
        if(currentIndex > circles.length) {
            currentIndex = circles.length
        }

        updateProgress()
    }

    const updateProgress = () => {
        circles.forEach((item, index) => {
            if(index < currentIndex){
                item.classList.add('active')
            }else{
                item.classList.remove('active')
            }
        })
        const currentActive = document.querySelectorAll('.active');
    
        progressBar.style.width = (currentActive.length -  1) / (circles.length - 1) * 100 + '%';
        if(currentIndex === 1) {
            prevButton.disabled = true;
        }else if( currentIndex === circles.length) {
            nextButton.disabled = true
        }else {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    }


    prevButton.addEventListener('click', prevProgress);
    nextButton.addEventListener('click', nextProgress);
})