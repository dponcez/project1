// Create a handleMove function
function handleMove( e ) {
    // create HTML refences
    const eyes = document.querySelectorAll('.eye');
    const bubbles = document.createElement('span');
    const container = document.querySelector('.container');

    
    let size = 20;
    let index = 150;
    let xAxis = e.pageX || window.clientWidth;
    let yAxis = e.pageY || window.clientHeight;
    let bubble_size = Math.floor( Math.random() / Math.PI * index );
    let x = null;
    let y = null;

    // iterate over the eyes element
    eyes.forEach( eye => {
        const moveX = ( eye.getBoundingClientRect().left ) + ( eye.clientWidth / 2 );
        const moveY = ( eye.getBoundingClientRect().top ) + ( eye.clientHeight / 2 );
        const radians = Math.atan2( e.pageX - moveX, e.pageY - moveY );
        const rotation = ( radians * ( 180 / Math.PI ) * -1 ) + 270;

        eye.style.transform = `rotate( ${ rotation }deg )`;

        // create a bubble function
        function getBubbles(){
            if( xAxis || yAxis ){
                x = xAxis;
                y = yAxis;

                bubbles.style.left = `${ x }px`;
                bubbles.style.top = `${ y }px`;
            }

            bubbles.style.width = size / bubble_size + 'rem';
            bubbles.style.height = size / bubble_size + 'rem';

            setTimeout( () => {
                bubbles.remove();
                if( bubbles.remove ){
                    eye.style.transform = `rotate( -${ rotation }deg )`;
                }
            }, 1800 );

            container.appendChild( bubbles );
        }

        getBubbles();
    })
}

// Load document when this is ready
document.addEventListener('DOMContentLoaded', () => {
    // event handler
    document.addEventListener('mousemove', handleMove );
})