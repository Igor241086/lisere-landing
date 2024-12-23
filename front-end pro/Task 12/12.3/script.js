const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.classList.add('list-group-item');
    taskList.appendChild(newTask);

    taskInput.value = '';
});

taskList.addEventListener('click', function (event) {

    if (event.target.tagName === 'LI') {
        if (confirm('Delete this task?')) {
            event.target.remove();
        }
    }
});