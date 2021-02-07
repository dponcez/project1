/* Create variables that contains our HTML elements */
const images = document.querySelector('img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const gallery = document.querySelectorAll('[data-image] img');

// Create index variable and Initialize it to zero ( 0 );
const index = 0;

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
*/
