import { mockState } from '@/tests/mocks';
import { getGenerationNumber, getIsGameRunning } from '..//game-selectors';

describe('Game selectors', () => {
  describe('getGenerationNumber', () => {
    it('should return the correct user name', () => {
      expect(getGenerationNumber(mockState)).toEqual(10);
    });
  });

  describe('getIsGameRunning', () => {
    it('should return the expected game status', () => {
      expect(getIsGameRunning(mockState)).toEqual(mockState.game.isGameRunning);
    });
  });
});
