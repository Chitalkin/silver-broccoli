import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BUTTON, FONT } from '@/styles/colors';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  resetAfter?: number | 'always';
  active?: boolean;
}

const StyledButton = styled.button`
  color: ${(props: ButtonProps) =>
    props.active ? FONT.primary : FONT.default};
  background-color: ${(props: ButtonProps) =>
    props.active ? BUTTON.primary : BUTTON.default};

  padding: 2px 6px;
  font-size: 18px;
  border: 0.2rem solid ${BUTTON.border};
  border-radius: 0.4rem;
  font-weight: bold;
  min-width: 100px;
  cursor: pointer;
  white-space: nowrap;
  text-transform: capitalize;
  transition: ease-in-out 0.275s all;
  &:hover {
    opacity: 0.7;
  }
`;

export const Button = React.memo<ButtonProps>(
  ({ active, children, resetAfter = 'always', onClick, ...props }) => {
    const [isActive, setIsActive] = useState(active);

    useEffect(() => {
      let timeoutID: number | undefined;

      if (isActive && typeof resetAfter === 'number') {
        timeoutID = window.setTimeout(() => {
          setIsActive(false);
        }, resetAfter);
      }

      return () => window.clearTimeout(timeoutID);
    }, [resetAfter, isActive]);

    const handleClick = () => {
      setIsActive(true);

      if (onClick) {
        onClick();
      }
    };

    return (
      <StyledButton active={isActive} onClick={handleClick} {...props}>
        {children}
      </StyledButton>
    );
  },
);
