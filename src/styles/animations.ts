import { keyframes } from 'styled-components';

export const slideIn = keyframes`
   from {
    transform: translateY(15%);
  }

  to {
    transform: translateY(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-10%);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
