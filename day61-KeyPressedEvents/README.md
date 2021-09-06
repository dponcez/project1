<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #2c3e50 !important }
</style>

# Event Key Code 

## Key covered in this project

* Thernary operator
    * ```js
        const element = isPressed ? console.log("Hello!") : console.log("Bye bye!") 
        ```
* event.key
* event.keyCode
* event.code
* document.getElementById()
* document.addEventListener('keydown', functionName)

In this project we used an IIFE function, to execute immediately after we built or defined it. An IIFE function is also called anonymous function.

**Example of an IIFE (Immediately Invoked Function Expression)**

```js
    // IIFE using ES6  arrow function
    (() => {
        console.log('Hello, World!);
    })()
```
or

```js
    // IIFE function
    ( function() {
        console.log('Hello, World!);
    })()
```
More information about how this function works, go to [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) or go to [Wikipedia](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression).