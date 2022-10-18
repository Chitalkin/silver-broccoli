import { combineReducers } from 'redux';
import { configReducer } from './config-reducer';
import { gameReducer } from './game-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  config: configReducer,
  game: gameReducer,
  user: userReducer,
});

export {
  setBoardSize,
  setRandomFillPercentage,
  setSimSpeed,
} from './config-reducer';
export {
  setGameClear,
  setGameStart,
  setGameStop,
  setGeneration,
  setPopulation,
} from './game-reducer';
export { setUserIsLogged, setUserName } from './user-reducer';
