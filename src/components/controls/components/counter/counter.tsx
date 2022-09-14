import React from 'react';
import styled from 'styled-components';
import { FONT } from '@/styles/colors';

const StyledCounter = styled.p`
  color: ${FONT.default};
  font-weight: normal;
  font-size: 18px;
  margin: 0;
`;

interface CounterProps {
  count: number;
}

export const Counter = React.memo<CounterProps>(({ count }) => (
  <StyledCounter className="counter" aria-label="current-element-count">
    <span>Generation: </span>
    <span>{count}</span>
  </StyledCounter>
));
