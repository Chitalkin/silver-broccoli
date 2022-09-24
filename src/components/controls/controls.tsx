import React from 'react';
import styled from 'styled-components';
import { ButtonWithTimer } from '@/ui/button';
import { Counter } from './components/counter';
import { SETTINGS } from '@/styles/colors';

const CotrolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 550px;
  width: 100%;
  background-color: ${SETTINGS.background};
  padding: 6px 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Controls = React.memo(() => (
  <CotrolsWrapper data-testid="controls-component">
    <ButtonWithTimer resetAfter={1000}>Run</ButtonWithTimer>
    <ButtonWithTimer resetAfter={1000}>Pause</ButtonWithTimer>
    <ButtonWithTimer resetAfter={1000}>Clear</ButtonWithTimer>
    <Counter count={0} />
  </CotrolsWrapper>
));
