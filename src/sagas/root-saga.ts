import { getUserName } from '@/selectors';
import { all, select, takeEvery } from 'redux-saga/effects';
import { SET_USER_NAME } from '@/reducers/user-reducer/actions';

function* helloSaga() {
  const name: string = yield select(getUserName);

  if (name) {
    alert(`Hi, ${name}`);
  }
}

function* userSaga() {
  yield takeEvery(SET_USER_NAME, helloSaga);
}

export function* rootSaga() {
  yield all([userSaga()]);
}
