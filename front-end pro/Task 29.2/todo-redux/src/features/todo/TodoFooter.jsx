import { useSelector } from "react-redux";

export const TodoFooter = () => {
  const count = useSelector((state) => state.todos.list.length);

  return <div className="todo-footer">Усього: {count}</div>;
};