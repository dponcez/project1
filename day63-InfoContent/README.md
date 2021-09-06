<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Info Content 

## Key covered in this project

* document.querySelectorAll()
* forEach()
* document.addEventListener()
* classList.add()
* classList.remove()

## IIFE (Immediately Invoked Function Expression)

An IIFE, is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) function that help us to execute our code immediately after we've built or defined it, also called anonymous function. This function could include many function and global variables, but it's important to limit the uses of global variables if we want to avoid some problems on our code, this function is better than *function expression* or *function declaration*, if you don't need to reuse the code again. More information about this function, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**Piece of code, using an IIFE (Immediately Invoked Function Expression)**

```js
    // Create an IIFE using an ES6 arrow functon
    (() => {
        const tabs = document.querySelectorAll('li a');
        const panels = document.querySelectorAll('article');

        tabs.forEach( (tab, index ) => {
            createTabPanel( tab, index );
        });

        function createTabPanel( tab, posTabs ) {
            tab.addEventListener('click', () => {
                tabs.forEach( getTab => {
                    getTab.classList.remove('active')
                });
                tab.classList.add('active')
            })
        }
    })()
```