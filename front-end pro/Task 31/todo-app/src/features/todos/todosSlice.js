import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { list: [], loading: false },
  reducers: {
    fetchTodosStart: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    addTodoSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodoSuccess: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { fetchTodosStart, fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess } = todosSlice.actions;
export default todosSlice.reducer;