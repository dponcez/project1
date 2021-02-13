/* Create variables that contains our HTML elements */
const images = document.getElementById('gallery');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const gallery = document.querySelectorAll('[data-image] img');

// Create index variable and Initialize it to zero ( 0 );
let index = 0;

let interval = setInterval( runAnimation, 2000)

// runAnimation function 
function runAnimation(){
    index++;
    changeImage();
}

// changeImage function
function changeImage() {
    // Compare if the index value is greater than to gallery.length - 1
    // if so, set the index variable to zero
    // otherwise, set index variable less than to gallery.length - 1
    if( index > gallery.length - 1) {
        index = 0;
    }else if( index < 0 ) {
        index = gallery.length - 1
    }

    images.style.transform = `translateX( ${ -index * 500 }px)`
}

// resetInterval function 
function resetInterval() {
    clearInterval( interval );
    interval = setInterval( runAnimation, 2000 )
}

// buid our handle buttons
/* 
    * Call function presentation
        - changeImage function
        - resetInterval function 
        
    * increment or decrement index variable
*/prevBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
})

nextBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
})