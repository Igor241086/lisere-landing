import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodosStart } from "../features/todos/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosStart());
  }, [dispatch]);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;