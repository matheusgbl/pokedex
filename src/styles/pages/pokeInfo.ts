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

  .return_page {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    font-family: 'Early GameBoy', sans-serif;
    position: absolute;
    top: 95px;
    left: 180px;

    &:hover {
      color: red;
      cursor: pointer;
    }

    svg {
      margin-right: 20px;
    }
  }
`;
