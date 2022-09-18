import { renderHook } from '@testing-library/react';
import { ESettingsConfigItem, SettingsConfig } from '@/configs';
import { useDefaultConfigValue } from '../hooks/useDefaultConfigValue';
import { useConfig } from '../hooks/useConfig';

describe('Settings hooks', () => {
  describe('useDefaultConfig', () => {
    it('should return small for BoardSizeConfig', () => {
      const result = useDefaultConfigValue(ESettingsConfigItem.BoardSizeConfig);

      expect(result).toEqual(SettingsConfig.boardSizeConfig.small);
    });

    it('should return none for RandomFillPersentageConfig', () => {
      const result = useDefaultConfigValue(
        ESettingsConfigItem.RandomFillPersentageConfig,
      );

      expect(result).toEqual(SettingsConfig.randomFillPersentageConfig.none);
    });

    it('should return slow for SimSpeedConfig', () => {
      const result = useDefaultConfigValue(ESettingsConfigItem.SimSpeedConfig);

      expect(result).toEqual(SettingsConfig.simSpeedConfig.slow);
    });

    it('should throw error if config is invalid', () => {
      expect(useDefaultConfigValue).toThrowError(new Error('Invalid config'));
    });
  });

  describe('useConfig', () => {
    // describe('should return the expected config by config item', () => {
    //   const { result } = renderHook(() => jest.fn);
    //   it.each([
    //     [ESettingsConfigItem.BoardSizeConfig, SettingsConfig.boardSizeConfig],
    //     [
    //       ESettingsConfigItem.RandomFillPersentageConfig,
    //       SettingsConfig.randomFillPersentageConfig,
    //     ],
    //     [ESettingsConfigItem.BoardSizeConfig, SettingsConfig.simSpeedConfig],
    //   ])(`%s as config item, should return %o`, (item, expected) => {
    //     expect(useConfig(item)).toEqual([undefined, expected, undefined]);
    //   });
    // });
    // it('should call useDefaultConfig to get the default value', () => {
    // });
  });
});
