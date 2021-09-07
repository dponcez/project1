<<<<<<< HEAD
<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

=======
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
# StopTimer

## Key covered in this project

* document.querySelector()
* Objects
    * Destructuring method
* Math.floor()
* innerHTML
* setInterval()
* clearInterval()

Also we used an IIFE and a debounce function.

**Example of an IIFE ( Immediately Invoked Function Expression)**

<<<<<<< HEAD
```js
=======
```
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    ( function() {
        const elements = document.querySelector('.element');

        elements.forEach( element => {
            console.log( element )
        } );

    })()

   //  With ES6 arrow function
   ( () => {
       const elements = document.querySelectorAll('.element);

       elements.forEach( element => console.log( element ) );
       
   })()
```
<<<<<<< HEAD

**Example of a debounce() function**

A **debounce() function** forces a function to wait a few times before running its execution and preventing from being called several times, a good  example to use this feature is to use it on a submit button to prevent  any user from waiting to activate it by giving more clicks than they want.

```js
=======
**Example of a debounce() function**

A **debounce() function** forces a function to wait a few times before running its execution and preventing from being called several times, a good  example to use this feature is to use it on a submit button to prevent  any user from waiting to activate it by giving more clicks than they want.
```
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
    function debounce( param1, param2, param3 ){
        let timer; 
        // You can use arrow function to return something and rest method as parameter
        return ( ...args ) => {
            args = arguments;
            let context = this;
            let later = () => {}
        }
    }
```

**Key covered on debounce function**
<<<<<<< HEAD

=======
>>>>>>> 8c6f60f0fdc59d87e57ac608a78e22d08f9156a4
* return 
* setTimeout()
* clearTimeout()
* ES6 arrow function 