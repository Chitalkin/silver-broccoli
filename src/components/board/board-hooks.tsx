import React, { useMemo } from 'react';
import { ESettingsConfigItem } from '@/configs';
import { Cell } from './components/cell';
import { generateRandomCellsByPersentageAndSize } from './board-utils';
import { useSelector } from '@/store';

export const useCells = (): JSX.Element[] => {
  const size = useSelector(
    (state) => state.config[ESettingsConfigItem.BoardSizeConfig],
  );
  const percentage = useSelector(
    (state) => state.config[ESettingsConfigItem.RandomFillPersentageConfig],
  );

  const cells = generateRandomCellsByPersentageAndSize(size, percentage);

  return useMemo(
    () =>
      cells.map((cell, i) => (
        <Cell size="11px" isActive={cell.isActive} key={i} />
      )),
    [cells],
  );
};
