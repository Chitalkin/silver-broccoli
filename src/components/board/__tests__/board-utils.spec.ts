import { getCurrentBoardConfig } from '../board-utils';
import { BOARD_SIZE_CONFIGS } from '../board-constants';
import { EBoardSize } from '../board-enums';

describe('board-utils', () => {
  describe('getCurrentBoardConfig', () => {
    it('should return config for small board if size is small', () => {
      expect(getCurrentBoardConfig(EBoardSize.Small)).toEqual(
        BOARD_SIZE_CONFIGS.small,
      );
    });

    it('should return config for medium board if size is medium', () => {
      expect(getCurrentBoardConfig(EBoardSize.Medium)).toEqual(
        BOARD_SIZE_CONFIGS.medium,
      );
    });

    it('should return config for large board if size is large', () => {
      expect(getCurrentBoardConfig(EBoardSize.Large)).toEqual(
        BOARD_SIZE_CONFIGS.large,
      );
    });
  });
});
