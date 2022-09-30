import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '@/reducers';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
