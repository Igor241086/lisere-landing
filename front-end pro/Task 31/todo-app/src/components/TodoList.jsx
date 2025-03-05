import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : list.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;