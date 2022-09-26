import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { GamePage } from '@/pages/game-page';
import { ErrorPage } from '@/pages/error-page';
import { LoginPage } from '@/pages/login-page/login-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'game',
    element: <GamePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
