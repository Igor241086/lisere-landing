import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { list: [], loading: false, error: null },
  reducers: {
    fetchTodosRequest: (state) => { state.loading = true; },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoSuccess: (state, action) => { state.list.push(action.payload); },
    deleteTodoSuccess: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    updateTodoSuccess: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    clearTodosSuccess: (state) => { state.list = []; }
  },
});

export const {
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoSuccess, deleteTodoSuccess, updateTodoSuccess, clearTodosSuccess
} = todosSlice.actions;
export default todosSlice.reducer;