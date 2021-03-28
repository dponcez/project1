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

            if( todo && todo.completed ) {
                todoItem.classList.add('completed')
            }

            listItem.addEventListener('click', ( ) => {
                todoItem.classList.toggle('completed')
                // listItem.remove()
            })

            trash.addEventListener('click', updated)

            listItem.appendChild( todoItem );
            listItem.appendChild( trash );

            input.value = '';

            todoList.appendChild( listItem )
        }
    }

    function updated( e ) {
        listItems = document.querySelectorAll('.list--item');
        listItems.forEach( element => {
            element.remove();
        })
        // const listItems = document.querySelectorAll('.list--item');
        // let todos = [];

        // listItems.forEach( todoElement => {
        //     todos.push({
        //         text: todoElement.innerText,
        //         completed: todoElement.classList.contains('completed')
        //     })
        //     let taskItem = e.target.parentElement;

        //     todoList.remove(  todoElement )
        // })

        // localStorage.setItem('todos', JSON.stringify( todos ));
    }
})