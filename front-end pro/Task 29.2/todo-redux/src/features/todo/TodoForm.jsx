import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 3) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть завдання..."
      />
      <button type="submit">Додати</button>
    </form>
  );
};