import React from 'react';
import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
`;

export const ErrorPage: React.FC = () => (
  <StyledErrorPage>
    <h1>404 Not Found</h1>
    <p></p>
  </StyledErrorPage>
);
