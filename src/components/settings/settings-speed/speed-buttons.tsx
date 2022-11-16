import React, { memo } from 'react';
import {
  ESimSpeed,
  SimSpeedConfigType,
  useConfig,
  ESettingsConfigItem,
} from '@/configs';
import { Button } from '@/ui/button';
import { setSimSpeed } from '@/store/reducers';

export const SpeedButtons = memo(() => {
  const [currentSpeed, config, onChange] = useConfig<SimSpeedConfigType>(
    ESettingsConfigItem.SimSpeedConfig,
    setSimSpeed,
  );

  return (
    <>
      {Object.keys(config).map((key) => {
        const speed = key as ESimSpeed;
        const speedValue = config[speed];

        return (
          <Button
            active={currentSpeed === speedValue}
            onClick={() => onChange(speed)}
            key={key}
          >
            {speed}
          </Button>
        );
      })}
    </>
  );
});
