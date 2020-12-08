// const images = document.querySelectorAll('.image--box');

// images.forEach( image => {
//     image.addEventListener('click', () => {
//         removeActiveItems();
//         image.classList.add('active');
//     })
// })

// function removeActiveItems(){
//     images.forEach(image => {
//         image.classList.remove('active')
//     })
// }

function init () {
    // const images = document.querySelectorAll('.image--box');
    // this.update = function( images ) {
    //     const panels = document.querySelectorAll(images);

        
    // }
    class ExpandImages {
        constructor( images ) {
            this.images = images;
        }

        displayImage() {
            const panels = document.querySelectorAll(this.images);

            panels.forEach( panel => {
                panel.addEventListener('click', ()=> {
                    removeActiveItems();
                    panel.classList.add('active')
                })
            })

            function removeActiveItems() {
                panels.forEach( panel => {
                    panel.classList.remove('active');
                })
            }
        }

        // images.forEach( image => {
        //     image.addEventListener('click', () => {
        //         removeActiveItem()
        //         image.classList.add('active')
        //     })
        // })

        // function removeActiveItem () {
        //     images.forEach( image => {
        //         image.classList.remove('active')
        //     })
        // }
    }

    // ExpandImages()

    const expands = new ExpandImages('.image--box');
    expands.displayImage()
}

document.addEventListener('DOMContentLoaded', init);