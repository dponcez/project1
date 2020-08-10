function HandleToggle(){
    this.update = function(x, y, dx, dy, sx, sy){
        this.items = {
            cl: 'click',
            pr: 'property'
        };
        this.x = x; // open class
        this.y = y; // active class
        this.dx = dx; // distance in x axis
        this.dy = dy; // distance in y axis
        this.sx = sx;// scale(0.5)
        this.sy = sy;// scale(1)
        this.object = {}; // empty object

        this.handleNavigation = function( toggler, app__navigation, app__menu, app__items, app__logo ){
            // Getting the current HTML elements
            const handleToggler = document.querySelector(toggler);
            const handleNavigationMenu = document.querySelector(app__navigation);
            const handle__menu = document.querySelector(app__menu);
            const items = document.querySelectorAll(app__items);
            const logo = document.querySelector(app__logo);
            //  This array contains all classes that HMTL has
            let options = {
               home: 'home',
               about: 'about',
               info: 'info',
               blog: 'blog',
               contact: 'contact'
        };

        const {home, about, info, blog, contact} = options;

            //  Convert the toggler button to an object
            this.object.property = handleToggler;

            //  typeof allow us to know if the property of the  any elements is a boolean, as long as, if this element has some property
            if(typeof this.object.hasOwnProperty(this.items.pr) !== true ){

                handleToggler.addEventListener(this.items.cl, () => {
                    handleToggler.classList.toggle(this.x);

                    //  Iterate over the items and give them a simple animatiion with the animate API
                    for(let i = 0; i < items.length; i++){

                        if ( items.classList.contains( home ) ){
                            items.animate({
                                transform: [ 
                                   `translateX(${this.dx}%)`,
                                    `translateY(${this.dy}%)`
                                ],
                                opacity: [0, 1],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 20),
                                iterations: (this.dy + 2),
                                iterationStart: 0.25,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in'
                            })
                        }else if( items.classList.contains( about ) ){
                            items.animate({
                                transform: [
                                    `translateX(${this.dx}%)`,
                                    `translateY(${this.dy}%)`
                                ],
                                opacity: [0, 1],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 21),
                                iterations: (this.dy + 2),
                                iterationStart: 0.35,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in-out'
                            })
                        } else if ( items.classList.contains( info ) ) {
                            items.animate({
                                transform: [
                                    `translateX(${this.dx}%)`,
                                    `translateY(${this.dy}%)`
                                ],
                                opacity: [0, 1],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 22),
                                iterations: (this.dy + 2),
                                iterationStart: 0.45,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in'
                            })
                        } else if ( items.classList.contains( blog ) ) {
                            items.animate({
                                transform: [
                                    `translateX(${this.dx}%)`,
                                    `translateY(${this.dy}%)`
                                ],
                                opacity: [0, 1],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 23),
                                iterations: (this.dy + 2),
                                iterationStart: 0.55,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in-out'
                            })
                        } else if ( items.classList.contains( contact ) ) {
                            items.animate({
                                transform: [
                                    `translateX(${this.dx}%)`,
                                    `translateY(${this.dy}%)`
                                ],
                                opacity: [0, 1],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 24),
                                iterations: (this.dy + 2),
                                iterationStart: 0.65,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in'
                            })
                        }
                    }

                    if( toggler && app__navigation ){
                        handleNavigationMenu.classList.toggle(this.y);
                        handle__menu.classList.toggle(this.x);

                        //  Animation on logo
                        logo.animate({
                            transform: [
                                `transform(-${this.dx}, -${this.dx})`,
                                `scale(${this.sx})`,
                                `scale(${this.sy})`
                            ],
                            opacity: [this.sx, this.sy]
                        },{
                            duration: 2000
                        })

                    }
                })
            }
        }
    }
}