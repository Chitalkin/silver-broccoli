import React, { useMemo } from 'react';
import { Cell } from './components/cell';
import { generateRandomCellsByPersentageAndSize } from './board-utils';
import { useSelector } from '@/store';
import { getBoardSize, getRandomFillPersentage } from './board-selectors';

export const useCells = (): JSX.Element[] => {
  const size = useSelector(getBoardSize);
  const percentage = useSelector(getRandomFillPersentage);

  const cells = generateRandomCellsByPersentageAndSize(size, percentage);

  return useMemo(
    () =>
      cells.map((cell, i) => (
        <Cell size="11px" isActive={cell.isActive} key={i} />
      )),
    [cells],
  );
};
