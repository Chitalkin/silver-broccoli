import { BoardSizeConfigItem, ESettingsConfigItem } from '@/configs';
import { RootState } from '@/store';

/**
 * Возвращает размеры доски
 */
export const getSizeConfig = (state: RootState): BoardSizeConfigItem =>
  state.config[ESettingsConfigItem.BoardSizeConfig];

/**
 * Возвращает процент заполнения доски
 */
export const getPersentageConfig = (state: RootState): number =>
  state.config[ESettingsConfigItem.RandomFillPersentageConfig];

/**
 * Возвращает скорость генерации новой популяции
 */
export const getSpeedConfig = (state: RootState): number =>
  state.config[ESettingsConfigItem.SimSpeedConfig];
