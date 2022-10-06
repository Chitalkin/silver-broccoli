import { BoardSizeConfigItem, ESettingsConfigItem } from '@/configs';
import { RootState } from '@/store';

/**
 * Возвращает размеры доски
 */
export const getBoardSize = (state: RootState): BoardSizeConfigItem =>
  state.config[ESettingsConfigItem.BoardSizeConfig];

/**
 * Возвращает процент заполнения доски
 */
export const getRandomFillPersentage = (state: RootState): number =>
  state.config[ESettingsConfigItem.RandomFillPersentageConfig];
