import { state } from '@/tests/mocks';
import {
  getBoardSize,
  getGameSpeed,
  getIsGameRunning,
  getPopulation,
  getRandomFillPersentage,
} from '../board-selectors';

describe('Board selectors', () => {
  describe('getBoardSize', () => {
    it('should return the correct board size', () => {
      expect(getBoardSize(state)).toEqual(state.config.boardSizeConfig);
    });
  });

  describe('getRandomFillPersentage', () => {
    it('should return the correct random percentage', () => {
      expect(getRandomFillPersentage(state)).toEqual(
        state.config.randomFillPersentageConfig,
      );
    });
  });

  describe('getPopulation', () => {
    it('should return the expected population', () => {
      expect(getPopulation(state)).toEqual(state.game.population);
    });
  });

  describe('getIsGameRunning', () => {
    it('should return the expected game status', () => {
      expect(getIsGameRunning(state)).toEqual(state.game.isGameRunning);
    });
  });

  describe('getGameSpeed', () => {
    it('should return the expected game speed', () => {
      expect(getGameSpeed(state)).toEqual(state.config.simSpeedConfig);
    });
  });
});
