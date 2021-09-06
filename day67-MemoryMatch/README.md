<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Memory Match

## key covered in this project

* document
    * .querySelector()
    * .querySelectorAll()
    * .addEventListener('mouseenter')
    * .addEventListener('mouseleave')
    * .addEventListener('keydown')
    * .addEventListener('click')
* style
    * .backgroundColor
    * .border
* setTimeout()
* setInterval()
* clearInterval()
* innerHTML
* for loop
* if / else statement
* Math.random()
* sort()
* push()
* Booleans - true / false
* return
* location.realod()

## IIFE (Immediately Invoked Function Expression)

An IIFE, is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) function that help us to execute our code immediately after we've built or defined it, also called anonymous function. This function could include many function and global variables, but it's important to limit the uses of global variables if we want to avoid some problems on our code, this function is better than *function expression* or *function declaration*, if you don't need to reuse the code again. More information about this function, go to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

**Example code**

```js
    // Create an IIFE function
    // Use an arrow function instead of normal function, to create an IIFE function
    (() => {
        // Create and save our variables
        let time = 0;
        let numCompleted = 0;
        let emptyArray = [];
        let interval;
        let started = false;
        let isReady = true;
        // get HTML references
        const reloadBtn = document.querySelector('.restart');
        const gridTable = document.querySelector('.grid');
        const para = document.querySelector('.timer');
        // Execute setup function
        setUp();

        /* Function definition

            1. randomAnswer
            2. hide
            3. complete
            4. reveal
            5. startTimer
            6. setUp

        */
        function randomAnswer() {
            const randomArray = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12 ];

            randomArray.sort( () => {
                return 0.5 - Math.random()
            });

            return randomArray
        }

        function hide( cell ) {
            cell.clicked = false;
            cell.innerHTML = '';
            cell.style.backgroundColor = ''
        }

        function complete( cell ) {
            numCompleted++
            cell.completed = false;
            cell.style.backgroundColor = ''
        }

        function reveal( cell ) {
            cell.clicked = true;
            cell.innerHTML = cell.value;
            cell.style.backgroundColor = ''
        }

        function startTimer() {
            if( started === false ) {
                interval = setInterval(() => {
                    time++;
                    para.innerHTML = `Time Elapsed: ${ time }`
                }, 1000 );

                 started = true
            }
        }

        function setUp() {
            const grid = document.querySelectorAll('.item');
            const answer = randomAnswer();

            // iterate over the grid elements
            for( let i = 0; i < grid.length; i++) {
                const cell = grid[ i ];
                cell.clicked = false;
                cell.completed = false;
                cell.value = answer[ i ];

                // Event handler
                cell.addEventListener('mouseenter', function() {
                    // compare if the clicked and completed are false
                });

                cell.addEventListener('mouseleave', function() {
                    // compare if the clicked and completed are false
                });

                cell.addEventListener('click', function() {
                    // compare if the isReady variable is false
                    // if so, return it it's value to nothing

                    // compare if the clicked and completed are false
                        // -> emptyArray.push()
                        // -> reveal()

                    // compare emptyArray is equal to 2
                    if() {
                        // if a matching is found
                        if() {
                            // call complete function here

                            // return the emptyArray variable to nothing

                            // compare if numCompleted variable is equal to 24
                            // if so, call clearInterval() and display an alert to show the user if he / she won

                        }else {
                            // if matching pair is not found
                            // return isReady variable to false
                            // give the gridTable a border style

                            // call setTimeout()
                        }
                    }
                })
            }
        }
    })()
```

In the **Memory Match** project, you have to find the same number, the secuence of the numbers goes since 1 till 12, so when you've found all given numbers, the screen display an alert message telling you that you won in 'n' seconds, when the matching is completed, press the reload or restart button to return the game at its initial position an play again.

* How long does it take you to complete the game?
* Can you remember the position of the number found?