function HandleToggle(){
    this.update = function(x, y, dx, dy){
        this.method = {
            click: 'clik',
            property: 'property'
        };
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.object = {};

        this.handleNavigation = function(toggler, app__navigation, app__menu){
            // Reference of HTML elements
            const handleToggler = document.querySelector(toggler);
            const handleApplicationMenu = document.querySelector(app__navigation);
            const items = document.querySelector(app__menu);

            //  Get the object of the toggler button
            this.object.property = handleToggler;

            //  This allow us to know if the object is a boolean
            if(typeof this.object.hasOwnProperty(this.method.property) !== true ){

                handleToggler.addEventListener(this.method.click, () => {
                    handleToggler.classList.toggle(this.x);

                    //  Iterate over the items and give them a simple animatiion
                    for(let i = 0; i < items.length; i++){
                        if( items.classList.contains(items[i] ) === 'string' ){
                            items.animate({
                                transform: [ 
                                    'translateX(' + this.dx +'%)',
                                    'translateY(' + this.dy + ')'
                                ],
                                opacity: [1, 0],
                            }, {
                                delay: this.dx,
                                duration: (this.dx * 20),
                                iterations: (this.dy + 2),
                                iterationStart: 0.25,
                                direction: 'alternate',
                                endDelay: -(this.dx * 10),
                                easing: 'ease-in-out'
                            })
                        }
                    }

                    if( toggler && handleNavigation ){
                        handleApplicationMenu.classList.toggle(this.y)
                    }
                })
            }
        }
    }
}