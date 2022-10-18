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

/**
 * Возвращает скорость генерации новой популяции
 */
export const getGameSpeed = (state: RootState): number =>
  state.config[ESettingsConfigItem.SimSpeedConfig];

/**
 * Возвращает состояние популяции
 */
export const getPopulation = (state: RootState): number[][] | null =>
  state.game.population;

/**
 * Возвращает true, если игра запущена
 */
export const getIsGameRunning = (state: RootState): boolean =>
  state.game.isGameRunning;
