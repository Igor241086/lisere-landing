document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    const getTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        return todos;
    };

    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        const todos = getTodos();
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${index}">
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete" data-index="${index}">Видалити</button>
            `;
            todosWrapper.appendChild(li);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todos = getTodos();
        const newTodo = {
            text: input.value,
            completed: false,
        };
        todos.push(newTodo);
        saveTodos(todos);
        renderTodos();
        form.reset();
    });

    todosWrapper.addEventListener('click', (e) => {
        const todos = getTodos();
        const index = e.target.dataset.index;

        if (e.target.classList.contains('todo-item__delete')) {
            todos.splice(index, 1);
        }

        if (e.target.type === 'checkbox') {
            todos[index].completed = e.target.checked;
        }

        saveTodos(todos);
        renderTodos();
    });

    renderTodos();
});