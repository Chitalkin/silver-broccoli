import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './reducers/root-reducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      save({
        ignoreStates: ['game'],
      }),
      logger,
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
