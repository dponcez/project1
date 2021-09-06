// Create an IIFE function using ES6
(() => {
    // Save our HTML references
    const pressed = document.getElementById('pressed');
    const keycode = document.getElementById('keycode');
    const code = document.getElementById('code');

    const keyPressedEvent = ( e ) => {
        const keyPressed = e.key === ' ' ? "Space" : e.key;
        pressed.innerHTML = keyPressed;

        keycode.innerHTML = e.keyCode;
        code.innerHTML = e.code
    }

    // Event handler
    document.addEventListener('keydown', keyPressedEvent );
})()