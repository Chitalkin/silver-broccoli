import React from 'react';
import styled from 'styled-components';
import { useCells } from './board-hooks';
import { EBoardSize } from './board-enums';
import { getCurrentBoardConfig } from './board-utils';
import { BoardSizeConfigItem } from './board-types';
import { CELL } from '@/styles/colors';

interface BoardProps {
  size?: EBoardSize;
  config: BoardSizeConfigItem;
}

const BoardWrapper = styled.div<BoardProps>`
  grid-template-columns: ${(props) => `repeat(${props.config.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.config.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
  border: 5px solid ${CELL.border};
  border-radius: 5px;
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
