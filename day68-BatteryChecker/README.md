<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Battery Checker 🔋

## key covered in this project

 * document.querySelector()
 * style
    * .setProperty()
    * .height
 * innerHTML
 * navigator.getBattery()
 * .then() / .catch()
 * Math.ceil()
 * condition statements
    * if / else if / else

**Battery Checker** is a simple project that let you know how your battery level is, this project is for only recreation and practice the **JS** code.

I use three technologies for this purpose, [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), but I used a preprocessor like [SASS](https://sass-lang.com) to write a **CSS** styles more effectively and easy to mantain, below here, you can see a snippet code of the project.

Also, in the project I decided to use an **IIFE** function to run immediately our code evoiding to wait a few milliseconds to execute the code.

## IIFE (Immediately Invoked Function Expression)

An IIFE, is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) function that help us to execute our code immediately after we've built or defined it, also called anonymous function. This function could include many function and global variables, but it's important to limit the uses of global variables if we want to avoid some problems on our code, this function is better than *function expression* or *function declaration*, if you don't need to reuse the code again. More information about how an IIFE function works, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

**Snippet Code**

```js
    // Create an IIFE function using ES6 arrow function
    (() => {
        // Get HTML reference
        const battery__color = document.querySelector('.battery__color');
        const battery__value = document.querySelector('.value');
        const battery__info = document.querySelector('.info');
        const battery__charge = document.querySelector('.charge');
        // Get style colors
        let light__blue = '#bbf3f3';
	    let dark__red = '#eb2929';
	    let orange = '#ff5535';
	    let blue = '#3498db';

        navigator.getBattery()
            .then( battery => {
                const b_level = Math.ceil( battery.level * 100 );

                if( battery.level <= 0.15 ) {
                    battery__color.style.setProperty('--bg', dark__red );
                    battery__color.style.height = `${ b_level }%` ;
                    battery__value.innerHTML = `${ b_level }%`;
                    battery__info.innerHTML = 'Battery in critical condition';
                    battery__charge.innerHTML = 'Connect the charger to your device.'
                }else if( battery.level <= 0.25 ) {
                    // your code goes here
                }else if( battery.level > 0.25 && battery.level < 0.90 ) {
                    // your code goes here
                }
            })
            .catch( error => console.log(`Something went wrong: ${ error.message }`))
    })()
```

In the code above, you see that we used a **navigator.getBattery()**, but what that's mean? A **.getBattery()** allows you to know how your battery level is and provides information about the system's battery, returning a battery promise. More information about how .getBattery() works, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery)