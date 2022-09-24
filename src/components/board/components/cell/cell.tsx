import React from 'react';
import styled from 'styled-components';
import { CELL } from '@/styles/colors';

interface CellProps {
  size: string;
  isActive?: boolean;
}

const StyledCell = styled.span<CellProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) =>
    props.isActive ? CELL.primary : CELL.default};

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${CELL.border};
  border-top: 1px solid ${CELL.border};
  cursor: pointer;
`;

export const Cell = React.memo<CellProps>(({ size, isActive }) => (
  <StyledCell data-testid="cell-component" isActive={isActive} size={size} />
));
