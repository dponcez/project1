// Add functionality to our navigation menu and logo
// This function allow us to know if the document is ready to use
function handleNavigation(){

    const openNavigation = (toggler, app__nav) => {
        // get the current html document
        const app__toggle = document.querySelector(toggler);
        const nav = document.querySelector(app__nav);
        const logo = document.querySelector('.logo');
        const app__menu = document.querySelector('.app--navigation');
        const items = document.querySelectorAll('.app--item');

        // create an empty object;
        const object = {};

        // convert the toggle button to an abject
        object.property = app__toggle;

        // if the typeof of the toggle button is an object, so we use the event handler to our button and give to this a class list 
        if(typeof object.hasOwnProperty('property')){
            app__toggle.addEventListener('click', () => {
                app__toggle.classList.toggle('open');

                // iterate over each elements and give them an animation,
                items.forEach(item => {
                    if(item.classList.contains('home')){
                        item.animate({
                            transform: ['translateX(100%)', 'translateY(0)'],
                            opacity: [0, 1]
                        }, {
                            delay: 100,
                            duration: 2000,
                            iterationStart: 0.25,
                            iterations: 2,
                            direction: 'alternate',
                            endDelay: -1000,
                            easing: 'ease-in'
                        })
                    }else if(item.classList.contains('about')){
                        item.animate({
                            transform: ['translateX(100%)', 'translateY(0)'],
                            opacity: [0, 1]
                        }, {
                            delay: 100,
                            duration: 2100,
                            iterationStart: 0.35,
                            iterations: 2,
                            direction: 'alternate',
                            endDelay: -1000,
                            easing: 'ease-in-out'
                        })
                    }else if(item.classList.contains('info')){
                        item.animate({
                            transform: ['translateX(50%)', 'translateY(0)'],
                            opacity: [0, 1]
                        }, {
                            delay: 100,
                            duration: 2200,
                            iterationStart: 0.45,
                            iterations: 2,
                            direction: 'alternate',
                            endDelay: -1000,
                            easing: 'ease-in'
                        })
                    }else if(item.classList.contains('blog')){
                        item.animate({
                            transform: ['translateX(50%)', 'translateY(0)'],
                            opacity: [0, 1]
                        }, {
                            delay: 100,
                            duration: 2300,
                            iterationStart: 0.55,
                            iterations: 2,
                            direction: 'alternate',
                            endDelay: -1000,
                            easing: 'ease-in-out'
                        })
                    }else if(item.classList.contains('contact')){
                        item.animate({
                            transform: ['translateX(30%)', 'translateY(0)'],
                            opacity: [0, 1]
                        }, {
                            delay: 100,
                            duration: 2400,
                            iterationStart: 0.65,
                            iterations: 2,
                            direction: 'alternate',
                            endDelay: -1000,
                            easing: 'ease-in'
                        })
                    }
                })

                // compare if these variables has a own class
                if(toggler && app__nav){
                    nav.classList.toggle('active');
                    logo.classList.toggle('show');

                    // give the animation to our logo
                    logo.animate({
                        transform: ['scale(0.5)', 'scale(1)', 'none', 'translate(-50%, -50%)'],
                        opacity: [0, 0.1],
                    }, {
                        fill: 'backwards',
                        delay: 1000,
                        duration: 2000,
                        easing: 'ease-in-out'
                    })

                    app__menu.classList.toggle('open');
                }
            })
        }
    }

    openNavigation('.toggler', '.app--navigation');
}

document.addEventListener('DOMContentLoaded', handleNavigation);

