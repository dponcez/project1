document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.random--container');
    const URL = 'https://source.unsplash.com/random/';
    const row = 7;

    const randomSize = () => {
        return `${randomNumber()}x${randomNumber()}`
    }

    const randomNumber = () => {
        return Math.floor( Math.random() * 10 ) + 300;
    }

    for( let i = 0; i < row * 3; i++ ) {
        const img = document.createElement('img');
        img.src = `${URL}${randomSize()}`
        container.appendChild( img  )
    }
})