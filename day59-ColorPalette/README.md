<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #2c3e50 !important }
</style>

# Palette Color  ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) ![#ecf0f1](https://via.placeholder.com/15/ecf0f1/000000?text=+) ![#3498db](https://via.placeholder.com/15/3498db/000000?text=+)

## Key covered in this project

* Information about (document/tags/function) 
    * @param { TYPE } < specify what kind of tag or function goes here > add parameter to any tags <- this line is a comment
    * @returns { TYPE } return a HTMLElement
* document.createElement()
* document.querySelector()
* Objects
    * Destructuring method
* textContent
* innerText
* style.backgroundColor
* element.value
* element.disabled
* navigator.clipboard.writeText()
* element.appendChild()
* audio element
    * audio.play()
    * audio.pause()
* async
* await
* fetch()
* setInterval()
* clearInterval()

Also we used an IIFE and a debounce function.

**Example of and @param and @returns methods** 

```js
    // Add params and return methods to our js project
    /**
    * some comments about the tags and classes
    *
    * @param { string } tagName // description about the tag name
    * @param { string } classes // description about the given class to an element or tag
    * @returns { HTMLElement } // return any HTML element if this exist
    */

    // create a function name
    function createElementByClass( param1, param2 ) {
        // create element
        const element = document.createElement( param1 );

        // set attribute to our element
        element.setAttribute('class', param2 );

        // return element that was created
        return element
    }
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
        }
    }
```

**Key covered on debounce function**
* return 
* setTimeout()
* clearTimeout()
* ES6 arrow function 