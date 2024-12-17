import { keyframes } from 'styled-components';

export const intenseAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg) translateY(0);
  }
  25% {
    transform: scale(1.2) rotate(15deg) translateY(-10px);
  }
  50% {
    transform: scale(1.1) rotate(-15deg) translateY(0);
  }
  75% {
    transform: scale(1.3) rotate(15deg) translateY(10px);
  }
  100% {
    transform: scale(1) rotate(0deg) translateY(0);
  }
`;