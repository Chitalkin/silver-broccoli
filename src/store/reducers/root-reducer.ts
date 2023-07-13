import { combineReducers } from 'redux';
import { configReducer } from './config-reducer/reducer';
import { gameReducer } from './game-reducer';

export const rootReducer = combineReducers({
  config: configReducer,
  game: gameReducer,
});
