$(document).ready(() => {
  const todoList = $('#todo-list');
  const todoInput = $('#todo-input');
  const taskModal = new bootstrap.Modal($('#taskModal'));
  const taskText = $('#task-text');
  $('#add-button').on('click', () => {
    const task = todoInput.val().trim();
    if (task) {
      const listItem = $(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${task}
            <button class="btn btn-danger btn-sm delete-btn">Видалити</button>
          </li>
        `);
      todoList.append(listItem);
      todoInput.val('');
    }
  });
  todoList.on('click', '.delete-btn', e => {
    $(e.currentTarget).closest('li').remove();
    e.stopPropagation();
  });
  todoList.on('click', '.list-group-item', e => {
    const task = $(e.currentTarget).clone().children().remove().end().text().trim();
    taskText.text(task);
    taskModal.show();
  });
});
