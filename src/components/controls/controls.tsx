import React from 'react';
import styled from 'styled-components';
import { SETTINGS } from '@/styles/colors';
import { ControlClear, ControlPause, ControlRun } from './components';

const CotrolsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 330px;
  width: 100%;
  background-color: ${SETTINGS.background};
  padding: 4px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Controls = React.memo(() => (
  <CotrolsWrapper data-testid="controls-component">
    <ControlRun />
    <ControlPause />
    <ControlClear />
    {/* <Counter /> */}
  </CotrolsWrapper>
));
