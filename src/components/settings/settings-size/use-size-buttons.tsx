import React from 'react';
import {
  BoardSizeConfigItem,
  EBoardSize,
  BoardSizeConfigType,
} from '@/configs';
import { useMemo } from 'react';
import { Button } from '@/ui/button';

export const useSizeButtons = (
  currentSize: BoardSizeConfigItem,
  config: BoardSizeConfigType,
  onChange: (value: EBoardSize) => void,
) =>
  useMemo(
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
