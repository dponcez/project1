function init() {
    const addBtn = document.getElementById('add');
    const notes = JSON.parse(localStorage.getItem('notes'));
    const container = document.querySelector('.container');

    if( notes ) {
        notes.forEach( note => addNote( note ));
    }

    addBtn.addEventListener('click', () => addNote( ));

    function addNote( text = '') {
        const note = document.createElement('div');
        note.classList.add('note');

        note.innerHTML = `
            <div class="tools">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="main ${ text ? '' : 'hidden' }"></div>
            <textarea class="${ text ? 'hidden' : ''}"></textarea>`;

        const main = note.querySelector('.main');
        const editBtn = note.querySelector('.edit');
        const deleteBtn = note.querySelector('.delete');
        const textarea = note.querySelector('textarea');
    
        textarea.value = text;
        main.innerHTML = marked( text );
    
        deleteBtn.addEventListener('click', () => {
            note.remove();
    
            updateLS()
        })
    
        editBtn.addEventListener('click', () => {
            textarea.classList.toggle('hidden');
            main.classList.toggle('hidden')
        })
    
        textarea.addEventListener('click', ( e ) => {
            const { value } = e.target;
    
            main.innerHTML = marked(value);
    
            updateLS()
        })

        container.appendChild( note )
    }

    function updateLS() {
        const noteText = document.querySelectorAll('textarea');
        const notes = [];

        noteText.forEach( note => notes.push( note.value ) );

        localStorage.setItem('notes', JSON.stringify( notes ))
    }

}

init()