import { EBoardSize, ERandomPercentage, ESimSpeed } from '@/configs';
import { AppThunk } from '@/store';

export const SET_BOARD_SIZE = 'SET_BOARD_SIZE';
export const SET_SIM_SPEED = 'SET_SIM_SPEED';
export const SET_RANDOM_FILL_PERCENTAGE = 'SET_RANDOM_FILL_PERCENTAGE';
export const SET_CONFIG_LOADING = 'SET_CONFIG_LOADING';
export const SET_CONFIG_LOADED = 'SET_CONFIG_LOADED';
export const SET_CONFIG_ERROR = 'SET_CONFIG_ERROR';

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

export const setConfigLoading = () =>
  ({
    type: SET_CONFIG_LOADING,
  } as const);

export const setConfigLoaded = () =>
  ({
    type: SET_CONFIG_LOADED,
  } as const);

export const setConfigError = (message: string) =>
  ({
    type: SET_CONFIG_ERROR,
    payload: message,
  } as const);

export const setLoadedConfig = (): AppThunk<void> => (dispatch) => {
  dispatch(setConfigLoading());

  setTimeout(() => {
    dispatch(setConfigLoaded());
  }, 3000);
};

export type configActionTypes =
  | ReturnType<typeof setBoardSize>
  | ReturnType<typeof setSimSpeed>
  | ReturnType<typeof setRandomFillPercentage>
  | ReturnType<typeof setConfigLoading>
  | ReturnType<typeof setConfigLoaded>
  | ReturnType<typeof setConfigError>;
