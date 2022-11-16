import { Reducer } from 'redux';
import { BoardSizeConfigItem } from '@/configs/types';
import {
  EBoardSize,
  ERandomPercentage,
  ESettingsConfigItem,
  ESimSpeed,
} from '@/configs/enums';
import {
  BOARD_SIZE_CONFIGS,
  RANDOM_FILL_PERCENTAGE,
  SIM_SPEED_MS,
} from '@/configs/constants';
import {
  SET_BOARD_SIZE,
  SET_RANDOM_FILL_PERCENTAGE,
  SET_SIM_SPEED,
  ConfigActionTypes,
} from './actions';

export type ConfigStateType = {
  [ESettingsConfigItem.BoardSizeConfig]: BoardSizeConfigItem;
  [ESettingsConfigItem.RandomFillPersentageConfig]: number;
  [ESettingsConfigItem.SimSpeedConfig]: number;
};

export const initialState: ConfigStateType = {
  [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS[EBoardSize.Small],
  [ESettingsConfigItem.RandomFillPersentageConfig]:
    RANDOM_FILL_PERCENTAGE[ERandomPercentage.None],
  [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS[ESimSpeed.Slow],
};

export const configReducer: Reducer<ConfigStateType, ConfigActionTypes> = (
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

    default:
      return state;
  }
};
