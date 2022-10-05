import React from 'react';
import {
  ERandomPercentage,
  ESettingsConfigItem,
  RandomPercentageConfigType,
  useConfig,
} from '@/configs';
import { useMemo } from 'react';
import { Button } from '@/ui/button';
import { setRandomFillPercentage } from '@/reducers';

export const useFillButtons = () => {
  const [current, config, onChange] = useConfig<RandomPercentageConfigType>(
    ESettingsConfigItem.RandomFillPersentageConfig,
    setRandomFillPercentage,
  );

  return useMemo(
    () =>
      Object.keys(config).map((key) => {
        const percentageValue = key as ERandomPercentage;
        const item = config[percentageValue];
        const isActive = current === item;

        if (item === 0) {
          return (
            <Button onClick={() => onChange(percentageValue)} key={key}>
              Reset
            </Button>
          );
        }

        return (
          <Button
            active={isActive}
            onClick={() => onChange(percentageValue)}
            key={key}
          >
            {item}%
          </Button>
        );
      }),
    [config, current, onChange],
  );
};
