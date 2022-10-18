import { state } from '@/tests/mocks';
import { getGameGeneration } from '../controls-selectors';

describe('Controls selectors', () => {
  describe('getGameGeneration', () => {
    it('should return the expected game generation', () => {
      expect(getGameGeneration(state)).toEqual(state.game.generation);
    });
  });
});
