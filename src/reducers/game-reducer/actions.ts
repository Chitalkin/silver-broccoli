export const SET_GAME_START = 'SET_GAME_START';
export const SET_GAME_STOP = 'SET_GAME_STOP';
export const SET_GAME_CLEAR = 'SET_GAME_CLEAR';
export const SET_INCREASE_GENERATION = 'SET_GENERATION';

export const setGameStart = () =>
  ({
    type: SET_GAME_START,
  } as const);

export const setGameStop = () =>
  ({
    type: SET_GAME_STOP,
  } as const);

export const setGameClear = () =>
  ({
    type: SET_GAME_CLEAR,
  } as const);

export const setIncreaseGeneration = () =>
  ({
    type: SET_INCREASE_GENERATION,
  } as const);

export type GameActionTypes =
  | ReturnType<typeof setGameStart>
  | ReturnType<typeof setGameStop>
  | ReturnType<typeof setGameClear>
  | ReturnType<typeof setIncreaseGeneration>;
