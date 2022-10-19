import { RootState } from '@/store';

/**
 * Возвращает номер поколения
 */
export const getGenerationNumber = (state: RootState): number =>
  state.game.generation;

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
