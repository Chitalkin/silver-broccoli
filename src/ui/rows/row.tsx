import React from 'react';
import styled from 'styled-components';

interface RowProps {
  columns?: number;
}

export const Row = styled.div<RowProps>`
  width: 100%;
  display: grid;
  align-items: center;
  grid-column-gap: 10px;
  grid-template-columns: ${(props) =>
    `repeat(${props.columns ?? React.Children.count(props.children)}, 1fr)`};
`;
