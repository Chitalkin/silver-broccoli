import React from 'react';
import styled from 'styled-components';
import { SETTINGS } from '@/styles/colors';
import { ControlClear, ControlPause, ControlRun, Counter } from './components';

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
    <ControlRun />
    <ControlPause />
    <ControlClear />
    <Counter />
  </CotrolsWrapper>
));
