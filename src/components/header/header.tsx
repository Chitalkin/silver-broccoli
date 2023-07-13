import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles';
import { Counter } from '../counter';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${COLORS.HEADER.background};
  color: ${COLORS.HEADER.primary};
`;

const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

const HeaderPanel = styled.p`
  font-size: 18px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin: 0;
`;

export const Header: React.FC = () => (
  <StyledHeader data-testid="header-component">
    <HeaderInner>
      <HeaderLogo>silver-broccoli</HeaderLogo>
      <Counter />
      <HeaderPanel>
        <span>Hello!</span>
      </HeaderPanel>
    </HeaderInner>
  </StyledHeader>
);
