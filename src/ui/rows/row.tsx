import React from 'react';
import styled from 'styled-components';

export const Row = styled.div<React.FC>`
  width: 100%;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: ${(props) =>
    `repeat(${React.Children.count(props.children)}, 1fr)`};
`;
