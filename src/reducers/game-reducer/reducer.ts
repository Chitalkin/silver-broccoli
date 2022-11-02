import { Reducer } from 'redux';
import {
  SET_GAME_START,
  SET_GAME_STOP,
  SET_INCREASE_GENERATION,
  GameActionTypes,
  RESET_GENERATION,
  CLEAR_BOARD,
} from './actions';

export type GameStateType = {
  generation: number;
  isGameRunning: boolean;
  isBoardClear: boolean;
};

export const initialState: GameStateType = {
  generation: 0,
  isGameRunning: false,
  isBoardClear: false,
};

export const gameReducer: Reducer<GameStateType, GameActionTypes> = (
  state = initialState,
  action,
): GameStateType => {
  switch (action.type) {
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

    case RESET_GENERATION:
      return {
        ...state,
        generation: 0,
      };

    case CLEAR_BOARD:
      return {
        ...state,
        isBoardClear: action.payload,
      };

    default:
      return state;
  }
};
