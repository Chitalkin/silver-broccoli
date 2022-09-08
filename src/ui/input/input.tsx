import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { INPUT } from '@/styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const StyledLabel = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${INPUT.primary};
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
  min-width: 280px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 6px;
  background-color: ${INPUT.background};
  border: 1px solid ${INPUT.border};
  color: ${INPUT.primary};
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  border-radius: 3px;
  &::placeholder {
    font-family: 'Courier New', Courier, monospace;
  }
`;

export const Input = React.memo<InputProps>(
  ({ placeholder, label, ...props }) => (
    <StyledLabel>
      {label}
      <StyledInput placeholder={placeholder} {...props} />
    </StyledLabel>
  ),
);
