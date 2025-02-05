$(document).ready(function () {
  const todoList = $('#todo-list');
  const todoInput = $('#todo-input');
  const taskModal = new bootstrap.Modal($('#taskModal'));
  const taskText = $('#task-text');
  const editTaskModal = new bootstrap.Modal($('#editTaskModal'));
  let currentTodoId = null;

  async function fetchTodos() {
      try {
          const res = await fetch('http://localhost:5000/api/todos');
          if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

          const todos = await res.json();
          if (Array.isArray(todos)) renderTodos(todos);
          else console.error("Server response is not an array", todos);
      } catch (error) {
          console.error("Error while receiving data from the server:", error);
      }
  }

  function renderTodos(todos) {
      todoList.empty();
      todos.forEach(todo => {
          const listItem = $('<li>')
              .addClass('list-group-item d-flex justify-content-between align-items-center todo-item')
              .append(
                  $('<div>').addClass('todo-content')
                      .append(
                          $('<input type="checkbox">')
                              .addClass('todo-checkbox')
                              .prop('checked', todo.completed)
                              .on('change', function () {
                                  toggleTodoStatus(todo._id, $(this).prop('checked'));
                              }),
                          $('<span>').addClass('todo-text').text(todo.text).toggleClass('text-decoration-line-through', todo.completed),
                          $('<div>').addClass('todo-actions')
                              .append(
                                  $('<button>').addClass('btn btn-danger btn-sm').text('Видалити').on('click', function (e) {
                                      deleteTodo(todo._id);
                                      e.stopPropagation();
                                  }),
                                  $('<button>').addClass('btn btn-primary btn-sm').text('Редагувати').on('click', function (e) {
                                      openEditModal(todo);
                                      e.stopPropagation();
                                  })
                              )
                      )
              );
          todoList.append(listItem);
      });
  }

  function openEditModal(todo) {
      currentTodoId = todo._id;
      $('#edit-task-input').val(todo.text);
      $('#edit-completed-checkbox').prop('checked', todo.completed);
      $('#editTaskModal').removeAttr('aria-hidden');
      editTaskModal.show();
  }

  async function addTodo(task) {
      try {
          const res = await fetch('http://localhost:5000/api/todos', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text: task })
          });
          if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

          fetchTodos();
      } catch (error) {
          console.error("Error adding a task:", error);
      }
  }

  async function deleteTodo(id) {
      try {
          const res = await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' });
          if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

          fetchTodos();
      } catch (error) {
          console.error("Error when deleting a task:", error);
      }
  }

  async function toggleTodoStatus(id, completed) {
      try {
          await fetch(`http://localhost:5000/api/todos/${id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ completed })
          });
          fetchTodos();
      } catch (error) {
          console.error("Error updating task status:", error);
      }
  }

  async function updateTodo() {
      const updatedText = $('#edit-task-input').val().trim();
      const completed = $('#edit-completed-checkbox').prop('checked');

      if (updatedText) {
          try {
              await fetch(`http://localhost:5000/api/todos/${currentTodoId}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ text: updatedText, completed })
              });
              fetchTodos();
              $('#editTaskModal').modal('hide').removeAttr('aria-hidden');
          } catch (error) {
              console.error("Error updating task:", error);
          }
      } else {
          alert('The task cannot be empty!');
      }
  }

  fetchTodos();

  $('#add-button').on('click', function () {
      const task = todoInput.val().trim();
      if (task) {
          addTodo(task);
          todoInput.val('');
      }
  });

  $('#update-button').on('click', function () {
      updateTodo();
  });

  $('#editTaskModal').on('hidden.bs.modal', function () {
      $('#editTaskModal').attr('aria-hidden', 'true');
      $('#todo-input').focus();
  });
});