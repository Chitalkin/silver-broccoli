import React from 'react';
import { ERandomPercentage } from '@/configs';
import {
  clearBoard,
  resetGeneration,
  setGameStop,
  setIncreaseGeneration,
  setRandomFillPercentage,
} from '@/reducers';
import {
  getIsBoardClear,
  getIsGameRunning,
  getPersentageConfig,
  getSizeConfig,
  getSpeedConfig,
} from '@/selectors';
import { useDispatch, useSelector } from '@/store';
import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import {
  CellStatus,
  fillBoardRandomly,
  getNextGeneration,
} from './board-utils';
import { Cell } from './components/cell';

export const usePopulation = () => {
  const { columns, rows } = useSelector(getSizeConfig);
  const percentage = useSelector(getPersentageConfig);

  const [population, setPopulation] = useState(() =>
    fillBoardRandomly(columns, rows, percentage),
  );

  const isEveryoneDead = useMemo(() => {
    return !population.flat(2).some((status) => status > 0);
  }, [population]);

  useEffect(() => {
    setPopulation(fillBoardRandomly(columns, rows, percentage));
  }, [columns, percentage, rows]);

  return [population, setPopulation, isEveryoneDead] as const;
};

export const useClearedBoard = (
  setPopulation: Dispatch<React.SetStateAction<CellStatus[][]>>,
) => {
  const dispatch = useDispatch();
  const isBoardClear = useSelector(getIsBoardClear);
  const { columns, rows } = useSelector(getSizeConfig);
  const percentage = useSelector(getPersentageConfig);

  useEffect(() => {
    if (isBoardClear) {
      dispatch(setGameStop());
      dispatch(resetGeneration());
      dispatch(setRandomFillPercentage(ERandomPercentage.None));
      dispatch(clearBoard(false));
      setPopulation(fillBoardRandomly(columns, rows, percentage));
    }
  }, [columns, dispatch, isBoardClear, percentage, rows, setPopulation]);
};

export const useNextGeneration = (
  population: CellStatus[][],
  setPopulation: Dispatch<React.SetStateAction<CellStatus[][]>>,
  isEveryoneDead: boolean,
) => {
  const dispatch = useDispatch();
  const isGameRunning = useSelector(getIsGameRunning);
  const speed = useSelector(getSpeedConfig);

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

export const useCells = (
  population: CellStatus[][],
  setPopulation: Dispatch<React.SetStateAction<CellStatus[][]>>,
) => {
  const handleClick = useCallback(
    (population: CellStatus[][], rowIndex: number, cellIndex: number) => {
      const updatedPopulation = structuredClone(population);
      updatedPopulation[rowIndex][cellIndex] = population[rowIndex][cellIndex]
        ? 0
        : 1;
      setPopulation(updatedPopulation);
    },
    [setPopulation],
  );

  return population
    .map((row, rowIndex) =>
      row.map((state, cellIndex) => (
        <Cell
          status={state}
          rowIndex={rowIndex}
          population={population}
          cellIndex={cellIndex}
          onClick={handleClick}
          key={`${rowIndex}-${cellIndex}`}
        />
      )),
    )
    .flat();
};
