import React from 'react';
import { LoginForm, LoginFormData } from '@/components/login-form';
import { useAuth } from '@/hooks';
import { useDispatch } from '@/store';
import { setUserName } from '@/reducers';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  useAuth();

  const handleSubmit = ({ name }: LoginFormData): void => {
    if (name) {
      dispatch(setUserName(name));
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
