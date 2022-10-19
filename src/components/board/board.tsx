import React, { useCallback, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { BoardSizeConfigItem } from '@/configs';
import { useDispatch, useSelector } from 'react-redux';
import { fillBoardRandomly, getNextGeneration } from './board-utils';
import {
  getIsGameRunning,
  getPersentageConfig,
  getSizeConfig,
  getSpeedConfig,
} from '@/selectors';
import { setIncreaseGeneration } from '@/reducers';
import { Cell } from './components/cell';
import { CellStatus } from './board-utils';

const BoardWrapper = styled.div<{ size: BoardSizeConfigItem }>`
  grid-template-columns: ${(props) => `repeat(${props.size.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo(() => {
  const isGameRunning = useSelector(getIsGameRunning);
  const speed = useSelector(getSpeedConfig);
  const size = useSelector(getSizeConfig);
  const percentage = useSelector(getPersentageConfig);

  const dispatch = useDispatch();
  const [population, setPopulation] = useState(() =>
    fillBoardRandomly(size, percentage),
  );

  const handleClick = useCallback(
    (population: CellStatus[][], rowIndex: number, cellIndex: number) => {
      const updatedPopulation = structuredClone(population);
      updatedPopulation[rowIndex][cellIndex] = population[rowIndex][cellIndex]
        ? 0
        : 1;
      setPopulation(updatedPopulation);
    },
    [],
  );

  useEffect(() => {
    let intervalId: number;

    if (isGameRunning) {
      intervalId = window.setInterval(() => {
        setPopulation(getNextGeneration(population));
      }, speed);

      dispatch(setIncreaseGeneration());
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [dispatch, isGameRunning, population, speed]);

  const cells = useMemo(
    () =>
      population
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
        .flat(),
    [handleClick, population],
  );

  return (
    <BoardWrapper data-testid="board-component" size={size}>
      {cells}
    </BoardWrapper>
  );
});
