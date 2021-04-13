import createSagaMiddleware  from 'redux-saga';
import { applyMiddleware, createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import rootWatcher from '../../saga';

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)
