import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    height: 100%;
    background: #1e130c;
    background: -webkit-linear-gradient(to right, #9a8478, #1e130c);
    background: linear-gradient(to right, #9a8478, #1e130c);
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
  }

  #root {
    height: 100%;
  }
`;
