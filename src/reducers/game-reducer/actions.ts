export const SET_GAME_START = 'SET_GAME_START';
export const SET_GAME_STOP = 'SET_GAME_STOP';
export const SET_GAME_CLEAR = 'SET_GAME_CLEAR'; // << вызывает setGameStop и запускает очистку доски
export const SET_POPULATION = 'SET_GAME_GENERATION';
export const SET_GENERATION = 'SET_GENERATION';

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

export const setPopulation = (population: number[][]) =>
  ({
    type: SET_POPULATION,
    payload: population,
  } as const);

export const setGeneration = (generation: number) =>
  ({
    type: SET_GENERATION,
    payload: generation,
  } as const);

export type GameActionTypes =
  | ReturnType<typeof setGameStart>
  | ReturnType<typeof setGameStop>
  | ReturnType<typeof setGameClear>
  | ReturnType<typeof setPopulation>
  | ReturnType<typeof setGeneration>;
