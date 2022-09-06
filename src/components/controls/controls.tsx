import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui/button';
import { Counter } from './components/counter';

const CotrolsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #333333;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
`;

export const Controls = React.memo(() => (
  <CotrolsWrapper data-testid="controls-element">
    <Button resetAfter={1000}>Run</Button>
    <Button resetAfter={1000}>Pause</Button>
    <Button resetAfter={1000}>Clear</Button>
    <Counter count={0} />
  </CotrolsWrapper>
));
