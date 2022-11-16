import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getSizeConfig } from '@/store';
import { useCells } from './board-hooks';
import { useResetApp } from '@/hooks';

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
  const resetApp = useResetApp();
  const { columns, rows } = useSelector(getSizeConfig);
  const cells = useCells();

  useEffect(
    // WillUnmount
    () => () => {
      resetApp();
    },
    [resetApp, columns, rows],
  );

  return (
    <BoardWrapper data-testid="board-component" columns={columns} rows={rows}>
      {cells}
    </BoardWrapper>
  );
});
