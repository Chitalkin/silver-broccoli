import React from 'react';
import './styles/global.scss';

import { createRoot } from 'react-dom/client';
import { App } from './components/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
