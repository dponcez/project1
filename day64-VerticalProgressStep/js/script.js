(() => {

    // Get references about HTML elements
    const progressBar = document.getElementById('progress');
    const circles = document.querySelectorAll('.circle');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const chevronUp = document.querySelector('.chevron--up');
    const chevronDown = document.querySelector('.chevron--down');

    let currentIndex = 1;

    function prevProgressButton() {
        currentIndex--;
        if( currentIndex < 1 ){ currentIndex = 1 }
        updateSlideProgress()
    }

    function nextProgressButton() {
        currentIndex++;
        if( currentIndex > circles.length ){ currentIndex = circles.length }
        updateSlideProgress()
    }

    // Progress bar function 
    function updateSlideProgress() {
        circles.forEach( (circle, i ) => {
            if( i < currentIndex ){
                circle.classList.add('active')
            }else {
                circle.classList.remove('active')
            }
        });

        const getCurrentActive = document.querySelectorAll('.active');

        const circleLength = ( circles.length - 1 );
        const activeLength = ( getCurrentActive.length - 1 );

        progressBar.style.height = Math.round(( activeLength / circleLength ) * 100 ) + '%';

        if( currentIndex === 1 ) {
            prevBtn.disabled = true;
            prevBtn.style.backgroundColor = '#d5dad3';
            nextBtn.style.backgroundColor = '#3498db';

            chevronDown.style.color = '#ecf0f1';
            chevronUp.style.color = '#3498db';

        }else if( currentIndex === circles.length ){
            nextBtn.disabled = true;
            prevBtn.style.backgroundColor = '#3498db';
            nextBtn.style.backgroundColor = '#d5dad3';

            chevronUp.style.color = '#ecf0f1';
            chevronDown.style.color = '#3498db';
        }else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }

    // Event handler
    prevBtn.addEventListener('click', prevProgressButton, false);
    nextBtn.addEventListener('click', nextProgressButton, false);
})()