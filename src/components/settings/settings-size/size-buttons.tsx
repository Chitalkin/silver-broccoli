import React, { memo } from 'react';
import {
  EBoardSize,
  BoardSizeConfigType,
  useConfig,
  ESettingsConfigItem,
} from '@/configs';
import { Button } from '@/ui/button';
import { setBoardSize } from '@/reducers';

export const SizeButtons = memo(() => {
  const [{ rows, columns }, config, onChange] = useConfig<BoardSizeConfigType>(
    ESettingsConfigItem.BoardSizeConfig,
    setBoardSize,
  );

  return (
    <>
      {Object.keys(config).map((key) => {
        const sizeName = key as EBoardSize;
        const item = config[sizeName];
        const isActive = rows === item.rows && columns === item.columns;

        return (
          <Button
            active={isActive}
            onClick={() => onChange(sizeName)}
            key={key}
          >
            {item.rows}x{item.columns}
          </Button>
        );
      })}
    </>
  );
});
