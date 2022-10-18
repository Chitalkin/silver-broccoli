import React from 'react';
import {
  ESimSpeed,
  SimSpeedConfigType,
  useConfig,
  ESettingsConfigItem,
} from '@/configs';
import { useMemo } from 'react';
import { Button } from '@/ui/button';
import { setSimSpeed } from '@/reducers';

export const useSpeedButtons = () => {
  const [currentSpeed, config, onChange] = useConfig<SimSpeedConfigType>(
    ESettingsConfigItem.SimSpeedConfig,
    setSimSpeed,
  );

  return useMemo(
    () =>
      Object.keys(config).map((key) => {
        const speed = key as ESimSpeed;
        const item = config[speed];
        const isActive = currentSpeed === item;

        return (
          <Button active={isActive} onClick={() => onChange(speed)} key={key}>
            Speed: {speed}
          </Button>
        );
      }),
    [config, onChange, currentSpeed],
  );
};
