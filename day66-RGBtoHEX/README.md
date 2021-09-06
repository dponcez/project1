<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# RGB to HEX ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) ![#ecf0f1](https://via.placeholder.com/15/ecf0f1/000000?text=+) ![#3498db](https://via.placeholder.com/15/3498db/000000?text=+)

## Key covered in this project

* document
    * querySelector()
    * getElementById()
* parseInt()
* toString()
* style.backgroundColor
* innerHTML
* declaration statements
    * if / else
* return
* Events
    * addEventListener('change')
    * addEventListener('input')

## IIFE (Immediately Invoked Function Expression)

An IIFE, is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) function that help us to execute our code immediately after we've built or defined it, also called anonymous function. This function could include many function and global variables, but it's important to limit the uses of global variables if we want to avoid some problems on our code, this function is better than *function expression* or *function declaration*, if you don't need to reuse the code again. More information about this function, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**Example of code using in this project**

```js
    // Create a IIFE function
    (() => {
        // range sliders
        const color_red = document.getElementById('red');
        const color_green = document.getElementById('green');
        const color_blue = document.getElementById('blue');

        // output value
        const output_red = document.querySelector('.output__red');
        const output_green = document.querySelector('output__green');
        const output_blue = document.querySelector('output__blue');

        // display color on screen
        const display_color = document.querySelector('.display--panel');
        // get color reference
        const description_color = document.querySelector('.output');

        // create a change color function
        function changeColor(){
            // write two more variables to get the parse number of the color and return its value on a string
            const _hexR = parseInt(color_red.value, 10).toString(16);

            const hex_color = (`#${pad(_hexR)}`);

            // put the hex_color value on display_color and description_color
        }

        // calculate the range of the hex color and returns its value
        function pad( n ){
            if( n.length < 2 ) return '0' + n;
            else return n;
        }

        // write the event handler below here
        // to get the hex value
        // create or write two more event handlers below first one
        color_red.addEventListener('change', () => {
            changeColor();
            output_red.value = color_red.value;
        });
        color_red.addEventListener('input', () => {
            changeColor();
            output_red.value = color_red.value;
        })
    })()
```