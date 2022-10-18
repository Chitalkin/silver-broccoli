import React from 'react';
import {
  EBoardSize,
  BoardSizeConfigType,
  useConfig,
  ESettingsConfigItem,
} from '@/configs';
import { useMemo } from 'react';
import { Button } from '@/ui/button';
import { setBoardSize } from '@/reducers';

export const useSizeButtons = () => {
  const [currentSize, config, onChange] = useConfig<BoardSizeConfigType>(
    ESettingsConfigItem.BoardSizeConfig,
    setBoardSize,
  );

  return useMemo(
    () =>
      Object.keys(config).map((key) => {
        const sizeName = key as EBoardSize;
        const item = config[sizeName];
        const isActive =
          currentSize.rows === item.rows &&
          currentSize.columns === item.columns;

        return (
          <Button
            active={isActive}
            onClick={() => onChange(sizeName)}
            key={key}
          >
            Size: {item.rows}x{item.columns}
          </Button>
        );
      }),
    [config, onChange, currentSize],
  );
};
