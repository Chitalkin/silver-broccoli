import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@/styles/global.ts';
import { router } from '@/router';
import { store } from '@/store';
import { GlobalStyle } from './styles';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Provider>,
);
