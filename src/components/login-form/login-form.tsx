import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@/ui/input';
import { LoginFormProps } from './loging-form-types';
import { Button } from '@/ui/button';
import { FONT } from '@/styles/colors';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${FONT.secondary};
  border-radius: 4px;
  padding: 48px 16px;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = React.memo<LoginFormProps>(({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChangeName = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setName(evt.target.value.trim());
  };

  const clearForm = (): void => {
    setName('');
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    onSubmit?.({ name });
    clearForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="login-form-component">
      <Input
        autoFocus
        onChange={handleChangeName}
        value={name}
        placeholder="Введите имя"
      />
      <Button>Ввод</Button>
    </StyledForm>
  );
});
