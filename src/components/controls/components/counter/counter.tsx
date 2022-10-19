import React from 'react';
import styled from 'styled-components';
import { FONT } from '@/styles/colors';
import { useSelector } from '@/store';
import { getGenerationNumber } from '@/selectors';

const StyledCounter = styled.p`
  color: ${FONT.default};
  font-weight: normal;
  font-size: 18px;
  margin: 0;
`;

export const Counter = React.memo(() => {
  const count = useSelector(getGenerationNumber);

  return (
    <StyledCounter className="counter" aria-label="current-element-count">
      <span>Generation: </span>
      <span>{count}</span>
    </StyledCounter>
  );
});
