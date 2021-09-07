document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress');
    const circles = document.querySelectorAll('.circle');
<<<<<<< HEAD
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
=======
    prevButton = document.getElementById('prev');
    nextButton = document.getElementById('next');
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4

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
<<<<<<< HEAD
            currentIndex = circles.length;
        }
        
        updateProgress()
    }
    
=======
            currentIndex = circles.length
        }

        updateProgress()
    }

>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    const updateProgress = () => {
        circles.forEach((item, index) => {
            if(index < currentIndex){
                item.classList.add('active')
            }else{
<<<<<<< HEAD
                item.classList.remove('active');
=======
                item.classList.remove('active')
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
            }
        })
        const currentActive = document.querySelectorAll('.active');
    
        progressBar.style.width = (currentActive.length -  1) / (circles.length - 1) * 100 + '%';
        if(currentIndex === 1) {
<<<<<<< HEAD

            prevButton.disabled = true;
            prevButton.style.backgroundColor = "#d5dad3";
            nextButton.style.backgroundColor = "#3498db";

        }else if( currentIndex === circles.length) {

            nextButton.disabled = true;
            nextButton.style.backgroundColor = "#d5dad3";
            prevButton.style.backgroundColor = "#3498db";

=======
            prevButton.disabled = true;
        }else if( currentIndex === circles.length) {
            nextButton.disabled = true
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
        }else {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    }


    prevButton.addEventListener('click', prevProgress);
    nextButton.addEventListener('click', nextProgress);
})