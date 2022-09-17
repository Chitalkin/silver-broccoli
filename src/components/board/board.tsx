import React from 'react';
import styled from 'styled-components';
import { BoardSizeConfigItem, EBoardSize } from '@/configs';
import { useCells } from './board-hooks';
import { getCurrentBoardConfig } from './board-utils';

interface BoardProps {
  size?: EBoardSize;
  config: BoardSizeConfigItem;
}

const BoardWrapper = styled.div<BoardProps>`
  grid-template-columns: ${(props) => `repeat(${props.config.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.config.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo<Omit<BoardProps, 'config'>>(
  ({ size = EBoardSize.Medium }) => {
    const config = getCurrentBoardConfig(size);
    const cells = useCells(config);

    return (
      <BoardWrapper data-testid="board-component" config={config}>
        {cells}
      </BoardWrapper>
    );
  },
);
