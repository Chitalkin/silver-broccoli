import { RootState } from '@/store';

/**
 * Возвращает номер поколения
 */
export const getGameGeneration = (state: RootState): number =>
  state.game.generation;
