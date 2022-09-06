import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { Board } from '../board';
import { EBoardSize } from '../board/board-enums';
import { Controls } from '../controls';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Controls />
      <Board size={EBoardSize.Small} />
    </Wrapper>
  </>
);
