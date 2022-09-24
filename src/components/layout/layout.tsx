import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
