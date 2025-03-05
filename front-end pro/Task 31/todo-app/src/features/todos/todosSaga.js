import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchTodos, addTodo, deleteTodo, updateTodo, clearTodos } from '../../api/todosApi';
import {
  fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure,
  addTodoSuccess, deleteTodoSuccess, updateTodoSuccess, clearTodosSuccess
} from './todosSlice';

function* handleFetchTodos() {
  try {
    const todos = yield call(fetchTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* handleAddTodo(action) {
  const newTodo = yield call(addTodo, action.payload);
  yield put(addTodoSuccess(newTodo));
}

function* handleDeleteTodo(action) {
  yield call(deleteTodo, action.payload);
  yield put(deleteTodoSuccess(action.payload));
}

function* handleUpdateTodo(action) {
  const updatedTodo = yield call(updateTodo, action.payload.id, action.payload.updates);
  yield put(updateTodoSuccess(updatedTodo));
}

function* handleClearTodos() {
  yield call(clearTodos);
  yield put(clearTodosSuccess());
}

export default function* todosSaga() {
  yield takeLatest('todos/fetchTodosRequest', handleFetchTodos);
  yield takeLatest('todos/addTodoRequest', handleAddTodo);
  yield takeLatest('todos/deleteTodoRequest', handleDeleteTodo);
  yield takeLatest('todos/updateTodoRequest', handleUpdateTodo);
  yield takeLatest('todos/clearTodosRequest', handleClearTodos);
}