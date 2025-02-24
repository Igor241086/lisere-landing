import { TodoForm } from "./features/todo/TodoForm";
import { TodoList } from "./features/todo/TodoList";
import { TodoFooter } from "./features/todo/TodoFooter";

export default function App() {
  return (
    <div className="app">
      <h1>TODO</h1>
      <TodoForm />
      <h2>TODOS</h2>
      <TodoList />
      <TodoFooter />
    </div>
  );
}