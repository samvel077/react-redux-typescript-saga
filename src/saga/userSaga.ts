import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { UserActionTypes } from "../types/user";

const axiosUserFromApi = () =>
  axios("https://jsonplaceholder.typicode.com/users");

function* userCall(): Generator {
  try {
    yield put({ type: UserActionTypes.FETCH_USERS });

    const data: any = yield call(axiosUserFromApi);

    yield put({
      type: UserActionTypes.FETCH_USERS_SUCCESS,
      payload: data.data,
    });
  } catch (e) {
    yield put({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Произошла ошибка при загрузке списка дел",
    });
  }
}

export function* WatcherForUsers(): Generator {
  yield takeEvery(UserActionTypes.CALL_USER, userCall);
}
