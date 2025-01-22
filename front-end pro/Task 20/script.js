$(document).ready(function () {
    const todoList = $('#todo-list');
    const todoInput = $('#todo-input');
    const taskModal = new bootstrap.Modal($('#taskModal'));
    const taskText = $('#task-text');
  
    $('#add-button').on('click', function () {
      const task = todoInput.val().trim();
      if (task) {
        const listItem = $('<li>')
          .addClass('list-group-item d-flex justify-content-between align-items-center')
          .text(task)
          .append(
            $('<button>')
              .addClass('btn btn-danger btn-sm delete-btn')
              .text('Видалити')
          );
        todoList.append(listItem);
        todoInput.val('');
      }
    });
  
    todoList.on('click', '.delete-btn', function (e) {
      $(this).closest('li').remove();
      e.stopPropagation();
    });
  
    todoList.on('click', '.list-group-item', function () {
      const task = $(this).clone().children().remove().end().text().trim();
      taskText.text(task);
      taskModal.show();
    });
  });