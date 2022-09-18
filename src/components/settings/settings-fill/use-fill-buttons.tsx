import React from 'react';
import { ERandomPercentage, RandomPercentageConfigType } from '@/configs';
import { useMemo } from 'react';
import { Button } from '@/ui/button';

export const useFillButtons = (
  current: number,
  config: RandomPercentageConfigType,
  onChange: (value: ERandomPercentage) => void,
) =>
  useMemo(
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
            {item}
          </Button>
        );
      }),
    [config, current, onChange],
  );
