<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Music Player

## Key covered in this project

* document.body
* document.querySelector()
* document.getElementById()
* Destructuring method
    * ```js
        const { method1, method2 }  = ref
        ```
* XMLHttpRequest()
* JSON.parse()
* try and catch() methods
* innerHTML
* classList.add()
* classList.remove()
* audio.play()
* audio.pause()
* audio.currentTime
* audio.duration
* audio.volume
* addEventListener()
* srcElement
* offsetWidth
* offsetX
* this

In this project we used a **document.addEventListener('DOMContentLoaded')** method to load the page when the content is completely loaded, also you can use an **IIFE** function to load the content immediately or you can use the **window.addEventListener('load')** for the same purpose

**Example of a document.addEventListener('DOMContentLoaded')**

```js
    function init() {
        const elements = document.querySelector('.element');

        elements.forEach( element => {
            console.log( element )
        } );

    }
    document.addEventListener('DOMContentLoaded', init)

   //  With ES6 arrow function
   document.addEventListener('DOMContentLoaded', () => {
       const elements = document.querySelectorAll('.element');

       elements.forEach( element => console.log( element ) );
       
   })
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
            let later = () => {}
        }
    }
```

**Key covered on debounce function**

* return 
* setTimeout()
* clearTimeout()
* ES6 arrow function 