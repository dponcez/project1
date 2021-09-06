document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.getElementById('input');
    const todoList = document.getElementById('todos');

    const todos = JSON.parse( localStorage.getItem('todos') );

    if( todos ) {
        todos.forEach( todo => addTodoList( todo ) )
    }

    form.addEventListener('submit', ( e ) => {
        e.preventDefault();

        addTodoList();
    })

    function addTodoList( todo ) {
        let todoText = input.value;

        if( todo ) {
            todoText = todo.text;
        }

        if( todoText ) {
            const todoItem = document.createElement('li');
            const listItem = document.createElement('div');
            const trash = document.createElement('i');

            listItem.className = 'list--item';
            trash.className = 'fas fa-trash';

            todoItem.innerText = todoText

            if( todoItem.innerText === todoText ){
                todoList.style.height = '40vh'
            }

            if( todo && todo.completed ) {
                todoItem.classList.add('completed')
            }

            listItem.addEventListener('click', ( ) => {
                todoItem.classList.toggle('completed')
            })

            trash.addEventListener('click', removeTodoItems)

            listItem.appendChild( todoItem );
            listItem.appendChild( trash );

            input.value = '';

            todoList.appendChild( listItem )
        }
    }

    function removeTodoItems( e ) {
      
        const element = {
            parentNode: e.target.parentElement
        }

        const { parentNode } = element;

        if( parentNode.classList.contains('list--item') ) {
            const parent = parentNode;
           
            todoList.style.height = 'auto';
            todoList.removeChild( parent)
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        
    }
})