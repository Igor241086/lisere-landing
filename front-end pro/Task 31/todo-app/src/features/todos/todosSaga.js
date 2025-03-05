import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTodos, addTodo, deleteTodo } from "../../api/todosApi";
import { fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess } from "./todosSlice";

function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodos);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    console.error("Fetch todos error:", error);
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(addTodo, action.payload);
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    console.error("Add todo error:", error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(deleteTodo, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    console.error("Delete todo error:", error);
  }
}

export function* todosSaga() {
  yield takeEvery("todos/fetchTodosStart", fetchTodosSaga);
  yield takeEvery("todos/addTodoSuccess", addTodoSaga);
  yield takeEvery("todos/deleteTodoSuccess", deleteTodoSaga);
}