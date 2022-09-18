import { SettingsConfig } from '../constants';
import { ESettingsConfigItem } from '../enums';
import { BoardSizeConfigItem } from '../types';

/**
 * @param config название нужного конфига
 * @returns дефолтное значение для запрашиваемого конфига
 */
export const useDefaultConfigValue = (
  config: ESettingsConfigItem,
): BoardSizeConfigItem | number => {
  switch (config) {
    case ESettingsConfigItem.BoardSizeConfig:
      return SettingsConfig.boardSizeConfig.small;

    case ESettingsConfigItem.RandomFillPersentageConfig:
      return SettingsConfig.randomFillPersentageConfig.none;

    case ESettingsConfigItem.SimSpeedConfig:
      return SettingsConfig.simSpeedConfig.slow;

    default:
      throw new Error('Invalid config');
  }
};
