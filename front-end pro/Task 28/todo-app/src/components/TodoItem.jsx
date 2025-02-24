export const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
      <div className="todo-item">
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>Удалить</button>
      </div>
    );
  };