import { EBoardSize, SettingsConfig } from '@/configs';
import { getCurrentBoardConfig } from '../board-utils';

describe('board-utils', () => {
  describe('getCurrentBoardConfig', () => {
    it('should return config for small board if size is small', () => {
      expect(getCurrentBoardConfig(EBoardSize.Small)).toEqual(
        SettingsConfig.boardSizeConfig.small,
      );
    });

    it('should return config for medium board if size is medium', () => {
      expect(getCurrentBoardConfig(EBoardSize.Medium)).toEqual(
        SettingsConfig.boardSizeConfig.medium,
      );
    });

    it('should return config for large board if size is large', () => {
      expect(getCurrentBoardConfig(EBoardSize.Large)).toEqual(
        SettingsConfig.boardSizeConfig.large,
      );
    });
  });
});
