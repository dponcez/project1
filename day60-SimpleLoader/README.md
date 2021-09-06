<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #2c3e50 !important }
</style>

# Simple Loader 

## Key covered in this project

* import { "function name goes here without quotes" } from "host of your modules folder"
* document.querySelector()
* element.style.animation

Also we used an IIFE and a debounce function.

**Example of an IIFE function** 

The example below are anonymous function
```js
// IIFE function using ES6
(() => {
    console.log("Hello, World!");
})()
```
```js
// normal IIFE function 
(function(){
    console.log("Hello, World!")
})()
```

**Example of a debounce() function**

A **debounce() function** forces a function to wait a few times before running its execution and preventing from being called several times, a good  example to use this feature is to use it on a submit button to prevent  any user from waiting to activate it by giving more clicks than they want.

```js
    function debounce( param1, param2, param3 ){
        let timer; 
        // You can use arrow function to return something and rest method as parameter
        return ( ...args ) => {
            args = arguments;
            let context = this;
            let later = () => {
                if( !param3 ) param1.apply( context, args )
            }
            // here goes a clearTimeout() and setTimeout()
            clearTimeout( timer );
            timer = setTimeout( later, param2);
            const callNow = param3 && !timer;
            if( callNow ) param1.apply( context, args )
        }
    }
```

In the example above, we used the params as a parameters in our debounce function, these parameters may changes.

1. *param1*: is a callback function.
2. *param2*: is a timer, it's goes in milliseconds.
3. *param3*:  may have a boolean type or an undefined value.

**Example of a special function**

I decided to create my own debounce function, using a class contructor function, this function does the same thing like a normal **debounce() function** and I've imported this function using the import method

class Debounce function

```js
class Debounce {
    contructor( wait, immediate ) {
        this.wait = wait;
        this.immediate = immediate;
        this.timer = null;
        this.later = null;
        this.context = null;
    }
    // Create a function and callback as a paremeter
    update( func ) {
        return ( ...args ) => {
            args = arguments;
            this.context = this;
            this.later = () => {
                if( !this.immediate ) func.apply( this.context, args )
            }

            clearTimeout( this.timer );
            this.timer = setTimeout( this.later, this.wait )

            const callNow = this.immediate && !this.timer;
            if( callNow ) func.apply( this.later, this.wait )
        }
    }
}
```

Implementation or usage

```js
import { Debounce } from "./folder-name/modules/debounce.js";
// Create a debounce method
const debounce = new Debounce();
// Build a IIFE function using ES6
(() => {
    const loader = document.querySelector('.loader');
    const loaderContainer = document.querySelector('.loader--container');
    const duration = 100;

    function getAnimationLoader() {
        loader.style.animation = "load 1s cubic-bezier(0.247, 0.287, 0.745, 0.715) infinite";
        loaderContainer.style.animation = "reverseload 1s cubic-bezier(0.375, 0.287, 0.175, 0.725) infinite";
    }

    const interval = setInterval( debounce.update( () => {
        getAnimationLoader();
    }), duration )
})()
```

But the import method does not works if you do not implement the type of the method that you want to use in the script tag on your HTML file, like this 

```html
<script src="folder-name/app.js" type="module"></script>
```

**Key covered on debounce function**

* class
    * constructor()
* return 
* setTimeout()
* clearTimeout()
* ES6 arrow function 