const TodoItem = ({ todo, onDelete }) => (
    <li>
      {todo.text} <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
  
  export default TodoItem;