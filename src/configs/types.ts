import {
  EBoardSize,
  ERandomPercentage,
  ESimSpeed,
  ESettingsConfigItem,
} from './enums';

export type BoardSizeConfigItem = {
  rows: number;
  columns: number;
};

export type BoardSizeConfigType = {
  [k in EBoardSize]?: BoardSizeConfigItem;
};

export type RandomPercentageConfigType = {
  [k in ERandomPercentage]: number;
};

export type SimSpeedConfigType = {
  [k in ESimSpeed]: number;
};

export type SettingsConfigType = {
  [ESettingsConfigItem.BoardSizeConfig]?: BoardSizeConfigType;
  [ESettingsConfigItem.RandomFillPersentageConfig]: RandomPercentageConfigType;
  [ESettingsConfigItem.SimSpeedConfig]: SimSpeedConfigType;
};
