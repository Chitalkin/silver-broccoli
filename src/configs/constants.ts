import {
  BoardSizeConfigType,
  SimSpeedConfigType,
  RandomPercentageConfigType,
} from './types';
import { ESettingsConfigItem } from './enums';
import { SettingsConfigType } from './types';

export const BOARD_SIZE_CONFIGS: BoardSizeConfigType = {
  small: {
    rows: 30,
    columns: 30,
  },
  medium: {
    rows: 40,
    columns: 40,
  },
  large: {
    rows: 50,
    columns: 50,
  },
} as const;

export const RANDOM_FILL_PERCENTAGE: RandomPercentageConfigType = {
  none: 0,
  small: 10,
  high: 20,
} as const;

export const SIM_SPEED_MS: SimSpeedConfigType = {
  slow: 1000,
  fast: 50,
} as const;

export const SettingsConfig: SettingsConfigType = {
  [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS,
  [ESettingsConfigItem.RandomFillPersentageConfig]: RANDOM_FILL_PERCENTAGE,
  [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS,
};
