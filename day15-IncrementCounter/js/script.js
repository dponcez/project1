document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');

    counts.forEach( counter => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const incrementCount = target / 200;

            if( count < target ) {
                counter.innerText = `${ Math.ceil( count + incrementCount ) }`;
                setTimeout( updateCounter, 1 )

            }else {
                counter.innerText = target
            }
        }

        updateCounter()
    })

})