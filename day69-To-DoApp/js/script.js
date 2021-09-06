(() => {
    // Task function
    function task() {
        const todo_text = document.getElementById('todo');
        const submit_btn = document.getElementById('btn');
        const todo_task = document.querySelector('.to--do__task');

        submit_btn.addEventListener('click', createTodoTask);

        function createTodoTask( ) {

            // Add item on the task
            let taskItem = todo_text.value;

            if( taskItem.trim()) {
                // create new elements
                let newItem = document.createElement('li');
                let removeBtn = document.createElement('button');
                let spanElement = document.createElement('span');

                if( todo_text.value !== '' ) {
                    todo_task.style.height = '20rem'
                } 

                // add item on span
                spanElement.innerHTML = taskItem.toUpperCase();

                removeBtn.classList.add('delete');
                removeBtn.innerHTML = 'done';

                // clear input element
                todo_text.value = '';
                todo_text.focus();
                
                // add node to the end of the specified list
                newItem.appendChild( spanElement );
                newItem.appendChild( removeBtn );
                
                todo_task.appendChild( newItem );
                
                // add remove option for the new item
                removeBtn.addEventListener('click', removeItems );
                
            }
           
        }

        function removeItems( e ) {
            const removeItem = e.target.parentNode;       
            todo_task.removeChild( removeItem );

            if ( todo_task.removeChild ) {
                todo_task.style.height = "auto";
            }

        }

        createTodoTask()
    }

    task()
})()