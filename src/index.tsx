import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@/styles/global.ts';
import { router } from '@/router';
import { GlobalStyle } from './styles';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>,
);
