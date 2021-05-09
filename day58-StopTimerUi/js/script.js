( function() {
    function debounce( func, wait, immediate ) {
        let timer = null;
        return ( ...args ) => {
            args = arguments;
            let context = this;
            let later = () => {
                if( !immediate ) { func.apply( context, args ) }
            }

            clearTimeout( timer );
            timer = setTimeout( later, wait );

            const callNow = immediate && !timer;
            if( callNow ) { func.apply( context, args ) }
        }
    }
    // HTML references
    const timer = document.querySelector('.timer');
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');

    // objects
    const options = {
        interval: null,
        displayTimer: null,
        secondCount: null
    }

    // defined destructuring method
    let { interval, displayTimer, secondCount } = options;

    // function to calculate the current hours, minutes and seconds
    function displayCurrentTime() {
        // get current date
        const hours = Math.floor( secondCount / 3600 );
        const minutes = Math.floor( ( secondCount % 3600 ) / 60 );
        const seconds = Math.floor( secondCount % 60 )

        // display and leading a zero if the value is less than 10
        const getHour = ( hours < 10 ) ? '0' + hours : hours;
        const getMins = ( minutes < 10 ) ? '0' + minutes : minutes;
        const getSecs = ( seconds < 10 ) ? '0' + seconds : seconds;

        // display the current value
        displayTimer = `${ getHour }:${ getMins }:${ getSecs }`;
        timer.innerHTML = displayTimer;

        // increment secondCount by 1
        secondCount++;
    }

    // Event Handling
    startBtn.addEventListener('click', debounce( () => {
        interval = setInterval( displayCurrentTime, 10 );

        startBtn.disabled = true;
        stopBtn.disabled = false;

        startBtn.style.color = '#3498db';
        stopBtn.style.color = '#b02d2d';

        startBtn.style.cursor = 'default';
        stopBtn.style.cursor = 'pointer'
    }) )

    stopBtn.addEventListener('click', debounce( () => {
        clearInterval( interval );

        startBtn.disabled = false;
        stopBtn.disabled = true;

        startBtn.style.color = "#2900f9";
        stopBtn.style.color = "#c0399b";

        startBtn.style.cursor = 'pointer';
        stopBtn.style.cursor = 'default';
    }) )
})()