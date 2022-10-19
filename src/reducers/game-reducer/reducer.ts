import { Reducer } from 'redux';
import {
  SET_GAME_CLEAR,
  SET_GAME_START,
  SET_GAME_STOP,
  SET_INCREASE_GENERATION,
  GameActionTypes,
} from './actions';

export type GameStateType = {
  generation: number;
  isGameRunning: boolean;
};

export const initialState: GameStateType = {
  generation: 0,
  isGameRunning: false,
};

export const gameReducer: Reducer<GameStateType, GameActionTypes> = (
  state = initialState,
  action,
): GameStateType => {
  switch (action.type) {
    case SET_GAME_CLEAR:
      return initialState;

    case SET_GAME_START:
      return {
        ...state,
        isGameRunning: true,
      };

    case SET_GAME_STOP:
      return {
        ...state,
        isGameRunning: false,
      };

    case SET_INCREASE_GENERATION:
      return {
        ...state,
        generation: ++state.generation,
      };

    default:
      return state;
  }
};
