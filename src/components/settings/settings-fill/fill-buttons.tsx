import React, { memo } from 'react';
import {
  ERandomPercentage,
  ESettingsConfigItem,
  RandomPercentageConfigType,
  useConfig,
} from '@/configs';
import { Button, ButtonWithTimer } from '@/ui/button';
import { setRandomFillPercentage } from '@/store/reducers';
import { useResetApp } from '@/hooks';

export const FillButtons = memo(() => {
  const resetApp = useResetApp();
  const [current, config, onChange] = useConfig<RandomPercentageConfigType>(
    ESettingsConfigItem.RandomFillPersentageConfig,
    setRandomFillPercentage,
  );

  return (
    <>
      {Object.keys(config).map((percentage) => {
        const item = config[percentage as ERandomPercentage];
        const isActive = current === item;
        const handleChange = () => onChange(percentage as ERandomPercentage);

        if (percentage === ERandomPercentage.None) {
          return (
            <ButtonWithTimer
              resetAfter={500}
              onClick={resetApp}
              key={percentage}
            >
              Reset
            </ButtonWithTimer>
          );
        }

        return (
          <Button active={isActive} onClick={handleChange} key={percentage}>
            {item}%
          </Button>
        );
      })}
    </>
  );
});
