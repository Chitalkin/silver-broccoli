import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/styles';
import { Button } from '@/ui/button';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${COLORS.HEADER.background};
  color: ${COLORS.HEADER.primary};
`;

const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 12px 0;
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

interface HeaderProps {
  name: string;
  logout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ name, logout }) => (
  <StyledHeader data-testid="header-component">
    <HeaderInner>
      <HeaderLogo>silver-broccoli</HeaderLogo>
      <HeaderPanel>
        <span>Hi, {name}</span>
        <Button onClick={logout}>Logout</Button>
      </HeaderPanel>
    </HeaderInner>
  </StyledHeader>
);
