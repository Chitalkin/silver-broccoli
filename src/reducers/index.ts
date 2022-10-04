import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';
import { configReducer } from './config-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  config: configReducer,
});

export {
  setBoardSize,
  setRandomFillPercentage,
  setSimSpeed,
} from './config-reducer';
export { setUserIsLogged, setUserName } from './user-reducer';
