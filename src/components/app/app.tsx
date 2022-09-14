import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { Board, EBoardSize } from '../board';
import { Controls } from '../controls';
import { Settings } from '../settings';
import { LoginModal } from '../modals';

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
      <Settings />
      <LoginModal />
    </Wrapper>
  </>
);
