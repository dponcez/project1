const init = () => {
    'use strict';

    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', checkScrollBoxes);

    function checkScrollBoxes() {
        const posHeight = window.innerHeight / 5 * 4;
        
        boxes.forEach(box => {
            const bouncing = box.getBoundingClientRect().top;
            
            if(bouncing < posHeight){
                box.classList.add('show')
            }else{
                box.classList.remove('show');
            }
        })
    }
}


document.addEventListener('DOMContentLoaded', init);