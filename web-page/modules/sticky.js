import { Debounce } from './debounce.js';

const debounce = new Debounce();

export function setScrollOnNavigation() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const heading = document.querySelector('.heading');
    
    
    window.addEventListener('scroll', debounce.update(() => {
        const scrolledY = window.scrollY;
        const height = window.innerHeight / 5 * 4;
        const boxes = document.querySelectorAll('.section')
        if( scrolledY >= nav.offsetTop - 25 && scrollY > header.offsetHeight - 100 ) {
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
            if( scrolledY > heading.offsetTop - 100 ) {
                heading.classList.add('slideUp')
            }else {
                heading.classList.remove('slideUp')
            }
        })
           
    } ));

}