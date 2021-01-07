const init = () => {
    // Get the current HTML elements
    const size = document.getElementById('size');
    const canvas = document.getElementById('canvas');
    const clearBtn = document.getElementById('clear');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const inputColor = document.getElementById('bg');
    const body = document.body;
    
    // Get the canvas context
    const ctx = canvas.getContext('2d');

    let index = 1;
    let color = 'black';
    let isPressed = false;
    let x, y;

    canvas.addEventListener('mousedown', ( e ) => {
        isPressed = true;

        x = e.offsetX;
        y = e.offsetY;

    })

    canvas.addEventListener('mouseup', ( e ) => {
        isPressed = false;

        x = undefined;
        y = undefined;

    })

    canvas.addEventListener('mousemove', ( e ) => {

        if( isPressed ){
            const x2 = e.offsetX;
            const y2 = e.offsetY;

            
            x = x2;
            y = y2;

            drawCircles( x2, y2 );
            drawLines( x, y, x2, y2 );
        }
    })

    function drawCircles( x, y ){
        ctx.beginPath();
        ctx.arc( x, y, index, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawLines( x1, y1, x2, y2 ){
        ctx.beginPath();
        ctx.moveTo( x1, y1 );
        ctx.lineTo( x2, y2 );
        ctx.strokeStyle = color;
        ctx.lineWidth = index * 2
        ctx.stroke();
    }

    function updateSizeOnScreen() {
        size.innerHTML = index
    }

    increaseBtn.addEventListener('click', () => {
        index += 1;

        if( index > 20 ) {
            index = 20;

            // If the index is equal to 20, we display an alert message
            const closeBtn = document.createElement('button');
            const box = document.createElement('div');
            const para = document.createElement('p');

            box.className = 'alert';
            para.className = 'description';
            closeBtn.className = 'close--alert'

            para.textContent = `Stop it, you cannot increment more than ${index}`;
            closeBtn.textContent = 'close'

            box.appendChild(para) ;
            box.appendChild(closeBtn);
            body.appendChild(box);

            // Close the alert
            closeBtn.addEventListener('click', () => {
                body.removeChild(box);
            })
        }

        updateSizeOnScreen()
    })

    decreaseBtn.addEventListener('click', () => {
        index -= 1
        if( index < 5) {
            index = 1
        }

        updateSizeOnScreen()
    })

    inputColor.addEventListener('change', ( e ) => color = e.target.value )
    clearBtn.addEventListener('click', () => { 
        ctx.clearRect(0,0, canvas.width, canvas.height); 
        
        if( index === 20 ){
            index = 1;

            size.innerHTML = index;
        }
    })
}

init()