import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodoSuccess } from "../features/todos/todosSlice";
import TodoList from "../components/TodoList";

const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodoSuccess({ id: Date.now(), text }));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList />
    </div>
  );
};

export default Home;