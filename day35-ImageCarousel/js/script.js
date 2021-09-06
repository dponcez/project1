// Create a debounce function 
function debounce( funct, timeout = 300 ){
    let timer = undefined;
    return ( ...args ) => {
        if( !timer ){
            funct.apply( this, args )
        }

        clearInterval( timer );
        timer = setInterval(() => {
            timer = undefined;
        }, timeout )
    }
}

const init = () => {
    /* Create variables that contains our HTML elements */
    const images = document.getElementById('gallery');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const gallery = document.querySelectorAll('[data-image] img');
    
    const activeChange = debounce(() => runAnimation() );
    // Create index variable and Initialize it to zero ( 0 );
    let index = 0;
    
    let interval = setInterval( activeChange, 2000)
    
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
    
        images.style.transform = `translateX( ${ -index * 417.5 }px)`
    }

    // resetInterval function 
    function resetInterval() {
        clearInterval( interval );
        interval = setInterval( activeChange, 2000 )
    }

    // Build clickable buttons
    prevBtn.addEventListener('click', () => activeLeftToggle() );
    nextBtn.addEventListener('click', () => activeRightToggle() );

    // Call debounce function to our built buttons
    const activeLeftToggle = debounce(() => clickOnLeftButton() );
    const activeRightToggle = debounce(() => clickOnRightButton() );

    // Increment or decrement the index variable depend on which button was clicked
    const clickOnLeftButton = () => {
        index--;
        changeImage();
        resetInterval();
    }

    const clickOnRightButton = () => {
        index++;
        changeImage();
        resetInterval();
    }
}

window.onload = init;