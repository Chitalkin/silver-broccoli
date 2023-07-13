import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { GamePage } from '@/pages/game-page';
import { ErrorPage } from '@/pages/error-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GamePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
