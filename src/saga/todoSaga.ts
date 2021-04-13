import { RootState } from "../store/reducers/index";
import axios from "axios";
import { put, takeEvery, call, select } from "redux-saga/effects";
import { TodoActionTypes } from "../types/todo";

let state: RootState;

function* getState() {
  state = yield select((state: RootState) => state);
}

// const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const axiosTodofromApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos", {
    params: { _page: state?.todo?.page, _limit: state?.todo?.limit },
  });

function* todoCall(): Generator {
  try {
    yield getState();

    yield put({ type: TodoActionTypes.FETCH_TODOS });
    
    const data: any = yield call(axiosTodofromApi);
    
    // yield call(wait, 1000);
    // yield wait(500);

    yield put({
      type: TodoActionTypes.FETCH_TODOS_SUCCESS,
      payload: data.data,
    });
  } catch (e) {
    yield put({
      type: TodoActionTypes.FETCH_TODOS_ERROR,
      payload: "Произошла ошибка при загрузке списка дел",
    });
  }
}

export function* WatcherForTodo(): Generator {
  yield takeEvery(TodoActionTypes.CALL_TODO, todoCall);
}
