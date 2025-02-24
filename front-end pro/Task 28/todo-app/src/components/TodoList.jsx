import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <p>Задач пока нет</p>
      )}
    </div>
  );
};