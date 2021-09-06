<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Vertical Progress Step 

## Key covered in this project

* document.getElementById()
* document.querySelector()
* document.querySelectorAll()
* forEach()
* classList:
    * add()
    * remove()
* Math.round()
* element.disabled:
    * true
    * false
* element.style:
    * backgroundColor
    * color
* element.addEventListener()

## IIFE (Immediately Invoked Function Expression)

An IIFE, is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) function that help us to execute our code immediately after we've built or defined it, also called anonymous function. This function could include many function and global variables, but it's important to limit the uses of global variables if we want to avoid some problems on our code, this function is better than *function expression* or *function declaration*, if you don't need to reuse the code again. More information about this function, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**CODE**

```js
    // Create an IIFE with ES6 arrow function
    (() => {
        // Get references about our HTML elements
        const progress = document.getElementById('progress');
        const circles = document.querySelectorAll('.circle');
        const prev_btn = document.querySelector('.prev');
        const next_btn = document.querySelector('.next');

        let index = 1;

        function prevProgressButton() {
            index--
            // compare if index variable is less than 1
            // your code goes here

            // called progress function
            updateProgressBar() 
        }

        function nextProgressButton() {
            index++
            // compare if index is greater than circles.length
            // your code goes here

            // called progress function
            updateProgressBar()
        }

        // create a progress bar function
        function updateProgressBar(){
            // Your code goes here
            // use forEach to iterate over the circles variable
            // but you can use a for loop to iterate too
            circles.forEach((item, i) => {
                if( i < index ) {
                    // add a class to the item
                }else {
                    // remove a class of item
                }
            })

            // style progress bar goes here

            if(index === 1) {
                // disabled prev_btn 
                // give the style to our buttons
            }else if( index === circles.length){
                // disabled next_btn
                // give the style to our buttons
            }else {
                // disabled our button to false
            }
        }

        prev_btn.addEventListener('click', prevProgressButton, false);
        next_btn.addEventListener('click', nextProgressButton, false);
    })()
```