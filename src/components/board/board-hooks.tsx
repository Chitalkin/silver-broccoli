import React from 'react';
import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import {
  getIsGameRunning,
  getPersentageConfig,
  getSizeConfig,
  getSpeedConfig,
  setIncreaseGeneration,
  useDispatch,
  useSelector,
} from '@/store';
import {
  CellStatus,
  fillBoardRandomly,
  getNextGeneration,
  generateEmptyBoard,
} from './board-utils';
import { Cell } from './components/cell';

/**
 * Для запоминания ранее отрисованных досок
 */
const boardCache: { [key: string]: CellStatus[][] } = {};
/**
 * Хук рандомного заполнения пустой доски
 */
export const useFilledBoardByPersentage = () => {
  const { columns, rows } = useSelector(getSizeConfig);
  const percentage = useSelector(getPersentageConfig);
  const param = `${columns}-${rows}-${percentage}`;

  if (boardCache[param]) {
    return boardCache[param];
  }

  boardCache[param] = fillBoardRandomly(
    generateEmptyBoard(columns, rows),
    percentage,
  );

  return boardCache[param];
};

export const useNextGeneration = (
  population: CellStatus[][],
  setPopulation: Dispatch<React.SetStateAction<CellStatus[][]>>,
) => {
  const dispatch = useDispatch();
  const isGameRunning = useSelector(getIsGameRunning);
  const speed = useSelector(getSpeedConfig);

  /**
   * Проверка на существование "живых" клеток
   */
  const isEveryoneDead = useMemo(
    () => !population.flat(2).some((status) => status > 0),
    [population],
  );

  useEffect(() => {
    if (isEveryoneDead) {
      return;
    }

    if (isGameRunning) {
      const intervalId = window.setInterval(() => {
        setPopulation(getNextGeneration(population));
      }, speed);

      dispatch(setIncreaseGeneration());

      return () => {
        window.clearInterval(intervalId);
      };
    }
  }, [
    dispatch,
    isEveryoneDead,
    isGameRunning,
    population,
    setPopulation,
    speed,
  ]);
};

export const useCells = () => {
  const filledBoardByPersentage = useFilledBoardByPersentage();
  const [population, setPopulation] = useState(filledBoardByPersentage);

  /**
   * Отслеживание изменений параметров доски
   */
  useEffect(() => {
    setPopulation(filledBoardByPersentage);
  }, [filledBoardByPersentage]);

  useNextGeneration(population, setPopulation);

  const handleClick = useCallback(
    (rowIndex: number, cellIndex: number) => {
      const updatedPopulation = structuredClone(population);
      updatedPopulation[rowIndex][cellIndex] = population[rowIndex][cellIndex]
        ? 0
        : 1;
      setPopulation(updatedPopulation);
    },
    [population],
  );

  return population
    .map((row, rowIndex) =>
      row.map((state, cellIndex) => (
        <Cell
          status={state}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          onClick={handleClick}
          key={`${rowIndex}-${cellIndex}`}
        />
      )),
    )
    .flat();
};
