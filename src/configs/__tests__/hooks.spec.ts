import { renderHook, act } from '@testing-library/react';
import {
  ERandomPercentage,
  ESettingsConfigItem,
  SettingsConfig,
} from '@/configs';
import * as defaultSettings from '../hooks/useDefaultConfigValue';
import { useConfig } from '../hooks/useConfig';

describe('Settings hooks', () => {
  describe('useDefaultConfig', () => {
    it('should return small for BoardSizeConfig', () => {
      const result = defaultSettings.useDefaultConfigValue(
        ESettingsConfigItem.BoardSizeConfig,
      );

      expect(result).toEqual(SettingsConfig.boardSizeConfig.small);
    });

    it('should return none for RandomFillPersentageConfig', () => {
      const result = defaultSettings.useDefaultConfigValue(
        ESettingsConfigItem.RandomFillPersentageConfig,
      );

      expect(result).toEqual(SettingsConfig.randomFillPersentageConfig.none);
    });

    it('should return slow for SimSpeedConfig', () => {
      const result = defaultSettings.useDefaultConfigValue(
        ESettingsConfigItem.SimSpeedConfig,
      );

      expect(result).toEqual(SettingsConfig.simSpeedConfig.slow);
    });

    it('should throw error if config is invalid', () => {
      expect(defaultSettings.useDefaultConfigValue).toThrowError(
        new Error('Invalid config'),
      );
    });
  });

  describe('useConfig', () => {
    it('should call useDefaultConfigValue', () => {
      const defaultConfigSpy = jest.spyOn(
        defaultSettings,
        'useDefaultConfigValue',
      );

      renderHook(() => useConfig(ESettingsConfigItem.BoardSizeConfig));

      expect(defaultConfigSpy).toHaveBeenCalledTimes(1);

      defaultConfigSpy.mockRestore();
    });

    it('should change config value', () => {
      const { result } = renderHook(() =>
        useConfig(ESettingsConfigItem.RandomFillPersentageConfig),
      );

      act(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result.current[2](ERandomPercentage.High);
      });

      expect(result.current[0]).toBe(
        SettingsConfig.randomFillPersentageConfig[ERandomPercentage.High],
      );
    });

    it('should return the expected config settings for BoardSizeConfig', () => {
      const { result } = renderHook(() =>
        useConfig(ESettingsConfigItem.BoardSizeConfig),
      );

      expect(result.current).toEqual(
        expect.arrayContaining([
          expect.any(Object),
          SettingsConfig.boardSizeConfig,
          expect.any(Function),
        ]),
      );
    });

    it('should return the expected config settings for boardSizeConfig', () => {
      const { result } = renderHook(() =>
        useConfig(ESettingsConfigItem.BoardSizeConfig),
      );

      expect(result.current).toEqual(
        expect.arrayContaining([
          expect.any(Object),
          SettingsConfig.boardSizeConfig,
          expect.any(Function),
        ]),
      );
    });

    it('should return the expected config settings for simSpeedConfig', () => {
      const { result } = renderHook(() =>
        useConfig(ESettingsConfigItem.SimSpeedConfig),
      );

      expect(result.current).toEqual(
        expect.arrayContaining([
          expect.any(Number),
          SettingsConfig.simSpeedConfig,
          expect.any(Function),
        ]),
      );
    });

    it('should return the expected config settings for randomFillPersentageConfig', () => {
      const { result } = renderHook(() =>
        useConfig(ESettingsConfigItem.RandomFillPersentageConfig),
      );

      expect(result.current).toEqual(
        expect.arrayContaining([
          expect.any(Number),
          SettingsConfig.randomFillPersentageConfig,
          expect.any(Function),
        ]),
      );
    });
  });
});
