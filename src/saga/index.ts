import {all} from 'redux-saga/effects'
import { WatcherForTodo } from './todoSaga'
import { WatcherForUsers } from './userSaga'

export default function* rootWatcher() {
  yield all([WatcherForTodo(), WatcherForUsers()])
}