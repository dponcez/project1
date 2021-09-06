// Create a IIFE function
(() => {
    
    // Get HTML elements
    // input sliders
    const color_red = document.getElementById('red');
    const color_green = document.getElementById('green');
    const color_blue = document.getElementById('blue');
    // output value
    const output_red = document.querySelector('.out__red');
    const output_green = document.querySelector('.out__green');
    const output_blue = document.querySelector('.out__blue');

    // display color on screen
    const display_color = document.querySelector('.display--panel');
    // get reference about hex color
    const description = document.querySelector('.output');

    // create change color function
    function changeColor() {
        const _hexR = parseInt(color_red.value, 10).toString(16);
        const _hexG = parseInt(color_green.value, 10).toString(16);
        const _hexB = parseInt(color_blue.value, 10).toString(16);

        const hex_color = (`#${ pad( _hexR ) }${ pad( _hexG ) }${ pad( _hexB ) }`);

        display_color.style.backgroundColor = hex_color;

        description.innerHTML = hex_color;
    }

    // calculate the range of the hex color and return its value
    function pad( n ){
        if( n.length < 2 ) {
            return '0' + n;
        }else {
            return n;
        }
    }

    // Event handler
    color_red.addEventListener('change', () => {
        changeColor();
        output_red.value = color_red.value;
    });
    color_red.addEventListener('input', () => {
        changeColor();
        output_red.value = color_red.value;
    });

    color_green.addEventListener('change', () => {
        changeColor();
        output_green.value = color_green.value;
    });
    color_green.addEventListener('input', () => {
        changeColor();
        output_green.value = color_green.value;
    });

    color_blue.addEventListener("change", () => {
      changeColor();
      output_blue.value = color_blue.value;
    });
    color_blue.addEventListener("input", () => {
      changeColor();
      output_blue.value = color_blue.value;
    });
})()