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
    background-color: #5a5a59;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
  }

  #root {
    height: 100%;
  }
`;
