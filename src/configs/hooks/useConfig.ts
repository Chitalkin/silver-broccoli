import { useCallback, useState } from 'react';
import { useDefaultConfigValue } from '../hooks/useDefaultConfigValue';
import { SettingsConfig } from '../constants';
import { ESettingsConfigItem } from '../enums';

type UseConfigType = <T>(
  configItem: ESettingsConfigItem,
) => Readonly<[T[keyof T], T, (value: keyof T) => void]>;

/**
 * @param configItem название конфига
 * @returns данные для отрисовки и изменения конфига
 */
export const useConfig: UseConfigType = <T>(
  configItem: ESettingsConfigItem,
) => {
  const defaultConfigValue = useDefaultConfigValue(configItem) as T[keyof T];
  const [configValue, setConfigValue] = useState(defaultConfigValue);
  const config = SettingsConfig[configItem] as T;

  const onChange = useCallback(
    (newConfigValue: keyof T) => {
      setConfigValue(config[newConfigValue]);
    },
    [config],
  );

  return [configValue, config, onChange] as const;
};
