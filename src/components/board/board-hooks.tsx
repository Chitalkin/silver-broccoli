import React, { useMemo } from 'react';
import { BoardSizeConfigItem } from './board-types';
import { Cell } from '../cell';

export const useCells = (config: BoardSizeConfigItem): JSX.Element[] => {
  return useMemo(() => {
    const allCells = config.cells * config.rows;
    const filledCells = Array.from({ length: allCells }, (_cell, i) => i + 1);

    return filledCells.map((cell) => <Cell cell={cell} key={cell} />);
  }, [config]);
};
