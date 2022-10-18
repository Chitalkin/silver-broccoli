import { useCallback } from 'react';
import { ConfigActionTypes } from '@/reducers/config-reducer';
import { SettingsConfig } from '../constants';
import { ESettingsConfigItem } from '../enums';
import { useDispatch, useSelector } from '@/store';
import { ActionCreator } from 'redux';

/**
 * @param configItem название конфига
 * @param action изменяет данные конфига
 * @returns данные для отрисовки и изменения конфига
 */
export const useConfig = <T>(
  configItem: ESettingsConfigItem,
  action: ActionCreator<ConfigActionTypes>,
): Readonly<[T[keyof T], T, (value: keyof T) => void]> => {
  const dispatch = useDispatch();
  const configValue = useSelector(
    (state) => state.config[configItem],
  ) as T[keyof T];
  const config = SettingsConfig[configItem] as T;

  const onChange = useCallback(
    (newConfigValue: keyof T) => {
      dispatch(action(newConfigValue));
    },
    [action, dispatch],
  );

  return [configValue, config, onChange] as const;
};
