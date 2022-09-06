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

  padding: 0.2rem 1.2rem;
  font-size: 1.6rem;
  border: 0.2rem solid ${BUTTON.border};
  border-radius: 0.4rem;
  font-weight: bold;
  cursor: pointer;
  transition: ease-in-out 0.275s all;
`;

export const Button = React.memo<ButtonProps>(
  ({ active, children, resetAfter = 'always', onClick, ...props }) => {
    const [isActive, setIsActive] = useState(active);

    useEffect(() => {
      if (isActive && typeof resetAfter === 'number') {
        setTimeout(() => {
          setIsActive(false);
        }, resetAfter);
      }
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
