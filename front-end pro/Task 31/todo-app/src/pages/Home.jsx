import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoRequest, clearTodosRequest } from '../features/todos/todosSlice';
import TodoList from '../components/TodoList';

const Home = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    if (text.trim()) {
      dispatch(addTodoRequest({ text, completed: false }));
      setText('');
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={() => dispatch(clearTodosRequest())}>Clear</button>
      <TodoList />
    </div>
  );
};

export default Home;