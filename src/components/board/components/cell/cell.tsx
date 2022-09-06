import React from 'react';
import styled from 'styled-components';
import { CELL } from '@/styles/colors';

interface CellProps {
  size: string;
}

const StyledCell = styled.span<CellProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${CELL.default};
  border-left: 1px solid ${CELL.border};
  border-top: 1px solid ${CELL.border};
  cursor: pointer;
`;

export const Cell = React.memo<CellProps>(({ size }) => (
  <StyledCell data-testid="cell-component" size={size} />
));
