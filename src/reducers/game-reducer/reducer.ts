import { Reducer } from 'redux';
import {
  SET_GAME_CLEAR,
  SET_GAME_START,
  SET_GAME_STOP,
  SET_GENERATION,
  SET_POPULATION,
  GameActionTypes,
} from './actions';

export type GameStateType = {
  generation: number;
  isGameRunning: boolean;
  intervalId: number | null;
  population: number[][] | null;
};

export const initialState: GameStateType = {
  generation: 0,
  isGameRunning: false,
  intervalId: null,
  population: null,
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
        intervalId: null,
      };

    case SET_GENERATION:
      return {
        ...state,
        generation: action.payload,
      };

    case SET_POPULATION:
      return {
        ...state,
        population: action.payload,
      };

    default:
      return state;
  }
};
