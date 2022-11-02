import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getSizeConfig } from '@/selectors';
import {
  useCells,
  useClearedBoard,
  useNextGeneration,
  usePopulation,
} from './board-hooks';

interface BoardWrapperProps {
  columns: number;
  rows: number;
}

const BoardWrapper = styled.div<BoardWrapperProps>`
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo(() => {
  const { columns, rows } = useSelector(getSizeConfig);
  const [population, setPopulation, isEveryoneDead] = usePopulation();
  useClearedBoard(setPopulation);
  useNextGeneration(population, setPopulation, isEveryoneDead);

  const cells = useCells(population, setPopulation);

  return (
    <BoardWrapper data-testid="board-component" columns={columns} rows={rows}>
      {cells}
    </BoardWrapper>
  );
});
