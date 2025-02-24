import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <div className="app">
      <h1>TODO List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}