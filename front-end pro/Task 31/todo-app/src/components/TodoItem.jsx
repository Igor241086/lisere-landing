import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoRequest, updateTodoRequest } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(updateTodoRequest({ id: todo.id, updates: { completed: !todo.completed } }))}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodoRequest(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;