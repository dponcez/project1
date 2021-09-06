<style>
    H1 { color: #3498db !important }
    H2 { color: #aacbaa !important }
    LI { color: #ecf0f1 !important }
    STRONG { color: #aabbbb !important }
</style>

# Crazy Eyes 

## Key covered in this project

* document.querySelector()
* document.createElement()
* document.querySelectorAll()
* e.pageX
* e.pageY
* window.clientWidth
* window.clientHeight
* Math.floor()
* Math.PI
* Math.atan2()
* Math.random()
* e.getBoundingClientRect()
    * top
    * left
* style elements
    * transform
    * top
    * left
    * width
    * height
* element.forEach()
* element.remove()
* document.appendChild()
* setTimeout()

**Piece of code used in the project**

```js
    // Create a function called handleMove
    function handleMove( e ){
        // Get HTML reference
        const eyes = document.querySelectorAll('.eye');
        const bubbles = document.createElement('span');
        const container = document.querySelector('.container');

        let size = 20,
              index = 150,
              xAxis = e.pageX || window.clientWidth,
              yAxis = e.pageY || window.clientHeight,
              bubble_size = Math.floor( Math.random() / Math.PI * index ),
              x = null,
              y = null;
        
        eyes.forEach( eye => {
            const moveX = ( e.getBoundingClientRect().left ) + ( eye.clientWidth );
            const moveY = ( e.getBoundingClientRect().top ) + ( eye.clientHeight );
            const radians = Math.atan2(e.pageX - moveX, e.pageY - moveY );
            const rotation = ( radians * ( 180 / Math.PI ) * -1 ) + 270;

            eye.style.transform = `rotate( ${ rotation }deg )`

            // create bubble function below here
            // inside the bubble function create a condition statement and append the bubbles variable on the container

            // use setTimeout() below here

            // called bubble function below here

        })
    }

    // Load the document
    document.addEventListener('DOMContentLoaded', () => {
        // Create  a handle listener 
        document.addEventListener('mousemove', handleMove);
    })
```

**DOMContentLoaded** event fires when the page or HTML document is completely loaded, without waiting a stylesheets, images or frames. More information about [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) on MDN