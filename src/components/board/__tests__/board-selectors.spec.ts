import {
  BOARD_SIZE_CONFIGS,
  EBoardSize,
  ERandomPercentage,
  RANDOM_FILL_PERCENTAGE,
} from '@/configs';
import { state } from '@/tests/mocks';
import { getBoardSize, getRandomFillPersentage } from '../board-selectors';

describe('Board selectors', () => {
  describe('getBoardSize', () => {
    it('should return the correct board size', () => {
      expect(getBoardSize(state)).toEqual(BOARD_SIZE_CONFIGS[EBoardSize.Small]);
    });
  });

  describe('getRandomFillPersentage', () => {
    it('should return the correct random percentage', () => {
      expect(getRandomFillPersentage(state)).toEqual(
        RANDOM_FILL_PERCENTAGE[ERandomPercentage.None],
      );
    });
  });
});
