import React, { useCallback } from 'react';
import { LoginForm, LoginFormData } from '@/components/login-form';
import { useAuth } from '@/hooks';
import { useDispatch } from '@/store';
import { setUserName } from '@/store/reducers';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  useAuth();

  const handleSubmit = useCallback(
    ({ name }: LoginFormData): void => {
      if (name) {
        dispatch(setUserName(name));
      }
    },
    [dispatch],
  );

  return <LoginForm onSubmit={handleSubmit} />;
};
