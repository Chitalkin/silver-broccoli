import { RootState } from '@/store';

/**
 * Возвращает номер поколения
 */
export const getGenerationNumber = (state: RootState): number =>
  state.game.generation;

/**
 * Возвращает true, если игра запущена
 */
export const getIsGameRunning = (state: RootState): boolean =>
  state.game.isGameRunning;

/**
 * Возвращает true, нужно отчистить доску
 */
export const getIsBoardClear = (state: RootState): boolean =>
  state.game.isBoardClear;
