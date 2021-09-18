import styled from 'styled-components';

export const Container = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: 'Early GameBoy', sans-serif;
    color: white;
  }
`;
