import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Cell } from './components/cell';
import { fillBoardRandomly, getNextGeneration } from './board-utils';
import { useSelector } from '@/store';
import {
  getBoardSize,
  getGameSpeed,
  getIsGameRunning,
  getPopulation,
  getRandomFillPersentage,
} from './board-selectors';

export const usePopulation = (): JSX.Element[] => {
  const lastPopulation = useSelector(getPopulation);
  const isGameRunning = useSelector(getIsGameRunning);
  const size = useSelector(getBoardSize);
  const speed = useSelector(getGameSpeed);
  const percentage = useSelector(getRandomFillPersentage);
  const [population, setPopulation] = useState(() =>
    lastPopulation ? lastPopulation : fillBoardRandomly(size, percentage),
  );

  // получить данные о поколении и обновлять их при рендере

  useEffect(() => {
    console.log('lastPopulation render');

    if (!lastPopulation) {
      setPopulation(fillBoardRandomly(size, percentage));
    }
  }, [lastPopulation, percentage, size]);

  useEffect(() => {
    let intervalId: number;

    console.log('RENDER BOARD');

    if (isGameRunning) {
      intervalId = window.setInterval(() => {
        setPopulation(getNextGeneration(population));
      }, speed);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isGameRunning, population, speed]);

  const handleClick = useCallback(
    (rowIndex: number, cellIndex: number) => {
      const updatedPopulation = population.map((row, index) => {
        if (index === rowIndex) {
          const newRow = row.slice();
          newRow[cellIndex] = row[cellIndex] ? 0 : 1;

          return newRow;
        }

        return row;
      });

      setPopulation(updatedPopulation);
    },
    [population],
  );

  return useMemo(() => {
    const cells = population.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        return (
          <Cell
            size="11px"
            onClick={() => handleClick(rowIndex, cellIndex)}
            isActive={Boolean(cell)}
            key={`${rowIndex}-${cellIndex}`}
          />
        );
      });
    });

    return cells.flat();
  }, [handleClick, population]);
};
