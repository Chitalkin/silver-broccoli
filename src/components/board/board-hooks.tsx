import React, { useMemo } from 'react';
import { BoardSizeConfigItem } from './board-types';
import { Cell } from './components/cell';

export const useCells = (config: BoardSizeConfigItem): JSX.Element[] => {
  return useMemo(() => {
    const allCells = config.columns * config.rows;
    const filledCells = Array.from({ length: allCells }, (_cell, i) => i + 1);

    return filledCells.map((cell) => <Cell size="11px" key={cell} />);
  }, [config]);
};
