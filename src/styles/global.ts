import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    height: 100%;
    background-color: cyan;
    padding: 2rem;
    font-family: 'Courier New', Courier, monospace;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;