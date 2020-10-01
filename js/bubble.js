const handleBubble = (e) => {
    const options = {
        content: '.container',
        span: 'span'
    }

    const { content, span } = options

    function move(e) {
        const container = document.querySelector(content);
        const circle = document.createElement(span);

        let x = e.pageX,
            y = e.pageY,
            size = 20,
            bubbleSize = Math.floor(Math.random() * 100);
        
            for( let i = 0; i < 1; i++ ){
                if( e.offsetTop !== window.innerHeight ){
                    circle.style.top = `${y}px`;
                    circle.style.left = `${x}px`
                }
                circle.style.width = size + bubbleSize + 'px';
                circle.style.height = size + bubbleSize + 'px';

                container.appendChild(circle);
            }

        setTimeout(() => {
            circle.remove()
        }, 1800);
    }

    move(e)

}

document.addEventListener('mousemove', handleBubble)