import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {todo}
        </div>
      ))}
    </div>
  );
};