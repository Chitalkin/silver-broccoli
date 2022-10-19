import { mockState } from '@/tests/mocks';
import {
  getGenerationNumber,
  getIsGameRunning,
  getPopulation,
} from '..//game-selectors';

describe('Game selectors', () => {
  describe('getPopulation', () => {
    it('should return the correct user name', () => {
      expect(getGenerationNumber(mockState)).toEqual(10);
    });
  });

  describe('getPopulation', () => {
    it('should return the expected population', () => {
      expect(getPopulation(mockState)).toEqual(mockState.game.population);
    });
  });

  describe('getIsGameRunning', () => {
    it('should return the expected game status', () => {
      expect(getIsGameRunning(mockState)).toEqual(mockState.game.isGameRunning);
    });
  });
});
