import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm, LoginFormData } from '@/components/login-form';
import { useLocalStorage } from '@/hooks';

export const LoginPage: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('name', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate('/game');
    }
  }, [name, navigate]);

  const handleSubmit = ({ name }: LoginFormData): void => {
    setName(name);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
