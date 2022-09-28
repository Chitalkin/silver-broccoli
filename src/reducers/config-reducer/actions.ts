import { EBoardSize, ERandomPercentage, ESimSpeed } from '@/configs';

export const SET_BOARD_SIZE = 'SET_BOARD_SIZE';
export const SET_SIM_SPEED = 'SET_SIM_SPEED';
export const SET_RANDOM_FILL_PERCENTAGE = 'SET_RANDOM_FILL_PERCENTAGE';

export const setBoardSize = (boardSize: EBoardSize) =>
  ({
    type: SET_BOARD_SIZE,
    payload: boardSize,
  } as const);

export const setSimSpeed = (simSpeed: ESimSpeed) =>
  ({
    type: SET_SIM_SPEED,
    payload: simSpeed,
  } as const);

export const setRandomFillPercentage = (percentage: ERandomPercentage) =>
  ({
    type: SET_RANDOM_FILL_PERCENTAGE,
    payload: percentage,
  } as const);

export type configActionTypes =
  | ReturnType<typeof setBoardSize>
  | ReturnType<typeof setSimSpeed>
  | ReturnType<typeof setRandomFillPercentage>;
