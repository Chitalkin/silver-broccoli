import { Reducer } from 'redux';
import {
  BoardSizeConfigItem,
  BOARD_SIZE_CONFIGS,
  EBoardSize,
  ERandomPercentage,
  ESettingsConfigItem,
  ESimSpeed,
  RANDOM_FILL_PERCENTAGE,
  SIM_SPEED_MS,
} from '@/configs';
import { EFetchStatus } from '@/enums';
import {
  SET_BOARD_SIZE,
  SET_RANDOM_FILL_PERCENTAGE,
  SET_SIM_SPEED,
  SET_CONFIG_LOADING,
  SET_CONFIG_LOADED,
  SET_CONFIG_ERROR,
  configActionTypes,
} from './actions';

export type ConfigStateType = {
  [ESettingsConfigItem.BoardSizeConfig]: BoardSizeConfigItem;
  [ESettingsConfigItem.RandomFillPersentageConfig]: number;
  [ESettingsConfigItem.SimSpeedConfig]: number;
  loading: EFetchStatus;
  error: string;
};

export const initialState: ConfigStateType = {
  [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS[EBoardSize.Small],
  [ESettingsConfigItem.RandomFillPersentageConfig]:
    RANDOM_FILL_PERCENTAGE[ERandomPercentage.None],
  [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS[ESimSpeed.Slow],
  loading: EFetchStatus.None,
  error: '',
};

export const configReducer: Reducer<ConfigStateType, configActionTypes> = (
  state = initialState,
  action,
): ConfigStateType => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return {
        ...state,
        [ESettingsConfigItem.BoardSizeConfig]:
          BOARD_SIZE_CONFIGS[action.payload],
      };

    case SET_RANDOM_FILL_PERCENTAGE:
      return {
        ...state,
        [ESettingsConfigItem.RandomFillPersentageConfig]:
          RANDOM_FILL_PERCENTAGE[action.payload],
      };

    case SET_SIM_SPEED:
      return {
        ...state,
        [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS[action.payload],
      };

    case SET_CONFIG_LOADING:
      return {
        ...state,
        loading: EFetchStatus.Progress,
      };

    case SET_CONFIG_LOADED:
      return {
        ...state,
        loading: EFetchStatus.Success,
      };

    case SET_CONFIG_ERROR:
      return {
        ...state,
        loading: EFetchStatus.Error,
        error: action.payload,
      };

    default:
      return state;
  }
};
