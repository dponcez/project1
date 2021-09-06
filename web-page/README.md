<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #2c3e50 !important }
</style>

# Portfolio 

## Key covered in this project

* import { "function name goes here without quotes" } from "location of your modules folder"
* export { "function name goes here without quotes" } from "location of your modules folder"
* document
    * querySelector()
    * querySelectorAll()
    * createElement()
* window.addEventListener('scroll')
* window.
    * scrollY
    * innerHeight
* element
    * offsetTop
    * offsetHeight
* classList
    * add()
    * remove()
* forEach()
* getBoudingClientRect().top
* async
* await
* fetch()
* innerHTML
* appendChild()
* destructuring
    * ```js
            for(const {item1, item2, item3, item4 } of data ){}
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

**Example of a special function**

I decided to create my own debounce function, using a class contructor function, this function does the same thing like a normal **debounce() function**.

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
import { Debounce } from "./debounce.js";
// Create a debounce method
const debounce = new Debounce();
// Create a sticky nav
export function setScrollOnNav() => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const duration = 2000;

    window.addEventListener('scroll', debounce.update(() => {
        const scrolledY = window.scrollY;
        const height = window.innerHeight / 5 * 4;

        const boxes = document.querySelectorAll('.section')
        if( scrolledY >= nav.offsetTop + 50 && scrollY > header.offsetHeight - 100 ) {
            header.classList.add('active')
        }else {
            header.classList.remove('active')
        }

        boxes.forEach( box => {
            const bouncing = box.getBoundingClientRect().top;

            if( bouncing < height ){
                box.classList.add('show')
            }else {
                box.classList.remove('show')
            }
        })
           
    } ), duration );
    
}
```

**Creating a HTML element**

```js
    function createElementsFromHTML(item1, item2,item3){
        const container = document.querySelector('main');
        const section = document.createElement('section');

        section.innerHTML = `
            <h1>${item1}</h1>
            <img src="./location folder/image/${item2}.jpg alt="${item1}/>
            <a href="./location folder/${item3}/index.html">${item1}</a>
        `;

        container.appendChild( section )
    }

    export function fetchData(){
        const requestUrl = 'location of your json folder';
        const response = await fetch( requestUrl );
        const data = await response.json();

        for( const {item1, item2, item3 } of data ) {
            createElementsFromHTML(item1, item2, item3 )
        }
    }
```

**Imported functions**

```js
    import { setScrollOnNav } from "location of your module folder";
    import { fetchData } from "location of your module folder";

    // Call imported function here
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