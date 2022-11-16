import { all, select, takeEvery } from 'redux-saga/effects';
import { getUserName } from '../selectors';
import { SET_USER_NAME } from '../reducers/user-reducer/actions';

export function* helloSaga() {
  const name: string = yield select(getUserName);

  if (name) {
    alert(`Hi, ${name}`);
  }
}

export function* userSaga() {
  yield takeEvery(SET_USER_NAME, helloSaga);
}

export function* rootSaga() {
  yield all([userSaga()]);
}
