import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@/ui/input';
import { LoginFormProps } from './loging-form-types';
import { Button } from '@/ui/button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
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

    onSubmit({ name });
    clearForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="login-form-component">
      <Input
        onChange={handleChangeName}
        value={name}
        label="Имя пользователя"
        placeholder="Введите имя"
      />
      <Button>Ввод</Button>
    </StyledForm>
  );
});
