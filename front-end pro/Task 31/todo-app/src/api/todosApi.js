import { api } from "./api";

export const fetchTodos = () => api.get("/todos");
export const addTodo = (todo) => api.post("/todos", todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);