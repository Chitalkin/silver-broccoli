import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui/button';
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
    <Button resetAfter={1000}>Run</Button>
    <Button resetAfter={1000}>Pause</Button>
    <Button resetAfter={1000}>Clear</Button>
    <Counter count={0} />
  </CotrolsWrapper>
));
