import { SettingsConfig } from '@/configs';
import { generateRandomCellsByPersentageAndSize } from '../board-utils';

describe('generateRandomCellsByPersentageAndSize', () => {
  it('should return expected cells number', () => {
    expect(
      generateRandomCellsByPersentageAndSize(
        SettingsConfig.boardSizeConfig.small,
        SettingsConfig.randomFillPersentageConfig.none,
      ),
    ).toHaveLength(1500);
  });
});
