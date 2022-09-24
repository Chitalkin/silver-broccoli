import {
  BoardSizeConfigType,
  SimSpeedConfigType,
  RandomPercentageConfigType,
} from './types';
import { ESettingsConfigItem } from './enums';
import { SettingsConfigType } from './types';

const BOARD_SIZE_CONFIGS: BoardSizeConfigType = {
  small: {
    rows: 30,
    columns: 50,
  },
  medium: {
    rows: 35,
    columns: 55,
  },
  large: {
    rows: 40,
    columns: 60,
  },
} as const;

const RANDOM_FILL_PERCENTAGE: RandomPercentageConfigType = {
  none: 0,
  small: 10,
  middle: 15,
  high: 20,
} as const;

const SIM_SPEED_MS: SimSpeedConfigType = {
  slow: 300,
  medium: 200,
  fast: 100,
} as const;

export const SettingsConfig: SettingsConfigType = {
  [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS,
  [ESettingsConfigItem.RandomFillPersentageConfig]: RANDOM_FILL_PERCENTAGE,
  [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS,
};
