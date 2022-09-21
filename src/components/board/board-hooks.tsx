import React, { useMemo } from 'react';
import { BoardSizeConfigItem } from '@/configs';
import { Cell } from './components/cell';
import { generateRandomCellsByPersentageAndSize } from './board-utils';

export const useCells = (
  size: BoardSizeConfigItem,
  percentage: number,
): JSX.Element[] => {
  const cells = generateRandomCellsByPersentageAndSize(size, percentage);

  return useMemo(
    () =>
      cells.map((cell, i) => (
        <Cell size="11px" isActive={cell.isActive} key={i} />
      )),
    [cells],
  );
};
