document.addEventListener('DOMContentLoaded', () => {
    const insert = document.getElementById('insert');

    window.addEventListener('keydown', ( event ) => {
        // let div = document.createElement('div');
        // div.className = 'key';
        const divs = document.querySelectorAll('.key');
        const small = document.createElement('small');
        const small2 = document.createElement('small');
        let element = divs;

        for( let i = 0; i < element.length; i++ ) {
            if( event.key === ' ' ) {
                element[i].innerHTML = 'Space';
                small.innerHTML = "event.key";
                // i++
            }else {
                element[i].innerHTML = event.key;
                small.innerHTML = 'event.key';
            }

            if ( event.keypress ) {
              element[i].innerHTML = event.keypress;
              small2.innerHTML = "event.keyCode";
            }

            element[i].appendChild(small);
            element[i].appendChild(small2);
            insert.appendChild(element[i])
        }

        // divs.forEach(elem => {
        //     const empty = ''
        //     switch (event.key === empty) {
        //         case event:
        //             elem.innerHTML = '';
        //             break;
        //         case event === event.key:
        //             elem.innerHTML = event.key;
        //             small.innerHTML = 'event.key';
        //             break;
        //         case event.keypress:
        //             elem.innerHTML = event.keypress
        //             small2.innerHTML = 'event.keyCode';
        //             break;

        //         default:
        //             elem.innerHTML = "Space";
        //             break;
        //     }

        //     for(let i = 0; i < divs.length; i++) {
        //         element = divs[i]
        //         element.appendChild(small);
        //         element.appendChild(small2);
        //         insert.appendChild(element);
        //     }
        //     // if (event.key === '' ) {
        //     //     elem.innerHTML = 'Space'
        //     // }else {
        //     //     elem.innerHTML = event.key
        //     // }
        //     // small.innerHTML = 'event.key';
        //     // elem.appendChild(small);
        //     // insert.appendChild(elem);
        //     // return elem
        // })

        // insert.innerHTML = `<div class="key">${event.key === ' ' ? 'Space' : event.key}
        //     <small>event.key</small>
        // </div>
        // <div class="key">${event.keypress}
        //     <small>event.keyCode</small>
        // </div>
        // <div class="key">${event.code}
        //     <small>event.code</small>
        // </div>
        // `
    })

})