import React from 'react';
import styled from 'styled-components';
import { FONT } from '@/styles/colors';
import { getGenerationNumber, useSelector } from '@/store';

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
      {count}
    </StyledCounter>
  );
});
