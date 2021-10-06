import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 40px;

  div {
    background-color: aliceblue;
    padding: 10px;
    border-radius: 50%;
    animation: ${appearFromBottom} 1s ease-in;

    &:hover {
      cursor: pointer;
      background-color: #325387;
    }
  }
`;
