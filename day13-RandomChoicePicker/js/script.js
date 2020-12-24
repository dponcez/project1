const init = () => {
    const textarea = document.getElementById('choice--picker');
    const tagsElement = document.getElementById('tags');

    textarea.focus();

    textarea.addEventListener('keyup', ( e ) => {

        createTags( e.target.value );

        if( e.key === 'Enter' ) {
            setTimeout(() => {
                e.target.value = ' ';
            }, 10);

            randomSelect()
        }
    });

    const createTags = ( input ) => {
        const tags = input.split(',').filter( tag => tag.trim() !== '' ).map( tag => tag.trim() );

        tagsElement.innerHTML = ' ';

        tags.forEach( tag => {
            // create a new element
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = tag;

            tagsElement.appendChild( span );
        });
    }

    const randomSelect = () => {
        const currentTime = 30;

        const interval = setInterval( () => {
            const randomTags = pickRandomTags();

            highlight( randomTags );

            setTimeout( ( ) => {
                unHighlight( randomTags );
            }, 100);

        }, 100);

        setTimeout( ( ) => {
            clearInterval( interval );

            setTimeout( ( ) => {
                const randomTag = pickRandomTags();

                highlight( randomTag )
            }, 100)
        }, currentTime * 100)
    }

    const pickRandomTags = (  ) => {
        const tags = document.querySelectorAll('.tag');
        return tags[Math.floor(Math.random() * tags.length)];
    }

    const highlight = ( tags ) => {
        tags.classList.add("highlight");
    }

    const unHighlight = ( tags ) => {
        tags.classList.remove("highlight");
    }

}

document.addEventListener('DOMContentLoaded', init);